"use client";

import { useState } from "react";
import { Reveal, RevealItem } from "@/components/motion/Reveal";
import s from "../home.module.css";
import { Eq, PlayIcon } from "./icons";
import { CHAPTER, H2, PB, PX } from "@/shared/ui";

const EPISODES = [
  // Tilt is a class (not inline) so the board's hover transform can override it.
  { bg: "linear-gradient(160deg,#3a3a3a,#111)", tilt: "[transform:rotate(-1.5deg)]" },
  { bg: "linear-gradient(200deg,#5a5a58,#1a1a1a)", tilt: "[transform:rotate(1.5deg)] md:mt-[48px]" },
  { bg: "linear-gradient(140deg,#2a2a2a,#6a6a66)", tilt: "[transform:rotate(0.5deg)]" },
];

/** Chapter 04: click an episode to toggle its "Now playing" state (one at a time). */
export function Podcast() {
  const [playing, setPlaying] = useState(-1);
  return (
    <section id="ch4" className={`flex shrink-0 flex-col gap-[40px] lg:gap-[64px] ${PB} ${PX}`}>
      <Reveal className="flex flex-col items-start gap-[24px] md:flex-row md:items-end md:justify-between md:gap-[40px]">
        <div className="flex flex-col gap-[20px]">
          <div className={`${s.it} ${CHAPTER}`}>Chapter 04 — Voices, on the record</div>
          <h2 className={H2}>The podcast</h2>
        </div>
        <a
          href="https://youtube.com"
          className={`${s.pill} flex h-[52px] shrink-0 items-center gap-[10px] rounded-full border border-[var(--ink)] px-[24px] text-[14px] font-semibold`}
        >
          Watch on YouTube ↗
        </a>
      </Reveal>
      <Reveal stagger={0.14} amount={0.15} className="grid grid-cols-1 items-start gap-[40px] md:grid-cols-3 md:gap-[32px]">
        {EPISODES.map((e, i) => {
          const on = playing === i;
          return (
            <RevealItem key={i} from={{ y: 80 }}>
            <button
              type="button"
              onClick={() => setPlaying(on ? -1 : i)}
              aria-pressed={on}
              className={`${s.ep} flex flex-col gap-[18px] border-0 bg-transparent p-0 text-left text-[var(--ink)] ${e.tilt}`}
            >
              <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] lg:h-[300px]" style={{ background: e.bg }}>
                <div className="absolute inset-0 flex items-center justify-center text-[12px] tracking-[0.2em] text-white uppercase">
                  [ EPISODE ART ]
                </div>
                {on ? (
                  <div className="absolute bottom-[20px] left-[20px] flex items-center gap-[12px] rounded-full bg-[var(--accent)] py-[10px] pr-[18px] pl-[14px] text-[13px] font-semibold text-[var(--on-accent)]">
                    <Eq height={14} color="var(--on-accent)" />
                    Now playing
                  </div>
                ) : (
                  <span className="absolute bottom-[20px] left-[20px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[var(--accent)]">
                    <PlayIcon size={14} fill="var(--on-accent)" />
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-[8px] px-[6px]">
                <span className="text-[13px] tracking-[0.18em] text-[var(--muted)] uppercase">Episode [NN] · [DURATION]</span>
                <span className="text-[22px] leading-[1.3] font-semibold">[Episode title]</span>
              </div>
            </button>
            </RevealItem>
          );
        })}
      </Reveal>
    </section>
  );
}
