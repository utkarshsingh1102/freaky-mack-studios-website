import type { ReactNode } from "react";
import s from "../option-c.module.css";

export function ArrowIcon({ size = 11 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M3 9L9 3M4 3h5v5" />
    </svg>
  );
}

/** Viewfinder corner marks around a frame (outside by default, `inset` to sit on the edge). */
export function Corners({ inset = false }: { inset?: boolean }) {
  const marks = (
    <>
      <span className={s.tl} />
      <span className={s.tr} />
      <span className={s.bl} />
      <span className={s.br} />
    </>
  );
  return inset ? <span className={`${s.inset} contents`}>{marks}</span> : marks;
}

/** Four corner dots for a bordered box. */
export function Dots() {
  return (
    <>
      <span className={s.dot} style={{ left: -2, top: -2 }} />
      <span className={s.dot} style={{ right: -2, top: -2 }} />
      <span className={s.dot} style={{ left: -2, bottom: -2 }} />
      <span className={s.dot} style={{ right: -2, bottom: -2 }} />
    </>
  );
}

/** Split button: label box + arrow box (board `.cm-split`). */
export function SplitButton({ href, children, className = "", onClick }: { href: string; children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${s.split} flex h-[34px] items-stretch overflow-hidden rounded-[4px] border border-white/[0.16] bg-[#1a1a1a] text-[12px] font-medium ${className}`}
    >
      <span className="flex items-center gap-[8px] px-[14px]">{children}</span>
      <span className={`${s.arrow} flex w-[34px] items-center justify-center border-l border-white/[0.16]`}>
        <ArrowIcon />
      </span>
    </a>
  );
}

/** Placeholder label for a still/video that hasn't been supplied yet. */
export function Ph({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`text-[12px] tracking-[0.22em] text-white/30 uppercase ${className}`}>{children}</span>;
}
