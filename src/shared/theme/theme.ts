/**
 * Theme options shown to the client (board data-props, plus the client's feedback: Dark theme and a Grey accent).
 * To lock in the final look: set DEFAULT_THEME / DEFAULT_ACCENT (and DEFAULT_GROUND) below,
 * then turn the picker off with NEXT_PUBLIC_PITCH_MODE=off.
 */
export const THEMES = ["light", "dark"] as const;
export type Theme = (typeof THEMES)[number];

export const ACCENTS = [
  // textOnDark: where the accent is used as *text* on the black page and the fill colour is too dark to read.
  { id: "cobalt", name: "Cobalt", accent: "#1F3BFF", onAccent: "#ffffff", textOnDark: "#4A62FF" },
  { id: "grey", name: "Grey", accent: "#8A8A8A", onAccent: "#0a0a0a" },
  { id: "lime", name: "Lime", accent: "#E8FF3A", onAccent: "#0a0a0a" },
  { id: "orange", name: "Orange", accent: "#FF8A00", onAccent: "#0a0a0a" },
  { id: "pink", name: "Pink", accent: "#FF7A9E", onAccent: "#0a0a0a" },
] as const;
export type AccentId = (typeof ACCENTS)[number]["id"];

/** Light-theme ground options from the board. The dark theme always uses black. */
export const GROUNDS = ["#ffffff", "#fbfbf9", "#f6f6f2"] as const;
export const DARK_GROUND = "#0a0a0a";

export const DEFAULT_THEME: Theme = "light";
export const DEFAULT_ACCENT: AccentId = "cobalt";
export const DEFAULT_GROUND: string = GROUNDS[0];

export const STORAGE_KEY = "fm-theme";

export type Choice = { theme: Theme; accent: AccentId; ground: string };
export const DEFAULT_CHOICE: Choice = { theme: DEFAULT_THEME, accent: DEFAULT_ACCENT, ground: DEFAULT_GROUND };

/** The CSS variables a choice resolves to. Used by the head script (before paint) and by the picker. */
export function resolveChoice(c: Choice) {
  const a = ACCENTS.find((x) => x.id === c.accent) ?? ACCENTS[0];
  const dark = c.theme === "dark";
  return {
    "--accent": a.accent,
    "--on-accent": a.onAccent,
    "--accent-text": dark && "textOnDark" in a ? a.textOnDark : a.accent,
    "--ground": dark ? DARK_GROUND : c.ground,
  };
}
