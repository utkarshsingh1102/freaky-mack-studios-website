import { CONTACT } from "@/shared/config";
import s from "../option-c.module.css";
import { Ph } from "./primitives";
import { DISPLAY, LEFT, RIGHT } from "./theme";

/** 12 · Closing CTA band. */
export function CtaBand() {
  return (
    <section id="contact" className="relative h-[700px] shrink-0 overflow-hidden lg:h-[820px]">
      <div className="absolute inset-0" style={{ background: "linear-gradient(115deg, #4a4540 0%, #2c2a28 40%, #1b1a19 70%, #121110 100%)" }} />
      <Ph className="absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2">[ FULL-BLEED STILL — CAMERA GEAR ]</Ph>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,11,0.4) 0%, rgba(11,11,11,0) 40%, rgba(11,11,11,0.6) 100%)" }} />
      <h2 className={`${DISPLAY} absolute top-[110px] text-[clamp(42px,5.556vw,80px)] ${LEFT}`}>
        Got a story?
        <br />
        Let’s shoot it.
      </h2>
      <div
        className={`absolute top-[60px] flex gap-[14px] text-[10px] tracking-[0.14em] text-white/70 uppercase left-5 md:left-10 lg:top-[118px] lg:left-auto lg:right-[80px] xl:right-[160px]`}
      >
        <span>Brief</span>
        <span>·</span>
        <span>Shoot</span>
        <span>·</span>
        <span>Cut</span>
      </div>
      <span className={`absolute bottom-[40px] text-[11px] text-white/75 lg:bottom-[110px] ${LEFT}`}>Now booking · [MONTH] [YEAR]</span>
      <div className={`absolute bottom-[88px] flex flex-col gap-[24px] md:w-[380px] lg:bottom-[110px] left-5 md:left-auto ${RIGHT}`}>
        <p className="m-0 text-[12px] leading-[1.85] text-white/85">
          Ad film, music video, fashion film, documentary or something that doesn’t have a name yet — tell us the idea
          and we’ll set up a call.
        </p>
        <div className="flex gap-[28px]">
          <a href={`mailto:${CONTACT.email}`} className={`${s.link} border-b border-white/80 pb-[3px] text-[12px] font-semibold`}>
            Get in touch
          </a>
          <a href={CONTACT.whatsapp} className={`${s.link} border-b border-white/40 pb-[3px] text-[12px] font-semibold text-white/80`}>
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
