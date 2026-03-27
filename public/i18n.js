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
      'idx.btn2.p':  'Recogida de orina, lágrima, mucosa nasal y preparación del paquete',

      // ── con-saliva.html / sin-saliva.html ──────────────
      'cs.h2':    'Donación inicial',
      'ss.h2':    'Donación estándar',
      'sel.intro': 'Esta página contiene toda la información que necesitas para realizar correctamente la recogida de tus muestras en casa. Te recomendamos leer primero las instrucciones para <strong>Preparar el Paquete</strong>, porque en él se desglosan los contenidos de la caja de muestras y qué hacer con los mismos. Después, selecciona cada tipo de muestra que debes recoger y sigue las instrucciones paso a paso. Si tienes alguna duda, contacta con el equipo.',

      // ── Tarjetas de muestra (compartidas) ──────────────
      'card.orina.h3':    'Orina',
      'card.orina.p':     'Instrucciones para la recogida de muestra de orina',
      'card.lagrima.h3':  'Lágrima',
      'card.lagrima.p':   'Instrucciones para la recogida de muestra de lágrima',
      'card.saliva.h3':   'Saliva',
      'card.saliva.p':    'Instrucciones para la recogida de muestra de saliva',
      'card.nasal.h3':    'Secreción Nasal',
      'card.nasal.p':     'Instrucciones para la recogida de secreción nasal',
      'card.paquete.h3':  'Preparar el Paquete',
      'card.paquete.p':   'Cómo preparar y empaquetar las muestras para su recogida',
      'card.btn':         'Ver instrucciones'
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
      'idx.btn2.p':  'Collection of urine, tear, nasal mucosa and package preparation',

      // ── con-saliva.html / sin-saliva.html ──────────────
      'cs.h2':    'Initial Donation',
      'ss.h2':    'Standard Donation',
      'sel.intro': 'This page contains all the information you need to correctly collect your samples at home. We recommend reading the <strong>Package Preparation</strong> instructions first, as they describe the contents of the sample box and what to do with each item. Then select each sample type you need to collect and follow the step-by-step instructions. If you have any questions, contact the team.',

      // ── Sample cards (shared) ───────────────────────────
      'card.orina.h3':    'Urine',
      'card.orina.p':     'Instructions for urine sample collection',
      'card.lagrima.h3':  'Tear',
      'card.lagrima.p':   'Instructions for tear sample collection',
      'card.saliva.h3':   'Saliva',
      'card.saliva.p':    'Instructions for saliva sample collection',
      'card.nasal.h3':    'Nasal Secretion',
      'card.nasal.p':     'Instructions for nasal secretion collection',
      'card.paquete.h3':  'Prepare the Package',
      'card.paquete.p':   'How to prepare and package the samples for collection',
      'card.btn':         'View instructions'
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
