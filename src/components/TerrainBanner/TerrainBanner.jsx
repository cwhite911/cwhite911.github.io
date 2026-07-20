import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import {
  flowAccumulation,
  GRID_H,
  GRID_W,
  getDem,
  getVersion,
  hillshade,
  seedInitial,
  stepWalkers,
} from './terrainStore';

// Terrain color ramp: deep steel blue lows, green mid, tan, light peaks
const RAMP = [
  [0.0, 36, 63, 82],
  [0.25, 74, 106, 130],
  [0.45, 96, 138, 105],
  [0.65, 158, 158, 94],
  [0.82, 208, 178, 125],
  [1.0, 245, 240, 225],
];

function rampColor(t, out) {
  let hi = RAMP.length - 1;
  for (let i = 1; i < RAMP.length; i += 1) {
    if (RAMP[i][0] >= t) {
      hi = i;
      break;
    }
  }
  const lo = hi - 1;
  const span = RAMP[hi][0] - RAMP[lo][0];
  const f = span > 0 ? (t - RAMP[lo][0]) / span : 0;
  out[0] = RAMP[lo][1] + (RAMP[hi][1] - RAMP[lo][1]) * f;
  out[1] = RAMP[lo][2] + (RAMP[hi][2] - RAMP[lo][2]) * f;
  out[2] = RAMP[lo][3] + (RAMP[hi][3] - RAMP[lo][3]) * f;
}

const STEPS_PER_FRAME = 260;
const RENDER_INTERVAL_MS = 100; // walk card re-shades at ~10 Hz
const FLOW_INTERVAL_MS = 700; // flow card recomputes accumulation at ~1.4 Hz
const REVEAL_MS = 3000; // stream network reveal sweep duration

function drawWalk(ctx, image, shade) {
  const dem = getDem();
  hillshade(dem, shade);
  let max = 0;
  for (let i = 0; i < dem.length; i += 1) if (dem[i] > max) max = dem[i];
  const inv = max > 0 ? 1 / max : 0;
  const px = image.data;
  const color = [0, 0, 0];
  for (let i = 0; i < dem.length; i += 1) {
    rampColor(Math.sqrt(dem[i] * inv), color);
    const s = 0.35 + 0.65 * shade[i];
    const o = i * 4;
    px[o] = color[0] * s;
    px[o + 1] = color[1] * s;
    px[o + 2] = color[2] * s;
    px[o + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
}

const STREAM_FLOOR = 0.35; // accumulation strength below this stays plain hillshade

function drawFlow(ctx, image, shade, acc, reveal) {
  const dem = getDem();
  hillshade(dem, shade);
  let maxAcc = 0;
  for (let i = 0; i < acc.length; i += 1) if (acc[i] > maxAcc) maxAcc = acc[i];
  const invLog = maxAcc > 1 ? 1 / Math.log(1 + maxAcc) : 0;
  const px = image.data;
  // reveal sweeps the visibility cutoff from the largest channels down to STREAM_FLOOR
  const cutoff = STREAM_FLOOR + (1 - reveal) * (1 - STREAM_FLOOR);
  for (let i = 0; i < dem.length; i += 1) {
    // muted hillshaded base so the stream network pops
    const g = 120 + 110 * shade[i];
    let r = g * 0.98;
    let gr = g;
    let b = g;
    const strength = Math.log(1 + acc[i]) * invLog;
    if (strength >= cutoff) {
      const t = (strength - STREAM_FLOOR) / (1 - STREAM_FLOOR);
      const alpha = 0.35 + 0.65 * t;
      r = r * (1 - alpha) + (30 + 90 * t) * alpha;
      gr = gr * (1 - alpha) + (80 + 120 * t) * alpha;
      b = b * (1 - alpha) + (150 + 105 * t) * alpha;
    }
    const o = i * 4;
    px[o] = r;
    px[o + 1] = gr;
    px[o + 2] = b;
    px[o + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
}

const TerrainBanner = ({ variant, label, sublabel }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const image = ctx.createImageData(GRID_W, GRID_H);
    const shade = new Float32Array(GRID_W * GRID_H);

    seedInitial();

    let acc = null;
    let accVersion = -1;
    let lastRender = 0;
    let lastFlow = 0;
    let revealStart = 0;
    let rafId = 0;
    let visible = false;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const renderOnce = (now) => {
      if (variant === 'walk') {
        drawWalk(ctx, image, shade);
      } else {
        const version = getVersion();
        if (version !== accVersion) {
          acc = flowAccumulation(getDem());
          accVersion = version;
          if (revealStart === 0) revealStart = now;
        }
        const reveal = reducedMotion ? 1 : Math.min(1, (now - revealStart) / REVEAL_MS);
        drawFlow(ctx, image, shade, acc, reveal);
      }
    };

    const tick = (now) => {
      if (!visible) return;
      if (variant === 'walk') {
        stepWalkers(STEPS_PER_FRAME);
        if (now - lastRender >= RENDER_INTERVAL_MS) {
          lastRender = now;
          renderOnce(now);
        }
      } else {
        const version = getVersion();
        if (version !== accVersion && now - lastFlow >= FLOW_INTERVAL_MS) {
          lastFlow = now;
          acc = flowAccumulation(getDem());
          accVersion = version;
          if (revealStart === 0) revealStart = now;
        }
        if (acc && now - lastRender >= RENDER_INTERVAL_MS) {
          lastRender = now;
          const reveal = Math.min(1, (now - revealStart) / REVEAL_MS);
          drawFlow(ctx, image, shade, acc, reveal);
        }
      }
      rafId = window.requestAnimationFrame(tick);
    };

    renderOnce(performance.now());

    if (reducedMotion) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !visible) {
            visible = true;
            rafId = window.requestAnimationFrame(tick);
          } else if (!entry.isIntersecting && visible) {
            visible = false;
            window.cancelAnimationFrame(rafId);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(canvas);

    return () => {
      visible = false;
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [variant]);

  return (
    <div className={`terrain-banner terrain-banner--${variant}`}>
      <canvas ref={canvasRef} width={GRID_W} height={GRID_H} className="terrain-banner__canvas" />
      <div className="terrain-banner__overlay">
        <span className="terrain-banner__label">{label}</span>
        {sublabel && <span className="terrain-banner__sublabel">{sublabel}</span>}
      </div>
    </div>
  );
};

TerrainBanner.propTypes = {
  variant: PropTypes.oneOf(['walk', 'flow']).isRequired,
  label: PropTypes.string,
  sublabel: PropTypes.string,
};

export default TerrainBanner;
