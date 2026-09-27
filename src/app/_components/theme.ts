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

/** Shared spacing for this page: 96px gutters at desktop, 20px at 390. */
export const PX = "px-5 md:px-10 lg:px-[96px]";
export const PB = "pb-[96px] lg:pb-[180px]";
export const CHAPTER = "text-[20px] lg:text-[26px] text-[var(--muted-2)]";
export const H2 = "m-0 font-extrabold tracking-[-0.03em] text-[40px] md:text-[52px] lg:text-[64px] leading-[1.04]";
