import { Plus_Jakarta_Sans } from "next/font/google";
import { FM_LOGO_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import { IndexCard } from "./_index/IndexCard";
import { INDEX_OPTIONS } from "./_index/options";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "800"], display: "swap" });

/** Master pitch page: light theme only, whatever palette each option uses. */
export default function IndexPage() {
  return (
    <main className={`${jakarta.className} min-h-screen bg-white text-[#0a0a0a]`}>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 px-4 pt-8 pb-20 sm:px-8 lg:gap-16 lg:px-[72px] lg:pt-12 lg:pb-28">
        <header className="flex flex-col gap-10 lg:gap-14">
          <div className="flex items-center justify-between gap-6">
            <img src={FM_LOGO_WHITE} alt="Freaky Mack Studios" className="h-[72px] w-[92px] object-contain invert lg:h-[96px] lg:w-[122px]" />
            <span className="text-right text-[12px] tracking-[0.18em] text-[#5c5c5c] uppercase">
              Homepage pitch · 2026
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
            <h1 className="m-0 text-[40px] leading-[0.98] font-extrabold tracking-[-0.035em] uppercase sm:text-[64px] lg:col-span-8 lg:text-[88px]">
              Four ways into Freaky Mack Studios.
            </h1>
            <p className="m-0 max-w-[440px] text-[16px] leading-[1.65] text-[#3a3a3a] lg:col-span-4 lg:justify-self-end">
              Each card opens a complete homepage. Click through all four, then tell us which one feels like the
              studio. Anything in [square brackets] is content we still need from you.
            </p>
          </div>
        </header>

        <section aria-label="Homepage options" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {INDEX_OPTIONS.map((o) => (
            <IndexCard key={o.letter} option={o} />
          ))}
        </section>

        <footer className="flex flex-col justify-between gap-3 border-t border-[#e4e4e0] pt-6 text-[13px] text-[#5c5c5c] sm:flex-row">
          <span>Prepared for Izaan Khan, Founder &amp; Creative Producer</span>
          <a href={`mailto:${CONTACT.email}`} className="transition-opacity hover:opacity-60">
            {CONTACT.email}
          </a>
        </footer>
      </div>
    </main>
  );
}
