import type { Base, FlowStep, ComparePanel, StackLayer } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { parseRichText } from "../utils";
import { ArrowRight } from "@phosphor-icons/react";

interface FrameworkProps extends Base {
  eyebrow: string;
  title: string;
  kind: "flow" | "compare" | "stack" | "diagram";
  data: unknown;
  note?: string;
}

function FlowDiagram({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-1 items-center gap-s2">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-1 items-center gap-s2">
          <div
            className={`flex flex-1 flex-col rounded-card p-s4 ${step.gold ? "bg-go text-nv" : "bg-nv text-white"}`}
          >
            <span className={`font-display text-small font-bold ${step.gold ? "text-nv/60" : "text-gl"}`}>
              {step.n}
            </span>
            <h3 className="mt-s1 font-display text-cardtitle font-bold">{step.t}</h3>
            <p className={`mt-s2 text-small ${step.gold ? "text-nv/80" : "text-white"}`}>
              {step.d}
            </p>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={24} weight="bold" className="shrink-0 text-go" />
          )}
        </div>
      ))}
    </div>
  );
}

function CompareDiagram({
  bridge,
  left,
  right,
}: {
  bridge: string;
  left: ComparePanel;
  right: ComparePanel;
}) {
  const Panel = ({ panel }: { panel: ComparePanel }) => (
    <div
      className={`flex flex-1 flex-col rounded-card p-s5 ${panel.tone === "navy" ? "bg-nv text-white" : "border border-go/26 bg-go/10"}`}
    >
      <span className={`font-display text-eyebrow font-bold uppercase ${panel.tone === "navy" ? "text-gl" : "text-go"}`}>
        {panel.label}
      </span>
      <span className={`text-small ${panel.tone === "navy" ? "text-white" : "text-t3"}`}>
        {panel.sub}
      </span>
      <p className={`mt-s3 text-cardbody ${panel.tone === "navy" ? "text-white" : "text-t2"}`}>
        {panel.def}
      </p>
      <ul className="mt-s4 flex flex-col gap-s2">
        {panel.items.map((item, i) => (
          <li key={i} className="flex gap-s2 text-small">
            <span className="text-go">·</span>
            <span className={panel.tone === "navy" ? "text-white" : "text-t2"}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex flex-1 flex-col gap-s4">
      <div className="flex items-stretch gap-s4">
        <Panel panel={left} />
        <div className="flex w-8 shrink-0 flex-col items-center justify-center">
          <div className="h-full w-px bg-go/40" />
        </div>
        <Panel panel={right} />
      </div>
      <p className="text-center text-small italic text-t3">{bridge}</p>
    </div>
  );
}

function StackDiagram({ layers }: { layers: StackLayer[] }) {
  const compact = layers.length >= 5;
  const stagger = compact ? 16 : 24;

  return (
    <div className={`flex min-h-0 flex-1 flex-col justify-start ${compact ? "gap-s2" : "gap-s3"}`}>
      {layers.map((layer, i) => (
        <div
          key={i}
          className={`shrink-0 rounded-card border border-nv/9 bg-wh shadow-card ${compact ? "px-s5 py-s3" : "px-s6 py-s4"}`}
          style={{ marginLeft: i * stagger, marginRight: (layers.length - 1 - i) * stagger }}
        >
          <h3 className={`font-display font-bold text-nv ${compact ? "text-small" : "text-cardtitle"}`}>
            {layer.t}
          </h3>
          <p className={`mt-s1 text-t2 ${compact ? "text-small leading-snug" : "text-cardbody"}`}>
            {layer.d}
          </p>
        </div>
      ))}
    </div>
  );
}

function DoubleDiamondDiagram({
  labels,
}: {
  labels: { t: string; d: string }[];
}) {
  return (
    <div className="flex flex-1 flex-col">
      <svg viewBox="0 0 1200 280" className="w-full flex-1">
        <polygon
          points="50,140 300,40 550,140 300,240"
          fill="#0D1B2E"
          opacity={0.9}
        />
        <polygon
          points="650,140 900,40 1150,140 900,240"
          fill="#B8953F"
          opacity={0.85}
        />
        <text x="300" y="145" textAnchor="middle" fill="#D4A84A" fontSize="18" fontWeight="bold">
          DISCOVER
        </text>
        <text x="550" y="145" textAnchor="middle" fill="#D4A84A" fontSize="18" fontWeight="bold">
          DEFINE
        </text>
        <text x="900" y="145" textAnchor="middle" fill="#0D1B2E" fontSize="18" fontWeight="bold">
          DEVELOP
        </text>
        <text x="1150" y="145" textAnchor="middle" fill="#0D1B2E" fontSize="18" fontWeight="bold">
          DELIVER
        </text>
      </svg>
      <div className="mt-s4 grid grid-cols-4 gap-s4">
        {labels.map((l, i) => (
          <div key={i}>
            <h4 className="font-display text-small font-bold text-nv">{l.t}</h4>
            <p className="mt-s1 text-small text-t2">{l.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeekArcDiagram({
  nodes,
}: {
  nodes: { n: string; day: string; t: string; d: string }[];
}) {
  return (
    <div className="flex flex-1 items-stretch gap-s3">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-1 flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nv font-display text-h2 font-bold text-gl">
            {node.n}
          </div>
          <span className="mt-s2 font-body text-eyebrow font-semibold uppercase text-go">
            {node.day}
          </span>
          <h4 className="mt-s2 text-center font-display text-cardtitle font-bold text-nv">
            {node.t}
          </h4>
          <p className="mt-s2 text-center text-small text-t2">{node.d}</p>
          {i < nodes.length - 1 && (
            <ArrowRight
              size={20}
              className="absolute hidden text-go"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}

function SkillsWheelDiagram({
  hub,
  intro,
  spokes,
}: {
  hub: string;
  intro?: string;
  spokes: { t: string; d: string }[];
}) {
  const count = spokes.length;
  const radius = 36;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {intro && (
        <p className="mb-s2 shrink-0 text-center text-body text-t2">{intro}</p>
      )}
      <div className="relative mx-auto h-full min-h-0 w-full max-w-[1040px] flex-1">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          {spokes.map((_, i) => {
            const angle = (i * 360) / count - 90;
            const rad = (angle * Math.PI) / 180;
            const x2 = 50 + radius * Math.cos(rad);
            const y2 = 50 + radius * Math.sin(rad);
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={x2}
                y2={y2}
                stroke="#B8953F"
                strokeWidth="0.35"
                strokeOpacity="0.45"
              />
            );
          })}
          <circle
            cx="50"
            cy="50"
            r="12"
            fill="none"
            stroke="#B8953F"
            strokeWidth="0.4"
            strokeOpacity="0.35"
          />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-nv px-s3 text-center shadow-cardlg">
          <span className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-gl">
            Capability
          </span>
          <span className="mt-s1 whitespace-pre-line font-display text-[20px] font-bold leading-tight text-white">
            {hub}
          </span>
        </div>

        {spokes.map((spoke, i) => {
          const angle = (i * 360) / count - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + radius * Math.cos(rad);
          const y = 50 + radius * Math.sin(rad);
          const navy = i % 2 === 0;

          return (
            <div
              key={i}
              className={`absolute z-10 w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-card px-s3 py-s2 shadow-card ${
                navy
                  ? "bg-nv text-white"
                  : "border border-go/30 bg-wh text-nv"
              }`}
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <h4
                className={`font-display text-[17px] font-bold leading-tight ${
                  navy ? "text-gl" : "text-nv"
                }`}
              >
                {spoke.t}
              </h4>
              <p
                className={`mt-1 text-[14px] leading-snug ${
                  navy ? "text-white/85" : "text-t2"
                }`}
              >
                {spoke.d}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Framework({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  kind,
  data,
  note,
}: FrameworkProps) {
  const d = data as Record<string, unknown>;

  const renderKind = () => {
    switch (kind) {
      case "flow":
        return <FlowDiagram steps={d.steps as FlowStep[]} />;
      case "compare":
        return (
          <CompareDiagram
            bridge={d.bridge as string}
            left={d.left as ComparePanel}
            right={d.right as ComparePanel}
          />
        );
      case "stack":
        return <StackDiagram layers={d.layers as StackLayer[]} />;
      case "diagram":
        if (d.diagram === "doubleDiamond") {
          return (
            <DoubleDiamondDiagram
              labels={d.labels as { t: string; d: string }[]}
            />
          );
        }
        if (d.diagram === "weekArc") {
          return (
            <WeekArcDiagram
              nodes={d.nodes as { n: string; day: string; t: string; d: string }[]}
            />
          );
        }
        if (d.diagram === "skillsWheel") {
          return (
            <SkillsWheelDiagram
              hub={(d.hub as string) ?? "UX Designer 2030"}
              intro={d.intro as string | undefined}
              spokes={d.spokes as { t: string; d: string }[]}
            />
          );
        }
        return null;
      default:
        return null;
    }
  };

  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s5 flex min-h-0 flex-1 flex-col overflow-hidden">{renderKind()}</div>
      {note && (
        <p className="mt-s3 shrink-0 text-center text-small italic text-t3">
          {parseRichText(note)}
        </p>
      )}
    </Slide>
  );
}
