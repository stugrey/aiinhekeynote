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

    // ── Perspective view direction ──
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // ── Fresnel (Schlick's approximation for water n=1.33) ──
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // ── Environment reflection ──
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // ── Specular ──
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
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
    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);

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

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — lightly tinted by the water
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);
    envColor = mix(envColor, envColor * uWaterColor, 0.2);

    // Specular
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specMirror = pow(NdH, 512.0);
    float specBroad = pow(NdH, 40.0) * meniscus;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.25;
    color += specBroad * 0.03;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── CRUDE OIL FRAGMENT SHADER ─────────────────
// Opaque dark fluid with thin-film iridescence at the meniscus,
// higher refractive index (n ≈ 1.5), and heavy Beer-Lambert absorption.

const fragmentShaderOil = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${MAX_DROPLETS}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  // Schlick R₀ for oil n ≈ 1.5: ((1.5-1)/(1.5+1))² ≈ 0.04
  const float R0 = 0.04;
  const vec3 OIL_COLOR = vec3(0.04, 0.03, 0.02); // near-black with warm undertone

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

  // Thin-film interference — oil slick rainbow at the meniscus
  // Film thickness varies with depth; visible colour cycles through
  // the spectrum as optical path difference changes.
  vec3 thinFilm(float thickness) {
    // Approximate spectral interference for a ~300-600nm oil film
    // by cycling RGB at different rates
    float d = thickness * 12.0; // scale to visible cycles
    return vec3(
      0.5 + 0.5 * cos(6.28318 * (d + 0.0)),
      0.5 + 0.5 * cos(6.28318 * (d + 0.33)),
      0.5 + 0.5 * cos(6.28318 * (d + 0.67))
    );
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: dark caustic shadow at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.7, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.0), caustic * 0.12);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Refraction — stronger than water (higher n)
    float refractionStrength = 0.018 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Content beneath the oil — chromatic dispersion is stronger in oil
    float chromatic = 0.022 * meniscus;
    vec3 contentColor;
    contentColor.r = texture2D(uContentTex, clamp(refractedUV + N.xy * chromatic, 0.0, 1.0)).r;
    contentColor.g = texture2D(uContentTex, refractedUV).g;
    contentColor.b = texture2D(uContentTex, clamp(refractedUV - N.xy * chromatic, 0.0, 1.0)).b;

    // Heavy Beer-Lambert absorption — oil is nearly opaque
    float oilDepth = smoothstep(THRESHOLD, THRESHOLD + 0.15, f);
    vec3 absorption = exp(-vec3(8.0, 9.0, 10.0) * oilDepth);
    contentColor *= absorption;
    // At depth, content fades entirely to the oil body colour
    contentColor = mix(contentColor, OIL_COLOR, oilDepth * 0.92);

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — oil is glossy
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Thin-film iridescence — strongest at meniscus where film is thinnest
    vec3 iridescence = thinFilm(meniscus * 0.8 + oilDepth * 0.2);
    // Iridescence modulates the reflection, visible mainly at glancing angles
    float iriStrength = meniscus * fresnel * 1.8;
    envColor = mix(envColor, envColor * iridescence, clamp(iriStrength, 0.0, 0.7));

    // Specular — oil has a tighter, brighter highlight
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specMirror = pow(NdH, 600.0);
    float specBroad = pow(NdH, 50.0) * meniscus;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.35;
    color += specBroad * 0.05;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── MERCURY FRAGMENT SHADER ───────────────────
// Liquid metal — physically based metallic reflection.
//
// Mercury complex refractive index at 589nm: n = 1.62, k = 5.76
// Normal incidence reflectance: R = ((n-1)² + k²) / ((n+1)² + k²) ≈ 0.84
//
// Spectral reflectance (measured):
//   400nm (blue):  R ≈ 0.85
//   550nm (green): R ≈ 0.82
//   700nm (red):   R ≈ 0.78
// This gives mercury its characteristic cool steel-silver appearance.
//
// Mercury is completely opaque — extinction depth is ~15nm.
// No light transmits through it at any thickness.
// Surface tension is extremely high (485 mN/m), giving mirror-smooth surfaces.

const fragmentShaderMercury = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${MAX_DROPLETS}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  // Per-channel R₀ from measured spectral reflectance of mercury
  const vec3 R0 = vec3(0.78, 0.82, 0.85);

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
    hdr *= 2.5;
    return hdr / (hdr + 1.0);
  }

  // Schlick Fresnel for metals — per-channel R₀, power ~3 for conductors
  vec3 fresnelMetal(float NdV) {
    return R0 + (1.0 - R0) * pow(1.0 - NdV, 3.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: bright silver caustic at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.75, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.92), caustic * 0.15);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    // Simulate perspective view — viewer at finite distance above the surface
    // so different points on the mercury reflect different parts of the environment
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));
    float NdV = max(dot(N, -V), 0.0);

    // Spectral Fresnel — mercury is 78-85% reflective even at normal incidence
    vec3 F = fresnelMetal(NdV);

    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Desaturate the environment to get neutral silver — mercury's flat spectral
    // reflectance (0.78-0.85) means it reflects all wavelengths nearly equally,
    // so coloured surroundings appear muted on its surface
    float envLuma = dot(envColor, vec3(0.2126, 0.7152, 0.0722));
    envColor = mix(vec3(envLuma), envColor, 0.25);

    // Mercury is completely opaque — colour comes entirely from reflection
    vec3 color = envColor * F;

    // Specular highlights — with perspective view direction
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    // GGX-like distribution: very tight core + broader meniscus lobe
    float specMirror = pow(NdH, 1024.0);
    float specBroad  = pow(NdH, 80.0) * meniscus;
    color += vec3(1.0) * specMirror * 0.7;
    color += vec3(1.0) * specBroad * 0.06;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── FROSTED GLASS FRAGMENT SHADER ─────────────
//
// Ground glass: surface roughened by sandblasting or acid etching.
// The micro-faceted surface acts as a random phase screen.
//
// Physics:
// - Each surface point has a random normal → transmitted light is scattered
// - The point-spread function is Gaussian (CLT over many micro-facets)
// - Angular spread σ ≈ RMS_slope × (n-1)/n for glass n ≈ 1.5
// - For a volume scatterer (thick frosted region), blur ∝ √(depth)
//   because angular deviation follows a random walk
// - Scattering is wavelength-independent (roughness ~1-100μm >> λ visible)
//   so there is NO chromatic aberration — pure luminance blur
// - Fresnel R₀ = ((1.5-1)/(1.5+1))² ≈ 0.04, but the rough surface
//   distributes both reflection and transmission into broad lobes
// - Forward scattering dominates: the glass is translucent, not opaque
// - Mie scattering from micro-features adds a slight white veil
//
// Sampling: 37-tap golden-angle spiral with Gaussian weighting for
// physically correct PSF approximation.

const fragmentShaderFrosted = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${MAX_DROPLETS}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  const float R0 = 0.04;  // glass n ≈ 1.5
  const float PI = 3.14159265;
  const float GOLDEN_ANGLE = 2.39996323;  // π(3 - √5)
  const int BLUR_SAMPLES = 37;

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

  // Gaussian-weighted golden-angle spiral blur
  // Physically models the PSF of a rough surface scatterer
  vec3 gaussianDiscBlur(vec2 centre, float sigma) {
    vec2 px = 1.0 / uResolution;
    vec3 totalColor = vec3(0.0);
    float totalWeight = 0.0;

    for (int i = 0; i < BLUR_SAMPLES; i++) {
      float fi = float(i);
      // Golden-angle spiral: r = √(i/N) gives uniform disc distribution
      float r = sqrt(fi / float(BLUR_SAMPLES));
      float theta = fi * GOLDEN_ANGLE;
      vec2 offset = vec2(cos(theta), sin(theta)) * r * sigma;

      // Gaussian weight: w = exp(-r² / 2) — heavier at centre
      float w = exp(-r * r * 0.5);

      vec2 sampleUV = clamp(centre + offset * px, 0.0, 1.0);
      totalColor += texture2D(uContentTex, sampleUV).rgb * w;
      totalWeight += w;
    }
    return totalColor / totalWeight;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // Outside: soft scattered light at contact line
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.7, THRESHOLD * 0.95, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.95, THRESHOLD, f));
      gl_FragColor = vec4(vec3(1.0), caustic * 0.05);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);

    // Depth into the frosted volume (for random-walk blur scaling)
    float depth = smoothstep(THRESHOLD, THRESHOLD + 0.25, f);

    // Blur sigma ∝ √(depth) — random walk in angle space
    // Plus a meniscus contribution (edge refraction still scatters)
    float sigma = sqrt(depth) * 40.0 + meniscus * 6.0;

    // Slight macroscopic refraction at the meniscus
    float refractionStrength = 0.008 * meniscus;
    vec2 refractedUV = clamp(uv + N.xy * refractionStrength, 0.0, 1.0);

    // Gaussian-blurred content — no chromatic split (roughness >> λ)
    vec3 contentColor = gaussianDiscBlur(refractedUV, sigma);

    // Mie scattering veil: micro-features scatter a fraction of light
    // isotropically, adding a white haze proportional to depth
    float veil = depth * 0.3 + meniscus * 0.08;
    contentColor = mix(contentColor, vec3(1.0), veil);

    // Perspective view direction
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // Fresnel reflection — also scattered by the rough surface
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection is diffused (rough surface scatters it)
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);

    // Specular: very broad lobe from the micro-facet distribution
    // No tight mirror peak — the surface is too rough
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    float specBroad = pow(NdH, 8.0) * 0.15;
    float specMid   = pow(NdH, 40.0) * meniscus * 0.08;

    // Composite
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specBroad + specMid;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── FROZEN ICE FRAGMENT SHADER ────────────────
//
// Ice Ih (hexagonal ice, the common form).
//
// Refractive index:
//   n_o = 1.309 (ordinary ray), n_e = 1.3104 (extraordinary ray)
//   Birefringence Δn ≈ 0.0014 — causes faint double images through thick ice
//   R₀ = ((1.309-1)/(1.309+1))² ≈ 0.018
//
// Chromatic dispersion (measured):
//   n(400nm) ≈ 1.317  →  stronger refraction for blue
//   n(550nm) ≈ 1.311
//   n(700nm) ≈ 1.306  →  weaker refraction for red
//   Δn across visible ≈ 0.011
//
// Beer-Lambert absorption (per metre, measured):
//   700nm (red):   α ≈ 0.6  m⁻¹  — absorbed most
//   550nm (green): α ≈ 0.1  m⁻¹
//   400nm (blue):  α ≈ 0.01 m⁻¹  — absorbed least
//   This gives ice its characteristic blue-cyan colour at depth.
//
// Internal structure:
//   - Polycrystalline: grain boundaries form a Voronoi tessellation
//     that scatters light (each grain has a different c-axis orientation)
//   - Air bubbles: trapped during freezing, scatter light via TIR at
//     the ice-air boundary, appearing as bright white points
//   - Henyey-Greenstein forward scattering: g ≈ 0.89 for ice grains,
//     meaning most scattered light continues roughly forward (translucent)
//
// Surface:
//   - Frost forms at the contact line where ice is thinnest —
//     dendritic microcrystals scatter light broadly (white appearance)
//   - Interior is smooth and glassy where thickness provides structure

const fragmentShaderIce = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform vec2 uResolution;
  uniform sampler2D uContentTex;
  uniform sampler2D uEnvMap;
  uniform vec3 uDroplets[${MAX_DROPLETS}];
  uniform vec2 uLightPos;

  const float THRESHOLD = 0.45;
  const float R0 = 0.018;
  const float PI = 3.14159265;

  // Measured Beer-Lambert coefficients for ice (per unit depth, scaled for our geometry)
  const vec3 ICE_ABSORPTION = vec3(0.6, 0.1, 0.01);  // red, green, blue per metre
  // Forward-scattering asymmetry parameter
  const float HG_G = 0.89;

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
    hdr *= 1.8;
    return hdr / (hdr + 1.0);
  }

  // ── Hash functions for procedural patterns ──
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  vec2 hash2(vec2 p) {
    return vec2(
      fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
      fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
    );
  }

  // ── Voronoi grain boundaries ──
  // Polycrystalline ice: each grain has a different crystal axis.
  // Light scatters at the boundaries between grains.
  // Returns: x = distance to nearest boundary, y = cell hash
  vec2 voronoi(vec2 p, float scale) {
    vec2 sp = p * scale;
    vec2 n = floor(sp);
    vec2 f = fract(sp);
    float minDist = 10.0;
    float secondDist = 10.0;
    float cellId = 0.0;
    for (int j = -1; j <= 1; j++) {
      for (int i = -1; i <= 1; i++) {
        vec2 g = vec2(float(i), float(j));
        vec2 o = hash2(n + g);
        vec2 r = g + o - f;
        float d = dot(r, r);
        if (d < minDist) {
          secondDist = minDist;
          minDist = d;
          cellId = hash(n + g);
        } else if (d < secondDist) {
          secondDist = d;
        }
      }
    }
    // Boundary proximity: small when close to a grain boundary
    float boundary = sqrt(secondDist) - sqrt(minDist);
    return vec2(boundary, cellId);
  }

  // ── Air bubble inclusions ──
  // Trapped air appears as bright white points from TIR at ice-air boundary
  float airBubbles(vec2 p, float depth) {
    float bubbles = 0.0;
    // Two scales of bubbles
    for (int s = 0; s < 2; s++) {
      float scale = (s == 0) ? 60.0 : 120.0;
      vec2 g = floor(p * scale);
      float h = hash(g + float(s) * 100.0);
      vec2 centre = (g + hash2(g + float(s) * 50.0)) / scale;
      float d = length(p - centre) * scale;
      float radius = (s == 0) ? 0.4 : 0.25;
      // Only some cells have bubbles, and only where there's depth
      float bubble = (1.0 - smoothstep(0.0, radius, d)) * step(0.82, h) * depth;
      bubbles += bubble;
    }
    return clamp(bubbles, 0.0, 1.0);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    float f = field(uv, aspect);

    // ── Outside: caustic band with blue tint ──
    if (f < THRESHOLD) {
      float caustic = smoothstep(THRESHOLD * 0.65, THRESHOLD * 0.92, f)
                    * (1.0 - smoothstep(THRESHOLD * 0.92, THRESHOLD, f));
      gl_FragColor = vec4(vec3(0.75, 0.88, 0.98), caustic * 0.08);
      return;
    }

    vec3 N = getNormal(uv, f, aspect);
    float distFromEdge = max(f - THRESHOLD, 0.0);
    float meniscus = exp(-distFromEdge * 8.0);
    float iceDepth = smoothstep(THRESHOLD, THRESHOLD + 0.2, f);

    // ── Chromatic dispersion (measured Δn ≈ 0.011 across visible) ──
    // n_red = 1.306, n_green = 1.311, n_blue = 1.317
    // Blue refracts more → larger offset; red less → smaller offset
    float baseRefraction = 0.012 * meniscus;
    float dispersion = 0.006 * meniscus;  // half of Δn/n scaled
    vec2 uvR = clamp(uv + N.xy * (baseRefraction - dispersion), 0.0, 1.0);
    vec2 uvG = clamp(uv + N.xy * baseRefraction, 0.0, 1.0);
    vec2 uvB = clamp(uv + N.xy * (baseRefraction + dispersion), 0.0, 1.0);

    // ── Birefringence (Δn ≈ 0.0014) ──
    // Ordinary and extraordinary rays travel at slightly different speeds,
    // creating a faint double image. We blend two slightly offset samples.
    float birefringence = 0.002 * iceDepth;
    // The extraordinary ray offset depends on crystal axis — use a per-grain direction
    vec2 vor = voronoi(uv, 18.0);
    float grainAngle = vor.y * PI * 2.0;
    vec2 birefDir = vec2(cos(grainAngle), sin(grainAngle)) * birefringence;

    vec3 contentColor;
    // Ordinary ray
    vec3 ordinary;
    ordinary.r = texture2D(uContentTex, uvR).r;
    ordinary.g = texture2D(uContentTex, uvG).g;
    ordinary.b = texture2D(uContentTex, uvB).b;
    // Extraordinary ray (offset by birefringence along grain c-axis)
    vec3 extraordinary;
    extraordinary.r = texture2D(uContentTex, clamp(uvR + birefDir, 0.0, 1.0)).r;
    extraordinary.g = texture2D(uContentTex, clamp(uvG + birefDir, 0.0, 1.0)).g;
    extraordinary.b = texture2D(uContentTex, clamp(uvB + birefDir, 0.0, 1.0)).b;
    // Equal power split between o-ray and e-ray
    contentColor = mix(ordinary, extraordinary, 0.5);

    // ── Beer-Lambert spectral absorption ──
    // Depth-dependent: red absorbed most, blue least → blue colour emerges
    vec3 absorption = exp(-ICE_ABSORPTION * iceDepth * 4.5);
    contentColor *= absorption;

    // ── Subsurface scattering (Henyey-Greenstein forward scatter) ──
    // Light that enters the ice bounces off grain boundaries and bubbles.
    // With g=0.89, most continues forward but with slight spreading.
    // We approximate this as a depth-dependent luminance contribution
    // from the average scene colour, tinted by the ice absorption.
    vec3 scatterColor = vec3(0.6, 0.78, 0.92); // blue-shifted scattered light
    float scatterStrength = iceDepth * 0.15 * (1.0 - HG_G);  // small because g is high
    contentColor += scatterColor * scatterStrength;

    // ── Grain boundary scattering (Voronoi edges) ──
    float boundary = vor.x;
    // Thin bright lines at grain boundaries where light is redirected
    float grainScatter = (1.0 - smoothstep(0.0, 0.08, boundary)) * iceDepth;
    contentColor += vec3(0.55, 0.72, 0.88) * grainScatter * 0.25;

    // ── Air bubble inclusions ──
    float bubbles = airBubbles(uv, iceDepth);
    contentColor = mix(contentColor, vec3(0.92, 0.96, 1.0), bubbles * 0.6);

    // ── Surface frost at meniscus ──
    // Where ice is thinnest, dendritic microcrystals scatter light broadly
    // creating a white frost appearance
    float frost = meniscus * 0.35;
    // Add some spatial variation to the frost using a high-frequency hash
    float frostNoise = hash(floor(uv * 200.0)) * 0.3 + 0.7;
    frost *= frostNoise;
    contentColor = mix(contentColor, vec3(0.92, 0.95, 1.0), frost);

    // ── Perspective view direction ──
    vec3 V = normalize(vec3((uv - 0.5) * vec2(aspect, 1.0) * 0.7, -1.0));

    // ── Fresnel reflection ──
    float NdV = max(dot(N, -V), 0.0);
    float fresnel = R0 + (1.0 - R0) * pow(1.0 - NdV, 5.0);

    // Environment reflection — tinted by absorption through the surface
    vec3 R = reflect(V, N);
    vec3 envColor = envMap(R);
    // Ice surface is smooth at the macro scale → sharp reflection
    envColor *= vec3(0.85, 0.92, 1.0);  // slight blue tint from surface

    // ── Specular ──
    vec3 L = normalize(vec3((uLightPos - uv) * vec2(aspect, 1.0), 0.85));
    vec3 H = normalize(L - V);
    float NdH = max(dot(N, H), 0.0);
    // Sharp crystalline highlight — ice surface is smooth
    float specMirror = pow(NdH, 800.0);
    // Broader lobe from the meniscus curvature
    float specBroad = pow(NdH, 50.0) * meniscus;

    // ── Composite ──
    vec3 color = contentColor;
    color = mix(color, envColor, fresnel);
    color += specMirror * 0.35;
    color += specBroad * 0.04;

    float alpha = smoothstep(THRESHOLD, THRESHOLD + 0.045, f);
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
      antialias: true,
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
      antialias: true,
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

/**
 * Crude oil variant — dark opaque fluid with thin-film iridescence.
 */
export async function initDropletCanvasOil(slideEl, slideIndex) {
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
      antialias: true,
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
      fragmentShader: fragmentShaderOil,
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
    console.warn('Oil droplet init failed:', e);
    canvas.style.visibility = 'visible';
  }
}

/** Generic init helper — shared boilerplate for custom shaders with no extra uniforms */
async function initDropletCanvasGeneric(slideEl, slideIndex, frag, label) {
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
      antialias: true,
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
      fragmentShader: frag,
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
    console.warn(`${label} droplet init failed:`, e);
    canvas.style.visibility = 'visible';
  }
}

export async function initDropletCanvasMercury(slideEl, slideIndex) {
  return initDropletCanvasGeneric(slideEl, slideIndex, fragmentShaderMercury, 'Mercury');
}

export async function initDropletCanvasFrosted(slideEl, slideIndex) {
  return initDropletCanvasGeneric(slideEl, slideIndex, fragmentShaderFrosted, 'Frosted');
}

export async function initDropletCanvasIce(slideEl, slideIndex) {
  return initDropletCanvasGeneric(slideEl, slideIndex, fragmentShaderIce, 'Ice');
}

// ─── LENS BADGE DROPLETS ──────────────────────
// Renders physics-based droplet badges for each lens type:
//   transparency → clear water
//   distortion   → mercury (liquid metal)
//   extraction   → crude oil (iridescent)

const BADGE_PX = 64;   // render resolution (CSS size set by stylesheet)

const BADGE_SHADERS = {
  transparency: fragmentShader,
  distortion:   fragmentShaderMercury,
  extraction:   fragmentShaderOil,
};

function generateBadgeDroplets() {
  // Tight central cluster — blobs sized to fill most of the badge area
  const drops = [
    new THREE.Vector3(0.50, 0.50, 0.22),   // large central blob
    new THREE.Vector3(0.38, 0.44, 0.10),   // left
    new THREE.Vector3(0.62, 0.55, 0.09),   // right
    new THREE.Vector3(0.46, 0.62, 0.08),   // below
    new THREE.Vector3(0.55, 0.38, 0.08),   // above
  ];
  while (drops.length < MAX_DROPLETS) {
    drops.push(new THREE.Vector3(0, 0, 0));
  }
  return drops;
}

function createBadgeBgTexture(bgColor) {
  const size = BADGE_PX * 2;
  const c = document.createElement('canvas');
  c.width = size;
  c.height = size;
  const ctx = c.getContext('2d');
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);
  return c;
}

/**
 * Initialise all .lens-droplet-canvas elements on the page.
 * Call after the DOM is attached and fonts are loaded.
 */
export async function initLensBadgeDroplets() {
  const canvases = document.querySelectorAll('.lens-droplet-canvas');
  if (!canvases.length) return;

  await document.fonts.ready;

  let envTexture;
  try {
    envTexture = await loadEnvTexture();
  } catch (e) {
    console.warn('Lens badge env load failed:', e);
    return;
  }

  const droplets = generateBadgeDroplets();

  for (const canvas of canvases) {
    if (!document.contains(canvas)) continue;

    try {
      const lensType = canvas.dataset.lens || 'transparency';
      const frag = BADGE_SHADERS[lensType] || fragmentShader;

      const slideInner = canvas.closest('.slide-inner');
      const computedBg = slideInner
        ? getComputedStyle(slideInner).backgroundColor
        : '#ffffff';

      const bgCanvas = createBadgeBgTexture(computedBg);
      const contentTexture = new THREE.CanvasTexture(bgCanvas);
      contentTexture.minFilter = THREE.LinearFilter;
      contentTexture.magFilter = THREE.LinearFilter;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = BADGE_PX * dpr;
      canvas.height = BADGE_PX * dpr;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: true,
      });
      renderer.setPixelRatio(1);
      renderer.setSize(BADGE_PX * dpr, BADGE_PX * dpr, false);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);

      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader: frag,
        transparent: true,
        depthTest: false,
        uniforms: {
          uResolution: { value: new THREE.Vector2(BADGE_PX * dpr, BADGE_PX * dpr) },
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
      console.warn('Lens badge droplet init failed:', e);
    }
  }
}
