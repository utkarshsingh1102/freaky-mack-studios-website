# Freaky Mack Studios — website

The design is approved. This repo has the final designs (Option A, "Story") for every page of the Freaky Mack Studios website, ready to be built into a real site.

**Start here:** open `design/screenshots/` to see every page, then read `CLAUDE.md` for the build instructions.

## The client

- **Freaky Mack Studios** began as six years of advertising filmmaking at Freaky Mack and is now a larger creative studio for commercial, narrative and digital storytelling.
- **Final approver:** Izaan Khan, Founder & Creative Producer · freakymackstudios@gmail.com · +91 97115 42274.
- **Past clients:** McDonald's, Google, Adidas Originals, Mercedes-Benz, Fila, PC Jewellers, Times of India.
- **Services:** Ad films, Music videos, Fashion films, Event films, Documentaries, Short films / web series, Podcast / YouTube, Post-production.
- **Goal:** show the work, bring in new enquiries, and strengthen online visibility.
- **Audience:** brands, agencies, music labels, fashion brands, models and actors.
- **Look:** minimal, premium, clean. Black & white with one accent (Cobalt `#1F3BFF`), and moderate, smooth motion.

## What's in here

```
freakymack-website/
├── README.md                 ← this file
├── CLAUDE.md                 ← build instructions for Claude Code
├── assets/brand/
│   ├── fm-mark-white.png         ← blob mark, white on transparent (use CSS invert on white backgrounds)
│   ├── fm-logo-white.png         ← full lockup, white on transparent
│   └── fm-logo-black-original.png← client's original logo
└── design/
    ├── canvas.json           ← index of the design canvas (board titles and order)
    ├── boards/               ← one .dc.html per page, the source of truth for layout and copy
    └── screenshots/          ← full-page 1440px renders of every board
```

## Pages

| Board | Screenshot | Route | What it is |
|---|---|---|---|
| `Main.dc.html` | `01-Main.jpg` | `/` | Home: the full chapter-by-chapter story |
| `Work.dc.html` | `02-Work.jpg` | `/work` | Portfolio with filter chips and a staggered two-column grid |
| `Project.dc.html` | `03-Project.jpg` | `/work/[slug]` | Case-study template: video, credits, brief / idea / on screen, stills, next project |
| `Studio.dc.html` | `04-Studio.jpg` | `/studio` | About: story, timeline, beliefs, services, process, clients |
| `Originals.dc.html` | `05-Originals.jpg` | `/originals` | Podcast / YouTube: featured player, episode list, slate, "Pitch us" |
| `People.dc.html` | `06-People.jpg` | `/people` | Founder, crew grid, collaborators, "Email your reel" |
| `Contact.dc.html` | `07-Contact.jpg` | `/start-a-project` | Enquiry form: chip questions, live summary sentence, fields |
| `Thanks.dc.html` | `08-Thanks.jpg` | `/thanks` | Shown after the form is sent |
| `NotFound.dc.html` | `09-NotFound.jpg` | 404 | "Cut! This scene didn't make the edit." |
| `Privacy.dc.html` | `10-Privacy.jpg` | `/privacy` | Privacy policy draft (India DPDP Act 2023) |
| `Terms.dc.html` | `11-Terms.jpg` | `/terms` | Terms of use draft |
| `SiteNav.dc.html` | `12-SiteNav.jpg` | component | Shared header used by every page except Home |
| `SiteFooter.dc.html` | `13-SiteFooter.jpg` | component | Shared footer used by every page except Home |

## What launches now and what comes later

| Feature | When |
|---|---|
| Showreel on the homepage (autoplay loop + "watch full reel") | Now |
| Project pages (video, stills, credits) | Now |
| Enquiry form (sent to email) | Now |
| Podcast & YouTube section | Now |
| Client logos & testimonials | Now |
| Portfolio filters by category | Designed now; can ship later |
| WhatsApp button, Instagram feed | Later |
| CMS for the team to add projects | Later |
| SEO & analytics | Later |

## Content still owed by the client

Anything in `[square brackets]` in the designs is missing content, such as `[Project title]`, `[Client]`, `[Name]`, `[Role]`, `[YEAR]`, `[CITY]`, `[STUDIO ADDRESS]`, `[X] days` and the `[Range 1–3]` budget options. Keep these placeholders visible until real content arrives, and don't invent replacements.

The client still needs to send:

- Logo vectors.
- A 10–15s homepage loop and the full reel link.
- Project videos, 3–5 stills per project, and credits.
- About text.
- Team photos.
- Client logos, and testimonials with permission.
- Social handles.
- Domain and hosting details.

**Legal:** Privacy and Terms are drafts. Fill every bracket, including the legal entity, address, city, hosting / form / analytics tools, retention period and grievance officer. Have a lawyer review both before launch.
