import s from "../option-b.module.css";
import { CHAPTER, H2, PB, PX } from "./theme";

const SERVICES = ["Ad films", "Music videos", "Fashion films", "Event films", "Documentaries", "Short films & web series", "Podcast & YouTube", "Post-production"];

/** Chapter 02: sticky intro left, big numbered list right. */
export function ServicesList() {
  return (
    <section id="ch2" className={`grid shrink-0 grid-cols-1 gap-y-[40px] lg:grid-cols-12 lg:gap-x-[32px] ${PB} ${PX}`}>
      <div className="flex flex-col gap-[24px] lg:sticky lg:top-[40px] lg:col-span-5 lg:self-start">
        <div className={`${s.it} ${CHAPTER}`}>Chapter 02 — Say it out loud</div>
        <h2 className={`${H2} text-balance`}>Eight ways a brief becomes a film.</h2>
        <p className="m-0 max-w-[440px] text-[17px] leading-[1.6] text-[#3a3a3a] lg:text-[18px]">
          One team from development through post — the precision of advertising, the appetite of independent cinema.
        </p>
        <a
          href="#contact"
          className={`${s.link} ${s.it} self-start border-b border-[#0a0a0a] pb-[4px] text-[22px] lg:text-[26px]`}
        >
          Which one is yours? →
        </a>
      </div>
      <ol className="m-0 flex list-none flex-col border-t border-[#0a0a0a] p-0 lg:col-span-7 lg:col-start-6">
        {SERVICES.map((sv, i) => (
          <li
            key={sv}
            className={`${s.row} flex items-baseline gap-[16px] border-b border-[#d6d6d2] py-[20px] lg:gap-[24px] lg:py-[26px]`}
          >
            <span className={`${s.it} w-[32px] shrink-0 text-[19px] text-[#6b6b6b] lg:w-[40px] lg:text-[22px]`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[26px] font-semibold tracking-[-0.02em] lg:text-[36px]">{sv}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
