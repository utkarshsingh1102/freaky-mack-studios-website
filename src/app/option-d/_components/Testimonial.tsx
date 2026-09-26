import type { CSSProperties } from "react";
import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";

// Layered portraits, as proportions of their shared bounding box (board x 281–877, y 178–658).
const BOX = { x: 281, y: 178, w: 596, h: 480 };
const PORTRAITS = [
  { x: 281, y: 178, w: 233, h: 172, bg: "linear-gradient(160deg,#8a3a30,#3a1a16)" },
  { x: 343, y: 267, w: 288, h: 233, bg: "linear-gradient(160deg,#6a6058,#2a2420)" },
  { x: 452, y: 384, w: 425, h: 274, bg: "linear-gradient(140deg,#8a4a3a,#4a2a24)" },
];
const rel = (p: (typeof PORTRAITS)[number]): CSSProperties => ({
  left: `${((p.x - BOX.x) / BOX.w) * 100}%`,
  top: `${((p.y - BOX.y) / BOX.h) * 100}%`,
  width: `${(p.w / BOX.w) * 100}%`,
  height: `${(p.h / BOX.h) * 100}%`,
  background: p.bg,
});

/** 9 · Testimonial: bordered frame, layered portraits, quote and name card. */
export function Testimonial() {
  return (
    <section aria-label="Client words" className="relative shrink-0 overflow-hidden bg-[#151515] px-5 py-[32px] md:px-10 xl:h-[685px] xl:p-0">
      <div className="absolute top-[32px] right-5 bottom-[32px] left-5 border border-white/10 md:right-10 md:left-10 xl:right-[15.278%] xl:bottom-auto xl:left-[15.208%] xl:h-[619px]">
        <span className={s.dt} style={{ left: -2, top: -2 }} />
        <span className={s.dt} style={{ right: -2, top: -2 }} />
        <span className={s.dt} style={{ left: -2, bottom: -2 }} />
        <span className={s.dt} style={{ right: -2, bottom: -2 }} />
      </div>
      <span className="absolute top-[32px] left-[37.569%] hidden h-[180px] w-px bg-white/10 xl:block" />
      <div className="relative flex flex-col gap-[24px] p-[20px] xl:static xl:block xl:p-0">
        <div className="flex justify-between gap-4 xl:contents">
          <span className={`text-[10px] tracking-[0.1em] text-white/60 uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 219, y: 117 })}>
            ● Client words
          </span>
          <span className={`text-[10px] tracking-[0.1em] text-white/60 uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 775, y: 117 })}>
            ● [Brand] · [Year]
          </span>
        </div>
        <p
          className={`m-0 text-[18px] leading-[1.4] font-medium xl:text-[19px] ${ABS}`}
          style={pos({ x: 775, w: 380, y: 158 })}
        >
          “[Client testimonial — two or three lines in their own words, shared with permission.]”
        </p>
        <div
          className="relative aspect-[596/480] w-full xl:absolute xl:top-[178px] xl:left-[19.514%] xl:aspect-auto xl:h-[480px] xl:w-[41.389%]"
          aria-hidden="true"
        >
          {PORTRAITS.map((p, i) => (
            <div key={i} className={`${s.ph} absolute`} style={rel(p)}>
              [ Portrait ]
            </div>
          ))}
          <span className="absolute top-[31.9%] left-[71.3%] text-[22px] text-white/80">✣</span>
        </div>
        <span
          className="pointer-events-none absolute bottom-[96px] left-[8px] text-[80px] leading-none font-bold text-white/30 xl:top-[530px] xl:bottom-auto xl:left-[17.153%] xl:text-[110px]"
          aria-hidden="true"
        >
          “
        </span>
        <div className="flex items-end justify-between xl:contents">
          <div
            className={`flex h-[110px] w-[130px] flex-col items-center justify-center gap-[4px] bg-[#e8e8e8] text-[8px] font-semibold tracking-[0.08em] text-black uppercase xl:h-[123px] ${ABS}`}
            style={pos({ x: 960, y: 432, w: 130, h: 123 })}
          >
            <span>[Name]</span>
            <span className="font-normal text-[#5a5a5a]">[Role], [Brand]</span>
          </div>
          <img src={FM_MARK_WHITE} alt="Freaky Mack" className={`h-[32px] w-[48px] object-contain ${ABS}`} style={pos({ x: 1150, y: 596, w: 48, h: 32 })} />
        </div>
      </div>
    </section>
  );
}
