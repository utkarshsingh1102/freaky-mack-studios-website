import s from "../option-d.module.css";

/** Hover-zoom still placeholder (board `.sq-frame` > `.sq-img.ph`). */
export function Still({ bg, label = "[ Still ]", dark = false, className = "", style }: { bg: string; label?: string; dark?: boolean; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`${s.frame} overflow-hidden ${className}`} style={style}>
      <div className={`${s.img} ${s.ph} h-full w-full ${dark ? "!text-black/45" : ""}`} style={{ background: bg }}>
        {label}
      </div>
    </div>
  );
}
