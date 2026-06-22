// ─────────────────────────────────────────────────────────────────────────────
// Panel de ajustes (rueda dentada) para configurar los nombres de las personas
// responsables. Sólo se incluye en la página de inicio. Los nombres se guardan
// en el servidor (/api/config) y la edición requiere la contraseña de admin.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    if (!header) return;

    // ── Estilos ───────────────────────────────────────────────────────────────
    var style = document.createElement('style');
    style.textContent =
      '.settings-gear{margin-left:10px;background:rgba(255,255,255,0.15);border:2px solid transparent;' +
        'border-radius:8px;padding:4px 8px;font-size:1.35rem;line-height:1;cursor:pointer;flex-shrink:0;' +
        'transition:background .15s,transform .15s;}' +
      '.settings-gear:hover{background:rgba(255,255,255,0.28);transform:rotate(45deg) scale(1.1);}' +
      '.settings-overlay{position:fixed;inset:0;background:rgba(15,23,42,0.55);display:flex;' +
        'align-items:center;justify-content:center;padding:20px;z-index:1000;}' +
      '.settings-overlay[hidden]{display:none;}' +
      '.settings-modal{background:#fff;border-radius:16px;padding:28px;width:100%;max-width:440px;' +
        'box-shadow:0 20px 60px rgba(0,0,0,0.3);font-family:inherit;}' +
      '.settings-modal h2{color:#0077b6;font-size:1.25rem;margin-bottom:6px;}' +
      '.settings-sub{color:#718096;font-size:0.85rem;line-height:1.5;margin-bottom:18px;}' +
      '.settings-modal label{display:block;font-size:0.85rem;font-weight:600;color:#2d3748;margin-bottom:14px;}' +
      '.settings-modal input{display:block;width:100%;margin-top:6px;padding:10px 12px;font-size:0.95rem;' +
        'font-family:inherit;border:2px solid #e2e8f0;border-radius:8px;}' +
      '.settings-modal input:focus{outline:none;border-color:#0077b6;}' +
      '.settings-msg{min-height:18px;font-size:0.85rem;margin:2px 0 12px;}' +
      '.settings-msg.err{color:#c53030;}' +
      '.settings-msg.ok{color:#059669;}' +
      '.settings-actions{display:flex;justify-content:flex-end;gap:10px;}' +
      '.settings-btn{border:none;border-radius:8px;padding:10px 18px;font-size:0.9rem;font-weight:600;' +
        'font-family:inherit;cursor:pointer;}' +
      '.settings-btn.cancel{background:#edf2f7;color:#4a5568;}' +
      '.settings-btn.save{background:linear-gradient(90deg,#0077b6,#00b4d8);color:#fff;}' +
      '.settings-btn:disabled{opacity:.6;cursor:default;}';
    document.head.appendChild(style);

    // ── Botón rueda dentada ─────────────────────────────────────────────────────
    var gear = document.createElement('button');
    gear.type = 'button';
    gear.className = 'settings-gear';
    gear.title = 'Ajustes';
    gear.setAttribute('aria-label', 'Ajustes');
    gear.textContent = '⚙️';
    header.appendChild(gear);

    // ── Modal ───────────────────────────────────────────────────────────────────
    var overlay = document.createElement('div');
    overlay.className = 'settings-overlay';
    overlay.hidden = true;
    overlay.innerHTML =
      '<div class="settings-modal" role="dialog" aria-modal="true">' +
        '<h2>⚙️ Ajustes</h2>' +
        '<p class="settings-sub">Estos nombres aparecen en las instrucciones que ven los donantes. ' +
          'Para guardar los cambios necesitas la contraseña de administración.</p>' +
        '<label>Persona responsable de recibir la muestra de orina' +
          '<input type="text" id="set-orina" autocomplete="off"></label>' +
        '<label>Persona responsable de recibir la muestra de saliva' +
          '<input type="text" id="set-saliva" autocomplete="off"></label>' +
        '<label>Contraseña de administración' +
          '<input type="password" id="set-pass" autocomplete="off"></label>' +
        '<div class="settings-msg" id="set-msg"></div>' +
        '<div class="settings-actions">' +
          '<button type="button" class="settings-btn cancel" id="set-cancel">Cancelar</button>' +
          '<button type="button" class="settings-btn save" id="set-save">Guardar</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    var inOrina  = overlay.querySelector('#set-orina');
    var inSaliva = overlay.querySelector('#set-saliva');
    var inPass   = overlay.querySelector('#set-pass');
    var msg      = overlay.querySelector('#set-msg');
    var saveBtn  = overlay.querySelector('#set-save');

    function showMsg(text, isErr) {
      msg.textContent = text;
      msg.className = 'settings-msg ' + (isErr ? 'err' : 'ok');
    }

    function open() {
      showMsg('', false);
      inPass.value = '';
      fetch('/api/config')
        .then(function (r) { return r.json(); })
        .then(function (c) {
          inOrina.value  = c.respOrina  || '';
          inSaliva.value = c.respSaliva || '';
        })
        .catch(function () { /* sin conexión */ });
      overlay.hidden = false;
    }

    function close() { overlay.hidden = true; }

    gear.addEventListener('click', open);
    overlay.querySelector('#set-cancel').addEventListener('click', close);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

    saveBtn.addEventListener('click', function () {
      var body = {
        respOrina:  inOrina.value.trim(),
        respSaliva: inSaliva.value.trim(),
        password:   inPass.value
      };
      if (!body.respOrina || !body.respSaliva) { showMsg('Ambos nombres son obligatorios.', true); return; }
      if (!body.password) { showMsg('Introduce la contraseña.', true); return; }

      saveBtn.disabled = true;
      fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
        .then(function (res) {
          if (res.ok) {
            showMsg('Guardado correctamente.', false);
            inPass.value = '';
            setTimeout(close, 1000);
          } else {
            showMsg((res.body && res.body.error) || 'No se pudo guardar.', true);
          }
        })
        .catch(function () { showMsg('Error de conexión.', true); })
        .then(function () { saveBtn.disabled = false; });
    });
  });
})();
