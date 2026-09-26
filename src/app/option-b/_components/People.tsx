import s from "../option-b.module.css";
import { CHAPTER, H2, PB, PX } from "./theme";

// Board: one row, each portrait tucked 48px under its neighbour. On phones: an overlapping 2×2 cluster.
const FACES = [
  { label: "Izaan · Founder", radius: "120px 120px 24px 24px", bg: "#e8e8e5", rot: -4, pos: "" },
  { label: "[Name] · [Role]", radius: "24px", bg: "#dcdcd8", rot: 3, pos: "-ml-[28px] mt-[24px] sm:mt-0 sm:ml-[-36px] sm:mb-[28px] lg:ml-[-48px] lg:mb-[48px]" },
  { label: "[Name] · [Role]", radius: "120px", bg: "#e8e8e5", rot: -2, pos: "-mt-[36px] sm:mt-0 sm:ml-[-36px] lg:ml-[-48px]" },
  { label: "[Name] · [Role]", radius: "24px 24px 120px 120px", bg: "#dcdcd8", rot: 4, pos: "-ml-[28px] -mt-[12px] sm:mt-0 sm:ml-[-36px] sm:mb-[20px] lg:ml-[-48px] lg:mb-[32px]" },
];

/** Chapter 05: people, overlapping. */
export function People() {
  return (
    <section id="ch5" className={`grid shrink-0 grid-cols-1 items-center gap-y-[48px] lg:grid-cols-12 lg:gap-x-[32px] ${PB} ${PX}`}>
      <div className="flex flex-col gap-[24px] lg:col-span-5">
        <div className={`${s.it} ${CHAPTER}`}>Chapter 05 — The humans behind the camera</div>
        <h2 className={H2}>Small crew. Big appetite.</h2>
        <a
          href="#team"
          className={`${s.link} ${s.it} self-start border-b border-[#0a0a0a] pb-[4px] text-[22px] lg:text-[26px]`}
        >
          Meet everyone →
        </a>
      </div>
      <div className="grid grid-cols-2 justify-center justify-items-center sm:flex sm:items-end lg:col-span-7 lg:col-start-6 lg:justify-start lg:pl-[40px]">
        {FACES.map((f, i) => (
          <div
            key={i}
            className={`${s.face} relative box-border flex h-[195px] w-[150px] shrink-0 items-end justify-center border-4 border-white pb-[12px] sm:h-[190px] sm:w-[146px] lg:h-[260px] lg:w-[200px] lg:pb-[16px] ${f.pos}`}
            style={{ borderRadius: f.radius, background: f.bg }}
          >
            <span
              className="rounded-full border border-[#0a0a0a] bg-white px-[10px] py-[5px] text-[12px] font-semibold whitespace-nowrap sm:px-[12px] lg:px-[14px] lg:py-[6px] lg:text-[14px]"
              style={{ transform: `rotate(${f.rot}deg)` }}
            >
              {f.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
