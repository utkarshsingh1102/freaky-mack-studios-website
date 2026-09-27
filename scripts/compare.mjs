// Side-by-side board vs render: node scripts/compare.mjs design.jpg shot.png outPrefix [segH]
import { chromium } from "playwright";
import fs from "node:fs";
const [a, b, out, segArg] = process.argv.slice(2);
const seg = Number(segArg || 1400);
const uri = (p) => `data:image/${p.endsWith("png") ? "png" : "jpeg"};base64,` + fs.readFileSync(p).toString("base64");
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 800 } });
await page.setContent(`<body style="margin:0;display:flex;gap:8px;background:#f0f"><img id=a src="${uri(a)}" style="width:716px;display:block;align-self:flex-start"><img id=b src="${uri(b)}" style="width:716px;display:block;align-self:flex-start"></body>`);
await page.waitForFunction(() => [...document.images].every((i) => i.complete));
const h = await page.evaluate(() => Math.max(...[...document.images].map((i) => i.getBoundingClientRect().height)));
const dims = await page.evaluate(() => [...document.images].map((i) => i.naturalWidth + "x" + i.naturalHeight));
console.log("dims", dims.join(" vs "));
await page.setViewportSize({ width: 1440, height: Math.ceil(h) });
const n = Math.ceil(h / (seg / 2));
for (let i = 0; i < n; i++) {
  const y = i * (seg / 2);
  await page.screenshot({ path: `${out}-${String(i + 1).padStart(2, "0")}.png`, clip: { x: 0, y, width: 1440, height: Math.min(seg / 2, h - y) } });
}
console.log("segments", n);
await browser.close();
