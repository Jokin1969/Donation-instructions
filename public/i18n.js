(function () {

  // ── Translations ──────────────────────────────────────────────────────────
  // Keys are added progressively as each page is updated.
  var T = {
    es: {},
    en: {}
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
