import { ArrowIcon } from "./primitives";
import { DISPLAY, PX } from "./theme";

const STEPS = [
  { ch: "Chapter 01", year: "[YEAR]", body: "Freaky Mack begins as an advertising outfit, making films for brands.", tag: "Freaky Mack", h: "h-[250px] max-md:h-[230px]" },
  { ch: "Chapter 02", year: "[YEAR]", body: "McDonald’s, Google and Adidas Originals come on board.", tag: "Brand films", h: "h-[290px] max-md:h-[250px]" },
  { ch: "Chapter 03", year: "[YEAR]", body: "Mercedes-Benz, Fila, PC Jewellers, Times of India — and many more.", tag: "Growing roster", h: "h-[330px] max-md:h-[270px]" },
  { ch: "Chapter 04", year: "2026", body: "Freaky Mack Studios — originals, series, documentaries and the podcast, alongside brand work.", tag: "Freaky Mack Studios", h: "h-[370px] max-md:h-[290px]" },
];

export function CircleArrow() {
  return (
    <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-white/20 text-[#8c8c88]" aria-hidden="true">
      <ArrowIcon size={12} />
    </span>
  );
}

/** 10 · Timeline staircase: from agency to studio. */
export function Timeline() {
  return (
    <section className={`flex shrink-0 flex-col gap-[48px] py-[96px] lg:gap-[72px] lg:py-[120px] xl:h-[800px] ${PX}`}>
      <div className="flex items-start justify-between gap-[24px]">
        <h2 className={`${DISPLAY} text-[clamp(34px,3.611vw,52px)] leading-[1.1]`}>
          From agency
          <br />
          to studio
        </h2>
        <CircleArrow />
      </div>
      <ol className="m-0 grid list-none grid-cols-2 items-end gap-[6px] p-0 md:grid-cols-4">
        {STEPS.map((st) => (
          <li key={st.ch} className={`box-border flex flex-col justify-between bg-[#1b1b1a] p-[14px] md:p-[18px] ${st.h}`}>
            <div className="flex justify-between text-[10px] text-[#8c8c88]">
              <span className="h-[10px] w-[10px] border border-[#8c8c88]" />
              <span>{st.ch}</span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <span className="text-[22px] font-medium">{st.year}</span>
              <span className="text-[11px] leading-[1.8] text-[#a9a9a4]">{st.body}</span>
              <span className="text-[10px] text-[#8c8c88]">▣ {st.tag}</span>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
