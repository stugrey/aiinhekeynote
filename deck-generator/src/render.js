// Shared slide-render module used by both the editor (src/main.js) and the
// standalone viewer (src/viewer.js). Pure functions, no editor state — the
// caller supplies config, noise texture, and a postInits queue for WebGL
// shapes that need to run after DOM attachment.

import { layoutRegistry } from './layouts.js';
import { shapeRegistry, cleanupShapes } from './shapes.js';
import { initLensBadgeDroplets } from './shapes-droplets.js';

/** Generate a small greyscale noise tile as a data URL. */
export function generateNoiseTexture() {
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
  return canvas.toDataURL('image/png');
}

/** Generate a pinstripe tile as a data URL. Used both for live display and
 *  for html2canvas droplet refraction capture, so the tile must be real DOM. */
export function generatePinstripeTexture(direction, color) {
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

/** Relative luminance from an rgb()/rgba() string — WCAG formula. */
export function luminance(cssColor) {
  const match = cssColor.match(/(\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return 0;
  const [r, g, b] = [match[1], match[2], match[3]].map(c => {
    const s = Number(c) / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Set adaptive text colour on stat blocks and add a faint border when the
 *  block would otherwise disappear into the slide background. Scope to root
 *  so the viewer can pass a single .slide element instead of document. */
export function fixStatBlockContrast(root = document) {
  root.querySelectorAll('.stat-block').forEach(block => {
    const blockL = luminance(getComputedStyle(block).backgroundColor);
    block.style.color = blockL > 0.18 ? '#1B2A3D' : '#FFFFFF';

    const slide = block.closest('.slide-inner');
    if (slide) {
      const slideL = luminance(getComputedStyle(slide).backgroundColor);
      const contrast = Math.abs(blockL - slideL);
      block.style.outline = contrast < 0.1 ? '1px solid rgba(255,255,255,0.15)' : '';
      block.style.outlineOffset = contrast < 0.1 ? '-1px' : '';
    }
  });
}

/** Scale stat values so the longest text fills its block width, and all
 *  others match that size. Scope to root for per-slide use. */
export function fitStatSizes(root = document) {
  root.querySelectorAll('.data-big-numbers').forEach(slide => {
    const values = slide.querySelectorAll('.stat-value');
    if (values.length === 0) return;

    values.forEach(v => { v.style.fontSize = ''; v.style.whiteSpace = 'nowrap'; });

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
      const firstBlock = values[0].closest('.stat-block');
      const blockH = firstBlock.clientHeight
        - parseFloat(getComputedStyle(firstBlock).paddingTop)
        - parseFloat(getComputedStyle(firstBlock).paddingBottom);
      const finalSize = Math.min(minFitted, blockH * 0.55);
      values.forEach(v => v.style.fontSize = `${finalSize}px`);
    }
  });
}

/** Resolve CSS-gradient pinstripes into real tiled images so html2canvas can
 *  capture them for droplet refraction. Scoped to a root. */
export function resolvePinstripes(root = document) {
  root.querySelectorAll('.texture-pinstripes').forEach(el => {
    const slide = el.closest('.slide');
    if (!slide) return;
    const dir = slide.dataset.pinstripes;
    if (!dir || dir === 'none') return;
    const color = getComputedStyle(el).color;
    const url = generatePinstripeTexture(dir, color);
    el.style.background = `url(${url}) repeat`;
  });
}

/** Build one `.slide` element for the given slide data. Returns the element
 *  (detached — caller mounts it). Pushes any droplet `.init(slideEl)` callback
 *  onto `postInits` so the caller can run them in a single rAF after mount. */
export function renderSlide(slide, page, { config, noiseDataURL, postInits, slideIndex }) {
  const idx = typeof slideIndex === 'number' ? slideIndex : page - 1;
  const layoutName = config.layouts[slide.type] || Object.values(config.layouts)[0];
  const layoutFn = layoutRegistry[layoutName];

  const slideEl = document.createElement('div');
  slideEl.className = 'slide';
  slideEl.id = `slide-${page}`;
  slideEl.dataset.palette = config.palette;
  slideEl.dataset.typography = config.typography;
  slideEl.dataset.pinstripes = config.pinstripes;
  slideEl.dataset.shape = (config.slideShapes && config.slideShapes[idx]) ?? config.shapes ?? 'none';

  if (!layoutFn) {
    console.warn(`Layout "${layoutName}" not found for slide type "${slide.type}"`);
    return slideEl;
  }

  slideEl.innerHTML = layoutFn(slide, page);

  const inner = slideEl.querySelector('.slide-inner');
  const shapeKey = slideEl.dataset.shape;
  const shapeFn = shapeRegistry[shapeKey] || shapeRegistry.none;
  const shapeResult = shapeFn(idx);

  if (shapeResult && inner) {
    const html = typeof shapeResult === 'string' ? shapeResult : shapeResult.html;
    if (html) inner.insertAdjacentHTML('afterbegin', html);
    if (typeof shapeResult === 'object' && shapeResult.init && Array.isArray(postInits)) {
      postInits.push(() => shapeResult.init(slideEl, idx));
    }
  }

  if (inner) {
    if (config.pinstripes && config.pinstripes !== 'none') {
      inner.insertAdjacentHTML('afterbegin', '<div class="shape-overlay texture-pinstripes"></div>');
    }
    inner.insertAdjacentHTML(
      'afterbegin',
      `<div class="shape-overlay texture-noise" style="background-image:url(${noiseDataURL});opacity:${(config.noise || 0) / 100}"></div>`,
    );
  }

  return slideEl;
}

/** Run shape + lens-badge post-init callbacks serially inside a single rAF.
 *  Resolves when all WebGL work has been queued to the GPU. */
export function runPostInits(postInits) {
  return new Promise(resolve => {
    requestAnimationFrame(async () => {
      for (const fn of postInits) {
        try { await fn(); }
        catch (e) { console.warn('postInit failed:', e); }
      }
      try { await initLensBadgeDroplets(); }
      catch (e) { console.warn('initLensBadgeDroplets failed:', e); }
      resolve();
    });
  });
}

/** Release all active WebGL contexts before replacing a slide. Critical for
 *  the viewer: mobile Safari caps WebGL contexts at ~16, so every navigation
 *  must dispose the outgoing slide's droplets. `cleanupShapes()` disposes all
 *  active droplets globally, which is what we want when only one slide is
 *  mounted at a time. */
export function cleanupSlide(_slideEl) {
  cleanupShapes();
}
