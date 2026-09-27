import { LOCKUP, MARK, type LogoArt } from "./logo-paths";

type Props = {
  className?: string;
  /** Accessible name; leave out for a decorative logo. */
  title?: string;
  /** Pin the artwork to the left of its box (like object-position: left). */
  alignLeft?: boolean;
};

/**
 * The client's official logo as inline vector art. It is drawn in the current text colour, so it is
 * white on the dark page, black on the light page and flips inside inverse slabs, with no CSS inversion.
 */
function LogoSvg({ art, className = "", title, alignLeft }: Props & { art: LogoArt }) {
  return (
    <svg
      viewBox={`0 0 ${art.w} ${art.h}`}
      preserveAspectRatio={alignLeft ? "xMinYMid meet" : "xMidYMid meet"}
      fill="currentColor"
      className={className}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
      focusable="false"
    >
      {title && <title>{title}</title>}
      {art.d.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** The blob mark on its own. */
export const Mark = (props: Props) => <LogoSvg art={MARK} {...props} />;
/** Mark with FREAKY MACK / STUDIOS underneath. */
export const Lockup = (props: Props) => <LogoSvg art={LOCKUP} {...props} />;
