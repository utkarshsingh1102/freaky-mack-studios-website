import { FM_MARK_WHITE } from "@/shared/assets";
import { ReelLoop } from "@/shared/reel";
import s from "../option-b.module.css";
import { PlayIcon } from "./icons";
import { PX } from "./theme";

/** Split hero: headline left, tilted showreel card right (opens the full-reel modal). */
export function SplitHero({ onOpenReel }: { onOpenReel: () => void }) {
  return (
    <section
      id="top"
      className={`relative grid shrink-0 grid-cols-1 items-center gap-y-[64px] pt-[56px] pb-[96px] lg:grid-cols-12 lg:gap-x-[32px] lg:pt-[120px] lg:pb-[160px] ${PX}`}
    >
      <div className="flex flex-col gap-[28px] lg:col-span-7 lg:gap-[36px]">
        <div className={`${s.it} text-[17px] tracking-[0.08em] text-[#6b6b6b] uppercase lg:text-[22px]`}>
          Chapter 00 — Once upon a brief
        </div>
        <h1 className="m-0 text-[clamp(40px,6.111vw,88px)] leading-[0.98] font-extrabold tracking-[-0.03em] text-balance uppercase">
          We make{" "}
          <span className={`${s.it} text-[clamp(44px,6.667vw,96px)] font-normal tracking-[0.01em]`}>films</span> that
          people actually finish watching.
        </h1>
        <p className="m-0 max-w-[560px] text-[14px] leading-[1.7] tracking-[0.06em] text-[#3a3a3a] uppercase lg:text-[16px]">
          A film production house born from six years of advertising — now telling stories for brands, music, fashion
          and ourselves.
        </p>
        <div className="flex flex-wrap items-center gap-[20px]">
          <a
            href="#contact"
            className={`${s.pill} ${s.primary} flex h-[60px] items-center rounded-full border border-[#0a0a0a] bg-[#0a0a0a] px-[30px] text-[15px] font-semibold text-white`}
          >
            Start a project
          </a>
          <a href="#ch1" className={`${s.link} border-b border-[#0a0a0a] pb-[3px] text-[15px] font-medium`}>
            or scroll the story ↓
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[520px] lg:col-span-5 lg:col-start-8 lg:mx-0 lg:h-[560px] lg:max-w-none">
        <img
          src={FM_MARK_WHITE}
          alt=""
          className={`${s.blob} absolute top-[-44px] right-[-4px] z-[2] h-[64px] w-[96px] object-contain invert lg:top-[-70px] lg:right-[-20px] lg:h-[100px] lg:w-[150px]`}
        />
        <button
          type="button"
          onClick={onOpenReel}
          aria-label="Open the showreel"
          className={`${s.reel} relative block aspect-[520/470] w-full overflow-hidden rounded-[24px] border-0 bg-[#0d0d0d] p-0 text-left text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] [transform:rotate(3deg)] lg:absolute lg:top-[40px] lg:left-0 lg:aspect-auto lg:h-[470px] lg:w-[520px]`}
        >
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 55%, #2c2c2c 0%, #121212 55%, #0a0a0a 100%)" }}
          />
          <ReelLoop className="absolute inset-0 h-full w-full object-cover">
            <div className="absolute inset-[14px] flex items-center justify-center border border-dashed border-white/[0.18] text-center text-[11px] tracking-[0.22em] text-white/45 uppercase lg:inset-[18px] lg:text-[12px]">
              [ 10–15 SEC LOOP, MUTED ]
            </div>
          </ReelLoop>
          <div className="absolute bottom-[20px] left-[22px] flex items-center gap-[14px] lg:bottom-[24px] lg:left-[28px]">
            <span className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white lg:h-[52px] lg:w-[52px]">
              <PlayIcon size={14} />
            </span>
            <span className="flex flex-col gap-[2px]">
              <span className="text-[15px] font-semibold">Showreel</span>
              <span className="text-[13px] text-white/65">tap to open · [DURATION]</span>
            </span>
          </div>
        </button>
        <span
          className={`${s.it} absolute bottom-[-18px] left-[-8px] z-[2] rounded-full bg-[#0a0a0a] px-[16px] py-[6px] text-[18px] text-white [transform:rotate(-8deg)] lg:bottom-[30px] lg:left-[-24px] lg:px-[20px] lg:py-[8px] lg:text-[22px]`}
        >
          press play, we dare you
        </span>
      </div>
    </section>
  );
}
