import { PITCH_MODE } from "@/shared/config";
import { ACCENTS, GROUNDS } from "./theme";

type Props = {
  accent: string;
  ground: string;
  onAccent: (i: number) => void;
  onGround: (g: string) => void;
};

/** Pitch-only: the board's Theme options (accent + ground), so the client can try each colour. */
export function AccentPicker({ accent, ground, onAccent, onGround }: Props) {
  if (!PITCH_MODE) return null;
  return (
    <div
      data-pitch-only
      role="group"
      aria-label="Accent colour"
      className="fixed bottom-[60px] right-3 z-[1000] flex items-center gap-[6px] rounded-full border border-white/15 bg-[#111]/85 px-3 py-1.5 font-[system-ui,-apple-system,'Segoe_UI',sans-serif] text-[11px] text-white/75 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-md sm:right-auto sm:bottom-5 sm:left-5"
    >
      <span className="mr-1 hidden sm:inline">Accent</span>
      {ACCENTS.map((a, i) => (
        <button
          key={a.name}
          type="button"
          onClick={() => onAccent(i)}
          aria-label={`${a.name} accent`}
          aria-pressed={accent === a.accent}
          className={`h-[18px] w-[18px] rounded-full border-2 ${accent === a.accent ? "border-white" : "border-transparent"}`}
          style={{ background: a.accent }}
        />
      ))}
      <span className="mx-1 opacity-40">·</span>
      <span className="mr-1 hidden sm:inline">Ground</span>
      {GROUNDS.map((g) => (
        <button
          key={g}
          type="button"
          onClick={() => onGround(g)}
          aria-label={`Ground ${g}`}
          aria-pressed={ground === g}
          className={`h-[18px] w-[18px] rounded-full border-2 ${ground === g ? "border-white" : "border-white/20"}`}
          style={{ background: g }}
        />
      ))}
    </div>
  );
}
