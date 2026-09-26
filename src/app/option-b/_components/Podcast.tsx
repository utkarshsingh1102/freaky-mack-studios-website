import s from "../option-b.module.css";
import { PlayIcon } from "./icons";
import { CHAPTER, H2, PB, PX } from "./theme";

const THUMBS = ["#dcdcd8", "#d0d0cc", "#dcdcd8"];

/** Chapter 04: featured latest episode + list. */
export function Podcast() {
  return (
    <section id="ch4" className={`flex shrink-0 flex-col gap-[40px] lg:gap-[56px] ${PB} ${PX}`}>
      <div className="flex flex-col gap-[20px]">
        <div className={`${s.it} ${CHAPTER}`}>Chapter 04 — Voices, on the record</div>
        <h2 className={H2}>The podcast</h2>
      </div>
      <div className="grid grid-cols-1 items-start gap-y-[40px] lg:grid-cols-12 lg:gap-x-[32px]">
        <a href="#ch4" className={`${s.card} flex flex-col gap-[18px] lg:col-span-7`}>
          <div
            className="relative flex h-[220px] items-center justify-center rounded-[24px] text-[12px] tracking-[0.2em] text-white uppercase md:h-[360px] lg:h-[440px]"
            style={{ background: "linear-gradient(160deg,#3a3a3a,#111)" }}
          >
            [ LATEST EPISODE 16:9 ]
            <span className="absolute bottom-[18px] left-[18px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white lg:bottom-[24px] lg:left-[24px] lg:h-[56px] lg:w-[56px]">
              <PlayIcon size={16} />
            </span>
            <span
              className={`${s.it} absolute top-[18px] right-[18px] rounded-full bg-white px-[16px] py-[6px] text-[18px] tracking-normal text-[#0a0a0a] normal-case [transform:rotate(4deg)] lg:top-[24px] lg:right-[24px]`}
            >
              latest
            </span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <span className="text-[13px] tracking-[0.18em] text-[#5c5c5c] uppercase">Episode [NN] · [DURATION]</span>
            <span className="text-[24px] font-semibold tracking-[-0.02em] lg:text-[28px]">[Episode title]</span>
          </div>
        </a>
        <div className="flex flex-col border-t border-[#0a0a0a] lg:col-span-5 lg:col-start-8">
          {THUMBS.map((bg, i) => (
            <a key={i} href="#ch4" className={`${s.row} flex items-center gap-[20px] border-b border-[#d6d6d2] py-[22px]`}>
              <div className="h-[60px] w-[100px] shrink-0 rounded-[12px] lg:h-[72px] lg:w-[120px]" style={{ background: bg }} />
              <div className="flex flex-col gap-[4px]">
                <span className="text-[12px] tracking-[0.18em] text-[#5c5c5c] uppercase">Episode [NN]</span>
                <span className="text-[18px] font-semibold lg:text-[20px]">[Episode title]</span>
              </div>
            </a>
          ))}
          <a
            href="https://youtube.com"
            className={`${s.pill} mt-[28px] flex h-[48px] items-center self-start rounded-full border border-[#0a0a0a] px-[22px] text-[14px] font-semibold`}
          >
            All episodes on YouTube ↗
          </a>
        </div>
      </div>
    </section>
  );
}
