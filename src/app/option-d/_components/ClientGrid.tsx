import { FM_MARK_WHITE } from "@/shared/assets";

const CLIENTS = ["McDonald’s", "Google", "Adidas Originals", "Mercedes-Benz", "Fila", "PC Jewellers", "Times of India"];

/** 2 · Client grid (5 × 2 at desktop, 2 × 5 on phones). */
export function ClientGrid() {
  const cell = "flex items-center justify-center bg-black px-2 text-center text-[13px] font-semibold xl:text-[14px]";
  return (
    <section
      aria-label="Clients"
      className="grid shrink-0 grid-cols-2 gap-px border-t border-white/10 bg-white/10 [grid-auto-rows:88px] md:grid-cols-5 md:[grid-auto-rows:123px] xl:h-[246px]"
    >
      {CLIENTS.map((c) => (
        <span key={c} className={`${cell} text-white/75`}>
          {c}
        </span>
      ))}
      <span className={`${cell} text-white/45`}>[Client]</span>
      <span className={`${cell} text-white/45`}>[Client]</span>
      <span className="flex flex-col items-center justify-center gap-[10px] bg-black text-[10px] font-medium tracking-[0.08em] text-white/45 uppercase">
        <img src={FM_MARK_WHITE} alt="Freaky Mack" className="h-[32px] w-[48px] object-contain" />+ Many more
      </span>
    </section>
  );
}
