/**
 * WebGL water droplets — metaballs with real content refraction.
 *
 * Captures the slide's rendered HTML as a texture via html2canvas,
 * then refracts it through a metaball field with chromatic aberration,
 * Fresnel rim, and dual specular highlights.
 *
 * The canvas sits ON TOP of all content (z-index: 10) so the droplets
 * visually distort the text and cards beneath them.
 */
import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import html2canvas from 'html2canvas';

const MAX_DROPLETS = 96;
const ENV_HDR_PATH = '/env-theater.hdr';

// Shared env texture — loaded once, reused across all slides
let envTexturePromise = null;

function loadEnvTexture() {
  if (!envTexturePromise) {
    envTexturePromise = new Promise((resolve, reject) => {
      new RGBELoader().load(
        ENV_HDR_PATH,
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          resolve(texture);
        },
        undefined,
        reject,
      );
    });
  }
  return envTexturePromise;
}

// ─── SHADERS ────────────────────────────────────

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;              // captured slide content
  uniform sampler2D uEnvMap;                  // equirectangular environment map
  uniform vec3 uDroplets[${MAX_DROPLETS}];    // .xy = centre (UV), .z = radius
  uniform vec2 uLightPos;                     // light position (UV space)

  const float THRESHOLD = 0.45;
  const float R0 = 0.02;   // Schlick's R₀ for water: ((1.33-1)/(1.33+1))²

  // ── Metaball field (Gaussian kernel) ──
  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${MAX_DROPLETS}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  // ── Surface normal ──
  // Real meniscus: exponential decay from the contact line inward,
  // matching h(x) = h₀(1 - e^(-x/λ_c)). The interior is dead flat;
  // curvature lives only in a narrow rim at the edge.
  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);

    // Exponential meniscus profile: steep at contact line, rapid decay inward
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  // ── Equirectangular environment map lookup ──
  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    // Reinhard tonemap with slight exposure boost to keep bright sources visible
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // ── Outside: caustic light band ──
    // The meniscus focuses transmitted light just outside the contact line,
    // creating a thin bright caustic on the surface.
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      gl_FragColor = vec4(vec3(1.0), caustic * 0.07);
      return;
    }

    // ── Inside the water ──
    vec3 N = getNormal(uv, f, aspect);

    // Meniscus factor: 1 at contact line, 0 in flat interior
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // ── Refraction ──
    // Flat interior: water is ~5mm thick, negligible offset at normal incidence.
    // Meniscus: curved surface bends light — refraction concentrates here.
    float refractionStrength = 0.012 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // ── Chromatic dispersion ──
    // Δn ≈ 0.006 between red and blue in water.
    // Only visible where there's curvature (the meniscus).
    float chromatic = 0.015 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // ── Caustic brightening inside the meniscus ──
    // The curved meniscus acts as a lens, focusing light into a bright
    // band just inward of the contact line.
    float causticInner = meniscus * (1.0 - meniscus) * 4.0;
    contentColor *= 1.0 + causticInner * 0.15;

    // ── Fresnel (Schlick's approximation for water n=1.33) ──
    float NdV = max(dot(N, vec3(0.0, 0.0, 1.0)), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // ── Environment reflection ──
    vec3 R = reflect(vec3(0.0, 0.0, -1.0), N);
    vec3 envColor = envMap(R);

    // ── Specular ──
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float NdH = max(dot(N, H), 0.0);
    // Flat interior: mirror-tight specular (very high power)
    float specMirror = pow(NdH, 512.0);
    // Meniscus: broader spread from curved surface
    float specBroad = pow(NdH, 40.0) * meniscus;

    // ── Composite ──
    vec3 color = contentColor;

    // Fresnel reflection — physically: 2% on flat interior, up to 100% at rim
    color = mix(color, envColor, fresnel);

    // Specular highlights — subdued point light
    color += specMirror * 0.25;
    color += specBroad * 0.03;

    // ── Alpha: water film tapers to zero thickness at the contact line ──
    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.025, f);

    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── SEEDED PRNG (Mulberry32) ───────────────────

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ─── GENERATE DROPLET POSITIONS ─────────────────

function generateDroplets(seed) {
  const rng = mulberry32(seed * 13397 + 7);
  const drops = [];

  const clamp01 = (v) => Math.max(0.03, Math.min(0.97, v));

  // 3–5 puddle groups
  const puddleCount = 3 + Math.floor(rng() * 3);

  for (let p = 0; p < puddleCount; p++) {
    if (drops.length >= MAX_DROPLETS) break;

    // Core: 3–4 larger blobs forming a chunky central body
    const cx = 0.15 + rng() * 0.7;
    const cy = 0.15 + rng() * 0.7;
    const coreCount = 3 + Math.floor(rng() * 2);
    for (let c = 0; c < coreCount; c++) {
      if (drops.length >= MAX_DROPLETS) break;
      const a = rng() * Math.PI * 2;
      const d = rng() * 0.045;
      drops.push(new THREE.Vector3(
        clamp01(cx + Math.cos(a) * d),
        clamp01(cy + Math.sin(a) * d),
        0.04 + rng() * 0.03,
      ));
    }

    // Arms / peninsulas: 3–5 short chains radiating outward
    const armCount = 3 + Math.floor(rng() * 3);
    for (let arm = 0; arm < armCount; arm++) {
      if (drops.length >= MAX_DROPLETS) break;
      const armAngle = rng() * Math.PI * 2;
      const armLen = 2 + Math.floor(rng() * 2); // 2–3 drops per arm
      let ax = cx, ay = cy;
      let armR = 0.03 + rng() * 0.02;

      for (let j = 0; j < armLen; j++) {
        if (drops.length >= MAX_DROPLETS) break;
        const stepDist = armR * (1.0 + rng() * 0.6);
        const wander = (rng() - 0.5) * 0.5;
        ax += Math.cos(armAngle + wander) * stepDist;
        ay += Math.sin(armAngle + wander) * stepDist;
        armR *= 0.75 + rng() * 0.15;
        drops.push(new THREE.Vector3(
          clamp01(ax),
          clamp01(ay),
          Math.max(0.012, armR),
        ));
      }
    }

    // Scattered satellites: a couple of small drops nearby
    const satCount = 1 + Math.floor(rng() * 2);
    for (let s = 0; s < satCount; s++) {
      if (drops.length >= MAX_DROPLETS) break;
      const a = rng() * Math.PI * 2;
      const d = 0.06 + rng() * 0.06;
      drops.push(new THREE.Vector3(
        clamp01(cx + Math.cos(a) * d),
        clamp01(cy + Math.sin(a) * d),
        0.008 + rng() * 0.012,
      ));
    }
  }

  // Lone scattered drops across the whole slide
  const scatterCount = 15 + Math.floor(rng() * 10); // 15–24
  for (let s = 0; s < scatterCount; s++) {
    if (drops.length >= MAX_DROPLETS) break;
    drops.push(new THREE.Vector3(
      0.04 + rng() * 0.92,
      0.04 + rng() * 0.92,
      0.004 + rng() * 0.01,
    ));
  }

  // Pad with zero-radius (invisible)
  while (drops.length < MAX_DROPLETS) {
    drops.push(new THREE.Vector3(0, 0, 0));
  }
  return drops;
}

// ─── TINTED FRAGMENT SHADER ─────────────────────
// Same optics but with Beer-Lambert absorption through coloured water.
// uWaterColor controls which wavelengths pass through; depth is derived
// from the metaball field so the tint is strongest at puddle centres.

const fragmentShaderTinted = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${MAX_DROPLETS}];
  uniform vec2 uLightPos;
  uniform vec3 uWaterColor;

  const float THRESHOLD = 0.45;
  const float R0 = 0.02;

  float field(vec2 p, float aspect) {
    float sum = 0.0;
    for (int i = 0; i < ${MAX_DROPLETS}; i++) {
      vec2 centre = uDroplets[i].xy;
      float radius = uDroplets[i].z;
      if (radius < 0.001) continue;
      vec2 diff = p - centre;
      diff.x *= aspect;
      sum += exp(-dot(diff, diff) / (2.0 * radius * radius));
    }
    return sum;
  }

  vec3 getNormal(vec2 p, float f, float aspect) {
    float e = 0.004;
    float l = field(p - vec2(e, 0.0), aspect);
    float r = field(p + vec2(e, 0.0), aspect);
    float d = field(p - vec2(0.0, e), aspect);
    float u = field(p + vec2(0.0, e), aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    return normalize(vec3((l - r) * meniscus, (d - u) * meniscus, e * 55.0));
  }

  vec3 envMap(vec3 dir) {
    float phi   = atan(dir.z, dir.x);
    float theta = asin(clamp(dir.y, -1.0, 1.0));
    vec2 envUV  = vec2(phi / 6.28318 + 0.5, theta / 3.14159 + 0.5);
    vec3 hdr    = texture2D(uEnvMap, envUV).rgb;
    hdr *= 1.5;
    return hdr / (hdr + 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: caustic band picks up a faint water colour
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      vec3 causticColor = mix(vec3(1.0), uWaterColor, 0.3);
      gl_FragColor = vec4(causticColor, caustic * 0.09);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Refraction
    float refractionStrength = 0.012 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Chromatic dispersion
    float chromatic = 0.015 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // Caustic brightening
    float causticInner = meniscus * (1.0 - meniscus) * 4.0;
    contentColor *= 1.0 + causticInner * 0.15;

    // Beer-Lambert absorption through tinted water
    // Depth increases toward the centre of each puddle
    float waterDepth = smoothstep(THRESHOLD, THRESHOLD + 0.2, f);
    // Wavelengths complementary to uWaterColor are absorbed exponentially
    vec3 absorption = exp(-((1.0 - uWaterColor) * waterDepth * 2.5));
    contentColor *= absorption;
    // Subtle forward-scattering adds the water's own hue
    contentColor += uWaterColor * waterDepth * 0.06;

    // Fresnel
    float NdV = max(dot(N, vec3(0.0, 0.0, 1.0)), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — lightly tinted by the water
    vec3 R = reflect(vec3(0.0, 0.0, -1.0), N);
    vec3 envColor = envMap(R);
    envColor = mix(envColor, envColor * uWaterColor, 0.2);

    // Specular
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float NdH = max(dot(N, H), 0.0);
    float specMirror = pow(NdH, 512.0);
    float specBroad = pow(NdH, 40.0) * meniscus;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.25;
    color += specBroad * 0.03;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.025, f);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── LIFECYCLE ──────────────────────────────────

const active = [];

/** Dispose all active WebGL renderers — call before re-render */
export function disposeDroplets() {
  for (const a of active) {
    a.renderer.dispose();
    a.material.dispose();
    a.geometry.dispose();
    if (a.contentTex) a.contentTex.dispose();
  }
  active.length = 0;
}

/**
 * Capture the slide content and set up the Three.js refraction scene.
 * Async because html2canvas capture is asynchronous.
 */
export async function initDropletCanvas(slideEl, slideIndex) {
  const inner = slideEl.querySelector('.slide-inner');
  const canvas = inner?.querySelector('.droplet-canvas');
  if (!canvas) return;

  // Hide canvas so html2canvas doesn't capture it
  canvas.style.visibility = 'hidden';

  try {
    await document.fonts.ready;

    // Bail if slide was removed from the DOM (e.g. HMR reload, re-render)
    if (!document.contains(canvas)) return;

    const rect = inner.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Capture the slide content (excluding the droplet canvas)
    const capturedCanvas = await html2canvas(inner, {
      backgroundColor: null,
      scale: dpr,
      logging: false,
      useCORS: true,
      ignoreElements: (el) => el.classList.contains('droplet-canvas'),
    });

    // Bail if DOM was torn down during async capture
    if (!document.contains(canvas)) return;

    // Content texture
    const contentTexture = new THREE.CanvasTexture(capturedCanvas);
    contentTexture.minFilter = THREE.LinearFilter;
    contentTexture.magFilter = THREE.LinearFilter;

    // Load shared HDR environment map (theatre interior, CC0 Poly Haven)
    const envTexture = await loadEnvTexture();

    if (!document.contains(canvas)) return;

    // Show canvas (now on top of everything)
    canvas.style.visibility = 'visible';

    // Three.js setup
    const droplets = generateDroplets(slideIndex);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(rect.width, rect.height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthTest: false,
      uniforms: {
        uResolution: { value: new THREE.Vector2(rect.width * dpr, rect.height * dpr) },
        uContentTex: { value: contentTexture },
        uEnvMap:     { value: envTexture },
        uDroplets:   { value: droplets },
        uLightPos:   { value: new THREE.Vector2(0.72, 0.78) },
      },
    });

    scene.add(new THREE.Mesh(geometry, material));
    renderer.render(scene, camera);

    active.push({ renderer, material, geometry, contentTex: contentTexture });
  } catch (e) {
    console.warn('Droplet init failed:', e);
    canvas.style.visibility = 'visible';
  }
}

/**
 * Tinted variant — same metaball refraction but with coloured water.
 * @param {HTMLElement} slideEl
 * @param {number} slideIndex
 * @param {number[]} rgb  Linear RGB tint, e.g. [0.784, 0.941, 0.847] for Monzo mint
 */
export async function initDropletCanvasTinted(slideEl, slideIndex, rgb) {
  const inner = slideEl.querySelector('.slide-inner');
  const canvas = inner?.querySelector('.droplet-canvas');
  if (!canvas) return;

  canvas.style.visibility = 'hidden';

  try {
    await document.fonts.ready;

    if (!document.contains(canvas)) return;

    const rect = inner.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const capturedCanvas = await html2canvas(inner, {
      backgroundColor: null,
      scale: dpr,
      logging: false,
      useCORS: true,
      ignoreElements: (el) => el.classList.contains('droplet-canvas'),
    });

    if (!document.contains(canvas)) return;

    const contentTexture = new THREE.CanvasTexture(capturedCanvas);
    contentTexture.minFilter = THREE.LinearFilter;
    contentTexture.magFilter = THREE.LinearFilter;

    const envTexture = await loadEnvTexture();

    if (!document.contains(canvas)) return;

    canvas.style.visibility = 'visible';

    const droplets = generateDroplets(slideIndex);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(dpr);
    renderer.setSize(rect.width, rect.height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: fragmentShaderTinted,
      transparent: true,
      depthTest: false,
      uniforms: {
        uResolution: { value: new THREE.Vector2(rect.width * dpr, rect.height * dpr) },
        uContentTex: { value: contentTexture },
        uEnvMap:     { value: envTexture },
        uDroplets:   { value: droplets },
        uLightPos:   { value: new THREE.Vector2(0.72, 0.78) },
        uWaterColor: { value: new THREE.Vector3(rgb[0], rgb[1], rgb[2]) },
      },
    });

    scene.add(new THREE.Mesh(geometry, material));
    renderer.render(scene, camera);

    active.push({ renderer, material, geometry, contentTex: contentTexture });
  } catch (e) {
    console.warn('Tinted droplet init failed:', e);
    canvas.style.visibility = 'visible';
  }
}
