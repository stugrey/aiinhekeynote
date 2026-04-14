// Standalone viewer entry. Shares the slide-render pipeline with the editor
// via src/render.js. Owns navigation, audio playback, captions, and
// accessibility wiring. Deployed as a static bundle to aiinhe.com.

import {
  renderSlide,
  runPostInits,
  generateNoiseTexture,
  resolvePinstripes,
  fitStatSizes,
  fixStatBlockContrast,
  cleanupSlide,
} from './render.js';

const CONFIG_URL = 'config.json';
const CONTENT_URL = 'content.json';

// Filenames for voiceover fallback. webm/opus first (modern, smaller),
// m4a/aac second (universal fallback for older Safari / iOS).
const AUDIO_SOURCES = [
  { suffix: '.webm', type: 'audio/webm; codecs=opus' },
  { suffix: '.m4a',  type: 'audio/mp4; codecs="mp4a.40.2"' },
];

// Auto-advance grace — lets the last word settle before moving on.
const AUTO_ADVANCE_GRACE_MS = 600;
const AUTO_ADVANCE_GRACE_REDUCED_MS = 100;

// ─── State ──────────────────────────────────────────────────────

const state = {
  slides: [],
  config: null,
  noiseDataURL: '',
  index: 0,
  gestured: false,
  captionsOn: true,
  autoAdvanceOn: true,
  muted: false,
  reducedMotion: false,
  lowPower: false,
  captionStarts: null,
  captionWordEls: null,
  captionActiveIdx: -1,
  preloadCache: new Map(),
  advanceTimer: null,
};

// DOM refs (populated on DOMContentLoaded)
const dom = {};

// ─── Init flow ──────────────────────────────────────────────────

async function main() {
  cacheDomRefs();

  state.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  state.lowPower = detectLowPower();
  state.noiseDataURL = generateNoiseTexture();

  // Hide the PDF download link(s) if the file isn't there — avoids broken
  // links when the editor's 4K PDF was too big to bundle.
  probePdfAvailability();

  let content, config;
  try {
    [content, config] = await Promise.all([
      fetch(CONTENT_URL, { cache: 'no-cache' }).then(checkOk).then(r => r.json()),
      fetch(CONFIG_URL,  { cache: 'no-cache' }).then(checkOk).then(r => r.json()),
    ]);
  } catch (e) {
    console.error('Failed to load presentation data:', e);
    dom.loadError.hidden = false;
    return;
  }

  // Force static shapes when a device is battery-constrained or the user
  // has asked for reduced motion. Saves WebGL contexts + CPU.
  if (state.lowPower || state.reducedMotion) {
    config.shapes = 'none';
    config.slideShapes = {};
  }

  state.slides = content.slides || [];
  state.config = config;

  // Respect deep-links: #slide=12
  const hashIdx = parseHashSlide();
  if (hashIdx != null) state.index = clampIndex(hashIdx);

  // Show the start overlay and wait for the user to click it.
  // Browsers block audio autoplay without a gesture, so this is mandatory.
  showStartOverlay();
  bindGlobalKeys();
}

function checkOk(res) {
  if (!res.ok) throw new Error(`${res.url} ${res.status}`);
  return res;
}

async function probePdfAvailability() {
  try {
    const res = await fetch('pdf/presentation.pdf', { method: 'HEAD' });
    if (!res.ok) hidePdfLinks();
  } catch {
    hidePdfLinks();
  }
}

function hidePdfLinks() {
  document.querySelectorAll('a[href$="presentation.pdf"], #btn-pdf').forEach(el => {
    el.hidden = true;
  });
}

function detectLowPower() {
  // Heuristics: mobile devices and low-core machines get static shapes.
  const coarse = matchMedia('(pointer: coarse)').matches;
  const lowCores = (navigator.hardwareConcurrency || 8) < 4;
  return coarse || lowCores;
}

function cacheDomRefs() {
  dom.stage = document.getElementById('slide-stage');
  dom.captions = document.getElementById('captions');
  dom.slideTranscript = document.getElementById('slide-transcript');
  dom.announcer = document.getElementById('slide-announcer');
  dom.controls = document.getElementById('controls-bar');
  dom.btnPrev = document.getElementById('btn-prev');
  dom.btnNext = document.getElementById('btn-next');
  dom.btnPlayPause = document.getElementById('btn-playpause');
  dom.btnCaptions = document.getElementById('btn-captions');
  dom.btnAutoadvance = document.getElementById('btn-autoadvance');
  dom.btnMute = document.getElementById('btn-mute');
  dom.btnFullscreen = document.getElementById('btn-fullscreen');
  dom.counter = document.getElementById('slide-counter');
  dom.progress = document.getElementById('audio-progress');
  dom.audio = document.getElementById('vo');
  dom.startOverlay = document.getElementById('start-overlay');
  dom.startBtn = document.getElementById('start-btn');
  dom.loadError = document.getElementById('load-error');
  dom.iconPlay = dom.btnPlayPause.querySelector('.icon-play');
  dom.iconPause = dom.btnPlayPause.querySelector('.icon-pause');
  dom.iconVol = dom.btnMute.querySelector('.icon-vol');
  dom.iconMuted = dom.btnMute.querySelector('.icon-mute');
}

// ─── Start overlay ──────────────────────────────────────────────

function showStartOverlay() {
  dom.startOverlay.hidden = false;
  dom.startBtn.focus();

  // Trap Tab within the start dialog so keyboard users don't escape it.
  const focusables = dom.startOverlay.querySelectorAll('button, [href]');
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  dom.startOverlay.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  dom.startBtn.addEventListener('click', startPresentation, { once: true });
}

async function startPresentation() {
  state.gestured = true;
  dom.startOverlay.hidden = true;
  dom.controls.hidden = false;
  bindControls();
  await mountSlide(state.index);
  // Kick audio now that we have a gesture.
  tryAutoplay();
}

// ─── Slide mounting ─────────────────────────────────────────────

async function mountSlide(index) {
  clearAdvanceTimer();

  const outgoing = dom.stage.firstElementChild;
  if (outgoing) {
    cleanupSlide(outgoing);
    outgoing.remove();
  }

  state.index = index;
  const slide = state.slides[index];
  const page = index + 1;

  const postInits = [];
  const slideEl = renderSlide(slide, page, {
    config: state.config,
    noiseDataURL: state.noiseDataURL,
    postInits,
    slideIndex: index,
  });
  dom.stage.appendChild(slideEl);

  // Matches the editor's post-mount pipeline: fit stats, fix contrast,
  // resolve pinstripe textures, then run WebGL shape inits.
  fixStatBlockContrast(slideEl);
  fitStatSizes(slideEl);
  resolvePinstripes(slideEl);
  await runPostInits(postInits);

  // Captions + flat transcript + SR slide-change announcement
  populateCaptions(slide);
  populateSlideTranscript(slide);
  announceSlideChange(slide, index);

  // Audio source swap + load
  loadAudioForSlide(slide);

  // Controls bar + URL hash
  updateCounter();
  updatePrevNextDisabled();
  history.replaceState(null, '', `#slide=${page}`);

  // Warm the next slide's audio in the background
  prefetchNextAudio(index + 1);
}

// ─── Captions ───────────────────────────────────────────────────

function populateCaptions(slide) {
  dom.captions.innerHTML = '';
  state.captionStarts = null;
  state.captionWordEls = null;
  state.captionActiveIdx = -1;

  const words = slide.voiceover?.words;
  if (Array.isArray(words) && words.length > 0) {
    const frag = document.createDocumentFragment();
    const starts = new Float32Array(words.length);
    const els = new Array(words.length);
    words.forEach((w, i) => {
      const span = document.createElement('span');
      span.className = 'caption-word';
      span.dataset.start = String(w.start);
      span.dataset.end = String(w.end);
      span.textContent = w.word;
      frag.appendChild(span);
      frag.appendChild(document.createTextNode(' '));
      starts[i] = w.start;
      els[i] = span;
    });
    dom.captions.appendChild(frag);
    state.captionStarts = starts;
    state.captionWordEls = els;
  } else if (slide.voiceover?.transcript) {
    const p = document.createElement('p');
    p.textContent = slide.voiceover.transcript;
    dom.captions.appendChild(p);
  }

  dom.captions.hidden = !state.captionsOn || dom.captions.childElementCount === 0;
}

function populateSlideTranscript(slide) {
  // Screen-reader transcript: full sentence up front so SRs don't drown in
  // word-level updates. Visual captions (above) are aria-hidden.
  dom.slideTranscript.textContent = slide.voiceover?.transcript || '';
}

function announceSlideChange(slide, index) {
  const total = state.slides.length;
  const label = slide.heading || slide.title || slide.text || slide.type;
  // Clear then set to force aria-live re-announce on rapid navigation
  dom.announcer.textContent = '';
  requestAnimationFrame(() => {
    dom.announcer.textContent = `Slide ${index + 1} of ${total}: ${label}`;
  });
}

function updateCaptionHighlight(currentTime) {
  if (!state.captionsOn || !state.captionStarts || !state.captionWordEls) return;

  // Binary search for the active word index
  const starts = state.captionStarts;
  let lo = 0, hi = starts.length - 1, active = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (starts[mid] <= currentTime) {
      active = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (active !== state.captionActiveIdx) {
    if (state.captionActiveIdx >= 0) {
      state.captionWordEls[state.captionActiveIdx]?.classList.remove('is-active');
    }
    if (active >= 0) {
      const el = state.captionWordEls[active];
      el?.classList.add('is-active');
      // Keep the active word visible when captions overflow
      el?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    state.captionActiveIdx = active;
  }
}

// ─── Audio ──────────────────────────────────────────────────────

function loadAudioForSlide(slide) {
  const audio = dom.audio;
  // Detach previous listeners implicitly — we reuse the same element.
  audio.pause();
  audio.removeAttribute('src');
  while (audio.firstChild) audio.removeChild(audio.firstChild);

  const file = slide.voiceover?.file;
  if (!file) {
    audio.load();
    dom.progress.value = 0;
    dom.btnPlayPause.disabled = true;
    setPlayPauseIcon(false);
    return;
  }

  dom.btnPlayPause.disabled = false;
  const base = file.replace(/\.[a-z0-9]+$/i, '');
  AUDIO_SOURCES.forEach(s => {
    const source = document.createElement('source');
    source.src = `${base}${s.suffix}`;
    source.type = s.type;
    audio.appendChild(source);
  });
  audio.load();
  audio.muted = state.muted;
}

function tryAutoplay() {
  if (!state.gestured) return;
  if (!dom.audio.querySelector('source')) return;
  dom.audio.play().catch(() => { /* autoplay rejected; user can press play */ });
}

function prefetchNextAudio(nextIndex) {
  if (nextIndex < 0 || nextIndex >= state.slides.length) return;
  const file = state.slides[nextIndex]?.voiceover?.file;
  if (!file) return;
  if (state.preloadCache.has(nextIndex)) return;

  const base = file.replace(/\.[a-z0-9]+$/i, '');
  const hidden = new Audio();
  hidden.preload = 'auto';
  // Use the webm source as the prefetch trigger — browsers that can't play
  // it silently fall back when the real slide mounts.
  hidden.src = `${base}${AUDIO_SOURCES[0].suffix}`;
  state.preloadCache.set(nextIndex, hidden);
  // Evict entries more than 2 positions away
  for (const key of state.preloadCache.keys()) {
    if (Math.abs(key - state.index) > 2) state.preloadCache.delete(key);
  }
}

// ─── Controls bar wiring ────────────────────────────────────────

function bindControls() {
  dom.btnPrev.addEventListener('click', goPrev);
  dom.btnNext.addEventListener('click', goNext);
  dom.btnPlayPause.addEventListener('click', togglePlayPause);
  dom.btnCaptions.addEventListener('click', toggleCaptions);
  dom.btnAutoadvance.addEventListener('click', toggleAutoAdvance);
  dom.btnMute.addEventListener('click', toggleMute);
  dom.btnFullscreen.addEventListener('click', toggleFullscreen);

  dom.progress.addEventListener('input', () => {
    const audio = dom.audio;
    if (!isFinite(audio.duration)) return;
    audio.currentTime = (Number(dom.progress.value) / 1000) * audio.duration;
  });

  dom.audio.addEventListener('play', () => { setPlayPauseIcon(true); });
  dom.audio.addEventListener('pause', () => { setPlayPauseIcon(false); });
  dom.audio.addEventListener('timeupdate', onTimeUpdate);
  dom.audio.addEventListener('ended', onAudioEnded);
  dom.audio.addEventListener('loadedmetadata', () => {
    dom.progress.value = 0;
  });

  document.addEventListener('fullscreenchange', () => {
    const fs = !!document.fullscreenElement;
    dom.btnFullscreen.setAttribute('aria-pressed', fs ? 'true' : 'false');
  });

  // Pointer navigation on the slide stage
  bindStagePointer();
  bindHashChange();
}

function onTimeUpdate() {
  const audio = dom.audio;
  if (isFinite(audio.duration) && audio.duration > 0) {
    dom.progress.value = String(Math.round((audio.currentTime / audio.duration) * 1000));
  }
  updateCaptionHighlight(audio.currentTime);
}

function onAudioEnded() {
  if (!state.autoAdvanceOn) return;
  if (state.index >= state.slides.length - 1) return;
  clearAdvanceTimer();
  const grace = state.reducedMotion ? AUTO_ADVANCE_GRACE_REDUCED_MS : AUTO_ADVANCE_GRACE_MS;
  state.advanceTimer = setTimeout(() => {
    state.advanceTimer = null;
    goNext();
  }, grace);
}

function clearAdvanceTimer() {
  if (state.advanceTimer != null) {
    clearTimeout(state.advanceTimer);
    state.advanceTimer = null;
  }
}

function goPrev() {
  if (state.index > 0) mountSlide(state.index - 1).then(tryAutoplay);
}

function goNext() {
  if (state.index < state.slides.length - 1) {
    mountSlide(state.index + 1).then(tryAutoplay);
  }
}

function togglePlayPause() {
  const audio = dom.audio;
  if (!audio.querySelector('source')) return;
  if (audio.paused) {
    audio.play().catch(e => console.warn('play failed:', e));
  } else {
    audio.pause();
  }
}

function toggleCaptions() {
  state.captionsOn = !state.captionsOn;
  dom.btnCaptions.setAttribute('aria-pressed', state.captionsOn ? 'true' : 'false');
  dom.captions.hidden = !state.captionsOn || dom.captions.childElementCount === 0;
}

function toggleAutoAdvance() {
  state.autoAdvanceOn = !state.autoAdvanceOn;
  dom.btnAutoadvance.setAttribute('aria-pressed', state.autoAdvanceOn ? 'true' : 'false');
  if (!state.autoAdvanceOn) clearAdvanceTimer();
}

function toggleMute() {
  state.muted = !state.muted;
  dom.audio.muted = state.muted;
  dom.btnMute.setAttribute('aria-pressed', state.muted ? 'true' : 'false');
  dom.iconVol.hidden = state.muted;
  dom.iconMuted.hidden = !state.muted;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
  } else {
    document.exitFullscreen?.();
  }
}

function setPlayPauseIcon(playing) {
  dom.iconPlay.hidden = playing;
  dom.iconPause.hidden = !playing;
  dom.btnPlayPause.setAttribute('aria-label',
    playing ? 'Pause narration' : 'Play narration');
}

function updateCounter() {
  dom.counter.value = `${state.index + 1} / ${state.slides.length}`;
}

function updatePrevNextDisabled() {
  dom.btnPrev.disabled = state.index === 0;
  dom.btnNext.disabled = state.index >= state.slides.length - 1;
}

// ─── Pointer nav on slide stage ─────────────────────────────────

function bindStagePointer() {
  let downX = 0, downY = 0, downT = 0;

  dom.stage.addEventListener('pointerdown', e => {
    downX = e.clientX;
    downY = e.clientY;
    downT = performance.now();
  });

  dom.stage.addEventListener('pointerup', e => {
    const dx = e.clientX - downX;
    const dy = e.clientY - downY;
    const dt = performance.now() - downT;

    // Swipe: fast horizontal motion, mostly horizontal
    if (dt < 400 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) goNext(); else goPrev();
      return;
    }

    // Tap: zones on the stage
    if (dt < 400 && Math.abs(dx) < 10 && Math.abs(dy) < 10) {
      const rect = dom.stage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const frac = x / rect.width;
      if (frac < 0.35) goPrev();
      else if (frac > 0.65) goNext();
      else togglePlayPause();
    }
  });
}

// ─── Keyboard ───────────────────────────────────────────────────

function bindGlobalKeys() {
  window.addEventListener('keydown', e => {
    // Let inputs own their own keys
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    // Don't steal keys while the start overlay is up (it has its own trap)
    if (!dom.startOverlay.hidden && e.key !== 'Enter') return;

    switch (e.key) {
      case 'ArrowRight':
      case 'PageDown':
        e.preventDefault(); goNext(); break;
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault(); goPrev(); break;
      case 'Home':
        e.preventDefault(); mountSlide(0).then(tryAutoplay); break;
      case 'End':
        e.preventDefault(); mountSlide(state.slides.length - 1).then(tryAutoplay); break;
      case ' ':
      case 'Spacebar':
      case 'k':
      case 'p':
        e.preventDefault(); togglePlayPause(); break;
      case 'c':
      case 'C':
        toggleCaptions(); break;
      case 'a':
      case 'A':
        toggleAutoAdvance(); break;
      case 'm':
      case 'M':
        toggleMute(); break;
      case 'f':
      case 'F':
        toggleFullscreen(); break;
      case 'Escape':
        if (document.fullscreenElement) document.exitFullscreen?.();
        break;
    }
  });
}

// ─── Hash-based deep linking ────────────────────────────────────

function parseHashSlide() {
  const m = location.hash.match(/#slide=(\d+)/);
  if (!m) return null;
  return Number(m[1]) - 1;
}

function clampIndex(i) {
  if (!Number.isFinite(i) || i < 0) return 0;
  if (i >= state.slides.length) return state.slides.length - 1;
  return i;
}

function bindHashChange() {
  window.addEventListener('hashchange', () => {
    const i = parseHashSlide();
    if (i == null) return;
    const clamped = clampIndex(i);
    if (clamped !== state.index) mountSlide(clamped).then(tryAutoplay);
  });
}

// ─── Go ─────────────────────────────────────────────────────────

main();
