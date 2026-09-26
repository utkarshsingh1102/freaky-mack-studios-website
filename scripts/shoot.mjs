// Screenshots + layout checks with the preinstalled Chromium.
// Usage: node scripts/shoot.mjs [route ...] [--out dir] [--thumbs] [--base http://localhost:3000]
//   default: full-page shots at 1440 and 390 for each route, plus a horizontal-overflow check.
//   --thumbs: 1440×900 hero shots into public/thumbs/option-*.jpg for the index cards.
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args.splice(i, 2)[1] : fallback;
};
const base = flag("--base", "http://localhost:3000");
const out = flag("--out", "shots");
const thumbs = args.includes("--thumbs");
const routes = args.filter((a) => !a.startsWith("--"));
const list = routes.length ? routes : ["/", "/option-a/", "/option-b/", "/option-c/", "/option-d/"];

const browser = await chromium.launch();
let failed = false;

if (thumbs) {
  fs.mkdirSync("public/thumbs", { recursive: true });
  for (const l of ["a", "b", "c", "d"]) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${base}/option-${l}/`, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: 'nav[aria-label="Homepage options"],[data-pitch-only]{display:none!important}' });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `public/thumbs/option-${l}.jpg`, type: "jpeg", quality: 82 });
    await page.close();
    console.log(`thumb option-${l}`);
  }
} else {
  fs.mkdirSync(out, { recursive: true });
  for (const route of list) {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 900 } });
      const errors = [];
      page.on("pageerror", (e) => errors.push(String(e)));
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      await page.goto(`${base}${route}`, { waitUntil: "networkidle" });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.waitForTimeout(500);
      const { sw, h } = await page.evaluate(() => ({
        sw: document.documentElement.scrollWidth,
        h: document.documentElement.scrollHeight,
      }));
      const name = (route.replace(/\//g, "") || "index") + `-${width}.png`;
      await page.screenshot({ path: path.join(out, name), fullPage: true });
      const overflow = sw > width;
      if (overflow || errors.length) failed = true;
      console.log(`${name}  height=${h}  scrollWidth=${sw}${overflow ? "  <-- OVERFLOW" : ""}`);
      for (const e of errors) console.log(`   error: ${e}`);
      await page.close();
    }
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
