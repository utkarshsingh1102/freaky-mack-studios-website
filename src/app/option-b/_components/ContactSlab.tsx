import { FM_MARK_WHITE } from "@/shared/assets";
import { CONTACT } from "@/shared/config";
import { useEnquiryForm } from "@/shared/enquiry";
import s from "../option-b.module.css";

const FIELD = "rounded-[12px] border border-[#d0d0cc] bg-[#f4f4f1] px-[16px] text-[16px] text-[#0a0a0a] [font-family:inherit]";
const LABEL = "text-[13px] font-medium text-[#3a3a3a]";

/** Chapter 06: dark contact slab with the enquiry form. */
export function ContactSlab() {
  const { onSubmit, status, message } = useEnquiryForm();
  return (
    <section
      id="contact"
      className="relative mx-4 mb-[72px] grid shrink-0 grid-cols-1 gap-y-[40px] overflow-hidden rounded-[28px] bg-[#0a0a0a] p-[28px] text-white md:mx-10 md:p-[56px] lg:mx-[96px] lg:mb-[120px] lg:grid-cols-12 lg:gap-x-[32px] lg:rounded-[40px] lg:p-[96px]"
    >
      <img
        src={FM_MARK_WHITE}
        alt=""
        className="absolute top-[-60px] right-[-80px] h-[200px] w-[300px] object-contain opacity-10 [transform:rotate(14deg)] lg:h-[346px] lg:w-[520px]"
      />
      <div className="relative flex flex-col gap-[24px] lg:col-span-6 lg:gap-[28px]">
        <div className={`${s.it} text-[20px] text-white/65 lg:text-[26px]`}>Chapter 06 — Your turn</div>
        <h2 className="m-0 text-[clamp(44px,5.556vw,80px)] leading-[1] font-extrabold tracking-[-0.035em] text-balance">
          Got a story? <span className={`${s.it} font-normal tracking-normal`}>Let’s shoot it.</span>
        </h2>
        <a
          href={`mailto:${CONTACT.email}`}
          className={`${s.link} self-start border-b border-white/60 pb-[6px] text-[18px] font-medium break-all text-white sm:text-[20px] lg:text-[24px]`}
        >
          {CONTACT.email}
        </a>
        <a href={CONTACT.whatsapp} className={`${s.link} self-start text-[16px] text-white/75`}>
          or WhatsApp us · {CONTACT.phone} ↗
        </a>
      </div>
      <form
        onSubmit={onSubmit}
        aria-label="Start a project"
        className="relative flex flex-col gap-[18px] rounded-[28px] bg-white p-[24px] text-[#0a0a0a] [transform:rotate(1.5deg)] sm:p-[32px] lg:col-span-5 lg:col-start-8"
      >
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="s2-name" className={LABEL}>Your name</label>
          <input id="s2-name" name="name" type="text" required placeholder="Hi, I’m…" className={`${FIELD} h-[50px]`} />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="s2-email" className={LABEL}>Email</label>
          <input id="s2-email" name="email" type="email" required placeholder="you@brand.com" className={`${FIELD} h-[50px]`} />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label htmlFor="s2-brief" className={LABEL}>The story so far</label>
          <textarea
            id="s2-brief"
            name="brief"
            rows={4}
            placeholder="Format, timeline, budget range — whatever you have."
            className={`${FIELD} resize-y py-[14px]`}
          />
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          className={`${s.pill} ${s.primary} h-[54px] self-start rounded-full border border-[#0a0a0a] bg-[#0a0a0a] px-[28px] text-[15px] font-semibold text-white`}
        >
          Send it over
        </button>
        {message && (
          <p role="status" className="m-0 text-[14px] text-[#3a3a3a]">
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
