import { REEL } from "@/shared/config";
import { ReelEmbed, ReelLoop } from "@/shared/reel";
import s from "../option-a.module.css";
import { Eq, PlayIcon } from "./icons";
import { PX } from "./theme";

const GRADIENT = "radial-gradient(ellipse at 50% 55%, #2c2c2c 0%, #121212 55%, #0a0a0a 100%)";
const DASHED =
  "absolute flex items-center justify-center border border-dashed border-white/[0.18] text-center text-[11px] tracking-[0.22em] text-white/45 uppercase lg:text-[12px]";

/** Small tilted card that opens into a full-width band (board: reelOpen / reelClosed). */
export function Reel({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <section id="reel" aria-label="Showreel" className={`flex shrink-0 justify-center pb-[96px] lg:pb-[160px] ${PX}`}>
      {open ? <OpenReel onToggle={onToggle} /> : <ClosedReel onToggle={onToggle} />}
    </section>
  );
}

function OpenReel({ onToggle }: { onToggle: () => void }) {
  const inner = (
    <>
      <div className="absolute inset-0" style={{ background: GRADIENT }} />
      <ReelEmbed
        className="absolute inset-0 h-full w-full"
        placeholder={<div className={`${DASHED} inset-[12px] lg:inset-[24px]`}>[ FULL SHOWREEL — EMBED, SOUND ON ]</div>}
      />
      <div className="pointer-events-none absolute bottom-[16px] left-[18px] flex items-center gap-[14px] text-[12px] font-medium lg:bottom-[36px] lg:left-[40px] lg:text-[14px]">
        <Eq height={18} color="#ffffff" />
        Now playing · Showreel [YEAR]
      </div>
    </>
  );
  const box =
    "relative aspect-[1296/730] w-full max-w-[1296px] overflow-hidden rounded-[20px] border-0 bg-[#0d0d0d] p-0 text-left text-white lg:rounded-[28px]";
  const closeLabel =
    "absolute top-[16px] right-[18px] text-[12px] text-white/70 lg:top-auto lg:right-[40px] lg:bottom-[36px] lg:text-[13px]";

  // With an embed in place the band can't be one big button, so it gets its own close control.
  if (REEL.fullEmbedUrl) {
    return (
      <div className={box}>
        {inner}
        <button type="button" onClick={onToggle} className={`${closeLabel} border-0 bg-transparent`}>
          Close the reel ✕
        </button>
      </div>
    );
  }
  return (
    <button type="button" onClick={onToggle} aria-label="Close the reel" className={box}>
      {inner}
      <div className={closeLabel}>click anywhere to close</div>
    </button>
  );
}

function ClosedReel({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Open the showreel"
      className={`${s.reelCard} relative aspect-[760/428] w-full max-w-[760px] overflow-hidden rounded-[20px] border-0 bg-[#0d0d0d] p-0 text-left text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] [transform:rotate(-2.5deg)] lg:rounded-[24px]`}
    >
      <div className="absolute inset-0" style={{ background: GRADIENT }} />
      <ReelLoop className="absolute inset-0 h-full w-full object-cover">
        <div className={`${DASHED} inset-[12px] lg:inset-[18px]`}>[ 10–15 SEC LOOP, MUTED ]</div>
      </ReelLoop>
      <div className="absolute bottom-[16px] left-[18px] flex items-center gap-[14px] lg:bottom-[28px] lg:left-[32px]">
        <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[var(--accent)] lg:h-[52px] lg:w-[52px]">
          <PlayIcon size={14} fill="var(--on-accent)" />
        </span>
        <span className="flex flex-col gap-[2px]">
          <span className="text-[14px] font-semibold lg:text-[15px]">Showreel</span>
          <span className="text-[12px] text-white/65 lg:text-[13px]">tap to open · [DURATION]</span>
        </span>
      </div>
      <span
        className={`${s.it} absolute top-[14px] right-[-6px] rounded-full bg-[var(--accent)] px-[14px] py-[4px] text-[16px] text-[var(--on-accent)] [transform:rotate(6deg)] lg:top-[22px] lg:px-[18px] lg:py-[6px] lg:text-[20px]`}
      >
        new!
      </span>
    </button>
  );
}
