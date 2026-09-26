import type { CSSProperties } from "react";

/**
 * Board coordinates → CSS. From xl (1280px) up, elements sit at their exact board positions:
 * horizontal values as % of the 1440 frame (so 1440 is pixel-exact and narrower desktops scale),
 * vertical values in px. Below xl the ABS class does nothing and elements flow normally.
 */
type Box = { x?: number; r?: number; y?: number; b?: number; w?: number; h?: number };

const pct = (v: number) => `${+((v / 1440) * 100).toFixed(4)}%`;

export function pos({ x, r, y, b, w, h }: Box): CSSProperties {
  return {
    "--x": x === undefined ? "auto" : pct(x),
    "--r": r === undefined ? "auto" : pct(r),
    "--y": y === undefined ? "auto" : `${y}px`,
    "--b": b === undefined ? "auto" : `${b}px`,
    "--w": w === undefined ? "auto" : pct(w),
    "--h": h === undefined ? "auto" : `${h}px`,
  } as CSSProperties;
}

export const ABS =
  "xl:absolute xl:left-[var(--x)] xl:right-[var(--r)] xl:top-[var(--y)] xl:bottom-[var(--b)] xl:w-[var(--w)] xl:h-[var(--h)]";

/** Mobile gutter for flowing sections. */
export const PX = "px-5 md:px-10";
export const LABEL = "text-[10px] xl:text-[9px] tracking-[0.1em] uppercase";
