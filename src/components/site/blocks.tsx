import Link from "next/link";
import type { ReactNode } from "react";
import { FM_MARK_WHITE } from "@/shared/assets";
import s from "./site.module.css";
import { MX } from "./ui";

/** Accent pill link ("Start a project", "Pitch an idea"…). 60px tall at 1440 unless a size is given. */
export const pillAccent = (size = "h-[56px] px-[30px] text-[15px] lg:h-[60px]") =>
  `${s.pill} flex shrink-0 items-center rounded-full bg-[var(--accent)] font-semibold whitespace-nowrap text-[var(--on-accent)] ${size}`;

/** Surface panel that closes a page: "Chapter 06 — Your turn / Got a story? Let’s shoot it." */
export function YourTurnCta() {
  return (
    <section
      className={`mb-[96px] flex flex-col items-start justify-between gap-[28px] rounded-[28px] bg-[var(--surface)] px-[28px] py-[44px] md:flex-row md:items-center lg:mb-[140px] lg:gap-[48px] lg:rounded-[40px] lg:px-[96px] lg:py-[88px] ${MX}`}
    >
      <div className="flex flex-col gap-[14px]">
        <span className={`${s.it} text-[20px] text-[var(--muted-2)] lg:text-[24px]`}>Chapter 06 — Your turn</span>
        <span className="text-[40px] leading-[1] font-extrabold tracking-[-0.035em] md:text-[52px] lg:text-[64px]">
          Got a story? <span className={`${s.it} font-normal tracking-normal`}>Let’s shoot it.</span>
        </span>
      </div>
      <Link href="/start-a-project" className={pillAccent()}>
        Start a project
      </Link>
    </section>
  );
}

/**
 * The black slab (Originals "Pitch us", People "Join"): black in Light, white in Dark.
 * `mark` positions the faint logo mark in the corner.
 */
export function InverseSlab({
  label,
  title,
  action,
  markClassName,
  ariaLabel,
  maxWidth = "max-w-[760px]",
}: {
  label: string;
  title: ReactNode;
  action: ReactNode;
  markClassName: string;
  ariaLabel?: string;
  maxWidth?: string;
}) {
  return (
    <section
      aria-label={ariaLabel}
      className={`relative mb-[96px] flex flex-col items-start justify-between gap-[32px] overflow-hidden rounded-[28px] bg-[var(--inv-bg)] px-[28px] py-[48px] text-[var(--inv-ink)] md:flex-row md:items-center lg:mb-[140px] lg:gap-[48px] lg:rounded-[40px] lg:p-[96px] ${MX}`}
    >
      <img src={FM_MARK_WHITE} alt="" className={`${s.logoOnInverse} pointer-events-none absolute object-contain opacity-10 ${markClassName}`} />
      <div className={`relative flex flex-col gap-[16px] ${maxWidth}`}>
        <span className={`${s.it} text-[20px] text-[var(--inv-muted)] lg:text-[24px]`}>{label}</span>
        <span className="text-[34px] leading-[1.05] font-extrabold tracking-[-0.03em] md:text-[44px] lg:text-[56px]">{title}</span>
      </div>
      <div className="relative">{action}</div>
    </section>
  );
}
