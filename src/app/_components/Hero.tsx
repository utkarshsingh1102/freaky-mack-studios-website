import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../home.module.css";
import { PlayIcon } from "./icons";
import { PX } from "./theme";

export function Hero({ reelOpen, onToggleReel }: { reelOpen: boolean; onToggleReel: () => void }) {
  return (
    <section
      id="top"
      className={`relative flex shrink-0 flex-col items-center gap-[28px] pt-[128px] pb-[72px] text-center lg:gap-[40px] lg:pt-[140px] lg:pb-[120px] ${PX}`}
    >
      <img
        src={FM_MARK_WHITE}
        alt=""
        className={`${s.blob} ${s.logo} absolute top-[24px] left-[12px] h-[56px] w-[84px] object-contain opacity-90 lg:top-[96px] lg:left-[148px] lg:h-[112px] lg:w-[168px]`}
      />
      <div
        className={`${s.spin} absolute top-[20px] right-[16px] h-[88px] w-[88px] rounded-full bg-[var(--accent)] lg:top-[150px] lg:right-[160px] lg:h-[128px] lg:w-[128px]`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 128 128" className="h-full w-full">
          <defs>
            <path id="fm-circ" d="M64,64 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0" />
          </defs>
          <text
            className={s.badge}
            style={{ fontSize: 11.5, letterSpacing: "0.22em", textTransform: "uppercase", fill: "var(--on-accent)", fontWeight: 600 }}
          >
            <textPath href="#fm-circ">Films for brands · Films of our own · </textPath>
          </text>
        </svg>
      </div>
      <div className={`${s.it} text-[17px] tracking-[0.08em] text-[var(--muted-2)] uppercase lg:text-[22px]`}>
        Chapter 00 — Once upon a brief
      </div>
      <h1 className="m-0 max-w-[1200px] text-[clamp(38px,6.667vw,96px)] leading-[0.98] font-extrabold tracking-[-0.03em] text-balance uppercase">
        We make{" "}
        <span
          className={`${s.it} text-[clamp(42px,7.222vw,104px)] font-normal tracking-[0.01em] text-[var(--accent-text)]`}
        >
          films
        </span>{" "}
        that people actually finish watching.
      </h1>
      <p className="m-0 max-w-[640px] text-[14px] leading-[1.7] tracking-[0.06em] text-[var(--ink-2)] uppercase lg:text-[16px]">
        A film production house born from six years of advertising — now telling stories for brands, music, fashion
        and ourselves.
      </p>
      <div className="mt-[8px] flex flex-wrap items-center justify-center gap-[20px]">
        <button
          type="button"
          onClick={onToggleReel}
          aria-expanded={reelOpen}
          aria-controls="reel"
          className={`${s.pill} ${s.primary} flex h-[60px] items-center gap-[14px] rounded-full border border-[var(--inv-bg)] bg-[var(--inv-bg)] pr-[30px] pl-[22px] text-[15px] font-semibold text-[var(--inv-ink)]`}
        >
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[var(--accent)]">
            <PlayIcon size={11} fill="var(--on-accent)" />
          </span>
          {reelOpen ? "Close the reel" : "Press play"}
        </button>
        <a href="#ch1" className={`${s.link} border-b-2 border-[var(--accent)] pb-[3px] text-[15px] font-medium`}>
          or scroll the story ↓
        </a>
      </div>
    </section>
  );
}
