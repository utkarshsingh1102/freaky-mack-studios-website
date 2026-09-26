import { SplitButton } from "./primitives";
import { PX } from "./theme";

/** 4 · Statement with colour-chip swatches. */
export function Statement() {
  return (
    <section
      className={`grid shrink-0 grid-cols-1 items-stretch gap-y-[40px] pt-[64px] pb-[72px] lg:grid-cols-12 lg:gap-x-[32px] lg:pb-[80px] xl:h-[440px] ${PX}`}
    >
      <div className="flex flex-col justify-between gap-[20px] lg:col-span-4">
        <div className="flex gap-[10px]">
          <span className="h-[64px] w-[80px] bg-[#2b2824]" />
          <span className="h-[64px] w-[80px] bg-[#3a2c2f]" />
          <span className="h-[64px] w-[80px] bg-[#2a2226]" />
        </div>
        <span className="text-[11px] text-[#8c8c88]">Brand films · Music videos · Originals</span>
      </div>
      <div className="flex flex-col gap-[32px] lg:col-span-7 lg:col-start-6">
        <p className="m-0 text-[21px] leading-[1.45] font-medium tracking-[-0.02em] text-pretty lg:text-[26px]">
          We combine the precision of advertising filmmaking with the creative ambition of independent cinema — films
          made for brands, and films of our own.
        </p>
        <SplitButton href="#about" className="self-start">
          Our story
        </SplitButton>
      </div>
    </section>
  );
}
