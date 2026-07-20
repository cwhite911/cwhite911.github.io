// Shared simulation state for the Selected Work terrain banners.
// The OpenPlains card grows a DEM from a D-infinity Gaussian random walk;
// the GRASS card drains that same DEM with D-infinity flow accumulation.

export const GRID_W = 240;
export const GRID_H = 120;

const N_WALKERS = 24;
const TURN_SIGMA = 0.55; // heading perturbation (radians)
const STEP_MU = 1.1; // mean step length (cells)
const STEP_SIGMA = 0.6;
const BLUR_SIGMA = 2;
const BLUR_RADIUS = 4;

// Box-Muller with cached spare value
let spare = null;
function gaussian() {
  if (spare !== null) {
    const v = spare;
    spare = null;
    return v;
  }
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  const mag = Math.sqrt(-2.0 * Math.log(u));
  spare = mag * Math.sin(2.0 * Math.PI * v);
  return mag * Math.cos(2.0 * Math.PI * v);
}

function makeBlurKernel(sigma, radius) {
  const kernel = new Float32Array(2 * radius + 1);
  let sum = 0;
  for (let i = -radius; i <= radius; i += 1) {
    const w = Math.exp(-(i * i) / (2 * sigma * sigma));
    kernel[i + radius] = w;
    sum += w;
  }
  for (let i = 0; i < kernel.length; i += 1) kernel[i] /= sum;
  return kernel;
}

const store = {
  visits: new Float32Array(GRID_W * GRID_H),
  dem: new Float32Array(GRID_W * GRID_H),
  scratch: new Float32Array(GRID_W * GRID_H),
  walkers: [],
  version: 0, // bumped whenever the DEM is re-smoothed
  demDirty: true,
  seeded: false,
};

const blurKernel = makeBlurKernel(BLUR_SIGMA, BLUR_RADIUS);

function initWalkers() {
  store.walkers = [];
  for (let i = 0; i < N_WALKERS; i += 1) {
    store.walkers.push({
      x: GRID_W * (0.15 + 0.7 * Math.random()),
      y: GRID_H * (0.15 + 0.7 * Math.random()),
      heading: Math.random() * Math.PI * 2,
    });
  }
}

// D-infinity flavored walk: continuous heading with Gaussian turning,
// Gaussian step length, reflecting boundaries. Deposits one visit per step.
export function stepWalkers(steps) {
  if (store.walkers.length === 0) initWalkers();
  const { visits, walkers } = store;
  for (let s = 0; s < steps; s += 1) {
    for (let i = 0; i < walkers.length; i += 1) {
      const w = walkers[i];
      w.heading += gaussian() * TURN_SIGMA;
      const len = Math.abs(gaussian() * STEP_SIGMA + STEP_MU);
      w.x += Math.cos(w.heading) * len;
      w.y += Math.sin(w.heading) * len;
      if (w.x < 0) {
        w.x = -w.x;
        w.heading = Math.PI - w.heading;
      } else if (w.x >= GRID_W) {
        w.x = 2 * GRID_W - w.x - 1;
        w.heading = Math.PI - w.heading;
      }
      if (w.y < 0) {
        w.y = -w.y;
        w.heading = -w.heading;
      } else if (w.y >= GRID_H) {
        w.y = 2 * GRID_H - w.y - 1;
        w.heading = -w.heading;
      }
      const cx = Math.floor(w.x);
      const cy = Math.floor(w.y);
      if (cx >= 0 && cx < GRID_W && cy >= 0 && cy < GRID_H) {
        visits[cy * GRID_W + cx] += 1;
      }
    }
  }
  store.demDirty = true;
}

// Separable Gaussian blur of visits -> dem (the neighborhood kernel smoothing)
function smoothDem() {
  const { visits, dem, scratch } = store;
  // horizontal pass: visits -> scratch
  for (let y = 0; y < GRID_H; y += 1) {
    const row = y * GRID_W;
    for (let x = 0; x < GRID_W; x += 1) {
      let acc = 0;
      for (let k = -BLUR_RADIUS; k <= BLUR_RADIUS; k += 1) {
        let xx = x + k;
        if (xx < 0) xx = 0;
        else if (xx >= GRID_W) xx = GRID_W - 1;
        acc += visits[row + xx] * blurKernel[k + BLUR_RADIUS];
      }
      scratch[row + x] = acc;
    }
  }
  // vertical pass: scratch -> dem
  for (let y = 0; y < GRID_H; y += 1) {
    for (let x = 0; x < GRID_W; x += 1) {
      let acc = 0;
      for (let k = -BLUR_RADIUS; k <= BLUR_RADIUS; k += 1) {
        let yy = y + k;
        if (yy < 0) yy = 0;
        else if (yy >= GRID_H) yy = GRID_H - 1;
        acc += scratch[yy * GRID_W + x] * blurKernel[k + BLUR_RADIUS];
      }
      dem[y * GRID_W + x] = acc;
    }
  }
  store.demDirty = false;
  store.version += 1;
}

export function getDem() {
  if (store.demDirty) smoothDem();
  return store.dem;
}

export function getVersion() {
  if (store.demDirty) smoothDem();
  return store.version;
}

// A few thousand synchronous steps so the first paint (and the
// prefers-reduced-motion fallback) shows terrain instead of a blank card.
export function seedInitial() {
  if (store.seeded) return;
  store.seeded = true;
  stepWalkers(3000);
  smoothDem();
}

// Horn's method hillshade, azimuth 315 / altitude 45, into out[0..1]
export function hillshade(dem, out) {
  const zenith = ((90 - 45) * Math.PI) / 180;
  const azimuth = ((360 - 315 + 90) * Math.PI) / 180;
  let max = 0;
  for (let i = 0; i < dem.length; i += 1) if (dem[i] > max) max = dem[i];
  const zScale = max > 0 ? 60 / max : 0; // exaggeration on a normalized surface
  const cosZ = Math.cos(zenith);
  const sinZ = Math.sin(zenith);
  for (let y = 0; y < GRID_H; y += 1) {
    const yN = y > 0 ? y - 1 : y;
    const yS = y < GRID_H - 1 ? y + 1 : y;
    for (let x = 0; x < GRID_W; x += 1) {
      const xW = x > 0 ? x - 1 : x;
      const xE = x < GRID_W - 1 ? x + 1 : x;
      const nw = dem[yN * GRID_W + xW] * zScale;
      const n = dem[yN * GRID_W + x] * zScale;
      const ne = dem[yN * GRID_W + xE] * zScale;
      const w = dem[y * GRID_W + xW] * zScale;
      const e = dem[y * GRID_W + xE] * zScale;
      const sw = dem[yS * GRID_W + xW] * zScale;
      const s = dem[yS * GRID_W + x] * zScale;
      const se = dem[yS * GRID_W + xE] * zScale;
      const dzdx = (ne + 2 * e + se - (nw + 2 * w + sw)) / 8;
      const dzdy = (sw + 2 * s + se - (nw + 2 * n + ne)) / 8;
      const slope = Math.atan(Math.sqrt(dzdx * dzdx + dzdy * dzdy));
      const aspect = Math.atan2(dzdy, -dzdx);
      let shade = cosZ * Math.cos(slope) + sinZ * Math.sin(slope) * Math.cos(azimuth - aspect);
      if (shade < 0) shade = 0;
      out[y * GRID_W + x] = shade;
    }
  }
}

// D-infinity (Tarboton 1997) flow accumulation over the current DEM.
// Steepest of 8 triangular facets; flow split between the facet's two
// neighbors; cells processed in descending elevation order.
const FACETS = [
  [1, 0, 1, -1],
  [0, -1, 1, -1],
  [0, -1, -1, -1],
  [-1, 0, -1, -1],
  [-1, 0, -1, 1],
  [0, 1, -1, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];
const QUARTER_PI = Math.PI / 4;
const SQRT2 = Math.SQRT2;

export function flowAccumulation(dem) {
  const n = GRID_W * GRID_H;
  const acc = new Float32Array(n);
  acc.fill(1);
  const order = new Uint32Array(n);
  for (let i = 0; i < n; i += 1) order[i] = i;
  const sorted = Array.from(order).sort((a, b) => dem[b] - dem[a]);

  for (let k = 0; k < n; k += 1) {
    const i = sorted[k];
    const x = i % GRID_W;
    const y = (i / GRID_W) | 0;
    const e0 = dem[i];
    let bestSlope = 0;
    let bestFacet = -1;
    let bestR = 0;
    for (let f = 0; f < 8; f += 1) {
      const fx1 = x + FACETS[f][0];
      const fy1 = y + FACETS[f][1];
      const fx2 = x + FACETS[f][2];
      const fy2 = y + FACETS[f][3];
      if (fx1 < 0 || fx1 >= GRID_W || fy1 < 0 || fy1 >= GRID_H) continue;
      if (fx2 < 0 || fx2 >= GRID_W || fy2 < 0 || fy2 >= GRID_H) continue;
      const e1 = dem[fy1 * GRID_W + fx1];
      const e2 = dem[fy2 * GRID_W + fx2];
      const s1 = e0 - e1;
      const s2 = e1 - e2;
      let r = Math.atan2(s2, s1);
      let slope;
      if (r < 0) {
        r = 0;
        slope = s1;
      } else if (r > QUARTER_PI) {
        r = QUARTER_PI;
        slope = (e0 - e2) / SQRT2;
      } else {
        slope = Math.sqrt(s1 * s1 + s2 * s2);
      }
      if (slope > bestSlope) {
        bestSlope = slope;
        bestFacet = f;
        bestR = r;
      }
    }
    if (bestFacet < 0) continue; // pit or flat: flow stops here
    const pDiag = bestR / QUARTER_PI;
    const pCard = 1 - pDiag;
    const a = acc[i];
    const f = FACETS[bestFacet];
    const ci = (y + f[1]) * GRID_W + (x + f[0]);
    const di = (y + f[3]) * GRID_W + (x + f[2]);
    acc[ci] += a * pCard;
    acc[di] += a * pDiag;
  }
  return acc;
}
