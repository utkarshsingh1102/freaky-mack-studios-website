"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, activeFor } from "./nav-items";

/** Below lg the nav collapses into this menu button + full-screen panel (CLAUDE.md → Responsive). */
export function MobileMenu({ serifClass }: { serifClass: string }) {
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname; // navigating to another page closes it
  const button = useRef<HTMLButtonElement>(null);
  const active = activeFor(pathname);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="fm-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="relative z-[60] flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-[var(--ink)] bg-[var(--ground)] text-[var(--ink)] lg:hidden"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
          {open ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 5h12M2 11h12" />}
        </svg>
      </button>
      {open && (
        <div
          id="fm-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-[var(--ground)] px-5 pt-[96px] pb-10 text-[var(--ink)] md:px-10 lg:hidden"
        >
          <nav aria-label="Main" className="flex flex-col border-t border-[var(--ink)]">
            {NAV_ITEMS.map((it) => (
              <Link
                key={it.key}
                href={it.href}
                onClick={() => setOpenOn(null)}
                aria-current={active === it.key ? "page" : undefined}
                className="flex items-baseline gap-[14px] border-b border-[var(--line)] py-[18px] text-[34px] font-extrabold tracking-[-0.03em]"
              >
                <span className={`${serifClass} text-[20px] font-normal tracking-normal text-[var(--muted-2)]`}>{it.no}</span>
                {it.label}
                {active === it.key && <span className="ml-auto h-[10px] w-[10px] self-center rounded-full bg-[var(--accent)]" />}
              </Link>
            ))}
          </nav>
          <Link
            href="/start-a-project"
            onClick={() => setOpenOn(null)}
            className="mt-[32px] flex h-[56px] items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent)] text-[16px] font-semibold text-[var(--on-accent)]"
          >
            Start a project
          </Link>
        </div>
      )}
    </>
  );
}
