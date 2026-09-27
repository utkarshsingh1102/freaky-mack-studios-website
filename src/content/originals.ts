/** Originals board: podcast episodes (newest first) and the slate of our own films. */
export const EPISODES = [1, 2, 3, 4, 5, 6].map((n, i) => ({
  no: `Ep. ${String(7 - n).padStart(2, "0")}`,
  title: i === 0 ? "[Latest episode title]" : "[Episode title]",
  guest: "with [Guest]",
  duration: "[Duration]",
}));

export const SLATE = [
  { kind: "Short film", bg: "linear-gradient(160deg,#3a3a3a,#111)", tilt: -1.5, lift: false },
  { kind: "Web series", bg: "linear-gradient(200deg,#5a5a58,#1a1a1a)", tilt: 1.2, lift: true },
  { kind: "Documentary", bg: "linear-gradient(140deg,#2a2a2a,#6a6a66)", tilt: -0.6, lift: false },
].map((s) => ({ ...s, title: "[Title]", logline: "[One-line logline.]", status: "[Status]" }));
