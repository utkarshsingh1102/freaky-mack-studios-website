import s from "../option-c.module.css";
import { CircleArrow } from "./Timeline";
import { DISPLAY, PX } from "./theme";

const BGS = [
  "linear-gradient(170deg,#6a5f52,#2a2520)",
  "linear-gradient(170deg,#5f5a55,#262320)",
  "linear-gradient(170deg,#6b6660,#2c2926)",
  "linear-gradient(170deg,#55595e,#222426)",
];
const CREW = [{ name: "Izaan Khan", role: "Founder & Creative Producer" }, ...Array.from({ length: 7 }, () => ({ name: "[Name]", role: "[Role]" }))];

/** 11 · Crew grid. Only Izaan Khan is confirmed; the rest stay as placeholders. */
export function Crew() {
  return (
    <section id="crew" className={`flex shrink-0 flex-col gap-[40px] pt-[80px] pb-[96px] lg:gap-[56px] lg:pt-[100px] lg:pb-[120px] xl:h-[1300px] ${PX}`}>
      <div className="flex items-start justify-between gap-[24px]">
        <h2 className={`${DISPLAY} text-[clamp(34px,3.611vw,52px)] leading-[1.1]`}>
          The crew
          <br />
          behind the frame
        </h2>
        <CircleArrow />
      </div>
      <div className="grid grid-cols-2 gap-x-[8px] gap-y-[28px] md:grid-cols-4">
        {CREW.map((c, i) => (
          <div key={i} className={`${s.frame} flex flex-col gap-[10px]`}>
            <div className="h-[220px] overflow-hidden md:h-[280px] lg:h-[360px]">
              <div
                className={`${s.img} flex h-full w-full items-center justify-center text-[11px] tracking-[0.2em] text-white/40`}
                style={{ background: BGS[i % 4] }}
              >
                [ PORTRAIT ]
              </div>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[12px] font-medium">{c.name}</span>
              <span className="text-[11px] text-[#8c8c88]">{c.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
