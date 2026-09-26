import { ABS, pos } from "./pos";
import { Still } from "./Still";

const NUM = "text-[110px] leading-none font-light tracking-[-0.04em] xl:text-[170px]";
const PHASE = "text-[10px] leading-[1.6] tracking-[0.06em] font-semibold uppercase xl:text-[9px]";
const BODY = "m-0 max-w-[260px] text-[11px] leading-[1.6] text-white/60 xl:max-w-none xl:text-[9px]";

/** 10 · How we work: 01 / 02 / 03. */
export function Process() {
  return (
    <section aria-label="How we work" className="relative flex shrink-0 flex-col gap-[20px] overflow-hidden px-5 py-[64px] md:px-10 xl:block xl:h-[780px] xl:p-0">
      {/* 01 */}
      <span className={`${NUM} text-[#5a5a5a] self-end ${ABS}`} style={pos({ r: 219, y: 55 })}>01</span>
      <div className={`${PHASE} ${ABS}`} style={pos({ x: 215, y: 69 })}>
        Phase 01
        <br />
        Development
        <br />
        &amp; direction
      </div>
      <p className={`${BODY} ${ABS}`} style={pos({ x: 215, y: 212, w: 220 })}>
        Idea, treatment and script — the story before the camera rolls.
      </p>
      <span className="my-[20px] h-px bg-white/10 xl:absolute xl:top-[274px] xl:right-[15.208%] xl:left-[14.931%] xl:my-0" />
      {/* 02 */}
      <span className={`${NUM} text-[#5a5a5a] ${ABS}`} style={pos({ x: 222, y: 300 })}>02</span>
      <div className={`${PHASE} self-end text-right ${ABS}`} style={pos({ r: 219, y: 315 })}>
        Phase 02
        <br />
        Production
      </div>
      <p className={`${BODY} self-end text-right ${ABS}`} style={pos({ r: 219, y: 446, w: 220 })}>
        Crew, camera and the discipline of six years on commercial sets.
      </p>
      {/* 03 */}
      <Still
        bg="radial-gradient(ellipse at 45% 40%, #d8c8a8 0%, #6a8aa8 35%, #1a2a3a 80%)"
        className={`my-[20px] aspect-[274/329] w-[70%] self-center xl:my-0 xl:aspect-auto ${ABS}`}
        style={pos({ x: 583, y: 432, w: 274, h: 329 })}
      />
      <span className={`${NUM} self-end font-normal text-white ${ABS}`} style={pos({ r: 219, y: 545 })}>03</span>
      <div className={`${PHASE} ${ABS}`} style={pos({ x: 215, y: 569 })}>
        Phase 03
        <br />
        Post-production
      </div>
      <p className={`${BODY} ${ABS}`} style={pos({ x: 215, y: 700, w: 220 })}>
        Edit, grade, sound and delivery — cut for every platform.
      </p>
    </section>
  );
}
