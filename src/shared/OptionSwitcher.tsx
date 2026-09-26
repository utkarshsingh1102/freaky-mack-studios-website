import Link from "next/link";
import { OPTIONS, PITCH_MODE, type OptionLetter } from "./config";

/** Floating pitch switcher. Neutral styling so it reads on both light and dark options. */
export function OptionSwitcher({ current }: { current: OptionLetter }) {
  if (!PITCH_MODE) return null;
  return (
    <nav
      aria-label="Homepage options"
      className="fixed right-3 bottom-3 z-[1000] flex items-center gap-1 rounded-full border border-white/15 bg-[#111]/85 py-1.5 pr-1.5 pl-4 font-[system-ui,-apple-system,'Segoe_UI',sans-serif] text-[12px] font-medium text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:right-5 sm:bottom-5"
    >
      <Link href="/" className="mr-1 whitespace-nowrap opacity-80 transition-opacity hover:opacity-100">
        ← All options
      </Link>
      <span aria-hidden="true" className="mr-1 opacity-40">
        ·
      </span>
      {OPTIONS.map((o) => {
        const active = o.letter === current;
        return (
          <Link
            key={o.letter}
            href={o.href}
            aria-label={`Option ${o.letter}`}
            aria-current={active ? "page" : undefined}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              active ? "bg-white text-black" : "text-white/75 hover:bg-white/15 hover:text-white"
            }`}
          >
            {o.letter}
          </Link>
        );
      })}
    </nav>
  );
}
