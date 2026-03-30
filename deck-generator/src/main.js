import { layoutRegistry } from './layouts.js';
import { shapeRegistry, cleanupShapes } from './shapes.js';

const CONFIG_URL = '/config.json';
const CONTENT_URL = '/content.json';

const PALETTES = [
  { value: 'monzo',         label: 'Monzo — coral / mint' },
  { value: 'dia',           label: 'DIA — charcoal / gesso' },
  { value: 'beyond-trends', label: 'Beyond Trends — cream / charcoal' },
  { value: 'artsy',         label: 'Artsy — white / multi-hue' },
  { value: 'ace-tate',      label: 'Ace & Tate — lime / black' },
  { value: 'glide',         label: 'Glide — black / teal' },
  { value: 'space10',       label: 'SPACE10 — monochrome' },
  { value: 'superlist',     label: 'Superlist — navy / coral' },
  { value: 'wetransfer',    label: 'WeTransfer — black / pastels' },
];

const TYPOGRAPHY = [
  { value: 'monzo',         label: 'Monzo — bold rounded sans' },
  { value: 'dia',           label: 'DIA — light serif, all-caps' },
  { value: 'beyond-trends', label: 'Beyond Trends — soft rounded serif' },
  { value: 'artsy',         label: 'Artsy — geometric sans' },
  { value: 'ace-tate',      label: 'Ace & Tate — Didone serif' },
  { value: 'glide',         label: 'Glide — geometric sans, tight' },
  { value: 'space10',       label: 'SPACE10 — light clean sans' },
  { value: 'superlist',     label: 'Superlist — bold geometric sans' },
  { value: 'wetransfer',    label: 'WeTransfer — heavy editorial serif' },
];

const SHAPES = [
  { value: 'none',        label: 'None' },
  { value: 'pills',       label: 'Pills — WeTransfer' },
  { value: 'blobs',       label: 'Blobs — Ace & Tate' },
  { value: 'blocks',      label: 'Colour Blocks — Artsy' },
  { value: 'golden-rect', label: 'Golden Rectangle — DIA' },
  { value: 'droplets',        label: 'Water Droplets — WebGL' },
  { value: 'droplets-tinted', label: 'Tinted Droplets — WebGL (mint)' },
  { value: 'droplets-coral',  label: 'Tinted Droplets — WebGL (coral)' },
];

const PINSTRIPES = [
  { value: 'none',       label: 'None' },
  { value: 'vertical',   label: 'Vertical' },
  { value: 'horizontal', label: 'Horizontal' },
  { value: 'diagonal',   label: 'Diagonal' },
];

// Layout options grouped by slide type
const LAYOUT_OPTIONS = {
  cover:             [
    { value: 'cover-bold-full',    label: 'Bold Full — Monzo' },
    { value: 'cover-dark-minimal', label: 'Dark Minimal — Glide' },
  ],
  'section-divider': [
    { value: 'divider-color-burst',    label: 'Colour Burst — Monzo / DIA' },
    { value: 'divider-dark-cinematic', label: 'Dark Cinematic — Glide' },
  ],
  content:           [
    { value: 'content-split-cards', label: 'Split Cards — Beyond Trends' },
    { value: 'content-wide-visual', label: 'Wide Visual — Monzo / DIA' },
  ],
  data:              [
    { value: 'data-big-numbers', label: 'Big Numbers — Artsy' },
    { value: 'data-full-bleed',  label: 'Full Bleed — Artsy area' },
  ],
  statement:         [
    { value: 'statement-centered',  label: 'Centered — Superlist' },
    { value: 'statement-editorial', label: 'Editorial — WeTransfer' },
  ],
};

/** Stored state */
let currentConfig = null;
let currentContent = null;

/** Generate a small noise texture, return data URL */
let noiseDataURL = '';
function generateNoiseTexture() {
  const size = 200;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.floor(Math.random() * 255);
    img.data[i] = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  noiseDataURL = canvas.toDataURL('image/png');
}

async function init() {
  generateNoiseTexture();

  const [config, content] = await Promise.all([
    fetch(CONFIG_URL).then(r => r.json()),
    fetch(CONTENT_URL).then(r => r.json()),
  ]);

  currentConfig = config;
  currentContent = content;

  renderControls();
  renderDeck();
}

/** Build a <select> dropdown */
function buildSelect(id, options, currentValue) {
  const opts = options.map(o =>
    `<option value="${o.value}"${o.value === currentValue ? ' selected' : ''}>${o.label}</option>`
  ).join('');
  return `<select id="${id}" class="ctrl-select">${opts}</select>`;
}

/** Render the interactive controls panel */
function renderControls() {
  const el = document.getElementById('controls');
  const c = currentConfig;

  // Layout selects for each slide type
  const layoutSelects = Object.entries(LAYOUT_OPTIONS).map(([type, options]) => `
    <div class="ctrl-group">
      <label class="ctrl-label" for="layout-${type}">${type}</label>
      ${buildSelect(`layout-${type}`, options, c.layouts[type])}
    </div>
  `).join('');

  el.innerHTML = `
    <div class="ctrl-header">
      <h2>Deck Generator</h2>
      <button id="btn-randomise" class="ctrl-btn">Randomise</button>
    </div>

    <div class="ctrl-row">
      <div class="ctrl-group">
        <label class="ctrl-label" for="sel-palette">Palette</label>
        ${buildSelect('sel-palette', PALETTES, c.palette)}
      </div>
      <div class="ctrl-group">
        <label class="ctrl-label" for="sel-typography">Typography</label>
        ${buildSelect('sel-typography', TYPOGRAPHY, c.typography)}
      </div>
      <div class="ctrl-group">
        <label class="ctrl-label" for="sel-shapes">Shapes</label>
        ${buildSelect('sel-shapes', SHAPES, c.shapes)}
      </div>
      <div class="ctrl-group">
        <label class="ctrl-label" for="sel-pinstripes">Pinstripes</label>
        ${buildSelect('sel-pinstripes', PINSTRIPES, c.pinstripes)}
      </div>
      <div class="ctrl-group">
        <label class="ctrl-label" for="sld-noise">Noise <span id="noise-val">${c.noise}%</span></label>
        <input type="range" id="sld-noise" class="ctrl-range" min="0" max="30" step="1" value="${c.noise}" />
      </div>
    </div>

    <div class="ctrl-row ctrl-row--layouts">
      ${layoutSelects}
    </div>
  `;

  // Wire up event listeners
  el.querySelector('#sel-palette').addEventListener('change', e => {
    currentConfig.palette = e.target.value;
    renderDeck();
  });
  el.querySelector('#sel-typography').addEventListener('change', e => {
    currentConfig.typography = e.target.value;
    renderDeck();
  });
  el.querySelector('#sel-shapes').addEventListener('change', e => {
    currentConfig.shapes = e.target.value;
    renderDeck();
  });
  el.querySelector('#sel-pinstripes').addEventListener('change', e => {
    currentConfig.pinstripes = e.target.value;
    renderDeck();
  });
  el.querySelector('#sld-noise').addEventListener('input', e => {
    const val = Number(e.target.value);
    currentConfig.noise = val;
    el.querySelector('#noise-val').textContent = `${val}%`;
    document.querySelectorAll('.texture-noise').forEach(el => {
      el.style.opacity = val / 100;
    });
  });

  Object.keys(LAYOUT_OPTIONS).forEach(type => {
    el.querySelector(`#layout-${type}`).addEventListener('change', e => {
      currentConfig.layouts[type] = e.target.value;
      renderDeck();
    });
  });

  el.querySelector('#btn-randomise').addEventListener('click', () => {
    const pick = arr => arr[Math.floor(Math.random() * arr.length)].value;
    currentConfig.palette = pick(PALETTES);
    currentConfig.typography = pick(TYPOGRAPHY);
    currentConfig.shapes = pick(SHAPES);
    currentConfig.pinstripes = pick(PINSTRIPES);
    currentConfig.noise = Math.floor(Math.random() * 16);
    Object.keys(LAYOUT_OPTIONS).forEach(type => {
      currentConfig.layouts[type] = pick(LAYOUT_OPTIONS[type]);
    });
    renderControls();
    renderDeck();
  });
}

/** Export a single slide as a PNG download */
async function exportSlide(page, type) {
  const slideEl = document.getElementById(`slide-${page}`);
  if (!slideEl) return;

  const btn = slideEl.closest('.slide-wrapper').querySelector('.slide-export-btn');
  btn.textContent = 'Rendering…';
  btn.disabled = true;

  try {
    const { default: html2canvas } = await import('html2canvas');
    const canvas = await html2canvas(slideEl, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = `slide-${String(page).padStart(2, '0')}-${type}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (e) {
    console.error('Export failed:', e);
  }

  btn.textContent = 'Export PNG';
  btn.disabled = false;
}

/** Render all slides into the #deck container */
function renderDeck() {
  const config = currentConfig;
  const content = currentContent;
  const deck = document.getElementById('deck');

  // Clean up previous WebGL contexts before clearing DOM
  cleanupShapes();
  deck.innerHTML = '';

  // Collect any post-DOM init callbacks (for WebGL shapes)
  const postInits = [];

  content.slides.forEach((slide, i) => {
    const page = i + 1;

    // Determine layout for this slide type
    const layoutName = config.layouts[slide.type] || Object.values(config.layouts)[0];
    const layoutFn = layoutRegistry[layoutName];

    if (!layoutFn) {
      console.warn(`Layout "${layoutName}" not found for slide type "${slide.type}"`);
      return;
    }

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'slide-wrapper';

    // Label + export button above the slide
    const labelRow = document.createElement('div');
    labelRow.className = 'slide-label';

    const labelText = document.createElement('span');
    labelText.textContent = `${String(page).padStart(2, '0')} — ${slide.type} — ${layoutName}`;

    const exportBtn = document.createElement('button');
    exportBtn.className = 'slide-export-btn';
    exportBtn.textContent = 'Export PNG';
    exportBtn.addEventListener('click', () => exportSlide(page, slide.type));

    labelRow.appendChild(labelText);
    labelRow.appendChild(exportBtn);
    wrapper.appendChild(labelRow);

    // Create the slide container
    const slideEl = document.createElement('div');
    slideEl.className = 'slide';
    slideEl.id = `slide-${page}`;
    slideEl.dataset.palette = config.palette;
    slideEl.dataset.typography = config.typography;
    slideEl.dataset.pinstripes = config.pinstripes;

    // Render layout
    slideEl.innerHTML = layoutFn(slide, page);

    // Inject shape overlays (inside the slide-inner)
    const shapeFn = shapeRegistry[config.shapes] || shapeRegistry.none;
    const shapeResult = shapeFn(i);

    const inner = slideEl.querySelector('.slide-inner');

    if (shapeResult && inner) {
      // Shape can return a plain HTML string or { html, init }
      const html = typeof shapeResult === 'string' ? shapeResult : shapeResult.html;
      if (html) inner.insertAdjacentHTML('afterbegin', html);

      // Queue init callback if present (needs DOM to be attached first)
      if (typeof shapeResult === 'object' && shapeResult.init) {
        postInits.push(() => shapeResult.init(slideEl));
      }
    }

    // Inject texture overlays as real DOM elements so html2canvas
    // captures them for WebGL refraction through water droplets
    if (inner) {
      if (config.pinstripes !== 'none') {
        inner.insertAdjacentHTML('afterbegin', '<div class="shape-overlay texture-pinstripes"></div>');
      }
      if (config.noise > 0) {
        inner.insertAdjacentHTML(
          'afterbegin',
          `<div class="shape-overlay texture-noise" style="background-image:url(${noiseDataURL});opacity:${config.noise / 100}"></div>`,
        );
      }
    }

    wrapper.appendChild(slideEl);
    deck.appendChild(wrapper);
  });

  // Run post-DOM init callbacks serially (avoids concurrent html2canvas
  // captures and WebGL context pressure)
  requestAnimationFrame(async () => {
    for (const fn of postInits) {
      await fn();
    }
  });
}

init();
