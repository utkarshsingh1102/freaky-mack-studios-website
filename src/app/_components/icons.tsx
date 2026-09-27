import s from "../home.module.css";

export function PlayIcon({ size, fill }: { size: number; fill: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" style={{ fill }} aria-hidden="true">
      <path d="M3 1.5v9l7-4.5z" />
    </svg>
  );
}

/** Four-bar equaliser used for "now playing" states. */
export function Eq({ height, color }: { height: number; color: string }) {
  return (
    <span className={`${s.eq} flex items-end gap-[3px]`} style={{ height }} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="block w-[3px]" style={{ height, background: color }} />
      ))}
    </span>
  );
}
