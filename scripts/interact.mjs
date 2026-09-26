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
  async b(page) {
    const strip = page.getByRole("region", { name: "Work filmstrip" });
    await strip.scrollIntoViewIfNeeded();
    const box = await strip.boundingBox();
    const before = await strip.evaluate((el) => el.scrollLeft);
    await page.mouse.move(box.x + 900, box.y + 250);
    await page.mouse.down();
    await page.mouse.move(box.x + 500, box.y + 250, { steps: 10 });
    await page.mouse.up();
    const after = await strip.evaluate((el) => el.scrollLeft);
    check(after > before + 200, `mouse drag scrolls filmstrip (${before} → ${after})`);
    check(page.url().endsWith("/option-b/"), "drag release does not follow the card link");

    await page.getByRole("button", { name: "Open the showreel" }).click();
    check(await page.getByRole("dialog", { name: "Showreel" }).isVisible(), "reel card opens full-reel modal");
    await page.keyboard.press("Escape");
    check((await page.getByRole("dialog").count()) === 0, "Escape closes the modal");
  },
  async c(page) {
    const toggles = page.locator("#scope button[aria-expanded]");
    check((await page.locator("#scope").getByText("Ad films · Event films").count()) === 1, "first service open by default");
    await toggles.nth(2).click();
    check(await page.getByText("Documentaries · Short films · Web series").isVisible(), "clicking a service opens it");
    check((await page.locator("#scope").getByText("Ad films · Event films").count()) === 0, "…and closes the previous one");
    check((await toggles.nth(2).innerText()).includes("−"), "open row shows −");
    await toggles.nth(2).click();
    check((await page.locator("#scope [id^=scope-]").count()) === 0, "clicking the open service closes it");

    await page.getByRole("button", { name: "Fila" }).click();
    check(await page.getByText("[ STILL — Fila ]").isVisible(), "brand tile swaps the still");
    check(await page.getByText("[Testimonial from Fila — two or three lines, shared with permission.]").isVisible(), "…and the quote");
    check(await page.getByText("05 / 07").isVisible(), "…and the counter");

    await page.getByRole("button", { name: "Play the showreel" }).click();
    check(await page.getByRole("dialog", { name: "Showreel" }).isVisible(), "band play button opens the reel modal");
    await page.getByRole("button", { name: "Close ✕" }).click();
  },
  async d(page) {
    check((await page.getByRole("form", { name: "Start a project" }).count()) === 0, "enquiry fields hidden until a format is picked");
    await page.getByLabel("What are we making?").selectOption("Music video");
    check(await page.getByRole("form", { name: "Start a project" }).isVisible(), "picking a format opens the enquiry form");
    const placeholder = await page.getByLabel("The brief").getAttribute("placeholder");
    check(/music video/.test(placeholder), `brief prompt uses the format ("${placeholder}")`);
    const href = await page.locator("footer a[href^='mailto:']").first().getAttribute("href");
    check(decodeURIComponent(href).includes("Enquiry — Music video"), "footer email carries the format as subject");
    const cta = await page.locator("#contact a[href^='mailto:']").first().getAttribute("href");
    check(decodeURIComponent(cta).includes("Enquiry — Music video"), "CTA links carry the format as subject");
    await page.getByRole("button", { name: "Cancel" }).click();
    check((await page.getByRole("form", { name: "Start a project" }).count()) === 0, "Cancel resets the select and closes the form");

    const onTop = await page.locator("#contact a", { hasText: "Let’s make" }).evaluate((el) => {
      el.scrollIntoView({ block: "center", behavior: "instant" });
      const r = el.getBoundingClientRect();
      const hit = document.elementFromPoint(r.right - 20, r.top + r.height / 2);
      return el.contains(hit);
    });
    check(onTop, "“[ Let’s make” sits above the reel still");
  },
};

async function touchSwipe(page) {
  // Mobile: native horizontal scroll on the strip.
  const strip = page.getByRole("region", { name: "Work filmstrip" });
  await strip.evaluate((el) => el.scrollBy({ left: 300 }));
  return strip.evaluate((el) => el.scrollLeft);
}

const browser = await chromium.launch();
for (const w of which) {
  if (!tests[w]) continue;
  console.log(`Option ${w.toUpperCase()}`);
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto(`${base}/option-${w}/`, { waitUntil: "networkidle" });
  await tests[w](page);
  if (w === "b") {
    const m = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    await m.goto(`${base}/option-b/`, { waitUntil: "networkidle" });
    check((await touchSwipe(m)) > 0, "filmstrip scrolls sideways at 390");
    await m.close();
  }
  check(errors.length === 0, `no page errors${errors.length ? `: ${errors.join("; ")}` : ""}`);
  await page.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
