import type { CSSProperties } from "react";
import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";

// Mosaic rows as proportions of the 1440 frame, so they scale identically at every width.
const TOP = [
  { x: 0, w: 158, h: 160, bg: "linear-gradient(180deg,#c8a090,#3a4a5a)" },
  { x: 167, w: 162, h: 240, bg: "linear-gradient(170deg,#b8c0c4,#7a5a50)" },
  { x: 339, w: 333, h: 160, bg: "linear-gradient(120deg,#2a2622,#4a3a30,#1a1614)" },
  { x: 681, w: 160, h: 160, bg: "linear-gradient(160deg,#c83a2a,#1a4a3a)" },
  { x: 1021, w: 158, h: 160, bg: "linear-gradient(180deg,#c8a090,#3a4a5a)" },
  { x: 1190, w: 162, h: 240, bg: "linear-gradient(170deg,#b8c0c4,#7a5a50)" },
  { x: 1358, w: 82, h: 160, bg: "linear-gradient(120deg,#2a2622,#4a3a30)" },
];
const BOTTOM = [
  { x: 0, w: 162, h: 162, bg: "linear-gradient(160deg,#6a5a48,#2a241e)" },
  { x: 168, w: 162, h: 92, bg: "linear-gradient(100deg,#1a2a4a,#3a5a7a)" },
  { x: 336, w: 170, h: 132, bg: "linear-gradient(170deg,#2a2a2a,#6a6a3a)" },
  { x: 521, w: 151, h: 247, bg: "linear-gradient(180deg,#e8c0a0,#7a8a8a,#3a3a3a)" },
  { x: 679, w: 160, h: 165, bg: "linear-gradient(160deg,#6aa0b8,#1a3a4a)" },
  { x: 850, w: 160, h: 90, bg: "linear-gradient(160deg,#e8a030,#b86a18)" },
  { x: 1021, w: 158, h: 165, bg: "linear-gradient(160deg,#6a5a48,#2a241e)" },
  { x: 1190, w: 162, h: 92, bg: "linear-gradient(100deg,#1a2a4a,#3a5a7a)" },
  { x: 1360, w: 80, h: 130, bg: "linear-gradient(170deg,#2a2a2a,#6a6a3a)" },
];

function Mosaic({ tiles, rowH, align, className = "" }: { tiles: typeof TOP; rowH: number; align: "top" | "bottom"; className?: string }) {
  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio: `1440 / ${rowH}` }} aria-hidden="true">
      {tiles.map((t, i) => (
        <div
          key={i}
          className={`${s.ph} absolute`}
          style={{
            left: `${(t.x / 1440) * 100}%`,
            width: `${(t.w / 1440) * 100}%`,
            height: `${(t.h / rowH) * 100}%`,
            [align]: 0,
            background: t.bg,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

/** 6 · Selected works: mosaic rows around a centred title. */
export function SelectedWorks() {
  return (
    <section id="works" className="relative flex shrink-0 flex-col items-center overflow-hidden xl:block xl:h-[885px]">
      <Mosaic tiles={TOP} rowH={240} align="top" className="xl:absolute xl:top-0 xl:left-0" />
      <div className="hidden xl:block" aria-hidden="true">
        <span className="absolute top-[240px] bottom-0 left-[36.181%] w-px bg-white/[0.12]" />
        <span className="absolute top-[240px] bottom-0 left-[63.611%] w-px bg-white/[0.12]" />
        <span className={s.dt} style={{ left: "calc(36.181% - 2px)", top: 238 }} />
        <span className={s.dt} style={{ left: "calc(63.611% - 2px)", top: 238 }} />
      </div>
      <div className="flex flex-col items-center gap-[16px] px-5 py-[48px] xl:contents">
        <img src={FM_MARK_WHITE} alt="" className={`h-[32px] w-[48px] object-contain ${ABS}`} style={pos({ x: 696, y: 278, w: 48, h: 32 })} />
        <span className={`text-center text-[10px] tracking-[0.1em] text-white/60 uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 0, r: 0, y: 336 })}>
          ( Portfolio )
        </span>
        <h2
          className={`m-0 flex flex-col items-center gap-[4px] text-[30px] leading-[1.1] font-semibold tracking-[-0.02em] uppercase xl:text-[40px] ${ABS}`}
          style={pos({ x: 521, w: 395, y: 360 })}
        >
          <span className={s.hl}>Selected works</span>
          <span>Since [Year]</span>
        </h2>
      </div>
      <Mosaic tiles={BOTTOM} rowH={247} align="bottom" className="xl:absolute xl:bottom-[83px] xl:left-0" />
      <div className="flex w-full justify-between gap-4 px-5 pt-[20px] pb-[28px] text-[10px] leading-[1.5] tracking-[0.06em] text-white/65 uppercase xl:contents xl:text-[9px]">
        <div className={ABS} style={pos({ x: 34, y: 845 })}>
          Ad films · [Year]
          <br />
          Brand work
        </div>
        <span className={ABS} style={pos({ x: 377, y: 850 })}>[Project title]</span>
        <span className={ABS} style={pos({ x: 713, y: 850 })}>[Client]</span>
      </div>
    </section>
  );
}
