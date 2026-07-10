import type { TakeawayPage } from "../types";

export const day4Pages: TakeawayPage[] = [
  {
    eyebrow: "Day 4 · Accessibility",
    title: "Accessibility Checklist for Designers",
    bullets: [
      "□ **Contrast:** Text meets 4.5:1 (normal) or 3:1 (large). Check with Figma contrast plugin.",
      "□ **Focus indicators:** Every interactive element has a visible focus state — not outline: none.",
      "□ **Labels:** Every input has a visible or programmatic label. Placeholder is not a label.",
      "□ **Touch targets:** Minimum 44×44px for tap areas. Spacing between targets ≥ 8px.",
      "□ **Motion:** Respect prefers-reduced-motion. No essential info conveyed by animation alone.",
      "□ **Error messages:** Specific, in plain language, adjacent to the field. Suggest a fix.",
      "□ **Structure:** Heading hierarchy is logical (H1→H2→H3). Reading order matches visual order.",
    ],
    note: "WCAG POUR: Perceivable · Operable · Understandable · Robust. Designers own the first three.",
  },
  {
    eyebrow: "Day 4 · Governance",
    title: "AI Ethics & Governance Quick-Reference",
    head: ["EU AI Act tier", "Examples", "Designer action"],
    rows: [
      ["Minimal risk", "Spam filters, basic recommendations", "Standard UX process. Document decisions."],
      ["Limited risk", "Chatbots, biometric categorisation", "Disclose AI use. Ensure transparency in UI."],
      ["High risk", "Credit scoring, hiring, critical infra", "Human oversight required. Audit trail. Impact assessment."],
      ["Unacceptable", "Social scoring, manipulative techniques", "Do not design. Escalate immediately."],
    ],
    note: "NIST AI RMF: Govern → Map → Measure → Manage. Apply to every AI-assisted feature in your prototype.",
  },
  {
    eyebrow: "Day 4 · Checklist",
    title: "Pre-Ship Governance Checklist",
    bullets: [
      "□ **Classify risk:** Which EU AI Act tier applies to this feature?",
      "□ **Document data:** What user data flows in? What's stored? Who can access it?",
      "□ **Check bias:** Could this design disadvantage a user group? Test with diverse scenarios.",
      "□ **Accessibility pass:** Run the 7-point designer checklist on every screen.",
      "□ **Sign-off:** Name, role, date — someone accountable approves before handoff.",
    ],
    fields: [
      { label: "Feature / screen", placeholder: "" },
      { label: "Risk tier", placeholder: "Minimal / Limited / High" },
      { label: "Reviewer", placeholder: "Name · role · date" },
      { label: "Open risks", placeholder: "" },
    ],
  },
  {
    eyebrow: "Day 4 · Template",
    title: "Prototype Constraint Annotations",
    head: ["Screen / frame", "Accessibility decision", "Governance decision", "Open question"],
    rows: [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
    ],
    note: "Annotate in Figma comments or a dedicated 'Constraints' page. Devs and reviewers need to see your reasoning.",
  },
  {
    eyebrow: "Day 4 · Script",
    title: "Usability Test Script",
    fields: [
      { label: "Test goal", placeholder: "What decision will this test inform?" },
      { label: "Participant profile", placeholder: "Role, experience level, recruitment criteria" },
      { label: "Task 1", placeholder: "Scenario · success criteria · time limit" },
      { label: "Task 2", placeholder: "Scenario · success criteria · time limit" },
      { label: "Task 3", placeholder: "Scenario · success criteria · time limit" },
      { label: "Think-aloud prompt", placeholder: "'Tell me what you're thinking as you go.'" },
    ],
    bullets: [
      "**Observation sheet columns:** Participant · Task · Success (Y/N) · Errors · Quotes · Severity.",
      "**Synthesis grid:** Group findings by theme, not by participant. Count frequency before prioritising.",
    ],
  },
];
