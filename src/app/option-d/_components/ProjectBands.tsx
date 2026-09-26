import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";

const BANDS = [
  { no: "01", type: "Ad film", who: "[Client]", line: "An ad film for [Client]", bg: "linear-gradient(180deg, #2c3a42 0%, #1a262c 55%, #0e1418 100%)" },
  { no: "02", type: "Music video", who: "[Artist]", line: "A music video for [Artist]", bg: "radial-gradient(ellipse at 55% 45%, #6a4a2e 0%, #33241a 45%, #0e0a08 100%)" },
  { no: "03", type: "Fashion film", who: "[Brand]", line: "A fashion film for [Brand]", bg: "linear-gradient(160deg, #6a6c6e 0%, #4a4c4e 45%, #2a2324 100%)" },
];
const META = "text-[10px] tracking-[0.1em] uppercase xl:text-[9px]";

/** 4 · Three full-bleed project bands. */
export function ProjectBands() {
  return (
    <>
      {BANDS.map((b, i) => (
        <section key={b.no} id={i === 0 ? "work" : undefined} className="relative h-[440px] shrink-0 overflow-hidden md:h-[520px] xl:h-[620px]">
          <div className={`${s.ph} absolute inset-0`} style={{ background: b.bg }}>
            [ Full-bleed still — project {b.no} ]
          </div>
          <div className={`absolute top-[24px] left-5 flex flex-col gap-[6px] xl:top-[28px] xl:left-[34px] ${META}`}>
            <span>{b.no}</span>
            <span className="text-white/70">{b.type}</span>
          </div>
          <div className={`absolute top-[24px] right-5 flex flex-col items-end gap-[6px] xl:top-[28px] xl:right-[34px] ${META}`}>
            <img src={FM_MARK_WHITE} alt="" className="h-[16px] w-[24px] object-contain" />
            <span className="text-white/70">{b.who} · [Year]</span>
          </div>
          <div className="absolute bottom-[64px] left-5 flex flex-col gap-[12px] xl:bottom-[40px] xl:left-[34px]">
            <span className="text-[26px] font-semibold tracking-[-0.02em] uppercase xl:text-[34px]">[Project title]</span>
            <span className="text-[10px] leading-[1.6] tracking-[0.06em] text-white/70 uppercase xl:text-[9px]">
              {b.line}
              <br />
              Directed by Freaky Mack Studios
            </span>
          </div>
          <a
            href="#work"
            className={`${s.link} absolute bottom-[28px] left-5 text-[10px] font-semibold tracking-[0.1em] uppercase xl:right-[34px] xl:bottom-[44px] xl:left-auto xl:text-[9px]`}
          >
            View project →
          </a>
        </section>
      ))}
    </>
  );
}
