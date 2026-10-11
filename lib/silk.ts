/**
 * Silk art engine: original generative backgrounds (soft colour fields + flowing strands)
 * driven by the Rhevix logo palette. One shared animation loop for every canvas on the page.
 */
// Logo palette: deep navy, navy, electric blue, cyan, violet
const PALETTE = [[0, 8, 31], [0, 26, 102], [0, 96, 240], [0, 194, 250], [106, 32, 240]];
// [angle, freq, amp, spread, ax, ay, bx, by, cx, cy, twist]
const VARIANTS = [
  [-0.18, 0.0042, 70, 0.55, .78, .35, .55, .80, .95, .10, 0.6],
  [0.22, 0.0030, 110, 0.70, .70, .60, .30, .20, .90, .85, 1.0],
  [-0.45, 0.0055, 55, 0.45, .85, .25, .60, .65, .20, .90, 0.4],
  [0.05, 0.0024, 140, 0.85, .65, .45, .90, .80, .40, .15, 1.3],
  [0.35, 0.0048, 90, 0.60, .75, .75, .45, .30, .95, .40, 0.8],
];
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

type Instance = { draw: (now: number) => void; alive: boolean };
const instances = new Set<Instance>();
let running = false;
function loop(now: number) {
  instances.forEach((i) => i.draw(now));
  if (instances.size) requestAnimationFrame(loop); else running = false;
}

export function createSilk(canvas: HTMLCanvasElement, opts: { variant?: number; lines?: number; fps?: number } = {}) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { go: () => {}, destroy: () => {} };
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lines = opts.lines ?? 40, fps = opts.fps ?? 30;
  let v = (opts.variant ?? 0) % VARIANTS.length;
  let from = VARIANTS[v].slice(), to = VARIANTS[v].slice();
  const cur = VARIANTS[v].slice();
  let t0 = 0, W = 0, H = 0, last = 0, visible = true;

  const fit = () => {
    const r = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    W = r.width; H = r.height; canvas.width = Math.max(1, W * dpr); canvas.height = Math.max(1, H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); last = 0; if (reduce) render(0);
  };
  const ro = new ResizeObserver(fit); ro.observe(canvas);
  const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }); io.observe(canvas);

  function render(now: number) {
    if (!W || !H) return;
    const t = reduce ? 4 : now / 1000;
    const k = reduce ? 1 : smooth(clamp((now - t0) / 1400));
    for (let i = 0; i < cur.length; i++) cur[i] = lerp(from[i], to[i], k);
    const [ang, freq, amp, spread, ax, ay, bx, by, cx, cy, twist] = cur;
    const P = PALETTE;
    const g = ctx!.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, rgba(P[0], 1)); g.addColorStop(.55, rgba(P[1], 1)); g.addColorStop(1, rgba(P[0], 1));
    ctx!.globalCompositeOperation = "source-over"; ctx!.fillStyle = g; ctx!.fillRect(0, 0, W, H);
    ctx!.globalCompositeOperation = "screen";
    const m = Math.max(W, H), d = reduce ? 0 : 1;
    const blob = (x: number, y: number, r: number, c: number[], a: number) => {
      const rg = ctx!.createRadialGradient(x, y, 0, x, y, r); rg.addColorStop(0, rgba(c, a)); rg.addColorStop(1, rgba(c, 0));
      ctx!.fillStyle = rg; ctx!.fillRect(0, 0, W, H);
    };
    blob(W * (ax + .04 * Math.sin(t * .21) * d), H * (ay + .05 * Math.cos(t * .17) * d), m * .55, P[2], .55);
    blob(W * (bx + .05 * Math.cos(t * .13) * d), H * (by + .04 * Math.sin(t * .19) * d), m * .42, P[3], .32);
    blob(W * (cx + .03 * Math.sin(t * .11) * d), H * (cy + .04 * Math.cos(t * .15) * d), m * .30, P[4], .30);
    ctx!.save(); ctx!.translate(W / 2, H / 2); ctx!.rotate(ang); ctx!.translate(-W / 2, -H / 2);
    const step = Math.max(10, W / 70), span = H * spread;
    for (let j = 0; j < lines; j++) {
      const u = j / (lines - 1), base = H / 2 + (u - .5) * span + Math.sin(u * 3 + t * .1) * 30;
      const lg = ctx!.createLinearGradient(-W * .1, 0, W * 1.1, 0), col = u < .5 ? P[3] : P[4];
      lg.addColorStop(0, rgba(col, 0)); lg.addColorStop(.45, rgba(col, .08 + .3 * Math.pow(Math.sin(u * Math.PI), 2))); lg.addColorStop(1, rgba(col, 0));
      ctx!.strokeStyle = lg; ctx!.lineWidth = 1; ctx!.beginPath();
      for (let x = -W * .1; x <= W * 1.1; x += step) {
        const y = base + amp * Math.sin(x * freq + t * .35 + u * twist * 3) + amp * .45 * Math.sin(x * freq * .37 - t * .22 + u * 2) * (0.6 + u);
        if (x === -W * .1) ctx!.moveTo(x, y); else ctx!.lineTo(x, y);
      }
      ctx!.stroke();
    }
    ctx!.restore(); ctx!.globalCompositeOperation = "source-over";
  }

  const inst: Instance = {
    alive: true,
    draw(now) { if (!visible || now - last < 1000 / fps) return; last = now; render(now); },
  };
  fit();
  if (!reduce) { instances.add(inst); if (!running) { running = true; requestAnimationFrame(loop); } }
  else render(0);

  return {
    go(next: number) { v = next % VARIANTS.length; from = cur.slice(); to = VARIANTS[v].slice(); t0 = performance.now(); if (reduce) render(0); },
    destroy() { instances.delete(inst); ro.disconnect(); io.disconnect(); },
  };
}
