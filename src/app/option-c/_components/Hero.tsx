import { FM_MARK_WHITE } from "@/shared/assets";
import { ReelLoop } from "@/shared/reel";
import s from "../option-c.module.css";
import { ArrowIcon, Ph, SplitButton } from "./primitives";
import { DISPLAY, LEFT, PX, RIGHT } from "./theme";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#about" },
  { label: "Services ▾", href: "#scope" },
  { label: "Podcast", href: "#podcast" },
  { label: "Crew", href: "#crew" },
];

/** 1 · Full-bleed showreel hero with header overlay. */
export function Hero() {
  return (
    <section id="top" className="relative h-[680px] shrink-0 overflow-hidden lg:h-[900px]">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 28%, #4a4234 0%, #25211b 40%, #0b0b0b 85%)" }} />
      <ReelLoop className="absolute inset-0 h-full w-full object-cover">
        <div className="absolute inset-0 flex items-start justify-center pt-[190px] lg:pt-[260px]">
          <Ph>[ SHOWREEL LOOP — FULL-BLEED, MUTED ]</Ph>
        </div>
      </ReelLoop>
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(11,11,11,0.35) 0%, rgba(11,11,11,0) 18%, rgba(11,11,11,0) 45%, rgba(11,11,11,0.85) 72%, #0b0b0b 100%)" }}
      />
      <header className={`absolute top-0 right-0 left-0 flex h-[72px] items-center justify-between ${PX}`}>
        <a href="#top" className={`${s.link} flex items-center gap-[10px]`} aria-label="Freaky Mack Studios home">
          <img src={FM_MARK_WHITE} alt="" className="h-[23px] w-[34px] object-contain" />
          <span className="text-[14px] font-semibold">Freaky Mack</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-[28px] text-[12px] font-medium lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={s.link}>
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={`${s.link} flex items-center gap-[12px] text-[12px] font-medium`}>
          Start a project
          <span className="h-[18px] w-px bg-white/35" />
          <ArrowIcon size={12} />
        </a>
      </header>
      <div className={`absolute bottom-[28px] text-[11px] leading-[1.6] text-white/75 lg:top-[455px] lg:bottom-auto ${LEFT}`}>
        Film production house
        <br />
        Commercial · Narrative · Digital
      </div>
      <div className={`absolute bottom-[28px] text-right text-[11px] leading-[1.6] text-white/75 lg:top-[455px] lg:bottom-auto ${RIGHT}`}>
        Six years of ad films
        <br />
        Now Freaky Mack Studios
      </div>
      <div className={`absolute top-[330px] flex flex-col items-center gap-[28px] lg:top-[470px] lg:gap-[32px] ${LEFT} ${RIGHT}`}>
        <h1 className={`${DISPLAY} text-center text-[clamp(46px,7.222vw,104px)]`}>
          Ideas that
          <br />
          become films
        </h1>
        <SplitButton href="#reel">
          <span className={`${s.rec} h-[6px] w-[6px] rounded-full bg-[#f2f2f0]`} />
          Watch the reel
        </SplitButton>
      </div>
    </section>
  );
}
