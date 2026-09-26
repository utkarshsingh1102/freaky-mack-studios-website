import { FM_MARK_WHITE } from "@/shared/assets";
import s from "../option-d.module.css";
import { Still } from "./Still";

const SERVICES = [
  {
    no: "01",
    title: ["Ad films &", "brand storytelling"],
    tags: ["Commercials", "Brand films", "Event films"],
    body: "Commercials and brand films for TV, digital and cinema — built on six years of advertising filmmaking.",
    href: "#work",
    bg: "radial-gradient(ellipse at 45% 50%, #8a6a30 0%, #3a2c18 45%, #0e0b08 100%)",
  },
  {
    no: "02",
    title: ["Music videos &", "fashion films"],
    tags: ["Music videos", "Fashion films", "Campaigns"],
    body: "Music videos for artists and labels, and campaign films for fashion brands — made with a filmmaker’s eye.",
    href: "#work",
    bg: "linear-gradient(160deg, #3a2a3a 0%, #1a1418 60%, #0a0808 100%)",
  },
  {
    no: "03",
    title: ["Originals, podcast", "& post-production"],
    tags: ["Documentaries", "Web series", "Podcast"],
    body: "Documentaries, short films, web series and our own podcast — plus edit, grade and sound for other productions.",
    href: "#journal",
    bg: "radial-gradient(ellipse at 60% 45%, #7a5a3a 0%, #2a3040 50%, #0a0c10 100%)",
  },
];

/** 7 · Three service rows: copy left (898px), still right. */
export function ServiceRows() {
  return (
    <>
      {SERVICES.map((sv, i) => (
        <section
          key={sv.no}
          id={i === 0 ? "services" : undefined}
          className="relative flex shrink-0 flex-col border-t border-white/10 md:flex-row xl:h-[586px]"
        >
          <span className={s.dt} style={{ left: -2, top: -2 }} />
          <span className={`${s.dt} hidden md:block`} style={{ left: "calc(62.361% - 2px)", top: -2 }} />
          <div className="box-border flex flex-col justify-between gap-[40px] px-5 pt-[40px] pb-[36px] md:w-[62.361%] md:shrink-0 xl:px-[34px] xl:pt-[55px] xl:pb-[50px]">
            <div className="flex flex-col gap-[20px]">
              <span className="flex items-center gap-[10px] text-[10px] tracking-[0.1em] text-white/55 uppercase xl:text-[9px]">
                <img src={FM_MARK_WHITE} alt="" className="h-[14px] w-[21px] object-contain opacity-80" />( {sv.no} ) Service
              </span>
              <span className="text-[20px] leading-[1.2] font-semibold uppercase">
                {sv.title[0]}
                <br />
                {sv.title[1]}
              </span>
            </div>
            <div className="flex flex-col gap-[14px]">
              <div className="flex flex-wrap gap-[6px]">
                {sv.tags.map((t) => (
                  <span key={t} className={`${s.hl} !px-[8px] py-[3px] text-[10px] font-semibold tracking-[0.06em] uppercase xl:text-[9px]`}>
                    {t}
                  </span>
                ))}
              </div>
              <p className="m-0 max-w-[330px] text-[11px] leading-[1.6] text-white/65 xl:text-[10px]">{sv.body}</p>
              <a href={sv.href} className={`${s.link} mt-[14px] self-start text-[10px] font-semibold tracking-[0.1em] uppercase xl:text-[9px]`}>
                View work
              </a>
            </div>
          </div>
          <Still bg={sv.bg} className="h-[260px] grow md:h-auto md:min-h-[360px] xl:min-h-0" />
        </section>
      ))}
    </>
  );
}
