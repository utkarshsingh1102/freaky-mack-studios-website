import { useState } from "react";
import s from "../option-c.module.css";
import { DISPLAY, PX } from "./theme";

const NAMES = ["McDonald’s", "Google", "Adidas Originals", "Mercedes-Benz", "Fila", "PC Jewellers", "Times of India"];
const TINTS = ["#2a2d31", "#262320", "#2d2a2f", "#2a2622", "#3a2a26", "#2c2621", "#4a3320"];
const no = (i: number) => String(i + 1).padStart(2, "0");

/** 8 · Client stories: click a brand tile to swap the quote, counter and still. */
export function ClientStories() {
  const [brand, setBrand] = useState(0);
  const name = NAMES[brand];
  return (
    <section aria-label="Client stories" className={`flex shrink-0 flex-col gap-[40px] py-[96px] lg:gap-[56px] lg:py-[120px] xl:h-[1100px] ${PX}`}>
      <div className="grid grid-cols-1 gap-y-[32px] lg:h-[560px] lg:grid-cols-12 lg:gap-x-[32px]">
        <div className="flex flex-col justify-between gap-[24px] lg:col-span-5">
          <span className="text-[11px] text-[#8c8c88]">Client stories</span>
          <div className="flex flex-col gap-[16px]">
            <span className="text-[11px] text-[#8c8c88]" aria-live="polite">
              {no(brand)} / 07
            </span>
            <h2 className={`${DISPLAY} text-[clamp(34px,3.611vw,52px)] leading-[1.1]`}>
              Brands we’ve
              <br />
              told stories
              <br />
              with
            </h2>
          </div>
        </div>
        <div className={`${s.frame} relative h-[420px] overflow-hidden lg:col-span-7 lg:col-start-6 lg:h-auto`}>
          <div
            className={`${s.img} absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.2em] text-white/35`}
            style={{ background: "radial-gradient(ellipse at 50% 22%, #6a7078 0%, #2a2d31 30%, #111213 70%)" }}
          >
            [ STILL — {name} ]
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(11,11,11,0) 45%, rgba(11,11,11,0.85) 100%)" }} />
          <div className="absolute bottom-[20px] left-[20px] flex flex-col gap-[8px] lg:bottom-[28px] lg:left-[28px]">
            <span className="text-[44px] leading-[0.6] text-white/70">“</span>
            <span className="text-[12px] font-semibold">[Name]</span>
            <span className="text-[11px] text-white/65">[Role] · {name}</span>
          </div>
          <p
            className="absolute right-[20px] bottom-[120px] left-[20px] m-0 text-[13px] leading-[1.65] font-medium lg:right-[28px] lg:bottom-[28px] lg:left-auto lg:w-[300px] lg:text-right"
            aria-live="polite"
          >
            [Testimonial from {name} — two or three lines, shared with permission.]
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-[8px] sm:grid-cols-7" role="group" aria-label="Choose a client">
        {NAMES.map((n, i) => {
          const on = brand === i;
          return (
            <div key={n} className="flex flex-col gap-[8px]">
              <span className="text-[10px] text-[#8c8c88]">{no(i)}</span>
              <button
                type="button"
                onClick={() => setBrand(i)}
                aria-pressed={on}
                className={`${s.thumb} h-[84px] w-full border-0 px-[10px] text-[11px] font-medium outline-offset-[3px] sm:h-[120px] sm:text-[12px] ${
                  on ? "text-white opacity-100 outline outline-1 outline-[#f2f2f0]" : "text-[#a9a9a4] opacity-75"
                }`}
                style={{ background: `linear-gradient(170deg,${TINTS[i]},#111213)` }}
              >
                {n}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
