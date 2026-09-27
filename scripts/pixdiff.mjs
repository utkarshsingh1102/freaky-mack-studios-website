// Pixel-diff two screenshots of the same size (e.g. before/after a refactor).
// Usage: node scripts/pixdiff.mjs a.png b.png [ignoreFromY ignoreToY]   (ignore band: the floating picker)
import { chromium } from "playwright";
import fs from "node:fs";

const [a, b, mt = "-1", mb = "-1"] = process.argv.slice(2);
const b64 = (f) => "data:image/png;base64," + fs.readFileSync(f).toString("base64");
const browser = await chromium.launch();
const page = await browser.newPage();
const res = await page.evaluate(
  async ({ A, B, mt, mb }) => {
    const load = (src) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = src; });
    const [ia, ib] = await Promise.all([load(A), load(B)]);
    if (ia.width !== ib.width || ia.height !== ib.height) return { sizeMismatch: [ia.width, ia.height, ib.width, ib.height] };
    const w = ia.width, h = ia.height;
    let n = 0;
    const rows = new Set();
    for (let y0 = 0; y0 < h; y0 += 1000) {
      const hh = Math.min(1000, h - y0), c = new OffscreenCanvas(w, hh), x = c.getContext("2d");
      x.drawImage(ia, 0, -y0); const da = x.getImageData(0, 0, w, hh).data;
      x.clearRect(0, 0, w, hh); x.drawImage(ib, 0, -y0); const db = x.getImageData(0, 0, w, hh).data;
      for (let i = 0; i < da.length; i += 4) {
        const y = y0 + Math.floor(i / 4 / w);
        if (y >= mt && y < mb) continue;
        if (Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1]) + Math.abs(da[i + 2] - db[i + 2]) > 24) { n++; rows.add(Math.floor(y / 100) * 100); }
      }
    }
    return { differingPixels: n, outOf: w * h, rows: [...rows] };
  },
  { A: b64(a), B: b64(b), mt: +mt, mb: +mb },
);
console.log(JSON.stringify(res));
await browser.close();
