import { FM_MARK_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";
import { Still } from "./Still";

const WORD = "flex items-center gap-[10px] text-[26px] font-semibold tracking-[-0.02em] uppercase md:text-[34px] xl:gap-[12px] xl:text-[40px]";
const BRACKET = "text-[52px] leading-[0.8] font-light md:text-[68px] xl:text-[80px]";

/** 12 · "[ Let’s make … A film ]" CTA around a still from the reel. */
export function CtaBrackets({ mailto }: { mailto: string }) {
  return (
    <section id="contact" className="relative flex shrink-0 flex-col gap-[20px] overflow-hidden px-5 py-[64px] md:px-10 xl:block xl:h-[740px] xl:p-0">
      <div className="mb-[12px] flex justify-between text-[10px] tracking-[0.1em] text-white/60 uppercase xl:contents xl:text-[9px]">
        <span className={ABS} style={pos({ x: 215, y: 103 })}>( Start a project )</span>
        <span className={ABS} style={pos({ r: 219, y: 103 })}>( [City] )</span>
      </div>
      <a href={mailto} className={`${s.link} ${WORD} self-start xl:z-[1] ${ABS}`} style={pos({ x: 212, y: 391 })}>
        <span className={BRACKET}>[</span>Let’s make
      </a>
      <div className="relative aspect-[679/412] w-full xl:contents">
        <Still
          bg="radial-gradient(ellipse at 50% 40%, #6a4a30 0%, #2a1e16 50%, #0a0807 100%)"
          label="[ Still — from the reel ]"
          className={`absolute inset-0 ${ABS}`}
          style={pos({ x: 377, y: 233, w: 679, h: 412 })}
        />
        <img
          src={FM_MARK_WHITE}
          alt=""
          className={`pointer-events-none absolute top-1/2 left-1/2 h-[26%] w-[27%] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.92] xl:translate-x-0 xl:translate-y-0 ${ABS}`}
          style={pos({ x: 626, y: 356, w: 188, h: 125 })}
        />
      </div>
      <a href={mailto} className={`${s.link} ${WORD} self-end xl:z-[1] ${ABS}`} style={pos({ r: 213, y: 391 })}>
        A film<span className={BRACKET}>]</span>
      </a>
      <span className="sr-only">Email {CONTACT.email}</span>
    </section>
  );
}
