import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteNav } from "./SiteNav";

/**
 * Nav + page + footer for every page except Home (which keeps its own, per the Main board).
 * The boards leave line-height at the browser default ("normal"); Tailwind's preflight sets 1.5.
 */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="min-h-screen overflow-x-clip [line-height:normal]">
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-[var(--inv-bg)] px-4 py-2 text-[14px] font-semibold text-[var(--inv-ink)] focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <SiteNav />
        <main id="main" className="flex flex-col">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
