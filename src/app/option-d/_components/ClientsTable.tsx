import s from "../option-d.module.css";
import { ABS, pos } from "./pos";

const CLIENTS = ["McDonald’s", "Google", "Adidas Originals", "Mercedes-Benz", "Fila", "PC Jewellers", "Times of India"];
const COLS = "grid grid-cols-[44px_1fr_1fr_56px] xl:grid-cols-[60px_1fr_1fr_70px]";

/** 8 · White clients table. */
export function ClientsTable() {
  return (
    <section
      aria-label="Clients"
      className="relative flex shrink-0 flex-col gap-[32px] overflow-hidden bg-white px-5 py-[64px] text-black md:px-10 xl:block xl:h-[651px] xl:p-0"
    >
      <h2
        className={`m-0 flex flex-col items-start gap-[4px] text-[26px] leading-[1.15] font-semibold tracking-[-0.02em] uppercase xl:text-[30px] ${ABS}`}
        style={pos({ x: 219, y: 60 })}
      >
        <span>Clients (07)</span>
        <span className={s.hlInv}>Trusted us</span>
      </h2>
      <span className="absolute top-0 bottom-0 left-[45.486%] hidden w-px bg-black/[0.08] xl:block" />
      <div className={`flex flex-col ${ABS}`} style={pos({ x: 679, w: 555, y: 62 })} role="table" aria-label="Clients">
        <div role="row" className={`${COLS} pb-[20px] text-[10px] tracking-[0.06em] text-[#7a7a7a] uppercase xl:pb-[26px] xl:text-[9px]`}>
          <span role="columnheader">No.</span>
          <span role="columnheader">Brand</span>
          <span role="columnheader">Work</span>
          <span role="columnheader" className="text-right">Year</span>
        </div>
        {CLIENTS.map((c, i) => (
          <div key={c} role="row" className={`${s.row} ${COLS} h-[48px] items-center text-[10px] uppercase xl:h-[51px]`}>
            <span role="cell">{String(i + 1).padStart(2, "0")}</span>
            <span role="cell" className="font-semibold">{c}</span>
            <span role="cell">[Format]</span>
            <span role="cell" className="text-right">[Year]</span>
          </div>
        ))}
      </div>
      <span className="absolute top-[507px] right-[14.306%] left-[45.486%] hidden h-px bg-black/[0.08] xl:block" />
      <div className="flex flex-col justify-between gap-[16px] border-t border-black/[0.08] pt-[20px] sm:flex-row xl:contents">
        <p className={`m-0 text-[10px] leading-[1.6] tracking-[0.04em] text-[#7a7a7a] uppercase xl:text-[9px] ${ABS}`} style={pos({ x: 219, y: 548 })}>
          Films for brands,
          <br />
          agencies, labels
          <br />
          and fashion houses.
        </p>
        <p className={`m-0 text-[10px] leading-[1.6] tracking-[0.04em] text-[#3a3a3a] uppercase sm:text-right xl:text-[9px] ${ABS}`} style={pos({ r: 206, y: 548 })}>
          Seven of the names we’ve made films for.
          <br />
          Full list and case studies on request.
        </p>
      </div>
    </section>
  );
}
