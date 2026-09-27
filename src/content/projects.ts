/**
 * Portfolio (Work board renderVals + the Project case-study template).
 * Every value in [brackets] is content the client still owes — keep it visible until it arrives.
 * `videoUrl`: a YouTube/Vimeo embed URL; empty shows the board's [ FILM ] placeholder.
 */
export type Category = "Ad film" | "Music video" | "Fashion film" | "Event film" | "Documentary" | "Short film";

export type Project = {
  slug: string;
  title: string;
  who: string;
  category: Category;
  year: string;
  bg: string;
  logline: string;
  videoUrl: string;
  duration: string;
  brief: string;
  idea: string;
  onScreen: string;
  credits: { role: string; who: string }[];
  stills: { label: string; bg: string }[];
};

const CREDIT_ROLES = ["Client", "Agency", "Director", "Producer", "Director of photography", "Editor", "Colour", "Sound"];

const base = (slug: string, who: string, category: Category, bg: string): Project => ({
  slug,
  title: "[Project title]",
  who,
  category,
  year: "[Year]",
  bg,
  logline: "[One-line logline — what the film is, in a sentence.]",
  videoUrl: "",
  duration: "[DURATION]",
  brief: "[Two or three lines on what the client needed and who it was for.]",
  idea: "[How we cracked it — the concept, the look, the one decision that made the film.]",
  onScreen: "[Where it ran and what happened — only real results, shared with the client’s permission.]",
  credits: CREDIT_ROLES.map((role) => ({ role, who: "[Name]" })),
  stills: [
    { label: "[ STILL 01 — WIDE ]", bg: "linear-gradient(160deg,#4a4a48,#141414)" },
    { label: "[ STILL 02 ]", bg: "linear-gradient(200deg,#5a5a58,#1a1a1a)" },
    { label: "[ STILL 03 ]", bg: "linear-gradient(140deg,#2a2a2a,#6a6a66)" },
  ],
});

export const PROJECTS: Project[] = [
  base("project-01", "[Client]", "Ad film", "linear-gradient(160deg,#3a3a3a,#111)"),
  base("project-02", "[Artist]", "Music video", "linear-gradient(200deg,#5a5a58,#1a1a1a)"),
  base("project-03", "[Brand]", "Fashion film", "linear-gradient(140deg,#2a2a2a,#6a6a66)"),
  base("project-04", "[Subject]", "Documentary", "linear-gradient(220deg,#444,#0e0e0e)"),
  base("project-05", "[Client]", "Event film", "linear-gradient(120deg,#777773,#222)"),
  base("project-06", "[Client]", "Ad film", "linear-gradient(180deg,#303030,#8a8a86)"),
  base("project-07", "Freaky Mack Originals", "Short film", "linear-gradient(150deg,#1a1a1a,#5a5a58)"),
  base("project-08", "[Artist]", "Music video", "linear-gradient(210deg,#6a6a66,#141414)"),
];

export const projectHref = (slug: string) => `/work/${slug}`;
export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
/** The project after this one (wraps around) — the "Next up" band. */
export const nextProject = (slug: string) => {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  return PROJECTS[(i + 1) % PROJECTS.length];
};

/** Work filter chips: category → chip label (Work board `labels`). */
export const FILTERS: { id: "All" | Category; label: string }[] = [
  { id: "All", label: "All work" },
  { id: "Ad film", label: "Ad films" },
  { id: "Music video", label: "Music videos" },
  { id: "Fashion film", label: "Fashion films" },
  { id: "Event film", label: "Event films" },
  { id: "Documentary", label: "Documentaries" },
  { id: "Short film", label: "Short films & series" },
];
