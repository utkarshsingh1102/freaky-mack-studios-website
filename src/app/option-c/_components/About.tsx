import s from "../option-c.module.css";
import { Corners } from "./primitives";
import { PX } from "./theme";

/** 2 · "About [still] Our / Filmmaking Story" + two-column intro. */
export function About() {
  return (
    <section id="about" className={`flex shrink-0 flex-col gap-[64px] py-[96px] lg:gap-[96px] lg:py-[120px] xl:h-[900px] ${PX}`}>
      <div className="flex flex-col gap-[14px] text-[clamp(34px,6.111vw,88px)] leading-[1.08] font-medium tracking-[-0.045em] uppercase lg:gap-[20px]">
        <div className="flex flex-wrap items-end justify-center gap-x-[12px] gap-y-[12px] md:gap-x-[20px] lg:gap-[40px]">
          <span>About</span>
          <span className={`${s.frame} relative block h-[56px] w-[88px] md:h-[130px] md:w-[205px] lg:h-[190px] lg:w-[300px]`}>
            <span className="absolute inset-0 block overflow-hidden">
              <span
                className={`${s.img} flex h-full w-full items-center justify-center text-[9px] font-medium tracking-[0.2em] text-white/35 lg:text-[11px]`}
                style={{ background: "linear-gradient(140deg,#3a352e,#141312)" }}
              >
                [ BTS STILL ]
              </span>
            </span>
            <Corners />
          </span>
          <span>Our</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-[16px] lg:gap-[28px]">
          <span className="text-[#6e6e6a]">Filmmaking</span>
          <span>Story</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-[20px] border-t border-white/10 pt-[32px] text-[13px] leading-[1.85] text-[#a9a9a4] md:grid-cols-12 md:gap-x-[32px]">
        <span className="text-[11px] text-[#8c8c88] md:col-span-3">About us</span>
        <p className="m-0 md:col-span-4 md:col-start-5 lg:col-span-3 lg:col-start-6">
          Freaky Mack Studios is a film production house built on six years of advertising filmmaking at Freaky Mack —
          now evolving into a larger creative studio focused on storytelling across commercial, narrative and digital
          formats.
        </p>
        <p className="m-0 md:col-span-4 md:col-start-9 lg:col-span-3 lg:col-start-10">
          Over the years we have made films for McDonald’s, Google, Adidas Originals, Mercedes-Benz, Fila, PC
          Jewellers, Times of India and many more — bringing strong visual storytelling, production discipline and a
          filmmaker-led creative approach.
        </p>
      </div>
    </section>
  );
}
