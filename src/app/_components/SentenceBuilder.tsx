"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Swap } from "@/components/motion/Swap";
import { useState } from "react";
import { AUDIENCES as WHO, FORMATS as FMT, bare, startProjectHref } from "@/content/enquiry-options";
import s from "../home.module.css";
import { CHAPTER, PB, PX } from "@/shared/ui";

const FORMATS = FMT.map((f) => f.phrase);
const AUDIENCES = WHO.map((a) => a.phrase);

function Chip({ on, label, onPick }: { on: boolean; label: string; onPick: () => void }) {
  return (
    <button
      type="button"
      onClick={onPick}
      aria-pressed={on}
      className={`${s.chip} h-[44px] rounded-full border px-[18px] text-[15px] font-medium lg:h-[48px] lg:px-[20px] lg:text-[16px] ${
        on ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]" : "border-[var(--ink)] bg-[var(--pill-bg)] text-[var(--ink)]"
      }`}
    >
      {label}
    </button>
  );
}

/** Chapter 02: "You need [format] for [who]. We do that." built from two chip rows. */
export function SentenceBuilder() {
  const [fmt, setFmt] = useState(0);
  const [who, setWho] = useState(0);
  return (
    <section id="ch3" className={`flex shrink-0 flex-col gap-[40px] lg:gap-[56px] ${PB} ${PX}`}>
      <Reveal className={`${s.it} ${CHAPTER}`}>Chapter 02 — Say it out loud</Reveal>
      <Reveal
        as="p"
        className="m-0 max-w-[1248px] text-[clamp(34px,4.722vw,68px)] leading-[1.15] font-extrabold tracking-[-0.03em] text-balance"
        aria-live="polite"
      >
        You need{" "}
        <span className="inline-block rounded-full bg-[var(--accent)] px-[16px] text-[var(--on-accent)] [transform:rotate(-1.5deg)] lg:px-[28px]">
          <Swap text={FORMATS[fmt]} />
        </span>{" "}
        for{" "}
        <span className="whitespace-nowrap">
          <span className="inline-block rounded-full border-[3px] border-[var(--accent)] px-[16px] [transform:rotate(1.5deg)] lg:px-[28px]">
            <Swap text={AUDIENCES[who]} />
          </span>
          .
        </span>{" "}
        We do that.
      </Reveal>
      <Reveal delay={0.1} className="grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:gap-[48px]">
        <div className="flex flex-col gap-[18px]" role="group" aria-label="Pick a format">
          <div className="text-[13px] tracking-[0.2em] text-[var(--muted)] uppercase">Pick a format</div>
          <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
            {FORMATS.map((f, i) => (
              <Chip key={f} on={fmt === i} label={bare(f)} onPick={() => setFmt(i)} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[18px]" role="group" aria-label="Pick who it’s for">
          <div className="text-[13px] tracking-[0.2em] text-[var(--muted)] uppercase">Pick who it’s for</div>
          <div className="flex flex-wrap gap-[10px] lg:gap-[12px]">
            {AUDIENCES.map((a, i) => (
              <Chip key={a} on={who === i} label={bare(a)} onPick={() => setWho(i)} />
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="flex self-start">
      <Link
        href={startProjectHref(FMT[fmt].id, WHO[who].id)}
        className={`${s.link} ${s.it} border-b border-[var(--ink)] pb-[4px] text-[24px] lg:text-[30px]`}
      >
        Sounds right? Tell us the rest →
      </Link>
      </Reveal>
    </section>
  );
}
