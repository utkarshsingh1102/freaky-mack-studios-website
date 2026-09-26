import type { OptionLetter } from "@/shared/config";

export type IndexOption = {
  letter: OptionLetter;
  name: string;
  href: string;
  summary: string;
  fonts: string;
  scheme: string;
  thumb: string;
};

/** Summaries are the one-liners from Design/BRIEF.md → "The four options". */
export const INDEX_OPTIONS: IndexOption[] = [
  {
    letter: "A",
    name: "Story",
    href: "/option-a/",
    summary:
      "White ground, told in chapters. Tilted reel card that expands, hover-to-preview work list, click-to-build sentence, stickers and episode “now playing” states. One accent colour, default Cobalt.",
    fonts: "Plus Jakarta Sans + Instrument Serif",
    scheme: "White · Cobalt accent",
    thumb: "/thumbs/option-a.jpg",
  },
  {
    letter: "B",
    name: "Split & filmstrip",
    href: "/option-b/",
    summary:
      "Same chapter voice as A, calmer. Split hero with a tilted reel, horizontal filmstrip of work, big numbered services list, dark contact slab.",
    fonts: "Plus Jakarta Sans + Instrument Serif",
    scheme: "White · Black",
    thumb: "/thumbs/option-b.jpg",
  },
  {
    letter: "C",
    name: "Cinematic",
    href: "/option-c/",
    summary:
      "Dark and filmic. Viewfinder corner marks, split buttons, overlays on full-bleed stills, services accordion, client-story switcher, timeline and crew grid.",
    fonts: "Plus Jakarta Sans",
    scheme: "Dark · Filmic",
    thumb: "/thumbs/option-c.jpg",
  },
  {
    letter: "D",
    name: "Production squad",
    href: "/option-d/",
    summary:
      "Black with white sections. Grid hero with highlighted title blocks, client logo grid, giant FREAKY MACK wordmark, project bands, numbers staircase and a “[ Let’s make … A film ]” CTA.",
    fonts: "Archivo",
    scheme: "Black · White sections",
    thumb: "/thumbs/option-d.jpg",
  },
];
