import s from "../home.module.css";
import { PB, PX } from "@/shared/ui";

// Board positions inside a 1296×300 box; left is stored as a % of 1296 so it scales with the box.
const TAGS = [
  { name: "McDonald’s", left: 40, top: 30, rot: -6 },
  { name: "Google", left: 300, top: 120, rot: 4, accent: true },
  { name: "Adidas Originals", left: 470, top: 10, rot: -3 },
  { name: "Mercedes-Benz", left: 720, top: 150, rot: 7 },
  { name: "Fila", left: 860, top: 20, rot: -8, accent: true },
  { name: "PC Jewellers", left: 1010, top: 130, rot: 3 },
  { name: "Times of India", left: 150, top: 220, rot: -2 },
  { name: "+ many more", left: 560, top: 235, rot: 5, more: true },
];

export function ClientScatter() {
  return (
    <section aria-label="Clients" className={`flex shrink-0 flex-col items-center gap-[32px] lg:gap-[40px] ${PB} ${PX}`}>
      <div className={`${s.it} text-center text-[20px] text-[var(--muted-2)] lg:text-[26px]`}>
        …and the brands that trusted us with the yes
      </div>
      <div className="flex max-w-[1296px] flex-wrap justify-center gap-[12px] xl:relative xl:block xl:h-[300px] xl:w-[calc(100%+48px)] xl:shrink-0">
        {TAGS.map((t) => (
          <span
            key={t.name}
            className={`${s.tag} rounded-full border px-[18px] py-[10px] text-[17px] xl:absolute xl:px-[26px] xl:py-[14px] xl:text-[22px] ${
              t.accent
                ? "border-[var(--accent)] bg-[var(--accent)] font-semibold text-[var(--on-accent)]"
                : t.more
                  ? "border-dashed border-[var(--ink)] bg-[var(--pill-bg)] font-medium text-[var(--muted)]"
                  : "border-[var(--ink)] bg-[var(--pill-bg)] font-semibold"
            }`}
            // left/top only take effect once the tag is absolutely positioned (xl and up).
            style={{ left: `${(t.left / 1296) * 100}%`, top: t.top, transform: `rotate(${t.rot}deg)` }}
          >
            {t.name}
          </span>
        ))}
      </div>
    </section>
  );
}
