"use client";

import { Reveal, RevealItem } from "@/components/motion/Reveal";
import s from "../home.module.css";
import { CHAPTER, PB, PX } from "@/shared/ui";

const QUOTE = "“[Client testimonial — two or three lines in their own words.]”";

export function Testimonials() {
  return (
    <section aria-label="What clients say" className={`flex shrink-0 flex-col gap-[32px] lg:gap-[48px] ${PB} ${PX}`}>
      <Reveal className={`${s.it} ${CHAPTER}`}>…and what they said afterwards</Reveal>
      <Reveal stagger={0.18} className="grid grid-cols-1 items-start gap-[32px] md:grid-cols-2">
        <RevealItem from={{ y: 70 }}>
        <figure
          className={`${s.ep} m-0 flex flex-col gap-[28px] rounded-[28px] bg-[var(--surface)] px-[28px] pt-[32px] pb-[28px] [transform:rotate(-1deg)] lg:px-[44px] lg:pt-[44px] lg:pb-[36px]`}
        >
          <blockquote className={`${s.serif} m-0 text-[26px] leading-[1.25] tracking-[-0.01em] text-pretty lg:text-[34px]`}>
            {QUOTE}
          </blockquote>
          <figcaption className="flex items-center gap-[14px]">
            <span className="h-[44px] w-[44px] rounded-full bg-[var(--surface-3)]" />
            <span className="flex flex-col gap-[2px]">
              <span className="text-[15px] font-semibold">[Name]</span>
              <span className="text-[13px] text-[var(--muted)]">[Role], [Brand]</span>
            </span>
          </figcaption>
        </figure>
        </RevealItem>
        <RevealItem from={{ y: 70 }}>
        <figure
          className={`${s.ep} m-0 flex flex-col gap-[28px] rounded-[28px] bg-[var(--inv-bg)] px-[28px] pt-[32px] pb-[28px] text-[var(--inv-ink)] [transform:rotate(1.5deg)] md:mt-[56px] lg:px-[44px] lg:pt-[44px] lg:pb-[36px]`}
        >
          <blockquote className={`${s.serif} m-0 text-[26px] leading-[1.25] tracking-[-0.01em] text-pretty lg:text-[34px]`}>
            {QUOTE}
          </blockquote>
          <figcaption className="flex items-center gap-[14px]">
            <span className="h-[44px] w-[44px] rounded-full bg-[var(--inv-avatar)]" />
            <span className="flex flex-col gap-[2px]">
              <span className="text-[15px] font-semibold">[Name]</span>
              <span className="text-[13px] text-[var(--inv-muted)]">[Role], [Brand]</span>
            </span>
          </figcaption>
        </figure>
        </RevealItem>
      </Reveal>
    </section>
  );
}
