import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-a.module.css";

/** Chapter 03: dark interlude. */
export function TheTurn() {
  return (
    <section className="relative mx-4 mb-[96px] flex shrink-0 flex-col gap-[28px] overflow-hidden rounded-[28px] bg-[#0a0a0a] px-[24px] py-[64px] text-white md:mx-10 md:px-[56px] lg:mx-[96px] lg:mb-[180px] lg:gap-[40px] lg:rounded-[40px] lg:px-[96px] lg:py-[120px]">
      <img
        src={FM_MARK_WHITE}
        alt=""
        className="absolute right-[-60px] bottom-[-40px] h-[200px] w-[280px] object-contain opacity-[0.12] [transform:rotate(-12deg)] lg:h-[396px] lg:w-[560px]"
      />
      <div className={`${s.it} relative text-[20px] text-white/65 lg:text-[26px]`}>
        Chapter 03 — Then we got greedy for our own stories
      </div>
      <p className="relative m-0 max-w-[900px] text-[clamp(32px,3.889vw,56px)] leading-[1.08] font-extrabold tracking-[-0.03em] text-balance">
        Advertising taught us precision. Cinema gave us the appetite.
      </p>
      <p className="relative m-0 max-w-[640px] text-[17px] leading-[1.6] text-white/[0.78] lg:text-[20px]">
        Freaky Mack Studios develops commercial and fashion films, music videos, documentaries, digital series and
        original narratives — a slate of our own work alongside films for brands and cultural platforms. A home for
        filmmakers, creators and ideas that deserve to become films.
      </p>
      <a
        href="#about"
        className={`${s.pill} relative flex h-[52px] items-center self-start rounded-full bg-[var(--accent)] px-[26px] text-[14px] font-semibold text-[var(--on-accent)]`}
      >
        Read the studio story
      </a>
    </section>
  );
}
