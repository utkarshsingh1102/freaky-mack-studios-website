// Site checks: each board's renderVals() interactions, the enquiry form, navigation, the pitch theme picker
// (and that it persists across pages), and a WCAG contrast sweep of every page in Light and Dark.
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
      if (el.closest("[data-pitch-only], [aria-hidden=\"true\"]")) continue; // picker, decorative text
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
const serverHtml = await (await page.request.get(`${base}/studio/`)).text();
check(/<html[^>]*data-theme="dark"[^>]*data-accent="grey"/.test(serverHtml), "server HTML already carries the default Dark + Grey (works without JS)");
check((await root(page).getAttribute("data-theme")) === "dark" && (await bg()) === "rgb(10, 10, 10)" && (await fg()) === "rgb(255, 255, 255)", `defaults to Dark: black ground, white text (${await bg()} / ${await fg()})`);
check((await accentVar()) === "#8A8A8A", `defaults to the Grey accent (${await accentVar()})`);
check((await page.getByRole("button", { name: /^Ground / }).count()) === 0, "ground swatches hidden in Dark");
await page.getByRole("button", { name: "Light theme" }).click();
await page.waitForTimeout(400);
check((await root(page).getAttribute("data-theme")) === "light" && (await bg()) === "rgb(255, 255, 255)", "Light sets data-theme=light on white");
check((await page.getByRole("button", { name: /^Ground / }).count()) === 3, "ground swatches shown in Light");
await page.getByRole("button", { name: "Cobalt accent" }).click();
check((await accentVar()) === "#1F3BFF", `Cobalt sets --accent (${await accentVar()})`);
check(page.url().endsWith("/?theme=light&accent=cobalt"), `URL records the choice (${page.url()})`);
await page.reload({ waitUntil: "networkidle" });
check((await root(page).getAttribute("data-theme")) === "light" && (await accentVar()) === "#1F3BFF", "reloading the link restores Light + Cobalt");

console.log("Contrast sweep");
for (const [label, q] of [["Light · Cobalt", "/?theme=light&accent=cobalt"], ["Dark · Cobalt", "/?theme=dark&accent=cobalt"], ["Dark · Grey", "/?theme=dark&accent=grey"], ["Light · Grey", "/?theme=light&accent=grey"]]) {
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

console.log("Work & project pages");
await page.goto(`${base}/work/`, { waitUntil: "networkidle" });
const cards = page.locator('a[href^="/work/project-"]');
const allCount = await cards.count();
await page.getByRole("radio", { name: "Music videos" }).click();
check((await cards.count()) === 2 && (await page.getByText("2 films · [NN] in total").isVisible()), `Music videos filter shows 2 of ${allCount}`);
await page.keyboard.press("ArrowRight");
check((await page.getByRole("radio", { name: "Fashion films" }).getAttribute("aria-checked")) === "true", "arrow key moves the filter");
await page.getByRole("radio", { name: "All work" }).click();
await cards.first().click();
await page.waitForURL(/\/work\/project-01\/?$/);
const film = page.getByRole("button", { name: "Play the film" });
await film.click();
check((await page.getByRole("button", { name: "Pause the film" }).getAttribute("aria-pressed")) === "true" && (await page.getByText(/Now playing/).isVisible()), "project play toggle → Now playing");
check((await page.locator('a[href="/work/project-02/"], a[href="/work/project-02"]').count()) > 0, "Next up links to project-02");
check((await page.getByRole("link", { name: "Work" }).first().getAttribute("aria-current")) === "page", "nav marks Work active on a project page");
await page.goto(`${base}/work/project-08/`, { waitUntil: "networkidle" });
check((await page.locator('a[href^="/work/project-01"]').count()) > 0, "last project's Next up wraps to project-01");

console.log("Originals");
await page.goto(`${base}/originals/`, { waitUntil: "networkidle" });
const rows = page.locator('section[aria-label="All episodes"] button');
await page.getByRole("button", { name: "Play the latest episode" }).click();
check((await rows.nth(0).getAttribute("aria-pressed")) === "true", "featured player lights up episode row 1");
await rows.nth(2).click();
check((await page.getByRole("button", { name: "Play the latest episode" }).getAttribute("aria-pressed")) === "false" && (await rows.nth(2).getAttribute("aria-pressed")) === "true", "playing row 3 pauses the featured player");

console.log("Start a project");
await page.goto(`${base}/`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: "music video", exact: true }).click();
await page.getByRole("button", { name: "agency", exact: true }).click();
await page.getByRole("link", { name: /Tell us the rest/ }).click();
await page.waitForURL(/start-a-project/);
await page.waitForTimeout(300);
check((await page.getByRole("radio", { name: "music video" }).getAttribute("aria-checked")) === "true" && (await page.getByRole("radio", { name: "agency" }).getAttribute("aria-checked")) === "true", `homepage sentence pre-fills the form (${new URL(page.url()).search})`);
const summary = () => page.locator("form p").first().innerText().then((x) => x.replace(/\s+/g, " "));
check(/You need a music video for an agency, as soon as possible\./.test(await summary()), `live sentence → "${await summary()}"`);
await page.getByRole("radio", { name: "Flexible" }).click();
check(/whenever it’s right\./.test(await summary()), "When chip updates the sentence");
await page.getByRole("radio", { name: "music video" }).focus();
await page.keyboard.press("ArrowRight");
check((await page.getByRole("radio", { name: "fashion film" }).getAttribute("aria-checked")) === "true" && (await page.evaluate(() => document.activeElement?.textContent)) === "fashion film", "ArrowRight selects and focuses the next format");
check((await page.locator('[role="radiogroup"]').count()) === 4 && (await page.locator('[role="radio"][tabindex="0"]').count()) === 4, "4 radio groups, one tab stop each");
await page.getByRole("button", { name: "Send it over →" }).click();
check((await page.locator('[aria-invalid="true"]').count()) === 3, "empty submit flags name, email and brief");
check((await page.evaluate(() => document.activeElement?.getAttribute("name"))) === "name", "focus moves to the first error");
await page.getByLabel("Your name").fill("Test Person");
await page.getByLabel("Email").fill("not-an-email");
await page.getByLabel("The story so far").fill("A launch film.");
await page.getByRole("button", { name: "Send it over →" }).click();
check((await page.getByText("That email doesn’t look quite right.").isVisible()), "bad email is caught");
await page.getByLabel("Email").fill("test@brand.com");
await page.getByRole("button", { name: "Send it over →" }).click();
await page.waitForURL(/\/thanks\/?$/, { timeout: 8000 }).catch(() => {});
check(/\/thanks\/?$/.test(new URL(page.url()).pathname), `valid submit lands on /thanks (${page.url()})`);
check(await page.getByText("Cut. Print. Talk soon.").isVisible(), "Thanks footer sign-off");
check((await page.getByRole("link", { name: "Start a project" }).first().getAttribute("aria-current")) === "page", "nav CTA marked current on Thanks");

console.log("Legal, 404");
await page.goto(`${base}/privacy/`, { waitUntil: "networkidle" });
await page.getByRole("navigation", { name: "On this page" }).getByRole("link", { name: "Cookies" }).click();
await page.waitForTimeout(300);
const inView = await page.locator("#p7").evaluate((el) => { const r = el.getBoundingClientRect(); return r.top >= 0 && r.top < 200; });
check(page.url().endsWith("#p7") && inView, "Privacy anchor nav jumps to Cookies");
check((await page.locator("#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10, #p11, #p12, #p13").count()) === 13, "Privacy has 13 sections");
await page.goto(`${base}/terms/`, { waitUntil: "networkidle" });
check((await page.locator('section[id^="t"]').count()) === 11, "Terms has 11 sections");
const res = await page.goto(`${base}/missing-page/`, { waitUntil: "networkidle" });
check(res.status() === 404 && (await page.getByText("This scene didn’t make the edit.").isVisible()), `unknown URL → 404 page (${res.status()})`);

console.log("Theme across pages");
await page.goto(`${base}/?theme=light&accent=cobalt`, { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Dark theme" }).click();
await page.getByRole("button", { name: "Orange accent" }).click();
await page.locator('nav a[href="/studio"], nav a[href="/studio/"]').first().click();
await page.waitForURL(/\/studio/);
check((await root(page).getAttribute("data-theme")) === "dark" && (await accentVar()) === "#FF8A00", "Dark + Orange carries over on client navigation");
await page.goto(`${base}/people/`, { waitUntil: "networkidle" });
check((await root(page).getAttribute("data-theme")) === "dark" && (await accentVar()) === "#FF8A00", "…and after a fresh load without the query");
await page.goto(`${base}/?theme=dark&accent=grey`, { waitUntil: "networkidle" }); // back to the defaults

console.log("Mobile menu");
const phone = await browser.newPage({ viewport: { width: 390, height: 844 } });
await phone.goto(`${base}/work/`, { waitUntil: "networkidle" });
await phone.getByRole("button", { name: "Open menu" }).click();
const menu = phone.locator("#fm-menu");
check(await menu.isVisible(), "menu opens");
await phone.keyboard.press("Escape");
check(!(await menu.isVisible()), "Esc closes the menu");
await phone.getByRole("button", { name: "Open menu" }).click();
await menu.getByRole("link", { name: /Originals/ }).click();
await phone.waitForURL(/\/originals/);
await phone.waitForTimeout(300);
check(!(await menu.isVisible()), "navigating closes the menu");
await phone.close();

console.log("Contrast sweep · every page");
const PAGES = ["/work/", "/work/project-01/", "/studio/", "/originals/", "/people/", "/start-a-project/", "/thanks/", "/privacy/", "/terms/", "/missing-page/"];
for (const [label, q] of [["Light · Cobalt", "theme=light&accent=cobalt"], ["Dark · Cobalt", "theme=dark&accent=cobalt"], ["Dark · Grey", "theme=dark&accent=grey"], ["Light · Grey", "theme=light&accent=grey"]]) {
  const bad = [];
  for (const r of PAGES) {
    await page.goto(`${base}${r}?${q}`, { waitUntil: "networkidle" });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.waitForTimeout(250);
    bad.push(...(await contrastSweep(page)).map((b) => `${r} ${b}`));
  }
  check(bad.length === 0, `${label}: every page ≥ WCAG AA${bad.length ? `\n      ${bad.slice(0, 15).join("\n      ")}` : ""}`);
}

check(errors.length === 0, `no page errors${errors.length ? `: ${errors.join("; ")}` : ""}`);
await browser.close();
process.exit(failures ? 1 : 0);
