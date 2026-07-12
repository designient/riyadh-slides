import { Slide } from "../primitives/Slide";
import { highlightMultiline } from "../utils";

interface DayDividerProps {
  dayLabel: string;
  title: string;
  theme: string;
  sessions: string[];
  dayNumber: number;
}

export function DayDivider({
  dayLabel,
  title,
  theme,
  sessions,
  dayNumber,
}: DayDividerProps) {
  return (
    <Slide variant="darkNs" fullBleed largeDeco>
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-go" />
      <div className="relative flex h-full flex-col justify-center">
        <span
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-display font-black text-white/[0.018]"
          style={{ fontSize: 560, lineHeight: 1 }}
          aria-hidden
        >
          {dayNumber}
        </span>
        <p className="font-body text-eyebrow font-semibold uppercase text-go">
          {dayLabel}
        </p>
        <h1 className="mt-s3 max-w-[1200px] font-display text-divider font-bold text-white">
          {highlightMultiline(title, "text-white", "text-gl")}
        </h1>
        <p className="mt-s4 text-lead italic text-white">{theme}</p>
        <div className={`mt-s8 flex flex-col ${sessions.length > 4 ? "gap-s2" : "gap-s3"}`}>
          {sessions.map((s, i) => (
            <div key={i} className="flex items-center gap-s4">
              <span className="h-[2px] w-[30px] bg-go" />
              <span className="text-small text-white">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
