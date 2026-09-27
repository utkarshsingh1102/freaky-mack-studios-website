import { Fragment } from "react";
import s from "../home.module.css";

const SERVICES = ["Ad films", "Music videos", "Fashion films", "Event films", "Documentaries", "Short films & web series", "Podcast & YouTube", "Post-production"];

export function ServicesTicker() {
  const run = SERVICES.map((sv) => (
    <Fragment key={sv}>
      <span>{sv}</span>
      <span className={`${s.it} text-[var(--muted-2)]`}>&amp;</span>
    </Fragment>
  ));
  return (
    <section
      aria-label="Services"
      className="mb-[96px] flex h-[64px] shrink-0 items-center overflow-hidden border-y border-[var(--ink)] lg:mb-[180px] lg:h-[84px]"
    >
      <div
        className={`${s.marquee} flex w-max items-center gap-[28px] pl-5 text-[20px] font-semibold tracking-[-0.01em] whitespace-nowrap lg:gap-[40px] lg:pl-[96px] lg:text-[26px]`}
      >
        {run}
        <span className="contents" aria-hidden="true">
          {run}
        </span>
      </div>
    </section>
  );
}
