import s from "../option-c.module.css";
import { Corners, Ph } from "./primitives";
import { DISPLAY, LEFT, RIGHT } from "./theme";

/** 7 · Podcast band: spotlight still with overlays. */
export function PodcastBand() {
  return (
    <section id="podcast" className="relative h-[680px] shrink-0 overflow-hidden lg:h-[900px]">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 52% 52%, #4a3b2e 0%, #2a221c 35%, #120f0d 75%)" }} />
      <Ph className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">[ FULL-BLEED STILL — PODCAST SET ]</Ph>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,11,11,0.55) 0%, rgba(11,11,11,0) 45%), linear-gradient(180deg, rgba(11,11,11,0.6) 0%, rgba(11,11,11,0) 20%, rgba(11,11,11,0) 70%, rgba(11,11,11,0.7) 100%)",
        }}
      />
      <h2 className={`${DISPLAY} absolute top-[72px] text-[clamp(36px,4.444vw,64px)] lg:top-[150px] ${LEFT}`}>
        Voices,
        <br />
        on the record
      </h2>
      <div className={`absolute top-[80px] flex items-center gap-[10px] lg:top-[150px] ${RIGHT}`} aria-hidden="true">
        <span className="h-[14px] w-[14px] border border-white/60" />
        <span className="h-px w-[22px] bg-white/60" />
        <span className="h-[14px] w-[14px] rounded-full border border-white/60" />
      </div>
      <div className={`absolute bottom-[112px] flex flex-col gap-[14px] md:w-[380px] lg:bottom-[120px] ${LEFT} right-5 md:right-auto`}>
        <div className="flex items-center gap-[10px] text-[10px] tracking-[0.08em] text-white/70 uppercase">
          <span className="rounded-[2px] bg-[#f2f2f0] px-[8px] py-[3px] font-bold text-[#0b0b0b]">Podcast</span>
          Freaky Mack Originals
        </div>
        <span className="text-[22px] font-medium tracking-[-0.02em] lg:text-[26px]">[Latest episode title]</span>
        <span className="h-px w-[72px] bg-white/50" />
        <span className="text-[12px] leading-[1.85] text-white/[0.72]">
          Episode [NN] · [DURATION]. Conversations with the filmmakers, creators and people behind the work.
        </span>
      </div>
      <a
        href="https://youtube.com"
        className={`${s.bracket} absolute bottom-[40px] px-[22px] py-[12px] text-[11px] font-semibold tracking-[0.14em] uppercase left-5 md:left-10 lg:bottom-[120px] lg:left-auto lg:right-[80px] xl:right-[160px]`}
      >
        <Corners inset />
        Watch on YouTube
      </a>
    </section>
  );
}
