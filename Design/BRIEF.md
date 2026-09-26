# Freaky Mack Studios — Website build brief

Read this first. It explains what's in `Design/` and how to turn it into a real website.

## The client

- **Client:** Freaky Mack Studios, a film production house built on six years of advertising filmmaking at Freaky Mack, now a larger creative studio for commercial, narrative and digital storytelling.
- **Final approver:** Izaan Khan, Founder & Creative Producer (freakymackstudios@gmail.com, +91 97115 42274). He is the only approver.
- **Past clients (named in the brief):** McDonald's, Google, Adidas Originals, Mercedes-Benz, Fila, PC Jewellers, Times of India "and many more".
- **Services to show:** Ad films, Music videos, Fashion films, Event films, Documentaries, Short films / web series, Podcast / YouTube, Post-production.
- **Main goal:** showcase the work, attract new enquiries, strengthen online visibility.
- **Audience:** brands, agencies, music labels, fashion brands, models & actors.
- **Look & feel:** minimal, premium, clean. **Black & white only (like the logo).** Moderate animation, smooth transitions.
- **Pages (eventually):** Home, Work / Portfolio, About the studio, Services, Team, Podcast / Originals, Contact.
- **Timeline:** *"We need at least a landing page with showreel as soon as possible, then we can develop the full website."* **Build the homepage first: all four design options for it, so the client can choose.**

The original questionnaire is `Documentation/FreakyMack_Website_Client_Questionnaire_Short.pages`.

### Features: what launches now and what comes later

| Feature | When |
|---|---|
| Showreel on homepage (autoplay loop + "watch full reel") | **Now** |
| Project pages (video, stills, credits) | **Now** |
| Enquiry form ("start a project", sent to email) | **Now** |
| Podcast & YouTube section | **Now** |
| Client logos & testimonials | **Now** |
| Portfolio filters by category | Later |
| WhatsApp button | Later |
| Instagram feed | Later |
| CMS for the team to add projects | Later |
| SEO & analytics | Later |

## What's in this folder

```
Design/
├── BRIEF.md                  ← this file
├── boards/                   ← four homepage design options (the source of truth for layout + copy)
│   ├── option-a-story.dc.html
│   ├── option-b-split-filmstrip.dc.html
│   ├── option-c-cinematic.dc.html
│   └── option-d-production-squad.dc.html
├── assets/
│   ├── fm-mark-white.png         ← blob mark only, white on transparent
│   ├── fm-logo-white.png         ← full lockup (mark + FREAKY MACK STUDIOS), white on transparent
│   └── fm-logo-black-original.png← original black-on-white logo from the client
└── references/               ← screenshots of the two sites the client liked (Options C and D follow these)
```

### About the `.dc.html` files

These are design boards exported from a design canvas. They **will not run as a normal website**: they need that canvas's own runtime (`support.js`, `<x-dc>`, `{{holes}}`, `<sc-for>`, `<sc-if>`). Treat them as a **pixel-accurate spec**:

- All layout, spacing, font sizes, colours and copy are written as **inline styles** on each element. Copy the values exactly.
- Each board is a fixed **1440px-wide** desktop frame. Build it fluid and responsive down to **390px** mobile.
- `{{name}}` placeholders are filled from the `class Component … renderVals()` script at the bottom of each file. That script also holds the interactive behaviour (accordion, click-to-swap testimonial, hover previews) and repeated lists (projects, crew, brands). Port that logic to real components.
- Image paths already point to `../assets/…`. Grey and gradient blocks labelled `[ STILL ]`, `[ PORTRAIT ]`, `[ SHOWREEL … ]` are **image or video placeholders**.

## The four options

**Build all four.** They're for a client pitch: Izaan will click through each one in a browser and pick one. Each option is its own complete homepage. Don't mix styles between them.

| Option | File | Summary | Fonts |
|---|---|---|---|
| **A · Story** | `option-a-story.dc.html` | White ground, told in chapters ("Chapter 00 — Once upon a brief"…). Tilted reel card that expands, hover-to-preview work list, click-to-build sentence ("You need [a music video] for [a fashion label]"), stickers, episode "now playing" states. One accent colour, default **Cobalt #1F3BFF**. | Plus Jakarta Sans + Instrument Serif (italic accents) |
| **B · Split & filmstrip** | `option-b-split-filmstrip.dc.html` | Same chapter voice as A, calmer. Split hero with a tilted reel, horizontal filmstrip of work, big numbered services list, dark contact slab. | Plus Jakarta Sans + Instrument Serif |
| **C · Cinematic** | `option-c-cinematic.dc.html` | Dark, filmic, follows `references/reference-1-cinematic.jpg`. Viewfinder corner marks, split buttons (label + arrow box), overlays on full-bleed stills, services accordion, client-story switcher, timeline, crew grid. 160px side margins. | Plus Jakarta Sans |
| **D · Production squad** | `option-d-production-squad.dc.html` | Black with white sections, follows `references/reference-2-production-squad.jpg`. Grid hero with highlighted title blocks, client logo grid, giant FREAKY MACK wordmark, project bands, numbers staircase, service rows, clients table, 01/02/03 process, "[ Let's make … A film ]" CTA. Blob mark used throughout. | Archivo |

Fonts are all on Google Fonts. The `<link>` tags are in each board's `<helmet>`.

## Placeholders (keep as-is until the client sends content)

Anything in square brackets is missing content. Leave it visible so the client can see what's needed. Don't invent replacements:

- `[YEAR]`, `[DURATION]`, `[CITY]`, `[STUDIO ADDRESS]`, `[NN]` (films-delivered count), `[DAYS]`/`[HOURS]`, `[MONTH]`
- `[Project title]`, `[Client]`, `[Artist]`, `[Brand]`, `[Format]`
- `[Name]`, `[Role]` for crew and testimonials. Only **Izaan Khan, Founder & Creative Producer** is confirmed.
- `[Client testimonial …]`: use real quotes only, with permission.
- Social links currently point to generic domains (instagram.com, youtube.com…). Swap in the real handles when they arrive.

The client still owes these files (listed in the questionnaire): logo vectors, brand fonts (if any), a 10–15s homepage loop plus the full reel link, project video links, 3–5 stills per project, project credits, about text, team photos, client logos and testimonials with permission, contact and social links, domain and hosting details.

## Build all four options: site structure

One project, one deploy, four homepages side by side:

| Route | Builds from | Notes |
|---|---|---|
| `/` | — | **Pitch index.** Black page with the Freaky Mack logo and four cards (A, B, C, D). Each card has the option name, the one-line summary from the table above, and a thumbnail or screenshot, and links to its route. |
| `/option-a` | `boards/option-a-story.dc.html` | Interactive: reel expand, hover-preview work list, sentence builder, episode play states, one accent CSS variable (default #1F3BFF). |
| `/option-b` | `boards/option-b-split-filmstrip.dc.html` | Horizontal filmstrip should scroll or drag sideways on desktop and swipe on mobile. |
| `/option-c` | `boards/option-c-cinematic.dc.html` | Interactive: services accordion, client-story switcher (click a brand tile to swap the quote and still). |
| `/option-d` | `boards/option-d-production-squad.dc.html` | Mostly static. Footer "What are we making?" select feeds the enquiry. |

Rules:

- **Separate styles per option.** Each option has its own fonts, colours and component styles. Put each option's components in its own folder (e.g. `app/option-a/…` or `src/options/a/…`) so changing one never changes another. Only share genuinely neutral pieces: the enquiry-form submit handler, the video/reel component logic, and the logo assets.
- **Load only what each page needs.** Load each page's Google Fonts on that page (`next/font` per route is fine).
- **Floating switcher on every option page.** Add a small, unobtrusive "← All options · A B C D" pill fixed to the bottom corner so the client can jump between options during the pitch. Make it easy to remove later with a single flag.
- **Placeholders and assets** are the same for all four. See the Placeholders section.
- **Build order:** set up the project and the `/` index, then A → B → C → D, checking each at 1440px and 390px before moving on.
- **Done means:** all five routes work, `npm run build` passes, and each option matches its board's layout, copy, type sizes and spacing at 1440px and reflows cleanly at 390px.

## Build notes

- **Stack:** your call. Suggested: Next.js (App Router) + Tailwind with static export. It needs to be quick to ship and easy to deploy to Vercel or Netlify for the pitch link.
- **Showreel:** a muted, looping, `playsinline` autoplay `<video>` with a poster image. "Watch full reel" opens a YouTube/Vimeo embed in a modal or expands in place (Option A expands the card).
- **Enquiry form:** name, email, brief (plus a format select in D). It should email freakymackstudios@gmail.com, e.g. via Formspree, Resend or a serverless function.
- **Motion:** keep it moderate. Hover scales on stills, marquee strips, the blob-mark float, reel expand. Respect `prefers-reduced-motion`.
- **Accessibility:** real `<a>`/`<button>`, labelled inputs, `alt` on images, contrast at least 4.5:1.
- **Colour:** the brief says black & white only. Option A's single accent is an optional extra shown to the client. Make it one CSS variable so it can be removed.
