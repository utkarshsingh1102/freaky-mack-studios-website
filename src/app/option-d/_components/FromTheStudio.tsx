import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";

const SMALL = [
  { kind: "Podcast", title: "[Episode title]", foot: "[Duration]", bg: "linear-gradient(140deg,#e8e8e8,#3a3a3a)", x: 727, y: 213, w: 242, h: 301 },
  { kind: "Behind the scenes", title: "[On set: project title]", foot: "Watch", bg: "linear-gradient(160deg,#c89060,#2a1a10)", x: 980, y: 213, w: 244, h: 301 },
  { kind: "Short film", title: "[Short film title]", foot: "[Duration]", bg: "linear-gradient(160deg,#a8b890,#3a4a2a)", x: 727, y: 528, w: 242, h: 302 },
  { kind: "Web series", title: "[Series title — episode 01]", foot: "Watch", bg: "linear-gradient(180deg,#1a1a1a,#4a8a5a)", x: 980, y: 528, w: 244, h: 302 },
];

/** 11 · From the studio: podcast feature + originals cards. */
export function FromTheStudio() {
  return (
    <section
      id="journal"
      className="relative grid shrink-0 grid-cols-2 gap-[10px] overflow-hidden border-t border-white/[0.08] px-5 py-[64px] md:px-10 xl:block xl:h-[880px] xl:p-0"
    >
      <span className={`col-span-2 text-[10px] tracking-[0.1em] text-white/55 uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 219, y: 62 })}>
        ( Originals )
      </span>
      <h2 className={`col-span-2 m-0 mb-[20px] text-[28px] leading-[1.1] font-semibold tracking-[-0.02em] uppercase xl:mb-0 xl:text-[34px] ${ABS}`} style={pos({ x: 219, y: 96 })}>
        From the studio
      </h2>
      <a
        href="#journal"
        className={`${s.frame} relative col-span-2 block h-[440px] overflow-hidden ${ABS}`}
        style={pos({ x: 215, y: 213, w: 495, h: 617 })}
      >
        <div
          className={`${s.img} ${s.ph} h-full w-full`}
          style={{ background: "radial-gradient(ellipse at 45% 40%, #6a5a40 0%, #2a2218 50%, #0e0b08 100%)" }}
        >
          [ Episode still ]
        </div>
        <img src={FM_MARK_WHITE} alt="" className="absolute top-[28px] left-[32px] h-[28px] w-[42px] object-contain" />
        <div className="absolute right-[24px] bottom-[32px] left-[24px] flex flex-col gap-[14px] xl:right-[32px] xl:bottom-[44px] xl:left-[32px]">
          <span className="text-[10px] tracking-[0.1em] text-white/70 uppercase xl:text-[9px]">Freaky Mack Podcast</span>
          <span className="text-[22px] leading-[1.2] font-semibold tracking-[-0.01em] xl:text-[26px]">[Latest episode title — up to two lines]</span>
          <span className="mt-[10px] text-[10px] font-semibold tracking-[0.1em] uppercase xl:text-[9px]">Watch now</span>
        </div>
      </a>
      {SMALL.map((c) => (
        <a
          key={c.kind}
          href="#journal"
          className={`${s.frame} box-border flex h-[260px] flex-col gap-[10px] bg-[#0e0e0e] p-[14px] xl:p-[16px] ${ABS}`}
          style={pos({ x: c.x, y: c.y, w: c.w, h: c.h })}
        >
          <span className="text-[9px] tracking-[0.1em] text-white/50 uppercase xl:text-[8px]">{c.kind}</span>
          <span className="text-[12px] leading-[1.4] font-medium">{c.title}</span>
          <div className="grow overflow-hidden">
            <div className={`${s.img} ${s.ph} h-full w-full`} style={{ background: c.bg }} />
          </div>
          <span className="text-[9px] tracking-[0.1em] text-white/50 uppercase xl:text-[8px]">{c.foot}</span>
        </a>
      ))}
    </section>
  );
}
