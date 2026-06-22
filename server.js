const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Configuración editable (nombres de responsables) ─────────────────────────
// Se persiste en un fichero JSON. En Railway el sistema de ficheros es efímero:
// para que los cambios sobrevivan a un nuevo despliegue, monta un volumen y
// apunta CONFIG_PATH a una ruta dentro de él. Si no, tras cada despliegue se
// vuelve a los valores por defecto (o a los de las variables de entorno).
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(__dirname, 'data', 'config.json');

const DEFAULT_CONFIG = {
  respOrina:  process.env.RESP_ORINA  || 'Joaquín Castilla',
  respSaliva: process.env.RESP_SALIVA || 'Guiomar Pérez de Nanclares'
};

// Contraseña para editar los nombres. CÁMBIALA definiendo ADMIN_PASSWORD en el
// entorno (Railway → Variables). El valor por defecto es sólo para desarrollo.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'cambiar-esta-clave';

function readConfig() {
  try {
    const saved = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    return {
      respOrina:  typeof saved.respOrina  === 'string' && saved.respOrina.trim()  ? saved.respOrina  : DEFAULT_CONFIG.respOrina,
      respSaliva: typeof saved.respSaliva === 'string' && saved.respSaliva.trim() ? saved.respSaliva : DEFAULT_CONFIG.respSaliva
    };
  } catch (e) {
    return Object.assign({}, DEFAULT_CONFIG);
  }
}

function writeConfig(cfg) {
  fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2), 'utf8');
}

// Devuelve los nombres actuales (público: lo consultan todas las páginas).
app.get('/api/config', (req, res) => {
  res.json(readConfig());
});

// Actualiza los nombres (protegido por contraseña).
app.post('/api/config', (req, res) => {
  const body = req.body || {};
  if (body.password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Contraseña incorrecta.' });
  }
  const respOrina  = (body.respOrina  || '').trim();
  const respSaliva = (body.respSaliva || '').trim();
  if (!respOrina || !respSaliva) {
    return res.status(400).json({ error: 'Ambos nombres son obligatorios.' });
  }
  const cfg = { respOrina, respSaliva };
  try {
    writeConfig(cfg);
  } catch (e) {
    return res.status(500).json({ error: 'No se pudo guardar la configuración.' });
  }
  res.json(cfg);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const pages = [
  'con-saliva',
  'sin-saliva',
  'orina',
  'lagrima',
  'saliva',
  'nasal',
  'paquete',
  'paquete-sin-saliva',
];

pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', `${page}.html`));
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
