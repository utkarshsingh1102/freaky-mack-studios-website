/** Board theme props (option-a-story.dc.html data-props): one accent, its on-colour, and the ground. */
export const ACCENTS = [
  { name: "Cobalt", accent: "#1F3BFF", onAccent: "#ffffff" },
  { name: "Lime", accent: "#E8FF3A", onAccent: "#0a0a0a" },
  { name: "Orange", accent: "#FF8A00", onAccent: "#0a0a0a" },
  { name: "Pink", accent: "#FF7A9E", onAccent: "#0a0a0a" },
] as const;
export const GROUNDS = ["#ffffff", "#fbfbf9", "#f6f6f2"] as const;

/** Shared spacing for this option: 96px gutters at desktop, 20px at 390. */
export const PX = "px-5 md:px-10 lg:px-[96px]";
export const PB = "pb-[96px] lg:pb-[180px]";
export const CHAPTER = "text-[20px] lg:text-[26px] text-[#6b6b6b]";
export const H2 = "m-0 font-extrabold tracking-[-0.03em] text-[40px] md:text-[52px] lg:text-[64px] leading-[1.04]";
