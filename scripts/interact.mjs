// Homepage checks: the board's renderVals() interactions, the pitch theme picker, and a contrast sweep.
// Usage: node scripts/interact.mjs [--base http://localhost:3000]
import { chromium } from "playwright";

const args = process.argv.slice(2);
const bi = args.indexOf("--base");
const base = bi >= 0 ? args.splice(bi, 2)[1] : "http://localhost:3000";

let failures = 0;
const check = (ok, msg) => {
  console.log(`${ok ? "  ✓" : "  ✗"} ${msg}`);
  if (!ok) failures++;
};
const root = (page) => page.locator("[data-theme]").first();

/** Every visible text node vs the nearest opaque background behind it (WCAG: 4.5:1, 3:1 at 24px+). */
async function contrastSweep(page) {
  return page.evaluate(() => {
    const parse = (c) => {
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      return { r, g, b, a };
    };
    const lum = ({ r, g, b }) => {
      const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const bgOf = (el) => {
      for (let n = el; n; n = n.parentElement) {
        const cs = getComputedStyle(n);
        if (cs.backgroundImage !== "none") return null; // text over a gradient still: skip
        const c = parse(cs.backgroundColor);
        if (c && c.a >= 0.99) return c;
      }
      return parse(getComputedStyle(document.documentElement).backgroundColor);
    };
    const bad = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const seen = new Set();
    while (walker.nextNode()) {
      const el = walker.currentNode.parentElement;
      if (!el || seen.has(el) || !walker.currentNode.textContent.trim()) continue;
      seen.add(el);
      if (el.closest("[data-pitch-only]")) continue;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      if (cs.visibility === "hidden" || r.width === 0 || r.height === 0 || Number(cs.opacity) === 0) continue;
      const fg = parse(el instanceof SVGElement ? cs.fill : cs.color); // SVG text is painted by fill
      const bg = bgOf(el);
      if (!fg || !bg) continue;
      // Blend semi-transparent text over its background.
      const mix = { r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a) };
      const [l1, l2] = [lum(mix), lum(bg)].sort((a, b) => b - a);
      const ratio = (l1 + 0.05) / (l2 + 0.05);
      const large = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && Number(cs.fontWeight) >= 700);
      if (ratio < (large ? 3 : 4.5)) bad.push(`${ratio.toFixed(2)}:1 "${el.textContent.trim().slice(0, 40)}"`);
    }
    return bad;
  });
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
await page.goto(`${base}/`, { waitUntil: "networkidle" });

console.log("Homepage interactions");
await page.getByRole("button", { name: "Open the showreel" }).click();
check(await page.getByText("[ FULL SHOWREEL — EMBED, SOUND ON ]").isVisible(), "reel card expands to full band");
check(await page.getByRole("button", { name: "Close the reel" }).first().isVisible(), "hero button label → Close the reel");
await page.getByRole("button", { name: "Close the reel" }).last().click();
check(await page.getByText("[ 10–15 SEC LOOP, MUTED ]").isVisible(), "band closes back to tilted card");
await page.locator("#ch1 li").nth(2).hover();
check((await page.locator("#ch1").getByText("[Brand] · Fashion film").count()) === 2, "hovering row 03 swaps preview meta");
await page.getByRole("button", { name: "music video", exact: true }).click();
await page.getByRole("button", { name: "face on screen" }).click();
const sentence = (await page.locator("#ch3 p").first().innerText()).replace(/\s+/g, " ");
check(/a music video/.test(sentence) && /a face on screen/.test(sentence), `sentence builder → "${sentence}"`);
const eps = page.locator("#ch4 button[aria-pressed]");
await eps.nth(1).click();
check((await page.locator("#ch4").getByText("Now playing").count()) === 1, "episode 2 shows Now playing");
await eps.nth(0).click();
check((await eps.nth(1).getAttribute("aria-pressed")) === "false", "playing another episode stops the first");

console.log("Theme picker");
const bg = () => root(page).evaluate((el) => getComputedStyle(el).backgroundColor);
const fg = () => root(page).evaluate((el) => getComputedStyle(el).color);
const accentVar = () => root(page).evaluate((el) => getComputedStyle(el).getPropertyValue("--accent").trim().toUpperCase());
check((await root(page).getAttribute("data-theme")) === "light" && (await bg()) === "rgb(255, 255, 255)", "defaults to Light on white");
check((await page.getByRole("button", { name: /^Ground / }).count()) === 3, "ground swatches shown in Light");
await page.getByRole("button", { name: "Dark theme" }).click();
await page.waitForTimeout(400);
check((await root(page).getAttribute("data-theme")) === "dark", "Dark sets data-theme=dark");
check((await bg()) === "rgb(10, 10, 10)" && (await fg()) === "rgb(255, 255, 255)", `Dark is black ground, white text (${await bg()} / ${await fg()})`);
check((await page.getByRole("button", { name: /^Ground / }).count()) === 0, "ground swatches hidden in Dark");
await page.getByRole("button", { name: "Grey accent" }).click();
check((await accentVar()) === "#8A8A8A", `Grey sets --accent (${await accentVar()})`);
check(page.url().endsWith("/?theme=dark&accent=grey"), `URL records the choice (${page.url()})`);
await page.reload({ waitUntil: "networkidle" });
check((await root(page).getAttribute("data-theme")) === "dark" && (await accentVar()) === "#8A8A8A", "reloading the link restores Dark + Grey");

console.log("Contrast sweep");
for (const [label, q] of [["Light · Cobalt", "/"], ["Dark · Cobalt", "/?theme=dark"], ["Dark · Grey", "/?theme=dark&accent=grey"], ["Light · Grey", "/?accent=grey"]]) {
  await page.goto(`${base}${q}`, { waitUntil: "networkidle" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForTimeout(400);
  const bad = await contrastSweep(page);
  check(bad.length === 0, `${label}: all text ≥ WCAG AA${bad.length ? `\n      ${bad.slice(0, 12).join("\n      ")}` : ""}`);
}

console.log("Old pitch links");
await page.goto(`${base}/option-b/`);
await page.waitForURL(`${base}/`, { timeout: 5000 }).catch(() => {});
check(new URL(page.url()).pathname === "/", `/option-b/ lands on / (${page.url()})`);

check(errors.length === 0, `no page errors${errors.length ? `: ${errors.join("; ")}` : ""}`);
await browser.close();
process.exit(failures ? 1 : 0);
