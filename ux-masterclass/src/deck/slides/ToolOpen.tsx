import { FigmaLogo, Sparkle, Compass } from "@phosphor-icons/react";
import type { Base, ToolKey } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Eyebrow } from "../primitives/Eyebrow";
import { Title } from "../primitives/Title";
import { Rule } from "../primitives/Rule";

interface ToolOpenProps extends Base {
  eyebrow: string;
  title: string;
  tool: ToolKey;
  instruction: string;
  sub: string;
  need: string[];
}

const toolConfig = {
  figma: { icon: FigmaLogo, bg: "bg-[#1E1E1E]", iconColor: "text-white", label: "Figma" },
  figjam: { icon: FigmaLogo, bg: "bg-[#D4A84A]", iconColor: "text-nv", label: "FigJam" },
  claude: { icon: Sparkle, bg: "bg-[#D97757]", iconColor: "text-white", label: "Claude" },
  perplexity: { icon: Compass, bg: "bg-[#20808D]", iconColor: "text-white", label: "Perplexity" },
} as const;

export function ToolOpen({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  tool,
  instruction,
  sub,
  need,
}: ToolOpenProps) {
  const cfg = toolConfig[tool];
  const Icon = cfg.icon;

  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Eyebrow>{eyebrow}</Eyebrow>
      <Title>{title}</Title>
      <Rule className="mt-s3" />
      <div className="mt-s6 flex flex-1 flex-col justify-center">
        <div className="rounded-card border border-go/26 bg-go/10 p-s7">
          <div className="flex items-start gap-s6">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-card ${cfg.bg}`}
            >
              <Icon size={32} weight="light" className={cfg.iconColor} />
            </div>
            <div className="flex-1">
              <p className="font-display text-h2 font-bold text-nv">{instruction}</p>
              <p className="mt-s3 text-lead text-t2">{sub}</p>
              <div className="mt-s6 flex flex-wrap items-center gap-s3">
                <span className="font-body text-eyebrow font-semibold uppercase text-go">
                  YOU&apos;LL NEED
                </span>
                {need.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-chip border border-go/26 bg-wh px-s4 py-s2 text-small text-t2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
