(function () {

  // ── Translations ──────────────────────────────────────────────────────────
  // Keys are added progressively as each page is updated.
  var T = {
    es: {
      // ── Compartidos (header / footer) ──────────────────
      'hdr.title':  'Instrucciones de Recogida de Muestras',
      'hdr.sub':    'Para donantes a domicilio',
      'footer':     '\u00a9 2026 \u2014 Instrucciones de Recogida de Muestras para Donantes',

      // ── index.html ─────────────────────────────────────
      'idx.welcome.h2': 'Bienvenido/a',
      'idx.welcome.p':  'Selecciona el tipo de donación que te corresponde según las indicaciones que has recibido del equipo. Cada opción te mostrará las instrucciones específicas para tu caso.',
      'idx.btn1.h2': 'Donación inicial',
      'idx.btn1.p':  'Recogida de orina, lágrima, saliva, mucosa nasal y preparación del paquete',
      'idx.btn2.h2': 'Donación estándar',
      'idx.btn2.p':  'Recogida de orina, lágrima, mucosa nasal y preparación del paquete'
    },
    en: {
      // ── Compartidos (header / footer) ──────────────────
      'hdr.title':  'Sample Collection Instructions',
      'hdr.sub':    'For at-home donors',
      'footer':     '\u00a9 2026 \u2014 Sample Collection Instructions for Donors',

      // ── index.html ─────────────────────────────────────
      'idx.welcome.h2': 'Welcome',
      'idx.welcome.p':  'Select the donation type that applies to you based on the instructions you have received from the team. Each option will show you the specific instructions for your case.',
      'idx.btn1.h2': 'Initial Donation',
      'idx.btn1.p':  'Collection of urine, tear, saliva, nasal mucosa and package preparation',
      'idx.btn2.h2': 'Standard Donation',
      'idx.btn2.p':  'Collection of urine, tear, nasal mucosa and package preparation'
    }
  };

  // ── Engine ────────────────────────────────────────────────────────────────

  function getLang() {
    return localStorage.getItem('lang') || 'es';
  }

  function applyLang(lang) {
    var t = T[lang] || T['es'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
  }

  function switchLang(lang) {
    localStorage.setItem('lang', lang);
    applyLang(lang);
  }

  // ── Inject flag switcher into every page header ───────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    if (header) {
      var switcher = document.createElement('div');
      switcher.className = 'lang-switcher';
      switcher.innerHTML =
        '<button class="lang-btn" data-lang="es" onclick="switchLang(\'es\')">🇪🇸</button>' +
        '<button class="lang-btn" data-lang="en" onclick="switchLang(\'en\')">🇬🇧</button>';
      header.appendChild(switcher);
    }
    applyLang(getLang());
  });

  // ── Public API ────────────────────────────────────────────────────────────
  window.switchLang = switchLang;
  window._i18nRegister = function (esKeys, enKeys) {
    Object.assign(T.es, esKeys);
    Object.assign(T.en, enKeys);
  };

})();
