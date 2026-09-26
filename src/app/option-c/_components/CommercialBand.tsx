import s from "../option-c.module.css";
import { Dots, Ph } from "./primitives";
import { DISPLAY, LEFT, RIGHT } from "./theme";

/** 3 · Full-bleed on-set still with a viewfinder overlay and the reel play button. */
export function CommercialBand({ onPlay }: { onPlay: () => void }) {
  return (
    <section id="reel" className="relative h-[560px] shrink-0 overflow-hidden lg:h-[720px]">
      <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, #3a342c 0%, #26221d 35%, #1a1816 60%, #121110 100%)" }} />
      <Ph className={`absolute top-[58%] lg:top-1/2 ${LEFT}`}>[ FULL-BLEED STILL — ON SET ]</Ph>
      <div className={`absolute top-[48px] bottom-[150px] border border-white/[0.28] left-5 md:left-10 lg:top-[70px] lg:bottom-[70px] lg:left-[41.667%] ${RIGHT}`}>
        <Dots />
        <span className={s.dot} style={{ left: "33%", bottom: 40 }} />
        <span className={s.dot} style={{ left: "66%", bottom: 40 }} />
        <h2
          className={`${DISPLAY} absolute top-[28px] right-0 left-0 text-center text-[clamp(34px,4.444vw,64px)] lg:top-[39px] lg:right-auto lg:left-[125px] lg:[transform:translateX(-4px)]`}
        >
          Commercial
          <br />
          meets cinema
        </h2>
      </div>
      <button
        type="button"
        onClick={onPlay}
        aria-label="Play the showreel"
        className={`${s.link} absolute bottom-[72px] left-[36px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-white/70 bg-transparent text-[#f2f2f0] md:left-[56px] lg:bottom-[110px] lg:left-[120px] xl:left-[200px]`}
      >
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-dashed border-white/60">
          <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
            <path d="M3 1.5v9l7-4.5z" />
          </svg>
        </span>
      </button>
      <span className={`absolute bottom-[40px] text-[11px] text-white/65 lg:bottom-[70px] ${LEFT}`}>Showreel [YEAR] · [DURATION]</span>
    </section>
  );
}
