/** People board: the crew grid (placeholders until the client sends names and photos) and collaborator roles. */
const SHAPES = ["140px 140px 24px 24px", "24px", "24px 24px 140px 140px", "160px"];
const TONES = ["var(--surface-2)", "var(--surface-3)", "var(--surface-2)", "var(--surface-4)"];
const TILT = [-3, 2, -2, 4, 2, -3, 3, -2];
const LIFT = [0, 40, 0, 24, 32, 0, 40, 0];

export const CREW = Array.from({ length: 8 }, (_, i) => ({
  name: "[Name]",
  role: "[Role]",
  shape: SHAPES[i % 4],
  tone: TONES[i % 4],
  tilt: TILT[i],
  lift: LIFT[i],
  highlight: i === 2, // the board fills the third crew tag with the accent
}));

export const COLLABORATORS: { label: string; tilt: number; style?: "accent" | "inverse" | "open" }[] = [
  { label: "Directors", tilt: -2 },
  { label: "Cinematographers", tilt: 1.5 },
  { label: "Producers", tilt: -1, style: "accent" },
  { label: "Editors", tilt: 2 },
  { label: "Colourists", tilt: -2.5 },
  { label: "Sound designers", tilt: 1 },
  { label: "Stylists", tilt: -1.5, style: "inverse" },
  { label: "Casting", tilt: 2 },
  { label: "+ you?", tilt: -1, style: "open" },
];
