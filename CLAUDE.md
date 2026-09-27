# CLAUDE.md — build the Freaky Mack Studios website

You are turning approved designs into a production website. The designs are final, so match them. Don't redesign them.

## Source of truth

- `design/boards/*.dc.html` holds one board per page. Each board has the layout, every spacing and type value, and all copy.
- `design/screenshots/*.jpg` holds a full-page render of each board at 1440px. Compare your build against these.
- `README.md` has the client brief, the page-to-route map and the list of owed content.

### How to read a `.dc.html` board

The boards were exported from a design canvas. **They do not run as a normal website**: they depend on that canvas's runtime (`support.js`, `<x-dc>`), which isn't included. Read them as a precise spec:

- **Styles:** all styles are inline on each element (px sizes, colours, gaps, letter-spacing). Copy the values exactly. Shared rules (hover states, `.fm-link`, legal typography) are in the `<style>` block inside `<helmet>`.
- **`{{name}}` holes:** these are filled from `class Component … renderVals()` in the `<script type="text/x-dc">` at the bottom of each file. That script is where the data lives (project lists, crew, episodes, services, filter chips) and where the interaction logic lives (`this.setState(...)`). Port it to real component state and data files.
- **Loops and conditions:** `<sc-for list="{{items}}" as="it">` is a loop over a list, and `<sc-if value="{{x}}">` is conditional rendering.
- **Shared components:** `<dc-import name="SiteNav" active="work">` and `<dc-import name="SiteFooter">` embed the shared header and footer from `SiteNav.dc.html` and `SiteFooter.dc.html`.
- **Props:** `data-props` lists the design props. `accent` defaults to `#1F3BFF`, `onAccent` to `#fff`, and `SiteNav.active` marks the current page.
- **Frame size:** boards are fixed 1440px-wide frames with a set height. Ignore the fixed height and `overflow: hidden` on the outer `#top` div, because real pages flow naturally.
- **Links:** they point to other boards (`Work.dc.html`). Map them to routes using the table below.
- **Images:** logo paths point to `../../assets/brand/…`. Grey or gradient blocks labelled `[ STILL ]`, `[ PORTRAIT ]`, `[ SHOWREEL … ]` etc. are image or video placeholders.

## Routes

| Board | Route | Interactive behaviour to port |
|---|---|---|
| Main | `/` | Reel card expands and collapses (`reelOpen`). Hovering a work-list row previews it (`hovered`). A click-to-build sentence has `fmt` + `who` chips and feeds its choices into `/start-a-project` as query params. Episode play/pause (`playing`). The floating blob mark. Home has **its own** nav and footer markup; keep it. |
| Work | `/work` | Filter chips (`filter`) filter the two staggered, tilted columns. Each card links to `/work/[slug]`. |
| Project | `/work/[slug]` | A template, driven by a `projects` data file (title, client, format, year, video URL, credits, brief/idea/on-screen text, stills, next project). Play toggle on the video. |
| Studio | `/studio` | Mostly static. |
| Originals | `/originals` | Clicking an episode sets it playing in the featured player, with SVG play/pause states (`playing`). |
| People | `/people` | Static; the crew list is data. |
| Contact | `/start-a-project` | Single-select chip groups `fmt` / `who` / `when` / `budget`. A live summary sentence updates from the chips. Name, email, phone, company, link and brief fields. "Send it over →" submits and goes to `/thanks`. |
| Thanks | `/thanks` | Static. |
| NotFound | `not-found` / 404 | Static. |
| Privacy | `/privacy` | "On this page" anchor nav, sticky on desktop. |
| Terms | `/terms` | Same as Privacy. |

## Stack (suggested)

Use **Next.js (App Router) + TypeScript + Tailwind**, deployed on Vercel.

- **Fonts:** load *Plus Jakarta Sans* (400/500/600/800) and *Instrument Serif* (regular + italic) with `next/font/google`.
- **Shared layout:** build `SiteNav` and `SiteFooter` once in the root layout, with `active` derived from the pathname. Home uses its own header/footer variant, as the Main board does.
- **Content:** keep it in typed data files under `content/` (projects, episodes, crew, services, clients) so a CMS can replace it later.
- **Enquiry form:** submit to freakymackstudios@gmail.com via Resend, Formspree or a route handler. Include every chip answer and field. Validate that name, email and brief are filled.

## Design system

- **Colours:**
  - Background `#ffffff`, text `#0a0a0a`, muted text `#5c5c5c` / `#6b6b6b`, hairlines `#e4e4e0`.
  - One accent: `--accent: #1F3BFF`, with `--on-accent: #ffffff` for text on it. Put these in CSS variables so the accent can be swapped or removed in one place, because the brief originally said black & white only.
- **Type:**
  - Headlines are Plus Jakarta Sans 800, UPPERCASE, tight tracking (about -0.03em).
  - The accent words inside headlines are Instrument Serif italic, not uppercase, often in the accent colour.
  - Chapter labels ("Chapter 01 — …") are Instrument Serif italic.
- **Layout:** 96px side padding at 1440px and a 12-column grid with a 32px gap.
- **Signature details:**
  - Slightly tilted cards and stickers (±1–3°).
  - Pill buttons and chips (`border-radius: 999px`).
  - The blob mark, using `filter: invert(1)` on white backgrounds.
- **Motion:**
  - Keep it moderate: hover lift or scale on cards, smooth reel expand, and a gentle float on the blob mark.
  - Respect `prefers-reduced-motion`.

## Rules

1. **Responsive:** match the boards at 1440px, then make every page reflow cleanly at 1024, 768 and 390px. On mobile, grids stack, tilts can reduce, and the nav collapses into a menu button.
2. **Placeholders:** keep every `[bracket]` placeholder visible exactly as written. Never invent project names, people, numbers, testimonials, addresses or legal details.
3. **Accessibility:**
   - Use real `<a>` and `<button>` elements, labelled inputs, `alt` text and visible focus states.
   - Chip groups should work as radio groups.
   - Contrast must be at least 4.5:1.
4. **Videos:** use a muted, looping, `playsInline` autoplay `<video>` with a poster for loops. Full films open in a YouTube or Vimeo embed.
5. **SEO basics:** a title and description on every page, Open Graph image, `sitemap.xml` and `robots.txt`.
6. **Legal:** Privacy and Terms are drafts for India (DPDP Act 2023). Build them as written with the brackets left in. A lawyer reviews them before launch.

## Build order

1. Scaffold the project, set up the design tokens and fonts, and build `SiteNav` + `SiteFooter`.
2. Build Home (`/`).
3. Build Work, then Project (with 2–3 placeholder projects in the data file).
4. Build Studio, Originals and People.
5. Build Start a project, then Thanks (with a working form submission).
6. Build 404, Privacy and Terms.
7. Do a responsive pass, an accessibility pass and a metadata pass.

After each page, compare it with its screenshot at 1440px and check it at 390px.

**Done means:** every route renders, `npm run build` passes with no type or lint errors, every page matches its board at 1440px, and every page reflows cleanly at 390px.
