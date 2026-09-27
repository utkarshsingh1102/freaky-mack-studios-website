import s from "./site.module.css";

/** 56px pill buttons used in pairs on Thanks and 404 ("Back to the start" / "See the work"). */
const BASE = `${s.pill} flex h-[56px] items-center rounded-full px-[24px] text-[15px] font-semibold whitespace-nowrap sm:px-[28px]`;
export const BTN_INVERSE = `${BASE} border border-[var(--inv-bg)] bg-[var(--inv-bg)] text-[var(--inv-ink)]`;
export const BTN_ACCENT = `${BASE} border border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]`;
export const BTN_OUTLINE = `${BASE} border border-[var(--ink)]`;
