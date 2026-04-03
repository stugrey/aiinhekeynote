/**
 * Layout template functions.
 * Each returns an HTML string for the slide's inner content.
 * Layouts reference CSS custom properties — never hard-coded colours/fonts.
 */

const LENS_META = {
  transparency: { short: 'T', label: 'Transparency' },
  distortion: { short: 'D', label: 'Distortion' },
  extraction: { short: 'E', label: 'Extraction' },
};

function renderLensMarkers(slide) {
  const hasLenses = Array.isArray(slide.lenses) && slide.lenses.length > 0;

  const markers = hasLenses
    ? slide.lenses
        .filter(lens => LENS_META[lens])
        .map((lens) => {
          const meta = LENS_META[lens];
          return `<span class="lens-marker lens-marker--${lens} lens-marker--droplet" title="${meta.label}"><canvas class="lens-droplet-canvas" data-lens="${lens}"></canvas><span class="lens-droplet-letter">${meta.short}</span></span>`;
        })
        .join('')
    : '';

  return `<div class="lens-marker-group" aria-label="Applied lenses">${markers}</div>`;
}

// ─── COVER LAYOUTS ──────────────────────────────

export function coverBoldFull(slide) {
  return `
    <div class="slide-inner cover-bold-full">
      <div class="cover-title">${slide.title}</div>
      ${slide.subtitle ? `<div class="cover-subtitle">${slide.subtitle}</div>` : ''}
      <div class="cover-bottom">
        <div class="cover-author">${slide.author || ''}</div>
        <div class="cover-date-pill">${slide.date || ''}</div>
      </div>
      ${renderLensMarkers(slide)}
    </div>
  `;
}

export function coverDarkMinimal(slide) {
  return `
    <div class="slide-inner cover-dark-minimal">
      <div class="cover-top">
        <div class="cover-badge">${slide.badge || ''}</div>
        <div class="cover-date-pill">${slide.date || ''}</div>
      </div>
      <div class="cover-title">${slide.title}</div>
      <div class="cover-subtitle">${slide.subtitle || ''}</div>
      ${renderLensMarkers(slide)}
    </div>
  `;
}

// ─── SECTION DIVIDER LAYOUTS ────────────────────

export function dividerColorBurst(slide, page) {
  return `
    <div class="slide-inner divider-color-burst">
      <div class="divider-center">
        ${slide.section_number != null
          ? `<div class="divider-badge">Section ${slide.section_number}</div>`
          : ''}
        <div class="divider-title">${slide.title}</div>
      </div>
      <div class="divider-footer">
        <span class="divider-page">${String(page).padStart(2, '0')}</span>
        ${renderLensMarkers(slide)}
      </div>
    </div>
  `;
}

export function dividerDarkCinematic(slide, page) {
  return `
    <div class="slide-inner divider-dark-cinematic">
      <div class="divider-top">
        ${slide.section_number != null
          ? `<div class="divider-badge">Section ${slide.section_number}</div>`
          : '<span></span>'}
        <div class="divider-page">${String(page).padStart(2, '0')}</div>
      </div>
      <div class="divider-title">${slide.title}</div>
      ${slide.subtitle ? `<div class="divider-subtitle">${slide.subtitle}</div>` : ''}
      ${renderLensMarkers(slide)}
    </div>
  `;
}

// ─── CONTENT LAYOUTS ────────────────────────────

export function contentSplitCards(slide, page) {
  const colors = [
    'var(--color-accent-1)',
    'var(--color-accent-2)',
    'var(--color-accent-3)',
    'var(--color-accent-4)',
  ];

  const cards = (slide.points || []).map((point, i) => `
    <div class="evidence-card">
      <div class="card-icon" style="background: ${colors[i % colors.length]}"></div>
      <div class="card-text">
        <h3>${point.title}</h3>
      </div>
    </div>
  `).join('');

  return `
    <div class="slide-inner content-split-cards">
      <div class="content-nav">${slide.section || ''}</div>
      <div class="content-body-area">
        <div class="content-left">
          <h2>${slide.heading}</h2>
          ${slide.body ? `<p>${slide.body}</p>` : ''}
        </div>
        <div class="content-right">
          ${cards}
        </div>
      </div>
      <div class="content-footer">
        <span class="page-number">${String(page).padStart(2, '0')}</span>
        ${renderLensMarkers(slide)}
      </div>
    </div>
  `;
}

export function contentWideVisual(slide, page) {
  const colors = [
    'var(--color-accent-1)',
    'var(--color-accent-2)',
    'var(--color-accent-3)',
    'var(--color-accent-4)',
  ];

  const cards = (slide.points || []).map((point, i) => `
    <div class="visual-card">
      <div class="card-accent" style="background: ${colors[i % colors.length]}"></div>
      <h3>${point.title}</h3>
      <p>${point.description}</p>
    </div>
  `).join('');

  return `
    <div class="slide-inner content-wide-visual">
      <div class="content-nav">${slide.section || ''}</div>
      <div class="content-body-area">
        <div class="content-left">
          <h2>${slide.heading}</h2>
          ${slide.body ? `<p>${slide.body}</p>` : ''}
        </div>
        <div class="content-right">
          ${cards}
        </div>
      </div>
      ${renderLensMarkers(slide)}
    </div>
  `;
}

// ─── DATA LAYOUTS ───────────────────────────────

export function dataBigNumbers(slide, page) {
  const bgColors = [
    'var(--color-accent-1)',
    'var(--color-accent-2)',
    'var(--color-accent-3)',
    'var(--color-accent-4)',
  ];

  const blocks = (slide.stats || []).map((stat, i) => `
    <div class="stat-block" data-accent="${i % bgColors.length}" style="background: ${bgColors[i % bgColors.length]}">
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  return `
    <div class="slide-inner data-big-numbers">
      <div class="data-nav">${slide.section || ''}</div>
      <div class="data-body">
        <div class="data-left">
          <h2>${slide.heading}</h2>
          ${slide.body ? `<p>${slide.body}</p>` : ''}
        </div>
        <div class="data-right">
          ${blocks}
        </div>
      </div>
      <div class="data-footer">
        <span class="data-page">${String(page).padStart(2, '0')}</span>
        ${renderLensMarkers(slide)}
      </div>
    </div>
  `;
}

export function dataFullBleed(slide, page) {
  const bgColors = [
    'var(--color-shape-1)',
    'var(--color-shape-2)',
    'var(--color-shape-3)',
    'var(--color-accent-4)',
  ];

  const blocks = (slide.stats || []).map((stat, i) => `
    <div class="stat-block" style="background: ${bgColors[i % bgColors.length]}; color: var(--color-text-on-dark);">
      <div class="stat-year">${stat.year || ''}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `).join('');

  return `
    <div class="slide-inner data-full-bleed">
      ${blocks}
      ${renderLensMarkers(slide)}
    </div>
  `;
}

// ─── STATEMENT LAYOUTS ──────────────────────────

export function statementCentered(slide) {
  const text = slide.text.replace(
    new RegExp(`(${escapeRegex(slide.highlight)})`, 'gi'),
    '<span class="highlight">$1</span>'
  );

  return `
    <div class="slide-inner statement-centered">
      <div class="statement-label">${slide.section || ''}</div>
      <div class="statement-text">${text}</div>
      ${slide.attribution ? `<div class="statement-attribution">${slide.attribution}</div>` : ''}
      ${renderLensMarkers(slide)}
    </div>
  `;
}

export function statementEditorial(slide) {
  const text = slide.text.replace(
    new RegExp(`(${escapeRegex(slide.highlight)})`, 'gi'),
    '<span class="highlight">$1</span>'
  );

  return `
    <div class="slide-inner statement-editorial">
      <div class="statement-label">${slide.section || ''}</div>
      <div class="statement-text">${text}</div>
      ${slide.attribution ? `<div class="statement-attribution">${slide.attribution}</div>` : ''}
      ${renderLensMarkers(slide)}
    </div>
  `;
}

// ─── HELPERS ────────────────────────────────────

function escapeRegex(str) {
  if (!str) return '';
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── LAYOUT REGISTRY ────────────────────────────

export const layoutRegistry = {
  // Covers
  'cover-bold-full':      coverBoldFull,
  'cover-dark-minimal':   coverDarkMinimal,

  // Dividers
  'divider-color-burst':     dividerColorBurst,
  'divider-dark-cinematic':  dividerDarkCinematic,

  // Content
  'content-split-cards':  contentSplitCards,
  'content-wide-visual':  contentWideVisual,

  // Data
  'data-big-numbers':     dataBigNumbers,
  'data-full-bleed':      dataFullBleed,

  // Statement
  'statement-centered':   statementCentered,
  'statement-editorial':  statementEditorial,
};
