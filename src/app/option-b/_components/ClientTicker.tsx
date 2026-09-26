import s from "../option-b.module.css";

const BRANDS = ["McDonald’s", "Google", "Adidas Originals", "Mercedes-Benz", "Fila", "PC Jewellers", "Times of India"];

function Run() {
  return (
    <>
      <span className={`${s.it} font-normal text-[#6b6b6b]`}>films for</span>
      {BRANDS.map((b) => (
        <span key={b}>{b}</span>
      ))}
      <span className={`${s.it} font-normal text-[#6b6b6b]`}>and many more</span>
    </>
  );
}

export function ClientTicker() {
  return (
    <section
      aria-label="Clients"
      className="mb-[96px] flex h-[64px] shrink-0 items-center overflow-hidden border-y border-[#0a0a0a] lg:mb-[180px] lg:h-[84px]"
    >
      <div
        className={`${s.marquee} flex w-max items-center gap-[28px] pl-5 text-[20px] font-semibold whitespace-nowrap lg:gap-[40px] lg:pl-[96px] lg:text-[26px]`}
      >
        <Run />
        <span className="contents" aria-hidden="true">
          <Run />
        </span>
      </div>
    </section>
  );
}
