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
  { value: 'droplets-oil',     label: 'Crude Oil — WebGL (iridescent)' },
  { value: 'droplets-mercury', label: 'Mercury — WebGL (liquid metal)' },
  { value: 'droplets-frosted', label: 'Frosted — WebGL (ground glass)' },
  { value: 'droplets-ice',     label: 'Frozen Ice — WebGL (crystalline)' },
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

/** Editable text fields per slide type */
const EDITABLE_FIELDS = {
  cover:             ['title', 'subtitle', 'author', 'badge', 'date'],
  statement:         ['section', 'text', 'highlight', 'attribution'],
  'section-divider': ['title', 'subtitle'],
  content:           ['section', 'heading', 'body'],
  data:              ['section', 'heading', 'body'],
};

/** Stored state */
let currentConfig = null;
let currentContent = null;
let contentDirty = false;
const SLIDES_PER_PAGE = 5;
let currentPage = Number(sessionStorage.getItem('deckPage') || 0);
let deckPostInitsReady = Promise.resolve();

/** Update page and persist to sessionStorage */
function setPage(page) {
  currentPage = page;
  sessionStorage.setItem('deckPage', page);
}

/** Navigate to a page, re-render, and scroll */
function goToPage(page, direction) {
  setPage(page);
  renderDeck();
  renderPagination();
  if (direction === 'forward') {
    document.getElementById('deck').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else if (direction === 'back') {
    document.getElementById('pagination-bottom')?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}

/** Generate a small noise texture, return data URL */
let noiseDataURL = '';
function generateNoiseTexture() {
  const size = 512;
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

  // Initialise per-slide shapes map if not present
  if (!config.slideShapes) config.slideShapes = {};

  currentConfig = config;
  currentContent = content;

  // Clamp restored page in case content changed
  const maxPage = Math.max(0, Math.ceil(content.slides.length / SLIDES_PER_PAGE) - 1);
  if (currentPage > maxPage) setPage(maxPage);

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

  const collapsed = sessionStorage.getItem('ctrlCollapsed') === '1';

  el.innerHTML = `
    <div class="ctrl-header">
      <h2>Deck Generator</h2>
      <div class="ctrl-header-actions">
        <button id="btn-save" class="ctrl-btn ctrl-btn--save" disabled>Save</button>
        <button id="btn-export-all" class="ctrl-btn ctrl-btn--export">Export All</button>
        <button id="btn-toggle" class="ctrl-btn ctrl-btn--toggle">${collapsed ? 'Expand' : 'Collapse'}</button>
      </div>
    </div>

    <div class="ctrl-body" ${collapsed ? 'style="display:none"' : ''}>
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
      <div class="ctrl-row ctrl-row--actions">
        <button id="btn-randomise" class="ctrl-btn">Randomise</button>
      </div>
    </div>
  `;

  // Pagination controls (injected after the layout row)
  renderPagination();

  // Toggle collapse/expand
  el.querySelector('#btn-toggle').addEventListener('click', () => {
    const body = el.querySelector('.ctrl-body');
    const btn = el.querySelector('#btn-toggle');
    const isHidden = body.style.display === 'none';
    body.style.display = isHidden ? '' : 'none';
    btn.textContent = isHidden ? 'Collapse' : 'Expand';
    sessionStorage.setItem('ctrlCollapsed', isHidden ? '0' : '1');
  });

  // Wire up event listeners
  el.querySelector('#sel-palette').addEventListener('change', e => {
    currentConfig.palette = e.target.value;
    markDirty();
    renderDeck();
  });
  el.querySelector('#sel-typography').addEventListener('change', e => {
    currentConfig.typography = e.target.value;
    markDirty();
    renderDeck();
  });
  el.querySelector('#sel-shapes').addEventListener('change', e => {
    currentConfig.shapes = e.target.value;
    const total = currentContent ? currentContent.slides.length : 0;
    for (let s = 0; s < total; s++) currentConfig.slideShapes[s] = e.target.value;
    markDirty();
    renderDeck();
  });
  el.querySelector('#sel-pinstripes').addEventListener('change', e => {
    currentConfig.pinstripes = e.target.value;
    markDirty();
    renderDeck();
  });
  el.querySelector('#sld-noise').addEventListener('input', e => {
    const val = Number(e.target.value);
    currentConfig.noise = val;
    markDirty();
    el.querySelector('#noise-val').textContent = `${val}%`;
    document.querySelectorAll('.texture-noise').forEach(el => {
      el.style.opacity = val / 100;
    });
  });

  Object.keys(LAYOUT_OPTIONS).forEach(type => {
    el.querySelector(`#layout-${type}`).addEventListener('change', e => {
      currentConfig.layouts[type] = e.target.value;
      markDirty();
      renderDeck();
    });
  });

  el.querySelector('#btn-randomise').addEventListener('click', () => {
    const pick = arr => arr[Math.floor(Math.random() * arr.length)].value;
    currentConfig.palette = pick(PALETTES);
    currentConfig.typography = pick(TYPOGRAPHY);
    currentConfig.shapes = pick(SHAPES);
    const total = currentContent ? currentContent.slides.length : 0;
    for (let s = 0; s < total; s++) currentConfig.slideShapes[s] = currentConfig.shapes;
    currentConfig.pinstripes = pick(PINSTRIPES);
    currentConfig.noise = Math.floor(Math.random() * 16);
    Object.keys(LAYOUT_OPTIONS).forEach(type => {
      currentConfig.layouts[type] = pick(LAYOUT_OPTIONS[type]);
    });
    renderControls();
    renderDeck();
  });

  el.querySelector('#btn-save').addEventListener('click', saveContent);
  el.querySelector('#btn-export-all').addEventListener('click', exportAllSlides);

  // Restore dirty state if controls were rebuilt mid-session
  if (contentDirty) {
    const btn = el.querySelector('#btn-save');
    btn.disabled = false;
    btn.textContent = 'Save';
  }
}

/** Build pagination HTML and wire up listeners */
function createPaginationNav(id) {
  const totalSlides = currentContent ? currentContent.slides.length : 0;
  const totalPages = Math.ceil(totalSlides / SLIDES_PER_PAGE);

  const nav = document.createElement('div');
  nav.id = id;
  nav.className = 'pagination';

  const start = currentPage * SLIDES_PER_PAGE + 1;
  const end = Math.min(start + SLIDES_PER_PAGE - 1, totalSlides);

  nav.innerHTML = `
    <button class="pg-btn pg-prev" ${currentPage === 0 ? 'disabled' : ''}>&larr; Prev</button>
    <span class="pg-info">Slides ${start}–${end} of ${totalSlides}</span>
    <button class="pg-btn pg-next" ${currentPage >= totalPages - 1 ? 'disabled' : ''}>Next &rarr;</button>
  `;

  nav.querySelector('.pg-prev').addEventListener('click', () => {
    if (currentPage > 0) goToPage(currentPage - 1, 'back');
  });
  nav.querySelector('.pg-next').addEventListener('click', () => {
    if (currentPage < totalPages - 1) goToPage(currentPage + 1, 'forward');
  });

  return nav;
}

/** Render pagination controls above and below the deck */
function renderPagination() {
  const totalSlides = currentContent ? currentContent.slides.length : 0;
  const totalPages = Math.ceil(totalSlides / SLIDES_PER_PAGE);

  // Remove existing pagination elements
  document.getElementById('pagination-top')?.remove();
  document.getElementById('pagination-bottom')?.remove();

  if (totalPages <= 1) return;

  // Top pagination (after controls)
  document.getElementById('controls').after(createPaginationNav('pagination-top'));

  // Bottom pagination (after deck)
  document.getElementById('deck').after(createPaginationNav('pagination-bottom'));
}

/** Generate a pinstripe tile as a data URL for html2canvas export */
function generatePinstripeTexture(direction, color) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (direction === 'diagonal') {
    const size = 8;
    canvas.width = size;
    canvas.height = size;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(size, 0);
    ctx.lineTo(0, size);
    ctx.stroke();
    // Wrap the line so the tile repeats seamlessly
    ctx.beginPath();
    ctx.moveTo(size + size, 0);
    ctx.lineTo(0, size + size);
    ctx.stroke();
  } else {
    canvas.width = direction === 'vertical' ? 9 : 1;
    canvas.height = direction === 'vertical' ? 1 : 9;
    ctx.fillStyle = color;
    if (direction === 'vertical') {
      ctx.fillRect(8, 0, 1, 1);
    } else {
      ctx.fillRect(0, 8, 1, 1);
    }
  }

  return canvas.toDataURL('image/png');
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

/** Export all slides as PNGs saved to the export/ folder on disk */
async function exportAllSlides() {
  const btn = document.getElementById('btn-export-all');
  if (!btn) return;
  btn.disabled = true;

  const totalSlides = currentContent.slides.length;
  const savedPage = currentPage;
  const totalPages = Math.ceil(totalSlides / SLIDES_PER_PAGE);
  const { default: html2canvas } = await import('html2canvas');
  const pendingSaves = [];

  /** Capture all visible slides and fire save requests */
  async function capturePage(pageSlides, startIdx, subdir) {
    const capturePromises = pageSlides.map((slide, j) => {
      const i = startIdx + j;
      const page = i + 1;
      const slideEl = document.getElementById(`slide-${page}`);
      if (!slideEl) return Promise.resolve();

      const slideWidth = slideEl.offsetWidth;
      const exportScale = Math.ceil(3840 / slideWidth);
      return html2canvas(slideEl, {
        scale: exportScale,
        useCORS: true,
        logging: false,
        backgroundColor: null,
      }).then(canvas => ({
        filename: `slide-${String(page).padStart(2, '0')}-${slide.type}.png`,
        dataUrl: canvas.toDataURL('image/png'),
      })).catch(e => {
        console.error(`Capture slide ${page} failed:`, e);
        return null;
      });
    });

    const captured = (await Promise.all(capturePromises)).filter(Boolean);

    const savePromises = captured.map(({ filename, dataUrl }) =>
      fetch('/api/save-slide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, dataUrl, subdir }),
      }).catch(e => console.error(`Save ${filename} failed:`, e))
    );

    pendingSaves.push(...savePromises);
  }

  for (let pg = 0; pg < totalPages; pg++) {
    setPage(pg);
    renderDeck();
    fixStatBlockContrast();
    fitStatSizes();

    // Wait for all WebGL shapes to finish rendering
    await deckPostInitsReady;

    const startIdx = pg * SLIDES_PER_PAGE;
    const pageSlides = currentContent.slides.slice(startIdx, startIdx + SLIDES_PER_PAGE);

    // ── 16:9 capture ──
    btn.textContent = `16:9 page ${pg + 1}/${totalPages}…`;
    await capturePage(pageSlides, startIdx, '16x9');

    // ── 4:3 capture — full re-render at 4:3 so droplets get fresh content textures ──
    btn.textContent = `4:3 page ${pg + 1}/${totalPages}…`;
    document.documentElement.style.setProperty('--export-aspect', '4 / 3');
    renderDeck();
    fixStatBlockContrast();
    fitStatSizes();
    await deckPostInitsReady;
    await capturePage(pageSlides, startIdx, '4x3');
    document.documentElement.style.removeProperty('--export-aspect');
  }

  // Wait for all saves to finish before building the deck
  btn.textContent = `Optimizing PNGs…`;
  await Promise.all(pendingSaves);

  // Build PPTX and PDF from the exported PNGs
  btn.textContent = 'Building PPTX + PDF…';
  try {
    const buildRes = await fetch('/api/build-deck', { method: 'POST' });
    const buildData = await buildRes.json();
    if (buildData.ok) {
      btn.textContent = `Done — ${buildData.slides} slides`;
    } else {
      btn.textContent = 'PNG done, deck failed';
      console.error('Build deck failed:', buildData.error);
    }
  } catch (e) {
    console.error('Build deck failed:', e);
    btn.textContent = 'PNG done, deck failed';
  }

  // Restore original page
  setPage(savedPage);
  renderDeck();
  setTimeout(() => { btn.textContent = 'Export All'; btn.disabled = false; }, 3000);
}

/** Save current content + config to server (timestamps backups automatically) */
async function saveContent() {
  const btn = document.getElementById('btn-save');
  if (btn) { btn.textContent = 'Saving…'; btn.disabled = true; }

  try {
    const res = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: currentContent, config: currentConfig }),
    });
    const data = await res.json();
    if (data.ok) {
      contentDirty = false;
      if (btn) btn.textContent = 'Saved';
      setTimeout(() => { if (btn) { btn.textContent = 'Save'; btn.disabled = true; } }, 1500);
    } else {
      if (btn) btn.textContent = 'Error';
    }
  } catch (e) {
    console.error('Save failed:', e);
    if (btn) { btn.textContent = 'Save'; btn.disabled = false; }
  }
}

/** Mark content as dirty and enable the save button */
function markDirty() {
  contentDirty = true;
  const btn = document.getElementById('btn-save');
  if (btn) { btn.disabled = false; btn.textContent = 'Save'; }
}

/** Build the collapsible edit panel for a slide */
function buildEditPanel(slide, slideIndex) {
  const fields = EDITABLE_FIELDS[slide.type] || [];
  const panel = document.createElement('div');
  panel.className = 'slide-edit-panel';
  panel.style.display = 'none';

  // Top-level text fields
  fields.forEach(key => {
    const val = slide[key] ?? '';
    const isLong = key === 'body' || key === 'text';

    const group = document.createElement('div');
    group.className = 'edit-group';

    const label = document.createElement('label');
    label.className = 'edit-label';
    label.textContent = key;

    const input = isLong
      ? document.createElement('textarea')
      : document.createElement('input');
    input.className = 'edit-input';
    input.value = val;
    if (isLong) input.rows = 3;

    input.addEventListener('input', () => {
      currentContent.slides[slideIndex][key] = input.value;
      markDirty();
      renderSingleSlide(slideIndex);
    });

    group.appendChild(label);
    group.appendChild(input);
    panel.appendChild(group);
  });

  // Nested array fields: points[] for content, stats[] for data
  if (slide.type === 'content' && slide.points) {
    slide.points.forEach((point, pi) => {
      const header = document.createElement('div');
      header.className = 'edit-nested-header';
      header.textContent = `Point ${pi + 1}`;
      panel.appendChild(header);

      ['title', 'description'].forEach(key => {
        const group = document.createElement('div');
        group.className = 'edit-group';

        const label = document.createElement('label');
        label.className = 'edit-label';
        label.textContent = key;

        const isLong = key === 'description';
        const input = isLong
          ? document.createElement('textarea')
          : document.createElement('input');
        input.className = 'edit-input';
        input.value = point[key] ?? '';
        if (isLong) input.rows = 2;

        input.addEventListener('input', () => {
          currentContent.slides[slideIndex].points[pi][key] = input.value;
          markDirty();
          renderSingleSlide(slideIndex);
        });

        group.appendChild(label);
        group.appendChild(input);
        panel.appendChild(group);
      });
    });
  }

  if (slide.type === 'data' && slide.stats) {
    slide.stats.forEach((stat, si) => {
      const header = document.createElement('div');
      header.className = 'edit-nested-header';
      header.textContent = `Stat ${si + 1}`;
      panel.appendChild(header);

      ['value', 'label'].forEach(key => {
        const group = document.createElement('div');
        group.className = 'edit-group';

        const label = document.createElement('label');
        label.className = 'edit-label';
        label.textContent = key;

        const input = document.createElement('input');
        input.className = 'edit-input';
        input.value = stat[key] ?? '';

        input.addEventListener('input', () => {
          currentContent.slides[slideIndex].stats[si][key] = input.value;
          markDirty();
          renderSingleSlide(slideIndex);
        });

        group.appendChild(label);
        group.appendChild(input);
        panel.appendChild(group);
      });
    });
  }

  return panel;
}

/** Re-render a single slide in place (without tearing down the whole deck) */
function renderSingleSlide(slideIndex) {
  const config = currentConfig;
  const slide = currentContent.slides[slideIndex];
  const page = slideIndex + 1;

  const slideEl = document.getElementById(`slide-${page}`);
  if (!slideEl) return;

  const layoutName = config.layouts[slide.type] || Object.values(config.layouts)[0];
  const layoutFn = layoutRegistry[layoutName];
  if (!layoutFn) return;

  slideEl.innerHTML = layoutFn(slide, page);

  const inner = slideEl.querySelector('.slide-inner');
  if (!inner) return;

  // Re-inject textures (shapes are NOT re-injected to avoid WebGL churn)
  if (config.pinstripes !== 'none') {
    inner.insertAdjacentHTML('afterbegin', '<div class="shape-overlay texture-pinstripes"></div>');
  }
  inner.insertAdjacentHTML(
    'afterbegin',
    `<div class="shape-overlay texture-noise" style="background-image:url(${noiseDataURL});opacity:${config.noise / 100}"></div>`,
  );

  // Fix stat block contrast if this is a data slide
  slideEl.querySelectorAll('.stat-block').forEach(block => {
    const blockL = luminance(getComputedStyle(block).backgroundColor);
    block.style.color = blockL > 0.18 ? '#1B2A3D' : '#FFFFFF';
    const inner2 = block.closest('.slide-inner');
    if (inner2) {
      const slideL = luminance(getComputedStyle(inner2).backgroundColor);
      block.style.border = Math.abs(blockL - slideL) < 0.05 ? '1px solid rgba(255,255,255,0.15)' : '';
    }
  });

  // Fit stat value sizes for this slide — all match the longest text
  const statValues = slideEl.querySelectorAll('.stat-value');
  if (statValues.length > 0) {
    statValues.forEach(v => { v.style.fontSize = ''; v.style.whiteSpace = 'nowrap'; });
    let minFitted = Infinity;
    statValues.forEach(v => {
      const block = v.closest('.stat-block');
      const padL = parseFloat(getComputedStyle(block).paddingLeft);
      const padR = parseFloat(getComputedStyle(block).paddingRight);
      const available = block.clientWidth - padL - padR;
      const currentSize = parseFloat(getComputedStyle(v).fontSize);
      const textWidth = v.scrollWidth;
      if (textWidth > 0) minFitted = Math.min(minFitted, currentSize * (available / textWidth));
    });
    if (minFitted !== Infinity) {
      const firstBlock = statValues[0].closest('.stat-block');
      const blockH = firstBlock.clientHeight - parseFloat(getComputedStyle(firstBlock).paddingTop) - parseFloat(getComputedStyle(firstBlock).paddingBottom);
      const finalSize = Math.min(minFitted, blockH * 0.55);
      statValues.forEach(v => v.style.fontSize = `${finalSize}px`);
    }
  }
}

/** Relative luminance from an rgb() or rgba() string */
function luminance(cssColor) {
  const match = cssColor.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return 0;
  const [r, g, b] = [match[1], match[2], match[3]].map(c => {
    const s = Number(c) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Scale stat values so the longest text fills its block width, and all others match that size */
function fitStatSizes() {
  document.querySelectorAll('.data-big-numbers').forEach(slide => {
    const values = slide.querySelectorAll('.stat-value');
    if (values.length === 0) return;

    // Reset and prevent wrapping for measurement
    values.forEach(v => { v.style.fontSize = ''; v.style.whiteSpace = 'nowrap'; });

    // Find the size that makes the longest text exactly fill its block
    let minFitted = Infinity;
    values.forEach(v => {
      const block = v.closest('.stat-block');
      const padL = parseFloat(getComputedStyle(block).paddingLeft);
      const padR = parseFloat(getComputedStyle(block).paddingRight);
      const available = block.clientWidth - padL - padR;
      const currentSize = parseFloat(getComputedStyle(v).fontSize);
      const textWidth = v.scrollWidth;
      if (textWidth > 0) {
        minFitted = Math.min(minFitted, currentSize * (available / textWidth));
      }
    });

    if (minFitted !== Infinity) {
      // Cap at 55% of block height so label text still fits
      const firstBlock = values[0].closest('.stat-block');
      const blockH = firstBlock.clientHeight - parseFloat(getComputedStyle(firstBlock).paddingTop) - parseFloat(getComputedStyle(firstBlock).paddingBottom);
      const finalSize = Math.min(minFitted, blockH * 0.55);
      values.forEach(v => v.style.fontSize = `${finalSize}px`);
    }
  });
}

/** Set adaptive text colour on stat blocks and add border when block disappears into slide bg */
function fixStatBlockContrast() {
  document.querySelectorAll('.stat-block').forEach(block => {
    const blockL = luminance(getComputedStyle(block).backgroundColor);
    block.style.color = blockL > 0.18 ? '#1B2A3D' : '#FFFFFF';

    // Add border when block blends into slide background
    const slide = block.closest('.slide-inner');
    if (slide) {
      const slideL = luminance(getComputedStyle(slide).backgroundColor);
      const contrast = Math.abs(blockL - slideL);
      block.style.border = contrast < 0.05 ? '1px solid rgba(255,255,255,0.15)' : '';
    }
  });
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

  const startIdx = currentPage * SLIDES_PER_PAGE;
  const pageSlides = content.slides.slice(startIdx, startIdx + SLIDES_PER_PAGE);

  pageSlides.forEach((slide, j) => {
    const i = startIdx + j;
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

    // Label + per-slide shape control + export button
    const labelRow = document.createElement('div');
    labelRow.className = 'slide-label';

    const labelText = document.createElement('span');
    labelText.textContent = `${String(page).padStart(2, '0')} — ${slide.type} — ${layoutName}`;

    const slideShape = config.slideShapes[i] ?? config.shapes;
    const shapeSelect = document.createElement('select');
    shapeSelect.className = 'ctrl-select slide-shape-select';
    SHAPES.forEach(opt => {
      const o = document.createElement('option');
      o.value = opt.value;
      o.textContent = opt.label;
      if (opt.value === slideShape) o.selected = true;
      shapeSelect.appendChild(o);
    });
    shapeSelect.addEventListener('change', e => {
      currentConfig.slideShapes[i] = e.target.value;
      markDirty();
      renderDeck();
    });

    const editBtn = document.createElement('button');
    editBtn.className = 'slide-export-btn slide-edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      const panel = wrapper.querySelector('.slide-edit-panel');
      if (!panel) return;
      const open = panel.style.display !== 'none';
      panel.style.display = open ? 'none' : '';
      editBtn.textContent = open ? 'Edit' : 'Close';
    });

    const dupeBtn = document.createElement('button');
    dupeBtn.className = 'slide-export-btn';
    dupeBtn.textContent = 'Duplicate';
    dupeBtn.addEventListener('click', () => {
      const clone = JSON.parse(JSON.stringify(slide));
      currentContent.slides.splice(i + 1, 0, clone);
      // Shift per-slide shape overrides after the insertion point
      const shapes = currentConfig.slideShapes;
      const total = currentContent.slides.length;
      for (let s = total - 1; s > i + 1; s--) {
        if (shapes[s - 1] !== undefined) shapes[s] = shapes[s - 1];
        else delete shapes[s];
      }
      if (shapes[i] !== undefined) shapes[i + 1] = shapes[i];
      markDirty();
      renderDeck();
    });

    const exportBtn = document.createElement('button');
    exportBtn.className = 'slide-export-btn';
    exportBtn.textContent = 'Export PNG';
    exportBtn.addEventListener('click', () => exportSlide(page, slide.type));

    labelRow.appendChild(labelText);
    labelRow.appendChild(shapeSelect);
    labelRow.appendChild(editBtn);
    labelRow.appendChild(dupeBtn);
    labelRow.appendChild(exportBtn);
    wrapper.appendChild(labelRow);

    // Collapsible edit panel
    const editPanel = buildEditPanel(slide, i);
    wrapper.appendChild(editPanel);

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
    const slideShapeKey = config.slideShapes[i] ?? config.shapes;
    const shapeFn = shapeRegistry[slideShapeKey] || shapeRegistry.none;
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
      inner.insertAdjacentHTML(
        'afterbegin',
        `<div class="shape-overlay texture-noise" style="background-image:url(${noiseDataURL});opacity:${config.noise / 100}"></div>`,
      );
    }

    wrapper.appendChild(slideEl);
    deck.appendChild(wrapper);
  });

  // Adaptive text colour and sizing for stat blocks (needs computed styles from DOM)
  fixStatBlockContrast();
  fitStatSizes();

  // Resolve pinstripes from CSS gradients to tiled images so html2canvas
  // captures them — both for WebGL droplet content textures and PNG export.
  // Must run BEFORE postInits (which capture slide content for droplet refraction).
  document.querySelectorAll('.texture-pinstripes').forEach(el => {
    const slide = el.closest('.slide');
    if (!slide) return;
    const dir = slide.dataset.pinstripes;
    if (!dir || dir === 'none') return;
    const color = getComputedStyle(el).color;
    const url = generatePinstripeTexture(dir, color);
    el.style.background = `url(${url}) repeat`;
  });

  // Run post-DOM init callbacks serially (avoids concurrent html2canvas
  // captures and WebGL context pressure)
  // Store promise so exportAllSlides can await it
  deckPostInitsReady = new Promise(resolve => {
    requestAnimationFrame(async () => {
      for (const fn of postInits) {
        await fn();
      }
      resolve();
    });
  });

  renderPagination();
}

init();
