Paste this into Claude Code from inside the FreakyMack-Website folder:

---

Read Design/BRIEF.md in full, then look at all four boards in Design/boards/ and the two screenshots in Design/references/.

Build all four homepage options as one Next.js (App Router) + Tailwind project in this folder, following the "Build all four options: site structure" section of the brief:

- `/` is a pitch index linking to the four options
- `/option-a`, `/option-b`, `/option-c` and `/option-d` are each built from their board

For each option:
- Match the board exactly at 1440px: layout, copy, font families, sizes, weights, line-heights, letter-spacing, colours and spacing (all values are inline styles in the .dc.html).
- Port the interactions from each board's `renderVals()` script to real React state.
- Make it responsive down to 390px.
- Use the logos in Design/assets.
- Keep every [PLACEHOLDER] visible.
- Add the floating "← All options · A B C D" switcher.

Keep each option's components and styles isolated in their own folder.

Work in this order: project setup and the index, then A, B, C, D. After each option, run the dev server and check it at 1440px and 390px before starting the next. Finish with `npm run build` passing.

Before you start, give me a short plan listing the components you'll create for each option.
