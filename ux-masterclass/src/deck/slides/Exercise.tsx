import { FigmaLogo, Sparkle, Compass, Clock } from "@phosphor-icons/react";
import type { Day, ToolKey } from "../types";
import { Slide } from "../primitives/Slide";
import { highlightMultiline } from "../utils";

interface ExerciseProps {
  day: Day;
  session: number;
  tool: ToolKey;
  task: string;
  sub: string;
  minutes: number;
  deliverable?: string;
}

const toolIcons = {
  figma: FigmaLogo,
  figjam: FigmaLogo,
  claude: Sparkle,
  perplexity: Compass,
} as const;

const toolBg: Record<ToolKey, string> = {
  figma: "bg-[#1E1E1E]",
  figjam: "bg-[#9747FF]",
  claude: "bg-[#D97757]",
  perplexity: "bg-[#20808D]",
};

export function Exercise({
  day,
  session,
  tool,
  task,
  sub,
  minutes,
  deliverable,
}: ExerciseProps) {
  const Icon = toolIcons[tool];

  return (
    <Slide variant="darkNv" fullBleed>
      <p className="absolute right-s11 top-s9 font-body text-eyebrow font-semibold uppercase text-white">
        EXERCISE · DAY {day} S{session}
      </p>
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div
          className={`mb-s6 flex h-20 w-20 items-center justify-center rounded-card ${toolBg[tool]}`}
        >
          <Icon size={40} weight="light" className="text-white" />
        </div>
        <p className="font-body text-eyebrow font-semibold uppercase text-gl">
          EXERCISE
        </p>
        <h2 className="mt-s4 max-w-[1400px] font-display text-[64px] font-bold leading-tight text-white">
          {highlightMultiline(task, "text-white", "text-gl")}
        </h2>
        <p className="mt-s4 max-w-[1000px] text-lead text-white">{sub}</p>
        <div className="mt-s8 inline-flex items-center gap-s3 rounded-pill bg-go px-s8 py-s4">
          <Clock size={32} weight="regular" className="text-nv" />
          <span className="font-display text-h2 font-bold text-nv">
            {minutes} min
          </span>
        </div>
        {deliverable && (
          <p className="absolute bottom-s8 left-s11 right-s11 border-t border-white/10 pt-s5 text-small text-white">
            <span className="font-semibold uppercase text-white">
              DELIVERABLE:{" "}
            </span>
            {deliverable}
          </p>
        )}
      </div>
    </Slide>
  );
}
