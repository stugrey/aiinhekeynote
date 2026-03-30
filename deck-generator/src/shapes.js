/**
 * Shape generators — return HTML strings or { html, init } objects for overlays.
 *
 * Simple shapes return an HTML string.
 * WebGL shapes (droplets) return { html, init } where init(slideEl) sets up the
 * Three.js scene after the element is in the DOM.
 */
import { initDropletCanvas, initDropletCanvasTinted, initDropletCanvasOil, disposeDroplets } from './shapes-droplets.js';

/** Call before re-rendering the deck to clean up WebGL contexts */
export function cleanupShapes() {
  disposeDroplets();
}

/** No shapes */
export function shapesNone() {
  return '';
}

/**
 * Pills / capsules — inspired by WeTransfer
 * Scattered rounded rectangles at various angles and sizes
 */
export function shapesPills(colors) {
  const c = colors || ['var(--color-shape-1)', 'var(--color-shape-2)', 'var(--color-shape-3)'];
  return `
    <div class="shape-overlay" style="
      top: -4%; right: 8%;
      width: 9rem; height: 3.2rem;
      background: ${c[0]};
      border-radius: 100px;
      transform: rotate(-15deg);
      opacity: 0.7;
    "></div>
    <div class="shape-overlay" style="
      bottom: 12%; right: -2%;
      width: 7rem; height: 2.6rem;
      background: ${c[1]};
      border-radius: 100px;
      transform: rotate(25deg);
      opacity: 0.6;
    "></div>
    <div class="shape-overlay" style="
      top: 30%; right: 3%;
      width: 2.2rem; height: 2.2rem;
      background: ${c[2]};
      border-radius: 50%;
      opacity: 0.5;
    "></div>
    <div class="shape-overlay" style="
      bottom: 5%; left: 15%;
      width: 6rem; height: 2.2rem;
      background: ${c[0]};
      border-radius: 100px;
      transform: rotate(40deg);
      opacity: 0.35;
    "></div>
  `;
}

/**
 * Organic blobs — inspired by Ace & Tate
 * Amorphous, soft-edged shapes bleeding off edges
 */
export function shapesBlobs(colors) {
  const c = colors || ['var(--color-shape-1)', 'var(--color-shape-2)', 'var(--color-shape-3)'];
  return `
    <svg class="shape-overlay" style="top: -15%; right: -10%; width: 45%; height: 60%; opacity: 0.25;"
         viewBox="0 0 200 200" preserveAspectRatio="none">
      <path d="M 45,-10 C 100,-20 170,30 180,90 C 190,150 140,200 80,190 C 20,180 -10,120 10,70 C 25,30 20,5 45,-10 Z"
            fill="${c[0]}" />
    </svg>
    <svg class="shape-overlay" style="bottom: -20%; left: -8%; width: 35%; height: 50%; opacity: 0.2;"
         viewBox="0 0 200 200" preserveAspectRatio="none">
      <path d="M 30,20 C 80,-10 160,20 170,80 C 180,140 130,190 70,180 C 10,170 -20,110 10,60 C 25,35 10,30 30,20 Z"
            fill="${c[1]}" />
    </svg>
  `;
}

/**
 * Colour blocks — inspired by Artsy
 * Rectangular blocks with white gaps
 */
export function shapesBlocks(colors) {
  const c = colors || ['var(--color-shape-1)', 'var(--color-shape-2)', 'var(--color-shape-3)'];
  return `
    <div class="shape-overlay" style="
      top: 0; right: 0;
      width: 18%; height: 35%;
      background: ${c[0]};
      opacity: 0.9;
    "></div>
    <div class="shape-overlay" style="
      top: 0; right: 19.5%;
      width: 12%; height: 20%;
      background: ${c[1]};
      opacity: 0.9;
    "></div>
    <div class="shape-overlay" style="
      bottom: 0; right: 0;
      width: 25%; height: 25%;
      background: ${c[2]};
      opacity: 0.9;
    "></div>
  `;
}

/**
 * Golden rectangle lines — inspired by DIA
 * Thin geometric curves and arcs as line drawings
 */
export function shapesGoldenRect(colors) {
  const c = colors || ['var(--color-shape-1)'];
  return `
    <svg class="shape-overlay" style="top: 5%; right: 5%; width: 40%; height: 80%; opacity: 0.12;"
         viewBox="0 0 200 320" fill="none" stroke="${c[0]}" stroke-width="1">
      <rect x="10" y="10" width="180" height="290" rx="0" />
      <rect x="10" y="10" width="180" height="180" rx="0" />
      <line x1="10" y1="190" x2="190" y2="190" />
      <path d="M 10,190 A 180,180 0 0,1 190,10" />
      <circle cx="100" cy="100" r="55" />
    </svg>
  `;
}

/**
 * Water droplets — WebGL metaballs with refraction + specular
 * Returns { html, init } — canvas is inserted as HTML, Three.js starts in init().
 */
export function shapesDroplets(slideIndex) {
  return {
    html: '<canvas class="droplet-canvas shape-overlay"></canvas>',
    init: (slideEl) => initDropletCanvas(slideEl, slideIndex),
  };
}

/**
 * Tinted water droplets — same optics with Beer-Lambert absorption.
 * Monzo mint #C8F0D8 as test colour.
 */
export function shapesDropletsTinted(slideIndex) {
  return {
    html: '<canvas class="droplet-canvas shape-overlay"></canvas>',
    init: (slideEl) => initDropletCanvasTinted(slideEl, slideIndex, [0.784, 0.941, 0.847]),
  };
}

/**
 * Coral water droplets — Beer-Lambert absorption with Monzo hot coral #FF5C57.
 */
export function shapesDropletsCoral(slideIndex) {
  return {
    html: '<canvas class="droplet-canvas shape-overlay"></canvas>',
    init: (slideEl) => initDropletCanvasTinted(slideEl, slideIndex, [1.0, 0.361, 0.341]),
  };
}

/**
 * Crude oil droplets — dark opaque fluid with thin-film iridescence.
 */
export function shapesDropletsOil(slideIndex) {
  return {
    html: '<canvas class="droplet-canvas shape-overlay"></canvas>',
    init: (slideEl) => initDropletCanvasOil(slideEl, slideIndex),
  };
}

/** Registry of all shape functions */
export const shapeRegistry = {
  none:        shapesNone,
  pills:       shapesPills,
  blobs:       shapesBlobs,
  blocks:      shapesBlocks,
  'golden-rect': shapesGoldenRect,
  droplets:    shapesDroplets,
  'droplets-tinted': shapesDropletsTinted,
  'droplets-coral':  shapesDropletsCoral,
  'droplets-oil':    shapesDropletsOil,
};
