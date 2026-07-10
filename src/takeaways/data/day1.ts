import type { TakeawayPage } from "../types";

export const day1Pages: TakeawayPage[] = [
  {
    eyebrow: "Day 1 · Reference",
    title: "Nielsen Heuristics Audit Sheet",
    head: ["#", "Heuristic", "What to look for"],
    rows: [
      ["1", "Visibility of system status", "Does the user always know what's happening? Loading, progress, location."],
      ["2", "Match between system & real world", "Language, concepts, and flow feel familiar — not internal jargon."],
      ["3", "User control & freedom", "Can users undo, go back, or exit without getting trapped?"],
      ["4", "Consistency & standards", "Same actions, labels, and patterns behave the same everywhere."],
      ["5", "Error prevention", "Does the design stop mistakes before they happen?"],
      ["6", "Recognition over recall", "Options visible — user shouldn't have to remember hidden rules."],
      ["7", "Flexibility & efficiency", "Shortcuts for experts without blocking beginners."],
      ["8", "Aesthetic & minimalist design", "Every element earns its place. No noise."],
      ["9", "Help users recover from errors", "Clear error messages in plain language + a fix path."],
      ["10", "Help & documentation", "Contextual help when needed — not a manual dump."],
    ],
    note: "Severity scale: 0 = cosmetic · 1 = minor · 2 = major · 3 = catastrophic (blocks task completion).",
  },
  {
    eyebrow: "Day 1 · Worksheet",
    title: "Heuristic Audit Log",
    head: ["Issue found", "Heuristic #", "Severity (0–3)", "Recommendation"],
    rows: [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ],
    note: "Audit a daily app in 20 minutes. Log at least 3 issues with actionable recommendations.",
  },
  {
    eyebrow: "Day 1 · Framework",
    title: "Pain Point Prioritisation Matrix",
    bullets: [
      "**High frequency + High severity** → Fix first. These block users repeatedly.",
      "**High frequency + Low severity** → Schedule. Annoying at scale.",
      "**Low frequency + High severity** → Watch. Rare but damaging when they occur.",
      "**Low frequency + Low severity** → Backlog. Nice to fix, not urgent.",
      "Plot today's affinity-map clusters on this matrix before moving to Day 2 research.",
    ],
    fields: [
      { label: "Pain point 1", placeholder: "Frequency: H / L · Severity: H / L · Action:" },
      { label: "Pain point 2", placeholder: "Frequency: H / L · Severity: H / L · Action:" },
      { label: "Pain point 3", placeholder: "Frequency: H / L · Severity: H / L · Action:" },
    ],
  },
  {
    eyebrow: "Day 1 · Guide",
    title: "Affinity Mapping Rules",
    bullets: [
      "One idea per sticky. If it needs 'and', split it.",
      "Cluster by meaning, not by who said it or which screen it came from.",
      "Name clusters as insights, not features ('Users lose trust at payment' not 'Add progress bar').",
      "Aim for 5–8 clusters from 30–40 stickies. Merge small clusters; split oversized ones.",
      "Dot-vote: each person gets 3 votes on the clusters that matter most for the cohort challenge.",
    ],
    note: "Use consistent colour coding: blue = observation, gold = insight, red = risk/gap.",
  },
  {
    eyebrow: "Day 1 · Template",
    title: "Cohort Challenge Brief",
    fields: [
      { label: "Problem context", placeholder: "What service/product are we improving? Why now?" },
      { label: "Primary users", placeholder: "Who uses this? Role, context, constraints." },
      { label: "Top 3 pain points", placeholder: "From today's affinity map + prioritisation." },
      { label: "Success criteria", placeholder: "What does 'better' look like in measurable terms?" },
      { label: "Constraints", placeholder: "Policy, platform, timeline, data sensitivity." },
      { label: "Out of scope", placeholder: "What we are explicitly NOT solving this week." },
    ],
  },
  {
    eyebrow: "Day 1 · Checkpoint",
    title: "Responsible Design Flags",
    head: ["Flag type", "What we noticed today", "Revisit on Day 4?"],
    rows: [
      ["Accessibility / inclusion gap", "", "□ Yes"],
      ["AI / data risk", "", "□ Yes"],
      ["Privacy concern", "", "□ Yes"],
      ["Governance / policy gap", "", "□ Yes"],
    ],
    note: "Flag now, fix with intent on Day 4. Inclusion gaps are not 'nice to have' — they're design requirements.",
  },
];
