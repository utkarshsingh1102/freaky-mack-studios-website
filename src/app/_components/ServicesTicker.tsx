"use client";

import { Fragment } from "react";
import { Reveal } from "@/components/motion/Reveal";
import s from "../home.module.css";

const SERVICES = ["Ad films", "Music videos", "Fashion films", "Event films", "Documentaries", "Short films & web series", "Podcast & YouTube", "Post-production"];

/** Copies of the list in the track. The loop slides by half the track (3 copies ≈ 6,900px at 1440), so it stays seamless on ultra-wide screens. */
const COPIES = 6;

/**
 * The services tape. It runs edge to edge (full-bleed past the 1440 column, like the board's frame edge),
 * and the text starts in line with the page's 96px margin.
 */
export function ServicesTicker() {
  const run = SERVICES.map((sv) => (
    <Fragment key={sv}>
      <span>{sv}</span>
      <span className={`${s.it} text-[var(--muted-2)]`}>&amp;</span>
    </Fragment>
  ));
  return (
    <Reveal
      as="section"
      from={{ y: 0, scale: 0.98 }}
      aria-label="Services"
      className="bleed mb-[96px] flex h-[64px] shrink-0 items-center overflow-hidden border-y border-[var(--ink)] lg:mb-[180px] lg:h-[84px]"
    >
      {/* The start offset is a margin, not padding, so it sits outside the track and the -50% loop has no jump.
          The trailing padding equals the gap, so the track is exactly COPIES runs long. */}
      <div
        className={`${s.marquee} ml-5 flex w-max items-center gap-[28px] pr-[28px] text-[20px] font-semibold tracking-[-0.01em] whitespace-nowrap lg:ml-[max(96px,calc(50vw-624px))] lg:gap-[40px] lg:pr-[40px] lg:text-[26px]`}
      >
        {run}
        {Array.from({ length: COPIES - 1 }, (_, i) => (
          <span key={i} className="contents" aria-hidden="true">
            {run}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
