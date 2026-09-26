import Link from "next/link";
import type { IndexOption } from "./options";

export function IndexCard({ option }: { option: IndexOption }) {
  return (
    <Link
      href={option.href}
      className="group flex flex-col gap-5 rounded-[28px] border border-[#e6e6e2] bg-white p-3 pb-7 transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.5 hover:border-[#0a0a0a] hover:shadow-[0_30px_70px_rgba(0,0,0,0.10)] sm:p-4 sm:pb-8"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[#ececea] bg-[#f4f4f1]">
        <img
          src={option.thumb}
          alt={`Option ${option.letter} · ${option.name} homepage preview`}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[18px] font-extrabold text-[#0a0a0a] shadow-[0_4px_16px_rgba(0,0,0,0.18)] sm:top-4 sm:left-4">
          {option.letter}
        </span>
      </div>
      <div className="flex flex-col gap-3 px-2 sm:px-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h2 className="m-0 text-[26px] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-[32px]">
            <span className="text-[#8a8a86]">Option {option.letter} · </span>
            {option.name}
          </h2>
          <span className="text-[12px] tracking-[0.14em] text-[#5c5c5c] uppercase">{option.scheme}</span>
        </div>
        <p className="m-0 max-w-[560px] text-[15px] leading-[1.6] text-[#3a3a3a]">{option.summary}</p>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[13px] text-[#6b6b6b]">Type: {option.fonts}</span>
          <span className="rounded-full border border-[#0a0a0a] px-5 py-2.5 text-[14px] font-semibold transition-colors group-hover:bg-[#0a0a0a] group-hover:text-white">
            Open option {option.letter} →
          </span>
        </div>
      </div>
    </Link>
  );
}
