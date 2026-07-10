import type { TakeawayPage } from "../types";

export const day3Pages: TakeawayPage[] = [
  {
    eyebrow: "Day 3 · Privacy",
    title: "Data Handling Checklist for AI Tools",
    head: ["Input type", "Safe to paste", "Caution", "Never paste", "Org policy"],
    rows: [
      ["Public marketing copy", "✓", "", "", ""],
      ["Internal process descriptions", "", "✓ Anonymise first", "", ""],
      ["User interview transcripts", "", "✓ Redact PII", "", ""],
      ["Component / token names", "", "✓ Check vendor policy", "", ""],
      ["Production database records", "", "", "✓", ""],
      ["Credentials, API keys, classified data", "", "", "✓", ""],
    ],
    note: "When in doubt, don't paste. Summarise manually or use synthetic examples.",
  },
  {
    eyebrow: "Day 3 · Reference",
    title: "Token Architecture",
    head: ["Layer", "Purpose", "Naming example"],
    rows: [
      ["Primitive", "Raw values — never used directly in UI", "color-blue-500, spacing-16"],
      ["Semantic", "Intent-based aliases", "color-text-primary, color-surface-error"],
      ["Component", "Scoped to a component", "button-primary-bg, card-border-radius"],
      ["Template", "Page-level composition tokens", "layout-page-padding, grid-gap-content"],
    ],
    bullets: [
      "Rule: components reference semantic tokens, not primitives.",
      "Rule: one source of truth — change a semantic token, update the whole system.",
    ],
  },
  {
    eyebrow: "Day 3 · Reference",
    title: "Auto Layout Quick Reference",
    head: ["Setting", "Behaviour", "When to use"],
    rows: [
      ["Hug contents", "Frame shrinks to fit children", "Buttons, chips, badges"],
      ["Fill container", "Child stretches to parent width/height", "Full-width inputs, cards in a column"],
      ["Fixed", "Explicit width/height locked", "Icons, avatars, fixed-size media"],
      ["Nested auto layout", "Stack within stack — row inside column", "Card with header + body + footer"],
      ["Min / max constraints", "Prevent collapse or overflow", "Text fields, responsive containers"],
    ],
    note: "15-minute review rule: if a frame doesn't resize predictably, check Hug/Fill/Fixed on every level.",
  },
  {
    eyebrow: "Day 3 · Template",
    title: "Component Spec",
    fields: [
      { label: "Component name", placeholder: "e.g. Card / PrimaryButton" },
      { label: "Anatomy", placeholder: "Label, icon, container, divider — list all parts" },
      { label: "Variants", placeholder: "Primary / secondary / destructive / disabled" },
      { label: "States", placeholder: "Default, hover, focus, active, loading, error" },
      { label: "Spacing tokens", placeholder: "padding-x, padding-y, gap, border-radius" },
      { label: "Accessibility notes", placeholder: "Contrast ratio, focus ring, touch target (min 44×44), aria role" },
    ],
  },
  {
    eyebrow: "Day 3 · Worksheet",
    title: "Privacy-Safe Prompt Rewrite",
    head: ["Original prompt (risky)", "What's wrong", "Rewritten (safe)"],
    rows: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    bullets: [
      "Replace real names with 'User A', real IDs with '[REDACTED]'.",
      "Describe patterns, not records: 'users in the finance flow' not 'Ahmed's transaction #48291'.",
      "Strip screenshots with visible PII before uploading to AI tools.",
    ],
  },
];
