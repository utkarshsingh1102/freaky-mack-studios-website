import { useRef, useState, type PointerEvent } from "react";
import s from "../option-b.module.css";
import { CHAPTER, H2, PB } from "./theme";

const FRAMES = [
  { format: "ad film", bg: "linear-gradient(160deg,#3a3a3a,#111)" },
  { format: "music video", bg: "linear-gradient(200deg,#5a5a58,#1a1a1a)", drop: true },
  { format: "fashion film", bg: "linear-gradient(140deg,#2a2a2a,#6a6a66)" },
  { format: "documentary", bg: "linear-gradient(220deg,#444,#0e0e0e)", drop: true },
];

/** Chapter 01: horizontal filmstrip — drag sideways with a mouse, swipe on touch, arrow keys when focused. */
export function Filmstrip() {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ x: 0, left: 0, moved: false, id: -1 });
  const [dragging, setDragging] = useState(false);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0 || !ref.current) return;
    drag.current = { x: e.clientX, left: ref.current.scrollLeft, moved: false, id: e.pointerId };
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (d.id !== e.pointerId || !ref.current) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) {
      d.moved = true;
      setDragging(true);
      ref.current.setPointerCapture(e.pointerId);
    }
    if (d.moved) ref.current.scrollLeft = d.left - dx;
  };
  const endDrag = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current.id !== e.pointerId) return;
    drag.current.id = -1;
    setDragging(false);
  };

  return (
    <section id="ch1" className={`flex shrink-0 flex-col gap-[40px] overflow-hidden lg:gap-[56px] ${PB}`}>
      <div className="flex flex-col items-start justify-between gap-[16px] px-5 md:flex-row md:items-end md:px-10 lg:px-[96px]">
        <div className="flex flex-col gap-[20px]">
          <div className={`${s.it} ${CHAPTER}`}>Chapter 01 — Six years of saying yes to brands</div>
          <h2 className={`${H2} max-w-[820px] text-balance`}>The reel, cut into frames.</h2>
        </div>
        <span className={`${s.it} text-[18px] text-[#6b6b6b] lg:text-[22px]`}>
          <span className="lg:hidden">swipe sideways →</span>
          <span className="hidden lg:inline">drag sideways →</span>
        </span>
      </div>
      <div
        ref={ref}
        role="region"
        aria-label="Work filmstrip"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(e) => {
          // A drag that ends over a card shouldn't open it.
          if (drag.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            drag.current.moved = false;
          }
        }}
        className={`${s.strip} ${dragging ? s.dragging : ""} -mt-[16px] flex snap-x snap-mandatory items-start gap-[20px] overflow-x-auto scroll-pl-5 px-5 pt-[16px] pb-[16px] md:scroll-pl-10 md:px-10 lg:snap-none lg:gap-[28px] lg:pr-[96px] lg:pl-[96px]`}
      >
        {FRAMES.map((f, i) => (
          <a
            key={f.format}
            href="#ch1"
            draggable={false}
            className={`${s.card} flex w-[280px] shrink-0 snap-start flex-col gap-[16px] md:w-[340px] lg:w-[400px] ${f.drop ? "mt-[40px] lg:mt-[60px]" : ""}`}
          >
            <div
              className="flex h-[350px] items-center justify-center rounded-[22px] text-[12px] tracking-[0.2em] text-white uppercase md:h-[425px] lg:h-[520px]"
              style={{ background: f.bg }}
            >
              [ STILL 4:5 ]
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-[18px] font-semibold lg:text-[20px]">[Project title]</span>
              <span className={`${s.it} text-[17px] text-[#6b6b6b] lg:text-[18px]`}>{f.format}</span>
            </div>
            <span className="sr-only">Frame {i + 1} of {FRAMES.length}</span>
          </a>
        ))}
      </div>
      <a
        href="#ch1"
        className={`${s.link} ${s.it} mx-5 self-start border-b border-[#0a0a0a] pb-[4px] text-[22px] md:mx-10 lg:mx-[96px] lg:text-[26px]`}
      >
        See every frame →
      </a>
    </section>
  );
}
