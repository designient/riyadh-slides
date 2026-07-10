import type { TakeawayPage } from "../types";

export const day2Pages: TakeawayPage[] = [
  {
    eyebrow: "Day 2 · AI Prompts",
    title: "5-Prompt Research Pack",
    head: ["#", "Use case", "Tool", "Prompt (copy & adapt)"],
    rows: [
      [
        "1",
        "Synthesis",
        "Claude",
        "Analyse these interview notes. Group into 5–7 themes. For each: name, 2 supporting quotes, design implication. Flag assumptions.",
      ],
      [
        "2",
        "Competitive scan",
        "Perplexity",
        "Research how [sector] services handle [task]. List 3 patterns, 2 gaps, 1 risk. Cite sources. Note what may not transfer to our context.",
      ],
      [
        "3",
        "Persona draft",
        "Claude",
        "From these JTBD statements and research themes, draft one persona: goals, frustrations, behaviours, quotes, design implications. Mark anything inferred vs evidenced.",
      ],
      [
        "4",
        "Journey map",
        "Claude",
        "Map 4–5 phases for [user] completing [task]. Per phase: actions, thoughts, emotions, opportunities. Highlight emotional low points.",
      ],
      [
        "5",
        "Heuristic audit",
        "Claude / Perplexity",
        "Audit [screens/flow] against Nielsen's 10 heuristics. List issues by severity. Recommend fixes ranked by impact vs effort.",
      ],
    ],
    note: "Always human-review AI output before it enters a deliverable. AI accelerates — it does not replace judgment.",
  },
  {
    eyebrow: "Day 2 · Guide",
    title: "Semi-Structured Interview Guide",
    bullets: [
      "**Opener (2 min):** 'Tell me about the last time you [task]. Walk me through it step by step.'",
      "**Core (15 min):** 'What were you trying to accomplish?' · 'What was hardest?' · 'What did you do when stuck?'",
      "**Probing ladder:** 'Tell me more.' · 'Why was that?' · 'What happened next?' · 'How did that make you feel?'",
      "**Neutrality rules:** Never lead ('Was it confusing?'). Ask open questions. Silence is a tool — wait 3 seconds.",
      "**Close (2 min):** 'Anything I should have asked?' · 'Who else should I talk to?'",
    ],
    fields: [
      { label: "Participant", placeholder: "Role · context · date" },
      { label: "Key quote 1", placeholder: "" },
      { label: "Key quote 2", placeholder: "" },
      { label: "Surprise / contradiction", placeholder: "" },
    ],
  },
  {
    eyebrow: "Day 2 · Template",
    title: "JTBD Statement",
    bullets: [
      "**Format:** When [situation], I want to [motivation], so I can [expected outcome].",
      "**Example 1:** When I need to submit a permit application, I want to know exactly which documents are required, so I can complete it in one visit.",
      "**Example 2:** When reviewing AI-generated insights, I want to see the source data, so I can trust the recommendation before acting on it.",
    ],
    fields: [
      { label: "Primary JTBD", placeholder: "When… I want to… so I can…" },
      { label: "Secondary JTBD", placeholder: "When… I want to… so I can…" },
      { label: "Forces pushing change", placeholder: "What's driving the user to act now?" },
      { label: "Forces resisting change", placeholder: "What habits, fears, or constraints hold them back?" },
    ],
  },
  {
    eyebrow: "Day 2 · Canvas",
    title: "Experience Map",
    head: ["Phase", "Actions", "Thoughts", "Emotions", "Opportunities"],
    rows: [
      ["Discover", "", "", "😟 / 😐 / 🙂", ""],
      ["Evaluate", "", "", "😟 / 😐 / 🙂", ""],
      ["Act", "", "", "😟 / 😐 / 🙂", ""],
      ["Confirm", "", "", "😟 / 😐 / 🙂", ""],
      ["Follow-up", "", "", "😟 / 😐 / 🙂", ""],
    ],
    note: "Draw the emotional curve. Design for the lowest point — that's where users abandon or lose trust.",
  },
  {
    eyebrow: "Day 2 · Worksheet",
    title: "Persona Anatomy",
    fields: [
      { label: "Name & role", placeholder: "Fictional name · real behavioural archetype" },
      { label: "Goals (top 3)", placeholder: "" },
      { label: "Frustrations (top 3)", placeholder: "" },
      { label: "Behaviours & context", placeholder: "Devices, environment, frequency, workarounds" },
      { label: "Quote", placeholder: "Verbatim from research — in quotation marks" },
      { label: "Design implications", placeholder: "So what? What must we design differently?" },
    ],
  },
  {
    eyebrow: "Day 2 · Checklist",
    title: "AI Bias & Reliability Check",
    bullets: [
      "□ Did I provide enough raw data, or is the AI filling gaps with assumptions?",
      "□ Are cited sources real and relevant? Spot-check at least 2.",
      "□ Does the output over-generalise from a small sample?",
      "□ Are sensitive attributes (gender, nationality, disability) stereotyped?",
      "□ Would a stakeholder challenge any claim? Mark unverified statements.",
      "□ Did I compare AI output against what participants actually said?",
      "□ Is the persona/JTBD grounded in evidence, not model fluency?",
      "□ Have I documented what was AI-generated vs human-validated?",
    ],
    note: "Run this checklist before any AI output enters FigJam, Figma, or a stakeholder deck.",
  },
];
