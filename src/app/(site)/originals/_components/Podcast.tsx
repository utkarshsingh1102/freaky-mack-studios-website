"use client";

import { useState } from "react";
import { SOCIAL } from "@/shared/config";
import { pillAccent } from "@/components/site/blocks";
import s from "@/components/site/site.module.css";
import { Eq, Label, PauseIcon, PlayIcon, PX } from "@/components/site/ui";
import { EPISODES } from "@/content/originals";

/**
 * Featured player + episode list. One `playing` index is shared: the featured
 * player is episode 0, so playing it lights up the first row and vice versa.
 */
export function Podcast() {
  const [playing, setPlaying] = useState(-1);
  const toggle = (i: number) => setPlaying((p) => (p === i ? -1 : i));
  const latest = EPISODES[0];
  const featuredOn = playing === 0;

  return (
    <>
      <section
        id="podcast"
        aria-label="The podcast"
        className={`grid scroll-mt-[24px] grid-cols-1 items-center gap-y-[40px] pb-[80px] lg:grid-cols-12 lg:gap-x-[32px] lg:pb-[120px] ${PX}`}
      >
        <button
          type="button"
          onClick={() => toggle(0)}
          aria-pressed={featuredOn}
          aria-label={featuredOn ? "Pause the latest episode" : "Play the latest episode"}
          className="relative block h-[260px] overflow-hidden rounded-[24px] border-0 bg-[#0d0d0d] p-0 text-left text-white shadow-[0_30px_80px_rgba(0,0,0,0.16)] [transform:rotate(-1deg)] md:h-[400px] lg:col-span-7 lg:h-[460px] lg:rounded-[28px]"
        >
          <span
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 50%, #2c2c2c 0%, #121212 60%, #0a0a0a 100%)" }}
          />
          <span className="absolute inset-[16px] flex items-center justify-center border border-dashed border-white/20 px-[16px] text-center text-[11px] tracking-[0.22em] text-white/45 uppercase lg:inset-[20px] lg:text-[12px]">
            [ Latest episode — YouTube embed ]
          </span>
          {featuredOn ? (
            <span className="absolute bottom-[20px] left-[20px] flex items-center gap-[12px] rounded-full bg-[var(--accent)] py-[12px] pr-[20px] pl-[16px] text-[14px] font-semibold text-[var(--on-accent)] lg:bottom-[32px] lg:left-[32px]">
              <Eq height={16} />
              Now playing
            </span>
          ) : (
            <span className="absolute bottom-[20px] left-[20px] flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[var(--accent)] text-[var(--on-accent)] lg:bottom-[32px] lg:left-[32px] lg:h-[64px] lg:w-[64px]">
              <PlayIcon size={18} />
            </span>
          )}
          <span
            className={`${s.it} absolute top-[24px] right-[-4px] rounded-full bg-white px-[18px] py-[6px] text-[20px] text-[#0a0a0a] [transform:rotate(6deg)]`}
          >
            latest
          </span>
        </button>
        <div className="flex flex-col gap-[20px] lg:col-span-4 lg:col-start-9">
          <Label size="text-[20px] lg:text-[24px]">The Freaky Mack Podcast</Label>
          <h2 className="m-0 text-[34px] leading-[1.08] font-extrabold tracking-[-0.03em] lg:text-[44px]">{latest.title}</h2>
          <span className="text-[13px] tracking-[0.18em] text-[var(--muted)] uppercase">
            Episode [NN] · {latest.guest} · {latest.duration}
          </span>
          <p className="m-0 text-[17px] leading-[1.6] text-[var(--ink-2)]">[Two lines on what this episode is about.]</p>
          <div className="mt-[8px] flex gap-[14px]">
            <a href={SOCIAL.youtube} className={pillAccent("h-[52px] px-[24px] text-[14px]")}>
              Subscribe on YouTube ↗
            </a>
          </div>
        </div>
      </section>

      <section aria-label="All episodes" className={`flex flex-col gap-[24px] pb-[96px] lg:gap-[32px] lg:pb-[180px] ${PX}`}>
        <Label>Every episode</Label>
        <ul className="m-0 list-none border-t border-[var(--ink)] p-0">
          {EPISODES.map((e, i) => {
            const on = playing === i;
            return (
              <li key={e.no} className="border-b border-[var(--line)]">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={on}
                  aria-label={`${on ? "Pause" : "Play"} ${e.no}: ${e.title}`}
                  className={`${s.epRow} grid w-full grid-cols-[52px_1fr_48px] items-center gap-x-[16px] gap-y-[4px] border-0 bg-transparent px-[8px] py-[18px] text-left text-[var(--ink)] md:grid-cols-[80px_1fr_200px_110px_48px] md:gap-[24px] md:px-[12px] md:py-[22px] lg:grid-cols-[80px_1fr_240px_120px_64px]`}
                >
                  <span className={`${s.it} row-span-2 text-[18px] text-[var(--muted-2)] md:row-span-1 lg:text-[20px]`}>{e.no}</span>
                  <span className="text-[20px] font-semibold tracking-[-0.01em] lg:text-[24px]">{e.title}</span>
                  <span className="col-start-3 row-span-2 row-start-1 flex justify-end md:order-last md:col-start-auto md:row-span-1 md:row-start-auto">
                    <span
                      className={`flex h-[48px] w-[48px] items-center justify-center rounded-full border ${
                        on
                          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]"
                          : "border-[var(--ink)] bg-[var(--pill-bg)] text-[var(--ink)]"
                      }`}
                    >
                      {on ? <PauseIcon size={14} /> : <PlayIcon size={14} />}
                    </span>
                  </span>
                  <span className="col-start-2 text-[15px] text-[var(--muted)] md:col-start-auto">
                    <span>{e.guest}</span>
                    <span className="md:hidden"> · {e.duration}</span>
                  </span>
                  <span className="hidden text-[15px] text-[var(--muted)] md:block">{e.duration}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
