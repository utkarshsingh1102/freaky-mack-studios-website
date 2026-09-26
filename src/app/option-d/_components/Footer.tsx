import { FM_MARK_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import { useEnquiryForm } from "@/shared/enquiry";
import s from "../option-d.module.css";
import { ABS, pos } from "./pos";

export const FORMATS = ["Ad film", "Music video", "Fashion film", "Event film", "Documentary", "Short film / web series", "Podcast / YouTube", "Post-production"];

const LABEL = "text-[10px] tracking-[0.1em] text-white/55 uppercase xl:text-[9px]";
const FIELD = "h-[36px] border-0 border-b border-white/30 bg-transparent p-0 text-[12px] text-white [font-family:inherit] placeholder:text-white/40 xl:text-[11px]";

/** 13 · Footer. The "What are we making?" select feeds the enquiry: picking a format opens the brief form. */
export function Footer({ format, onFormat }: { format: string; onFormat: (f: string) => void }) {
  const { onSubmit, status, message } = useEnquiryForm({ format });
  return (
    <footer className="relative flex shrink-0 flex-col gap-[36px] bg-[#1a1a1a] px-5 pt-[48px] pb-[96px] md:px-10 xl:block xl:h-[631px] xl:p-0">
      <div className="flex flex-col gap-[8px] xl:contents">
        <span className={`${LABEL} ${ABS}`} style={pos({ x: 215, y: 48 })}>( Say hello )</span>
        <a
          href={`mailto:${CONTACT.email}${format ? `?subject=${encodeURIComponent(`Enquiry — ${format}`)}` : ""}`}
          className={`${s.link} text-[22px] font-medium tracking-[-0.02em] break-all md:text-[28px] xl:text-[34px] xl:break-normal ${ABS}`}
          style={pos({ x: 215, y: 72 })}
        >
          {CONTACT.email}
        </a>
      </div>

      <div className={`z-10 flex flex-col gap-[8px] ${ABS}`} style={pos({ x: 891, y: 60, w: 329 })}>
        <label htmlFor="sq-format" className={LABEL}>
          What are we making?
        </label>
        <select
          id="sq-format"
          value={format}
          onChange={(e) => onFormat(e.target.value)}
          className={`${s.select} ${FIELD} w-full md:w-[329px] xl:w-full`}
        >
          <option value="">Select a format</option>
          {FORMATS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        {format && (
          <form
            onSubmit={onSubmit}
            aria-label="Start a project"
            className="mt-[8px] flex flex-col gap-[14px] border border-white/15 bg-[#111] p-[16px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="sq-name" className={LABEL}>Your name</label>
              <input id="sq-name" name="name" type="text" required placeholder="Hi, I’m…" className={FIELD} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="sq-email" className={LABEL}>Email</label>
              <input id="sq-email" name="email" type="email" required placeholder="you@brand.com" className={FIELD} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="sq-brief" className={LABEL}>The brief</label>
              <textarea
                id="sq-brief"
                name="brief"
                rows={3}
                placeholder={`Your ${format.toLowerCase()} — timeline, budget range, whatever you have.`}
                className={`${FIELD} h-auto resize-y py-[8px]`}
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="h-[36px] bg-white px-[16px] text-[10px] font-semibold tracking-[0.1em] text-black uppercase transition-opacity hover:opacity-80"
              >
                Send enquiry →
              </button>
              <button type="button" onClick={() => onFormat("")} className={`${s.link} bg-transparent text-[10px] tracking-[0.1em] text-white/55 uppercase`}>
                Cancel
              </button>
            </div>
            {message && (
              <p role="status" className="m-0 text-[11px] text-white/75">
                {message}
              </p>
            )}
          </form>
        )}
      </div>

      <div className="grid grid-cols-2 gap-x-[24px] gap-y-[32px] md:grid-cols-3 xl:contents">
        <div className={`col-span-2 flex flex-col gap-[14px] text-[11px] md:col-span-1 xl:text-[10px] ${ABS}`} style={pos({ x: 215, y: 277 })}>
          <span className={LABEL}>Studio</span>
          <span className="leading-[1.6] text-white/80">
            [Studio address]
            <br />
            [City]
            <br />
            <a href={CONTACT.phoneHref} className={s.link}>{CONTACT.phone}</a>
          </span>
        </div>
        <div className={`flex flex-col gap-[14px] text-[11px] xl:text-[10px] ${ABS}`} style={pos({ x: 473, y: 277 })}>
          <span className={LABEL}>Pages</span>
          <div className="grid grid-cols-2 gap-y-[8px] xl:grid-cols-[repeat(3,90px)]">
            <a href="#work" className={s.link}>Work</a>
            <a href="#services" className={s.link}>Services</a>
            <a href="#journal" className={s.link}>Podcast</a>
            <a href="#works" className={s.link}>Showreel</a>
            <a href="#contact" className={s.link}>Contact</a>
            <a href="#journal" className={s.link}>Originals</a>
            <a href="#top" className={s.link}>Studio</a>
          </div>
        </div>
        <div className={`flex flex-col gap-[14px] text-[11px] xl:text-[10px] ${ABS}`} style={pos({ x: 891, y: 277 })}>
          <span className={LABEL}>Social</span>
          <div className="grid grid-cols-2 gap-y-[8px] xl:grid-cols-[repeat(2,90px)]">
            <a href="https://instagram.com" className={s.link}>Instagram</a>
            <a href="https://youtube.com" className={s.link}>YouTube</a>
            <a href="https://vimeo.com" className={s.link}>Vimeo</a>
            <a href="https://linkedin.com" className={s.link}>LinkedIn</a>
            <a href={CONTACT.whatsapp} className={s.link}>WhatsApp</a>
          </div>
        </div>
      </div>

      <span
        className={`flex items-center gap-[12px] text-[clamp(40px,7.222vw,104px)] leading-none font-bold tracking-[-0.04em] whitespace-nowrap text-white uppercase xl:gap-[24px] ${ABS}`}
        style={pos({ x: 207, y: 440 })}
        aria-hidden="true"
      >
        <img src={FM_MARK_WHITE} alt="" className="h-[0.96em] w-[1.44em] object-contain" />
        Freaky Mack
      </span>
      <span
        className={`text-[10px] leading-[1.6] tracking-[0.06em] text-white/75 uppercase xl:text-right xl:text-[9px] ${ABS}`}
        style={pos({ r: 219, y: 580 })}
      >
        A film production house
        <br />© 2026 Freaky Mack Studios
      </span>
    </footer>
  );
}
