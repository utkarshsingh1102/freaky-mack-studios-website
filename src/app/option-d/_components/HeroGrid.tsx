import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";
import { Still } from "./Still";

const STILLS = [
  { x: 27, y: 75, w: 185, h: 110, bg: "linear-gradient(140deg,#5a4630,#1c1712)", m: "top" },
  { x: 267, y: 80, w: 185, h: 85, bg: "linear-gradient(180deg,#7a6470,#2a2428)", m: "top" },
  { x: 713, y: 75, w: 220, h: 90, bg: "linear-gradient(140deg,#4a3a2c,#141110)" },
  { x: 1234, y: 75, w: 178, h: 110, bg: "linear-gradient(160deg,#7a6040,#2e3a2a)", m: "top" },
  { x: 27, y: 354, w: 185, h: 110, bg: "linear-gradient(160deg,#e8a030,#b86a18)", dark: true, m: "bottom" },
  { x: 1227, y: 354, w: 185, h: 110, bg: "linear-gradient(140deg,#8a3a36,#2a3a40)" },
  { x: 27, y: 631, w: 185, h: 110, bg: "linear-gradient(170deg,#b8b0b0,#8a5a5a)", dark: true },
  { x: 507, y: 651, w: 213, h: 90, bg: "linear-gradient(100deg,#1a2a4a,#3a5a7a,#1a2a4a)", m: "bottom" },
  { x: 987, y: 651, w: 185, h: 90, bg: "linear-gradient(160deg,#6a5a48,#2a241e)", m: "bottom" },
];

/** 1 · Hero grid: grid lines, scattered stills, highlighted title blocks. */
export function HeroGrid() {
  return (
    <section id="top" className="relative flex shrink-0 flex-col overflow-hidden pb-[24px] xl:block xl:h-[754px] xl:pb-0">
      {/* grid lines + dots (desktop) */}
      <div className="hidden xl:block" aria-hidden="true">
        <span className="absolute top-[60px] bottom-0 left-[16.667%] w-px bg-white/10" />
        <span className="absolute top-[60px] bottom-0 left-[33.333%] w-px bg-white/[0.14]" />
        <span className="absolute top-[60px] bottom-0 left-[66.667%] w-px bg-white/[0.14]" />
        <span className="absolute top-[60px] bottom-0 left-[83.333%] w-px bg-white/10" />
        <span className="absolute top-[199px] right-0 left-0 h-px bg-white/10" />
        <span className="absolute top-[617px] right-0 left-0 h-px bg-white/10" />
        <span className={s.dt} style={{ left: "calc(33.333% - 2px)", top: 197 }} />
        <span className={s.dt} style={{ left: "calc(66.667% - 2px)", top: 197 }} />
        <span className={s.dt} style={{ left: "calc(33.333% - 2px)", top: 615 }} />
        <span className={s.dt} style={{ left: "calc(66.667% - 2px)", top: 615 }} />
        {STILLS.map((st, i) => (
          <Still key={i} bg={st.bg} dark={st.dark} className={ABS} style={pos(st)} />
        ))}
      </div>

      <header className="relative flex h-[56px] items-center justify-between px-5 text-[10px] font-medium tracking-[0.08em] uppercase xl:absolute xl:top-[16px] xl:right-[34px] xl:left-[34px] xl:h-[24px] xl:justify-start xl:px-0">
        <nav aria-label="Primary" className="order-2 flex gap-[18px] xl:order-none xl:gap-[22px]">
          <a href="#work" className={s.link}>Work</a>
          <a href="#services" className={s.link}>Studio</a>
          <a href="#contact" className={s.link}>Contact</a>
        </nav>
        <a href="#works" className={`${s.link} hidden xl:absolute xl:left-[29.446%] xl:block`}>
          [ Showreel ]
        </a>
        <a
          href="#top"
          aria-label="Freaky Mack Studios home"
          className={`${s.link} order-1 flex items-center gap-[6px] text-[12px] font-bold tracking-[0.04em] xl:absolute xl:left-1/2 xl:order-none xl:-translate-x-1/2`}
        >
          <span className="text-[18px] font-light">[</span>
          <img src={FM_MARK_WHITE} alt="" className="h-[20px] w-[30px] object-contain" />
          Freaky Mack
          <span className="text-[18px] font-light">]</span>
        </a>
      </header>

      <div className="grid grid-cols-3 gap-[8px] px-5 pt-[8px] xl:hidden" aria-hidden="true">
        {STILLS.filter((st) => st.m === "top").map((st, i) => (
          <Still key={i} bg={st.bg} dark={st.dark} className="h-[64px]" />
        ))}
      </div>

      <div className="flex flex-col items-center gap-[18px] px-5 pt-[40px] pb-[40px] text-center xl:contents">
        <div
          className={`flex w-full justify-between text-[9px] tracking-[0.1em] text-white/60 uppercase ${ABS}`}
          style={pos({ x: 500, r: 500, y: 205 })}
        >
          <span>( Film production house ) ●</span>
          <span>( Since [YEAR] )</span>
        </div>
        <img src={FM_MARK_WHITE} alt="" className={`h-[40px] w-[60px] object-contain opacity-90 ${ABS}`} style={pos({ x: 690, y: 232, w: 60, h: 40 })} />
        <h1
          className={`m-0 flex flex-col items-center gap-[4px] text-center text-[38px] leading-[1.05] font-semibold tracking-[-0.02em] uppercase xl:text-[50px] ${ABS}`}
          style={pos({ x: 480, w: 480, y: 285 })}
        >
          <span className={s.hl}>Ideas that</span>
          <span>Become</span>
          <span className={s.hl}>Films</span>
        </h1>
        <img src={FM_MARK_WHITE} alt="" className={`h-[24px] w-[36px] object-contain ${ABS}`} style={pos({ x: 702, y: 448, w: 36, h: 24 })} />
        <p
          className={`m-0 max-w-[260px] text-center text-[11px] leading-[1.6] text-white/65 xl:max-w-none xl:text-[10px] ${ABS}`}
          style={pos({ x: 600, w: 240, y: 482 })}
        >
          Six years of advertising filmmaking — now a studio for commercial, narrative and digital stories.
        </p>
        <a
          href="#works"
          className={`${s.link} text-[10px] font-semibold tracking-[0.1em] uppercase xl:absolute xl:top-[553px] xl:left-1/2 xl:-translate-x-1/2`}
        >
          View works
        </a>
      </div>

      <div className="grid grid-cols-3 gap-[8px] px-5 xl:hidden" aria-hidden="true">
        {STILLS.filter((st) => st.m === "bottom").map((st, i) => (
          <Still key={i} bg={st.bg} dark={st.dark} className="h-[64px]" />
        ))}
      </div>
    </section>
  );
}
