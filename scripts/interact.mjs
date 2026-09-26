// Interaction checks per option (ports of each board's renderVals() behaviour).
// Usage: node scripts/interact.mjs [a|b|c|d ...] [--base http://localhost:3000]
import { chromium } from "playwright";

const args = process.argv.slice(2);
const bi = args.indexOf("--base");
const base = bi >= 0 ? args.splice(bi, 2)[1] : "http://localhost:3000";
const which = args.length ? args : ["a", "b", "c", "d"];

let failures = 0;
const check = (ok, msg) => {
  console.log(`${ok ? "  ✓" : "  ✗"} ${msg}`);
  if (!ok) failures++;
};

const tests = {
  async a(page) {
    await page.getByRole("button", { name: "Open the showreel" }).click();
    check(await page.getByText("[ FULL SHOWREEL — EMBED, SOUND ON ]").isVisible(), "reel card expands to full band");
    check(await page.getByRole("button", { name: "Close the reel" }).first().isVisible(), "hero button label → Close the reel");
    await page.getByRole("button", { name: "Close the reel" }).last().click();
    check(await page.getByText("[ 10–15 SEC LOOP, MUTED ]").isVisible(), "band closes back to tilted card");

    const rows = page.locator("#ch1 li");
    await rows.nth(2).hover();
    check((await page.locator("#ch1").getByText("[Brand] · Fashion film").count()) === 2, "hovering row 03 swaps preview meta");

    await page.getByRole("button", { name: "music video", exact: true }).click();
    await page.getByRole("button", { name: "face on screen" }).click();
    const sentence = await page.locator("#ch3 p").first().innerText();
    check(/a music video/.test(sentence) && /a face on screen/.test(sentence), `sentence builder → "${sentence.replace(/\s+/g, " ")}"`);

    const eps = page.locator("#ch4 button[aria-pressed]");
    await eps.nth(1).click();
    check((await page.locator("#ch4").getByText("Now playing").count()) === 1, "episode 2 shows Now playing");
    await eps.nth(0).click();
    check((await eps.nth(1).getAttribute("aria-pressed")) === "false", "playing another episode stops the first");

    await page.getByRole("button", { name: "Lime accent" }).click();
    const accent = await page.locator("[style*='--accent']").first().evaluate((el) => getComputedStyle(el).getPropertyValue("--accent"));
    check(accent.trim().toUpperCase() === "#E8FF3A", `accent swatch sets --accent (${accent.trim()})`);
  },
};

const browser = await chromium.launch();
for (const w of which) {
  if (!tests[w]) continue;
  console.log(`Option ${w.toUpperCase()}`);
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(`${base}/option-${w}/`, { waitUntil: "networkidle" });
  await tests[w](page);
  check(errors.length === 0, `no page errors${errors.length ? `: ${errors.join("; ")}` : ""}`);
  await page.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
