// ─────────────────────────────────────────────────────────────────────────────
// Generación del cartel PDF con código QR para cada tipo de donación.
// Usa jsPDF (vendor/jspdf.umd.min.js) y qrcode-generator (vendor/qrcode-generator.js).
// El QR se dibuja como vectores (rectángulos), por lo que se imprime nítido a
// cualquier tamaño. Los textos se toman del sistema i18n según el idioma activo.
// ─────────────────────────────────────────────────────────────────────────────
(function () {

  // Configuración por tipo de donación.
  var CONFIG = {
    'con-saliva': { titleKey: 'poster.title1', accent: [0, 119, 182] },   // #0077b6
    'sin-saliva': { titleKey: 'poster.title2', accent: [5, 150, 105] }    // #059669
  };

  function t(key) {
    return (typeof window.i18nText === 'function') ? window.i18nText(key) : key;
  }

  function buildPoster(type) {
    var cfg = CONFIG[type];
    if (!cfg) return;

    var url = window.location.origin + '/' + type;

    // ── Documento A4 vertical (210 × 297 mm) ──────────────────────────────────
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: 'mm', format: 'a4' });
    var pageW = 210, pageH = 297, margin = 18;
    var accent = cfg.accent;

    // ── Banda superior de color ───────────────────────────────────────────────
    doc.setFillColor(accent[0], accent[1], accent[2]);
    doc.rect(0, 0, pageW, 46, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(t('poster.kicker'), pageW / 2, 20, { align: 'center', charSpace: 0.4 });

    doc.setFontSize(26);
    doc.text(t(cfg.titleKey), pageW / 2, 34, { align: 'center' });

    // ── Llamada a la acción ───────────────────────────────────────────────────
    doc.setTextColor(45, 55, 72);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    var ctaLines = doc.splitTextToSize(t('poster.cta'), pageW - margin * 2);
    doc.text(ctaLines, pageW / 2, 70, { align: 'center' });

    // ── Código QR (vectorial) ─────────────────────────────────────────────────
    var qr = qrcode(0, 'M');     // tipo automático, corrección de errores media
    qr.addData(url);
    qr.make();

    var count = qr.getModuleCount();
    var quiet = 6;               // zona de silencio (mm) alrededor del QR
    var qrSize = 96;             // tamaño del QR en mm
    var boxSize = qrSize + quiet * 2;
    var boxX = (pageW - boxSize) / 2;
    var boxY = 86;

    // Tarjeta blanca con borde redondeado tras el QR
    doc.setDrawColor(accent[0], accent[1], accent[2]);
    doc.setFillColor(255, 255, 255);
    doc.setLineWidth(0.8);
    doc.roundedRect(boxX, boxY, boxSize, boxSize, 4, 4, 'FD');

    var cell = qrSize / count;
    var originX = boxX + quiet;
    var originY = boxY + quiet;
    doc.setFillColor(0, 0, 0);
    for (var r = 0; r < count; r++) {
      for (var c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          // +0.02 de solape evita finas líneas blancas entre módulos al imprimir
          doc.rect(originX + c * cell, originY + r * cell, cell + 0.02, cell + 0.02, 'F');
        }
      }
    }

    var y = boxY + boxSize + 16;

    // ── Texto explicativo ─────────────────────────────────────────────────────
    doc.setTextColor(74, 85, 104);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(13);
    var bodyLines = doc.splitTextToSize(t('poster.body'), pageW - margin * 2);
    doc.text(bodyLines, pageW / 2, y, { align: 'center' });
    y += bodyLines.length * 6 + 6;

    doc.setFontSize(11);
    var hintLines = doc.splitTextToSize(t('poster.hint'), pageW - margin * 2);
    doc.text(hintLines, pageW / 2, y, { align: 'center' });
    y += hintLines.length * 5 + 10;

    // ── URL de respaldo ───────────────────────────────────────────────────────
    doc.setFontSize(10);
    doc.setTextColor(113, 128, 150);
    doc.text(t('poster.url'), pageW / 2, y, { align: 'center' });
    y += 7;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.textWithLink(url, pageW / 2, y, { align: 'center', url: url });

    // ── Pie de página ─────────────────────────────────────────────────────────
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(accent[0], accent[1], accent[2]);
    doc.text(t('poster.phone'), pageW / 2, pageH - 22, { align: 'center' });

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.setTextColor(113, 128, 150);
    doc.text(t('poster.footer'), pageW / 2, pageH - 14, { align: 'center' });

    doc.save('cartel-' + type + '.pdf');
  }

  // Maneja el clic del botón: feedback visual mientras se genera el PDF.
  function onClick(ev) {
    var btn = ev.currentTarget;
    var type = btn.getAttribute('data-poster');
    var original = btn.textContent;
    btn.disabled = true;
    btn.textContent = t('idx.poster.gen');
    // Permite repintar el botón antes del trabajo síncrono de generación.
    setTimeout(function () {
      try {
        buildPoster(type);
      } catch (e) {
        console.error('No se pudo generar el cartel:', e);
        alert('No se pudo generar el cartel. Inténtalo de nuevo.');
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    }, 30);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-poster]').forEach(function (btn) {
      btn.addEventListener('click', onClick);
    });
  });

})();
