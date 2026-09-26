import s from "../option-b.module.css";
import { CHAPTER, PB, PX } from "./theme";

export function Testimonial() {
  return (
    <section aria-label="What clients say" className={`grid shrink-0 grid-cols-1 lg:grid-cols-12 lg:gap-x-[32px] ${PB} ${PX}`}>
      <div className="flex flex-col items-center gap-[28px] text-center lg:col-span-10 lg:col-start-2 lg:gap-[32px]">
        <div className={`${s.it} ${CHAPTER}`}>…and what they said afterwards</div>
        <blockquote className={`${s.serif} m-0 text-[clamp(30px,3.611vw,52px)] leading-[1.2] tracking-[-0.01em] text-balance`}>
          “[Client testimonial — two or three lines in their own words, the kind you’d put on a poster.]”
        </blockquote>
        <div className="flex flex-wrap items-center justify-center gap-[14px]">
          <span className="h-[44px] w-[44px] rounded-full bg-[#dcdcd8]" />
          <span className="text-[15px] font-semibold">[Name]</span>
          <span className="text-[15px] text-[#5c5c5c]">· [Role], [Brand]</span>
        </div>
      </div>
    </section>
  );
}
