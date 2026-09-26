# freaky-mack-studios-website

Homepage pitch for Freaky Mack Studios: four complete homepage options plus a master page to choose between them. The brief is `Design/BRIEF.md` and the source boards are `Design/boards/`.

| Route | What it is |
|---|---|
| `/` | Master page (light theme): 2×2 grid of the four options, each card links to its homepage |
| `/option-a/` | A · Story (`option-a-story.dc.html`) |
| `/option-b/` | B · Split & filmstrip (`option-b-split-filmstrip.dc.html`) |
| `/option-c/` | C · Cinematic (`option-c-cinematic.dc.html`) |
| `/option-d/` | D · Production squad (`option-d-production-squad.dc.html`) |

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/ (deploy the folder to Vercel, Netlify or any static host)
npm run lint
```

Next.js (App Router) + Tailwind, built as a static export.

## Deploy on Vercel

1. On vercel.com, log in with GitHub → **Add New… → Project** → import `utkarshsingh1102/freaky-mack-studios-website`. If it isn't listed, use **Adjust GitHub App Permissions** to give Vercel access.
2. Keep the detected defaults: Framework **Next.js**, Root `./`, Build `next build`, Output left blank. Vercel serves the static export.
3. Optional environment variables:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: your Formspree form URL, so enquiries arrive by email.
   - `NEXT_PUBLIC_PITCH_MODE=off`: hides the option switcher and Option A's picker once the client has chosen.
4. Click **Deploy**. Every push to `main` redeploys automatically; pushes to other branches get their own preview links.

Node 20.9 or newer is required (set in `package.json` → `engines`).

## Where things live

- `src/app/option-{a,b,c,d}/`: each option is self-contained, with its own fonts (`layout.tsx`), CSS module (hover states, animations) and `_components/`. Changing one never touches another.
- `src/shared/`: only neutral pieces:
  - the option switcher
  - the enquiry submit handler (`enquiry.ts`)
  - the showreel loop, embed and modal (`reel.tsx`)
  - the logo imports (read from `Design/assets`)
  - `config.ts`
- `src/app/page.tsx` + `src/app/_index/`: the master page. Card thumbnails are in `public/thumbs/`.

## Settings

- **Pitch UI:** set `PITCH_MODE` in `src/shared/config.ts`, or `NEXT_PUBLIC_PITCH_MODE=off` at build time. This hides the floating "← All options · A B C D" switcher and Option A's accent/ground picker.
- **Enquiries:** set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (e.g. `https://formspree.io/f/xxxx`) so forms post to freakymackstudios@gmail.com. Without it, submitting opens a pre-filled email instead.
- **Showreel:** fill `REEL.loopSrc` / `poster` / `fullEmbedUrl` in `src/shared/config.ts`. Until then the `[ … ]` placeholders stay visible.
- **Option A accent:** the `--accent` CSS variable (default Cobalt `#1F3BFF`) in `src/app/option-a/_components/OptionA.tsx`.

All `[PLACEHOLDER]` text is intentional. It marks content the client still owes (see the brief).

## Checks

With a server running (`npm run dev`, or `npx serve out -l 4000` plus `--base http://localhost:4000`):

```bash
node scripts/shoot.mjs --out shots --seg 1500   # full-page shots at 1440 and 390, overflow and console-error check
node scripts/interact.mjs                        # each board's renderVals() interactions
node scripts/shoot.mjs --thumbs                  # regenerate public/thumbs/ for the master page
```
