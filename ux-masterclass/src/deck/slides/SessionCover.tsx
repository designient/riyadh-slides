import type { Day } from "../types";
import { Slide } from "../primitives/Slide";
import { highlightMultiline } from "../utils";

interface SessionCoverProps {
  day: Day;
  session: number;
  time: string;
  title: string;
  subtitle: string;
}

export function SessionCover({
  day,
  session,
  time,
  title,
  subtitle,
}: SessionCoverProps) {
  return (
    <Slide variant="coverGrad" fullBleed largeDeco>
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-go" />
      <div className="flex h-full flex-col justify-center">
        <span className="mb-s6 inline-flex w-fit rounded-pill border border-go/26 bg-go/12 px-s5 py-s2 font-body text-eyebrow font-semibold uppercase text-go">
          Day {day} · Session {session} · {time} AST
        </span>
        <h1 className="max-w-[1400px] font-display text-cover font-bold text-white">
          {highlightMultiline(title, "text-white", "text-gl")}
        </h1>
        <p className="mt-s5 max-w-[1000px] text-lead text-white">{subtitle}</p>
      </div>
      <div className="absolute bottom-s8 left-s11 right-s11 flex items-end justify-between border-t border-white/10 pt-s5">
        <div>
          <p className="font-display text-chrome font-semibold text-white">
            SAMEER UL HAQUE
          </p>
          <p className="text-small text-white">UX Masterclass · Riyadh 2026</p>
        </div>
        <span className="rounded-pill border border-go/26 bg-go/12 px-s5 py-s2 font-body text-small text-gl">
          {time} AST
        </span>
      </div>
    </Slide>
  );
}
