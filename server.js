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
  respOrina:      process.env.RESP_ORINA       || 'Carol Aristimuño',
  respSaliva:     process.env.RESP_SALIVA      || 'Guiomar Pérez de Nanclares',
  respSalivaAddr: process.env.RESP_SALIVA_ADDR ||
    'Hospital Universitario Cruces - IIS Biobizkaia\nEdificio Bio 3, 1ª planta\nPlaza de Cruces 12\nCruces - Barakaldo\n48903, Bizkaia\nTelf. +34 946006014',
  pkgAddr: process.env.PKG_ADDR ||
    'Euskal Biobankua / Biobanco Vasco\nIIS Bioaraba / OSI Araba\nArabako Unibertsitate Ospitaleko Nodoa / Nodo Hospital Universitario Araba\nC/ Jose Atxotegi, s/n\n01009 Vitoria-Gasteiz\nT +34 945 007 000 (Ext. 5106)'
};

// Contraseña para editar los nombres. CÁMBIALA definiendo ADMIN_PASSWORD en el
// entorno (Railway → Variables). El valor por defecto es sólo para desarrollo.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'cambiar-esta-clave';

function readConfig() {
  try {
    const saved = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    return {
      respOrina:      typeof saved.respOrina      === 'string' && saved.respOrina.trim()      ? saved.respOrina      : DEFAULT_CONFIG.respOrina,
      respSaliva:     typeof saved.respSaliva     === 'string' && saved.respSaliva.trim()     ? saved.respSaliva     : DEFAULT_CONFIG.respSaliva,
      respSalivaAddr: typeof saved.respSalivaAddr === 'string' && saved.respSalivaAddr.trim() ? saved.respSalivaAddr : DEFAULT_CONFIG.respSalivaAddr,
      pkgAddr:        typeof saved.pkgAddr        === 'string' && saved.pkgAddr.trim()        ? saved.pkgAddr        : DEFAULT_CONFIG.pkgAddr
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
  const respOrina      = (body.respOrina      || '').trim();
  const respSaliva     = (body.respSaliva     || '').trim();
  const respSalivaAddr = (body.respSalivaAddr || '').trim();
  const pkgAddr        = (body.pkgAddr        || '').trim();
  if (!respOrina || !respSaliva || !respSalivaAddr || !pkgAddr) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  const cfg = { respOrina, respSaliva, respSalivaAddr, pkgAddr };
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
