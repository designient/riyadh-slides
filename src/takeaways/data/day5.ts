import type { TakeawayPage } from "../types";

export const day5Pages: TakeawayPage[] = [
  {
    eyebrow: "Day 5 · Portfolio",
    title: "Case Study Narrative Template",
    fields: [
      { label: "1. Problem", placeholder: "What was broken? For whom? Why did it matter to the business?" },
      { label: "2. Research", placeholder: "What did you do? Interviews, maps, JTBD, competitive scan. How many participants?" },
      { label: "3. Insight", placeholder: "The 'so what' — the non-obvious finding that changed direction." },
      { label: "4. Decisions", placeholder: "What did you choose NOT to do? Trade-offs, constraints, governance calls." },
      { label: "5. Outcome", placeholder: "What shipped or would ship? Metrics: task success, NPS, time-on-task, error rate." },
      { label: "6. Reflection", placeholder: "What would you do differently? What did responsible design change?" },
    ],
    note: "A portfolio case study is a story, not a screenshot gallery. Lead with insight, not pixels.",
  },
  {
    eyebrow: "Day 5 · Inventory",
    title: "Atomic Design Audit",
    head: ["Level", "What belongs here", "Your file — list items"],
    rows: [
      ["Atoms", "Colour swatches, type styles, icons, spacing units", ""],
      ["Molecules", "Input+label, button+icon, search bar", ""],
      ["Organisms", "Header, card, nav bar, form section", ""],
      ["Templates", "Page layouts without real content", ""],
      ["Pages", "Templates with real content — specific instances", ""],
    ],
    note: "If you can't name what's at each level, your file isn't systematised yet.",
  },
  {
    eyebrow: "Day 5 · Checklist",
    title: "Dev Handoff Checklist",
    bullets: [
      "□ Component names follow a consistent convention (Component/Variant/State).",
      "□ Dev Mode enabled — spacing, typography, and colour tokens inspectable.",
      "□ All icons and images exportable (SVG for icons, 2× PNG for raster).",
      "□ Interactive states documented: hover, focus, disabled, loading, error.",
      "□ Responsive behaviour described: what changes at each breakpoint.",
      "□ Annotations for non-obvious behaviour (animations, conditional logic).",
      "□ Accessibility notes attached: contrast values, focus order, ARIA roles.",
      "□ Governance constraints page included (from Day 4).",
    ],
  },
  {
    eyebrow: "Day 5 · Rubric",
    title: "Capstone Self-Assessment",
    head: ["Dimension", "1 — Needs work", "3 — Solid", "5 — Exceptional", "Your score"],
    rows: [
      ["Design quality", "Inconsistent, untokenised", "Coherent system, good craft", "Production-grade, polished", ""],
      ["Process rigor", "Skipped research steps", "Evidence-based decisions", "Full arc documented with rigour", ""],
      ["Accessibility", "Not considered", "Checklist applied, issues fixed", "Baked in from the start", ""],
      ["AI-governance awareness", "No documentation", "Risks flagged, prompts safe", "Full governance trail", ""],
    ],
    note: "Score honestly. This rubric mirrors how facilitators evaluate capstone presentations.",
  },
  {
    eyebrow: "Day 5 · Cue Card",
    title: "60-Second Presentation Script",
    bullets: [
      "**0:00–0:15 Problem:** 'We were designing for [users] who struggled with [task] because [root cause].'",
      "**0:15–0:30 Insight:** 'Research showed [key finding]. This changed our direction from [A] to [B].'",
      "**0:30–0:45 Decision:** 'We chose [approach] because [trade-off]. We applied [accessibility/governance] by [action].'",
      "**0:45–1:00 Outcome:** 'The result is [artefact]. If shipped, we'd measure [metric]. Next step: [what].'",
    ],
    fields: [
      { label: "Your problem (15s)", placeholder: "" },
      { label: "Your insight (15s)", placeholder: "" },
      { label: "Your decision (15s)", placeholder: "" },
      { label: "Your outcome (15s)", placeholder: "" },
    ],
  },
  {
    eyebrow: "Day 5 · Index",
    title: "End-of-Week Artefact Map",
    head: ["Artefact", "Location", "Status"],
    rows: [
      ["FigJam discovery board", "FigJam · Day 1", "□ Complete"],
      ["JTBD + persona + experience map", "FigJam · Day 2", "□ Complete"],
      ["Figma design system file", "Figma · Day 3", "□ Complete"],
      ["Governed prototype", "Figma · Day 4", "□ Complete"],
      ["Dev-ready handoff frames", "Figma · Day 5", "□ Complete"],
      ["Portfolio case study", "Doc / slide · Day 5", "□ Complete"],
      ["Takeaway reference packs", "riyadh-slides.vercel.app/takeaways", "□ Downloaded"],
    ],
    note: "One week. One case study. One complete, ownable artefact — plus the tools to keep building.",
  },
];
