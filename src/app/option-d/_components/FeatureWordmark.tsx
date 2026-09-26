import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";

/** 3 · Full-bleed hero-film still + giant FREAKY MACK wordmark (scales with the viewport, clipped at the edges). */
export function FeatureWordmark() {
  return (
    <>
      <section className="relative h-[300px] shrink-0 overflow-hidden md:h-[420px] xl:h-[560px]">
        <div className={`${s.ph} absolute inset-0`} style={{ background: "radial-gradient(ellipse at 50% 40%, #6a5238 0%, #3a2c20 40%, #120e0b 90%)" }}>
          [ Full-bleed still — hero film ]
        </div>
      </section>
      <section aria-hidden="true" className="relative h-[min(13.889vw,200px)] shrink-0 overflow-hidden bg-black">
        <span className="absolute top-[min(2.5vw,36px)] left-1/2 flex -translate-x-1/2 items-start gap-[min(2.5vw,36px)] text-[min(13.889vw,200px)] leading-none font-bold tracking-[-0.04em] whitespace-nowrap text-[#1c1c1c] uppercase">
          <img
            src={FM_MARK_WHITE}
            alt=""
            className="mt-[min(1.25vw,18px)] h-[min(11.111vw,160px)] w-[min(16.667vw,240px)] object-contain opacity-[0.11]"
          />
          Freaky Mack
        </span>
      </section>
    </>
  );
}
