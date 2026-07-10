# SDAIA Masterclass — Curriculum Update Spec
## For Cursor: apply against existing `day1.ts` – `day5.ts`

**Context:** Original deck built for 9:00 AM–5:00 PM, 4 sessions/day, 247 slides total, cohort assumed near-beginner. Confirmed update: training runs **9:00 AM–3:00 PM**, hard stop, cohort is **practitioner-level** (Figma-fluent already), and the client (SDAIA) explicitly requested deeper coverage of **accessibility/inclusive design, data privacy, AI ethics, and AI governance**.

This is not a trim pass. It is a real restructure: session durations shrink, tool-mechanics content gets cut or compressed, and Day 4 changes subject entirely — from prototyping/microinteractions to Responsible AI-Augmented Design.

Do not attempt to auto-generate this from the old file alone — use this spec as the instruction layer, keep the existing component system (`Slide`, `Header`, `Bullets`, `Card`, etc.) untouched, only touch `content/day*.ts` and `content/index.ts` timing strings.

---

## 1. Global Timing Change

Every `cover` slide's `time` field and every `dayDivider`'s `sessions` array must update from the old 9–5 pattern to:

```
OLD                          NEW
S1  9:00 – 10:30       →     S1  9:00 – 10:30   (unchanged)
Break 10:30–10:40      →     Break 10:30–10:45
S2  10:40 – 12:30      →     S2  10:45 – 12:15   (was 110min, now 90min)
Lunch 12:30–1:30       →     Lunch 12:15–1:00     (was 60min, now 45min)
S3  1:30 – 3:30        →     S3  1:00 – 2:15      (was 120min, now 75min)
Break 3:30–3:40        →     (removed — day ends here)
S4  3:40 – 5:00        →     S4  2:15 – 3:00      (was 80min, now 45min)
```

**Net effect per day:** S1 untouched. S2 loses ~20min. S3 loses ~45min — this is the session that must lose the most content. S4 loses ~35min — must become a tight wrap, not a full teaching block.

Update every `dayDivider.dayLabel` and every session's time string across all 5 files to match. Update `content/index.ts` running page-count comment if slide totals change (they will — see per-day deltas below).

---

## 2. Day 1 — Foundations & Discovery
**File:** `day1.ts` · Old: 49 slides · Target: ~38–40 slides

### Cut entirely
- Any slide teaching FigJam mechanics from zero (what a sticky note is, how to pan/zoom, basic tool intro). Cohort already knows this. Look for `[TOS]`/`toolOpen` and early `[THR]` theory slides under "Introduction to FigJam" — cut the tool-orientation slides, keep only the exercise instructions.
- Basic "what is a stakeholder map" theory if it over-explains — compress to one reference slide.

### Compress
- S2 (UX Principles + Heuristics) — keep the Nielsen heuristics reference table slide, cut any slide that walks through each heuristic one-by-one with a full example. Replace with one dense reference slide + one applied example.

### Keep unchanged
- S1 (What is UX Design?) — still useful framing even for practitioners, keep as-is.
- The discovery/prioritisation exercise slides (`exercise` type) — keep, these are the applied work.

### Add
- New slide at end of S4 (or new short S4 closer), type `discussion` or `wrap` addition:
  - **Title:** "Responsible Design Checkpoint"
  - **Body:** "Look back at today's discovery notes. Which pain points are accessibility or inclusion gaps, not just usability friction? Flag them now, we return to every one of them on Day 4."

---

## 3. Day 2 — Research, Personas & AI Workflows
**File:** `day2.ts` · Old: 54 slides · Target: ~44–46 slides

### Cut
- Any slide teaching basic empathy-map mechanics from scratch if cohort is process-fluent per the client's "cover both" instruction — keep the framework reference slide, cut the guided step-by-step walkthrough slides down to one worked example instead of two.

### Compress
- S3/S4 journey-mapping content: reduce from a fully guided multi-slide build to **one template slide + one filled worked example slide**. The live build becomes an in-session exercise, not a slide-by-slide teach.

### Rewrite / Add — AI Research Workflows block (S2)
This is the block that grows. If the old deck already has an AI-workflow session here, expand it using this content (matches the tested prompt pack built earlier this project):
- **Slide — theory:** "AI Research Workflows" — Claude + Perplexity as research accelerants, not replacements for judgment.
- **Slide — example (split panel):** Synthesis prompt (notes → themed clusters) shown live.
- **Slide — example (split panel):** Competitive/trend scan prompt shown live.
- **Slide — theory/discussion:** "Bias &amp; Reliability Check on AI Outputs" — garbage-in-garbage-out framing, how to catch a hallucinated pattern or an unverified source before it enters a deliverable.
- **Slide — reference:** the 5-prompt pack as a leave-behind table (Synthesis / Competitive Research / Persona / Journey Map / Heuristic Audit — tool, use-case, one-line description each).

### Add
- Closing checkpoint slide, type `wrap` addition or `discussion`:
  - **Title:** "Responsible Design Checkpoint — Day 2"
  - **Body:** "Biased or incomplete research input produces biased AI-generated personas. Where in today's AI-assisted research could that have happened?"

---

## 4. Day 3 — Design Systems & AI-Accelerated Build
**File:** `day3.ts` · Old: 49 slides · Target: ~34–36 slides

**This session takes the single biggest cut.** S3 (Layout Mastery — Auto Layout) drops from a full 14-slide teaching session to a **15-minute fast review**.

### Cut hard
- From the old "Layout Mastery" session: cut the full theory build (`[THR]` slides on Auto Layout what/why, nested auto layout, Tidy Up, rulers/guides/constraints, boolean operations theory) down to **one combined reference/review slide** covering Fill/Hug/Fixed + nested auto layout in a single dense visual. Cut the boolean-operations teaching entirely, or fold into the reference slide as a footnote.
- From "Vector Work + Graphics" (S2 old): if the cohort is fluent, cut this session's teaching content almost entirely — keep only the exercise if there's a component-building reason to retain it, otherwise cut the whole session and reallocate its time to AI-accelerated build content below.

### Keep, compressed
- Design Systems + Figma Variables (old S4) — keep the core "token, component, pattern" framing and the variables demo, cut redundant examples. This becomes the foundation for "Advanced Component Architecture."

### Add — AI-Accelerated Design Exploration (new block, replaces cut vector/layout teaching time)
- **Slide — theory:** "AI-Accelerated Design Exploration" — using Figma's AI features and generative tools to speed up variant/layout exploration, framed as acceleration not replacement for design judgment.
- **Slide — example:** before/after — a manually-built component vs. the same component explored faster with AI assistance.
- **Slide — exercise:** apply AI-accelerated exploration to the card/component built earlier in the day.

### Add — Data Privacy in AI Design Tools (new block, tight, checklist-style — was full lecture, now condensed)
- **Slide — theory:** "Where Does Your Input Data Go?" — what happens to proprietary component/token data run through third-party AI design tools.
- **Slide — reference:** a practical data-handling checklist (what's safe to paste into an AI tool, what isn't, org-specific considerations).

### Add
- Closing checkpoint, `wrap` or `discussion`:
  - **Title:** "Responsible Design Checkpoint — Day 3"
  - **Body:** "Before you run anything through an AI design tool tomorrow or after this training: what's your checklist?"

---

## 5. Day 4 — Responsible AI-Augmented Design
**File:** `day4.ts` · Old: 55 slides ("Prototyping + Microinteractions + Multidevice") · Target: ~40–42 slides

**This is a subject change, not a trim.** The old Day 4 content (paper prototyping, Figma prototyping, microinteractions, usability testing, multidevice) does not disappear — it gets **redistributed**: paper-to-prototype flow moves into Day 4 S4 here in compressed form (see below), microinteractions/multidevice content should be cut to a reference-only leave-behind (not taught live) unless a later slot opens up, usability testing content moves to become the standalone Usability Test Script deliverable (already built as a separate PDF this project — reference it, don't re-teach it live).

Old dayDivider theme "Make it move, then make it testable" → **new theme: "Design responsibly, or don't ship it."**

### New Day 4 structure (four blocks, full session, nothing cut — this day is protected)

**Divider slide — rewrite:**
```
title: "Responsible\n{hl}AI-Augmented Design{/hl}"
theme: "The anchor day — full attention, nothing compressed"
sessions: [
  "S1 · Accessibility & Inclusive Design, Applied  9:00 – 10:30",
  "S2 · AI Ethics & Governance Frameworks  10:45 – 12:15",
  "S3 · Governance Scenario Workshop  1:00 – 2:15",
  "S4 · Prototyping with Responsible-Design Constraints  2:15 – 3:00",
]
```

**S1 — Accessibility &amp; Inclusive Design, Applied (~10 slides)**
- Theory: WCAG core principles (Perceivable, Operable, Understandable, Robust) — condensed to what a designer actually checks, not the full spec.
- Framework: contrast tokens, focus states, screen-reader-order annotation — applied directly to the component set built Day 3.
- Example: before/after — a component with accessibility gaps, then annotated and fixed.
- Exercise: audit and fix one component from Day 3 against a short accessibility checklist. ~25 min.
- Reference: accessibility checklist leave-behind.

**S2 — AI Ethics &amp; Governance Frameworks (~10 slides)**
- Theory: why this matters now — AI-assisted design tools are already in the workflow, governance isn't optional.
- Framework (compare/stack): EU AI Act risk-tiering (unacceptable / high / limited / minimal risk) applied to design-tool use cases.
- Framework: NIST AI Risk Management Framework — Govern, Map, Measure, Manage, applied practically.
- Example: a design decision run through both lenses.
- Reference: one-page quick-reference (this matches the standalone AI Ethics & Governance Quick-Reference deliverable — keep this slide's content consistent with that document).

**S3 — Governance Scenario Workshop (~8 slides)**
- Statement/prompt: "You used an AI tool to generate this citizen-facing screen. What's your governance checklist before shipping it?"
- Scenario slides (2-3): present a realistic AI-generated design artifact, walk through the checklist live.
- Exercise: participants apply the checklist to their own Day 3 component. ~30 min.
- Wrap.

**S4 — Prototyping with Responsible-Design Constraints (~10 slides, compressed from old prototyping content)**
- Theory (condensed from old Day 4 S1/S2): fidelity spectrum, one slide not a full session.
- Example: connecting screens in Figma, one Smart Animate transition, shown fast.
- Exercise: build a clickable prototype of the day's work with accessibility and governance constraints already applied, not retrofitted. ~25 min.
- Wrap — Day 4 close, reference forward to Day 5 capstone.

**Note for Cursor:** the cut microinteractions/multidevice theory from the old deck can be preserved as a **reference-only appendix slide** at the end of S4 (a dense table, not taught live) so the content isn't lost entirely, just deprioritised. Optional — only include if slide budget allows.

---

## 6. Day 5 — Capstone & Case Study
**File:** `day5.ts` · Old: 40 slides · Target: ~34–36 slides

### Compress
- Presentation format: old spoken walkthrough length should shorten from 90 seconds to **60 seconds per participant** to fit the tighter S4 window. Update any slide referencing presentation timing.
- Any redundant "how to present" coaching theory — cut to one quick-reference slide.

### Add / Rewrite — Capstone scoring
- Update the capstone rubric slide (`framework` type, likely `compare` or `stack` kind) to explicitly add two new scoring dimensions: **Accessibility** and **AI-Governance Awareness**, alongside whatever original criteria existed (design quality, process rigor, etc.).

### Add
- Final `wrap` slide content should reference the full end-of-week take-home package: full case study, production Figma file, AI research prompt pack, interview kit, JTBD/persona worksheets, usability test script, **AI Ethics & Governance quick-reference** (new addition — make sure this is listed).

**Flag for the manager before finalising:** if cohort size is above ~12-15 participants, 60-second walkthroughs plus transitions likely won't fit the 45-minute S4 window. Confirm group size before locking this slide's content.

---

## 7. Summary — Slide Count Delta

| Day | Old | Target | Delta | Reason |
|---|---|---|---|---|
| 1 | 49 | ~38–40 | −10 | FigJam mechanics cut |
| 2 | 54 | ~44–46 | −9 | Journey-map teaching compressed, AI workflow content added |
| 3 | 49 | ~34–36 | −14 | Auto layout/vector teaching cut hardest, AI-accelerated build + data privacy added |
| 4 | 55 | ~40–42 | −14 | Full subject swap — old prototyping content compressed/redistributed, responsible-design content is new |
| 5 | 40 | ~34–36 | −5 | Presentation timing compressed, scoring rubric updated |
| **Total** | **247** | **~190–200** | **~−50** | Matches the ~4h45m/day real content window vs. the old ~6.5h/day |

Build day-by-day, validate slide count against this table before moving to the next day, and keep every component/token system untouched — this spec only changes what goes into the content arrays.
