import { FM_LOGO_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import s from "../option-b.module.css";
import { PX } from "./theme";

const HEAD = "mb-[6px] text-[18px] text-[#6b6b6b]";

export function Footer() {
  return (
    <footer
      className={`mt-auto flex shrink-0 flex-col gap-[48px] border-t border-[#0a0a0a] pt-[56px] pb-[88px] lg:gap-[56px] lg:pt-[64px] lg:pb-[40px] ${PX}`}
    >
      <div className="flex flex-col items-start justify-between gap-[48px] lg:flex-row">
        <div className="flex max-w-[360px] flex-col gap-[20px]">
          <img src={FM_LOGO_WHITE} alt="Freaky Mack Studios" className="h-[118px] w-[150px] object-contain invert" />
          <p className="m-0 text-[15px] leading-[1.6] text-[#5c5c5c]">
            A home for filmmakers, creators and ideas that deserve to become films.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[24px] gap-y-[40px] md:flex md:gap-[64px] lg:gap-[96px]">
          <div className="flex flex-col gap-[12px] text-[15px]">
            <div className={`${s.it} ${HEAD}`}>Chapters</div>
            <a href="#ch1" className={s.link}>Work</a>
            <a href="#ch2" className={s.link}>What we make</a>
            <a href="#about" className={s.link}>The studio</a>
            <a href="#ch4" className={s.link}>Podcast</a>
            <a href="#ch5" className={s.link}>People</a>
            <a href="#contact" className={s.link}>Contact</a>
          </div>
          <div className="flex flex-col gap-[12px] text-[15px]">
            <div className={`${s.it} ${HEAD}`}>Follow</div>
            <a href="https://instagram.com" className={s.link}>Instagram</a>
            <a href="https://youtube.com" className={s.link}>YouTube</a>
            <a href="https://vimeo.com" className={s.link}>Vimeo</a>
            <a href="https://linkedin.com" className={s.link}>LinkedIn</a>
          </div>
          <div className="col-span-2 flex flex-col gap-[12px] text-[15px]">
            <div className={`${s.it} ${HEAD}`}>Say hello</div>
            <a href={`mailto:${CONTACT.email}`} className={s.link}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref} className={s.link}>{CONTACT.phone}</a>
            <a href={CONTACT.whatsapp} className={s.link}>WhatsApp</a>
            <span className="text-[#5c5c5c]">[STUDIO ADDRESS], [CITY]</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-[10px] border-t border-[#e4e4e0] pt-[24px] text-[13px] text-[#5c5c5c] md:flex-row md:items-center">
        <span>© 2026 Freaky Mack Studios. All rights reserved.</span>
        <span className={`${s.it} text-[16px]`}>The end. For now.</span>
        <span>
          Privacy · Terms · <a href="#top" className={s.link}>Back to the top ↑</a>
        </span>
      </div>
    </footer>
  );
}
