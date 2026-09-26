import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";
import { Still } from "./Still";

const NUMBERS = [
  { n: "[NN]", label: "Films delivered", text: "Ad films, music videos, fashion films and documentaries.", x: 238, y: 420, step: "" },
  { n: "7", label: "Major brands", text: "McDonald’s, Google, Adidas Originals, Mercedes-Benz and more.", x: 500, y: 710, step: "ml-[16%]" },
  { n: "6", label: "Years in film", text: "The advertising discipline behind every Freaky Mack Studios production.", x: 781, y: 990, step: "ml-[32%]" },
];

/** 5 · White "In numbers" section with a staircase of big figures. */
export function NumbersStaircase() {
  return (
    <section
      aria-label="In numbers"
      className="relative flex shrink-0 flex-col gap-[28px] overflow-hidden bg-white px-5 py-[72px] text-black md:px-10 xl:block xl:h-[1371px] xl:p-0"
    >
      <span className={`flex items-center gap-[10px] text-[10px] tracking-[0.1em] text-[#6a6a6a] uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 219, y: 98 })}>
        <img src={FM_MARK_WHITE} alt="" className="h-[18px] w-[27px] object-contain invert" />( In numbers )
      </span>
      <h2
        className={`m-0 flex flex-col items-start gap-[4px] text-[30px] leading-[1.1] font-semibold tracking-[-0.02em] uppercase xl:text-[40px] ${ABS}`}
        style={pos({ x: 219, y: 150 })}
      >
        <span>The numbers</span>
        <span className={s.hlInv}>Behind our work</span>
      </h2>
      <Still
        bg="linear-gradient(140deg,#c8c8c8,#3a3a3a)"
        label="[ BTS still ]"
        dark
        className={`aspect-[292/185] w-full md:w-[60%] xl:aspect-auto ${ABS}`}
        style={pos({ x: 932, y: 69, w: 292, h: 185 })}
      />
      <div className="relative my-[12px] h-px bg-black/[0.08] xl:absolute xl:top-[320px] xl:right-[15.208%] xl:left-[15.208%] xl:my-0">
        <span className={s.dtK} style={{ left: -2, top: -2 }} />
        <span className={s.dtK} style={{ right: -2, top: -2 }} />
      </div>
      {NUMBERS.map((n) => (
        <div key={n.label} className={`flex flex-col gap-[14px] ${n.step} xl:ml-0 ${ABS}`} style={pos({ x: n.x, y: n.y })}>
          <span className="text-[96px] leading-[0.9] font-light tracking-[-0.04em] text-[#a8a8a8] md:text-[140px] xl:text-[190px]">
            {n.n}
            <span className="text-[76px] md:text-[110px] xl:text-[150px]">+</span>
          </span>
          <div className="flex flex-col gap-[6px] pl-[4px]">
            <span className="text-[12px] font-bold uppercase">{n.label}</span>
            <span className="max-w-[260px] text-[11px] leading-[1.6] text-[#6a6a6a] xl:text-[10px]">{n.text}</span>
          </div>
        </div>
      ))}
      <div className="relative mt-[12px] h-px bg-black/[0.08] xl:absolute xl:top-[1303px] xl:right-[15.208%] xl:left-[15.208%] xl:mt-0">
        <span className={s.dtK} style={{ left: -2, top: -2 }} />
        <span className={s.dtK} style={{ right: -2, top: -2 }} />
      </div>
    </section>
  );
}
