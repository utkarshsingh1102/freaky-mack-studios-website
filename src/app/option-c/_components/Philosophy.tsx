import { DISPLAY, LEFT, PX } from "./theme";
import { Ph } from "./primitives";

const BELIEFS = [
  { no: "01", word: "Precision", title: "Advertising discipline", body: "Six years of commercial filmmaking — on time, on brief, on brand." },
  { no: "02", word: "Appetite", title: "Independent ambition", body: "The creative hunger of independent cinema, brought to every brief." },
  { no: "03", word: "Story", title: "Ideas first", body: "A home for filmmakers, creators and ideas that deserve to become films." },
];

/** 9 · Philosophy band over a camera still. */
export function Philosophy() {
  return (
    <section className={`relative flex shrink-0 flex-col gap-[56px] overflow-hidden py-[88px] lg:block lg:h-[700px] lg:p-0 ${PX}`}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 60%, #2a2626 0%, #151313 45%, #0b0b0b 90%)" }} />
      <Ph className="absolute top-[40px] right-5 text-white/25 lg:top-[90px] lg:right-[120px] xl:right-[200px]">[ FULL-BLEED STILL — CAMERA ]</Ph>
      <div className="relative flex items-start gap-[20px] lg:static">
        <span className={`pt-[6px] text-[10px] tracking-[0.1em] text-[#8c8c88] uppercase lg:absolute lg:top-[100px] lg:pt-0 ${LEFT}`}>
          What we believe
        </span>
        <h2 className={`${DISPLAY} text-[clamp(34px,3.611vw,52px)] leading-[1.1] lg:absolute lg:top-[96px] lg:left-[160px] xl:left-[240px]`}>
          How we
          <br />
          see a frame
        </h2>
      </div>
      <div className={`relative grid grid-cols-1 gap-[40px] md:grid-cols-3 lg:absolute lg:right-[80px] lg:bottom-[110px] lg:left-[80px] lg:gap-[48px] xl:right-[160px] xl:left-[160px]`}>
        {BELIEFS.map((b) => (
          <div key={b.no} className="flex flex-col gap-[20px] lg:gap-[28px]">
            <div className="flex items-start gap-[10px]">
              <span className="pt-[6px] text-[10px] text-[#8c8c88]">{b.no}</span>
              <span className="text-[40px] leading-[1] font-medium tracking-[-0.05em] lg:text-[48px]">{b.word}</span>
            </div>
            <div className="flex flex-col gap-[6px]">
              <span className="text-[11px] font-semibold">{b.title}</span>
              <span className="max-w-[280px] text-[11px] leading-[1.8] text-[#a9a9a4]">{b.body}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
