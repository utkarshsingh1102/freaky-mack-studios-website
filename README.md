# freaky-mack-studios-website

Homepage for Freaky Mack Studios: the chosen **Option A · Story** design, built from `Design/boards/option-a-story.dc.html` (brief: `Design/BRIEF.md`). It comes in two themes, **Light** (the approved board) and **Dark** (black background, white text), plus one accent colour.

Next.js (App Router) + Tailwind, built as a static export.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to out/
npm run lint
```

## Themes and accent (client review)

While `PITCH_MODE` is on, a small floating picker lets the client compare:

- **Theme:** Light or Dark.
- **Accent:** Cobalt, Grey, Lime, Orange or Pink. The accent is used on buttons, badges and the "films" highlight.
- **Ground** (Light only): three off-white backgrounds from the board.

Each choice is written to the URL, so you can send a direct link to any variant:

| Variant | Link |
|---|---|
| Light · Cobalt (default) | `/` |
| Dark · Cobalt | `/?theme=dark` |
| Dark · Grey | `/?theme=dark&accent=grey` |
| Light · Grey | `/?accent=grey` |

Old pitch links (`/option-a/` … `/option-d/`) redirect to `/`.

### Locking in the final look

1. In `src/app/_components/theme.ts`, set `DEFAULT_THEME` (`"light"` or `"dark"`) and `DEFAULT_ACCENT` (`"cobalt"`, `"grey"`, `"lime"`, `"orange"` or `"pink"`). For Light, also set `DEFAULT_GROUND`.
2. Turn the picker off. Either set the environment variable `NEXT_PUBLIC_PITCH_MODE=off` (on Vercel: Settings → Environment Variables, then redeploy), or make `PITCH_MODE` false in `src/shared/config.ts`.

## Deploy on Vercel

1. On vercel.com, log in with GitHub → **Add New… → Project** → import `utkarshsingh1102/freaky-mack-studios-website`. If it isn't listed, use **Adjust GitHub App Permissions** to give Vercel access.
2. Keep the detected defaults: Framework **Next.js**, Root `./`, Build `next build`, Output left blank. Vercel serves the static export.
3. Optional environment variables:
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: your Formspree form URL, so enquiries arrive by email.
   - `NEXT_PUBLIC_PITCH_MODE=off`: hides the theme picker once the look is locked in.
4. Click **Deploy**. Every push to `main` redeploys automatically.

Node 20.9 or newer is required (set in `package.json` → `engines`).

## Where things live

- `src/app/page.tsx` and `src/app/layout.tsx`: the homepage entry and fonts.
- `src/app/_components/`: the page sections, `Home.tsx` (theme state) and `ThemePicker.tsx`. `theme.ts` holds the accents, grounds and defaults.
- `src/app/home.module.css`: the Light/Dark colour tokens, hover states and animations.
- `src/shared/`:
  - the enquiry submit handler (`enquiry.ts`)
  - the showreel loop and embed (`reel.tsx`)
  - the logo imports (read from `Design/assets`)
  - `config.ts`

## Settings

- **Enquiries:** set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (e.g. `https://formspree.io/f/xxxx`) so forms post to freakymackstudios@gmail.com. Without it, submitting opens a pre-filled email instead.
- **Showreel:** fill `REEL.loopSrc` / `poster` / `fullEmbedUrl` in `src/shared/config.ts`. Until then the `[ … ]` placeholders stay visible.

All `[PLACEHOLDER]` text is intentional. It marks content the client still owes (see the brief).

## Checks

With a server running (`npm run dev`, or `npx serve out -l 4000` plus `--base http://localhost:4000`):

```bash
node scripts/shoot.mjs --out shots --seg 1500              # Light and Dark at 1440 and 390: overflow and console-error check
node scripts/shoot.mjs "/?theme=dark&accent=grey" --out shots   # any variant
node scripts/interact.mjs                                  # interactions, theme picker, old-link redirect, WCAG contrast sweep in both themes
```
