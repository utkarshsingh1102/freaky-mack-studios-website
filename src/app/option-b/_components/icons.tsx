export function PlayIcon({ size, fill = "#0a0a0a" }: { size: number; fill?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill={fill} aria-hidden="true">
      <path d="M3 1.5v9l7-4.5z" />
    </svg>
  );
}
