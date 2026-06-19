# UX Masterclass - Slide Deck Build Spec (for Cursor)

**What this is:** a complete, self-contained build specification for a 247-slide presentation deck used to teach a 5-day UX/UI Design Masterclass. You (Cursor) will build it as a React + Tailwind + TypeScript app. Every slide renders from a typed content manifest (Section 9) through a small set of reusable slide components (Section 6). All slide text is already written - do not invent or summarize content. Build exactly what the manifest specifies.

**Two hard goals:**
1. **Total visual consistency.** Spacing, type sizes, and layout are defined ONCE as tokens and components. No slide hand-tunes its own padding or font size. If something looks off, the fix happens in the component, never in a single slide.
2. **Faithful content.** The manifest in Section 9 holds the exact words for all 247 slides. Render them verbatim.

---

## 0. Output at a glance

- **247 slides total** across 5 days, 20 sessions, plus 5 day-divider slides.
- **Aspect ratio:** strict 16:9. Logical canvas is **1920 × 1080 px**. Every slide is exactly this size.
- **On screen:** a deck viewer scales the 1920×1080 stage to fit the viewport (CSS transform), with left/right arrow navigation.
- **Export:** print to a single PDF at 1920×1080 per page (Section 7).
- **Brand:** Navy + Gold. Display font Geist, body font Inter. Line icons via Phosphor.

---

## 1. Tech stack & project setup

Use **Vite + React + TypeScript + Tailwind CSS**.

```bash
npm create vite@latest ux-masterclass -- --template react-ts
cd ux-masterclass
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @phosphor-icons/react
```

**Fonts.** Load Geist and Inter. Use Fontsource so the deck renders identically offline and in PDF (do not rely on Google Fonts CDN for the print step):

```bash
npm install @fontsource/inter @fontsource-variable/geist
```

In `src/main.tsx`:
```ts
import "@fontsource-variable/geist";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";
```

**Folder structure:**
```
src/
  index.css
  main.tsx
  App.tsx                 // deck viewer + routing + print mode
  deck/
    tokens.ts             // design tokens (Section 2) - single source of truth
    icons.ts              // Phosphor icon map (Section 5)
    types.ts              // slide type definitions (Section 8)
    content/
      day1.ts ... day5.ts // the manifest, split by day (Section 9)
      index.ts            // concatenates all days into one ordered array
    primitives/
      Slide.tsx Chrome.tsx Deco.tsx Eyebrow.tsx Title.tsx Rule.tsx
      Bullets.tsx Card.tsx Grid.tsx Table.tsx
    slides/
      DayDivider.tsx SessionCover.tsx Statement.tsx Theory.tsx
      Framework.tsx Example.tsx Discussion.tsx ToolOpen.tsx
      Exercise.tsx Reference.tsx Wrap.tsx
    SlideRenderer.tsx      // maps a manifest entry -> the right slide component
```

---

## 2. Design system - the single source of truth

This is the most important section. These tokens are LAW. Every component reads from them. No raw hex or ad-hoc px anywhere else.

### 2.1 Tailwind config

`tailwind.config.js`:
```js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nv:   "#0D1B2E",  // navy base (primary dark bg, primary text on light)
        nm:   "#1A2F4A",  // navy mid (gradient partner, dark-moat bg)
        ns:   "#0B1520",  // navy deepest (day divider bg)
        go:   "#B8953F",  // gold (accent, all CTAs/badges/rules)
        gl:   "#D4A84A",  // gold light (accent on dark, gradient partner)
        gx:   "#ECC05A",  // gold bright (rare emphasis only)
        cr:   "#FDFAF5",  // cream (light slide bg)
        wh:   "#FFFFFF",  // white (cards on cream)
        t1:   "#0D1B2E",  // text primary (= navy)
        t2:   "#334155",  // text secondary (body on light)
        t3:   "#64748B",  // text muted (captions, hints)
      },
      fontFamily: {
        display: ['"Geist Variable"', "Inter", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      // Type scale - names, not raw sizes. Use ONLY these for text.
      fontSize: {
        chrome:    ["18px", { lineHeight: "1.2",  letterSpacing: "0.045em" }],
        eyebrow:   ["20px", { lineHeight: "1.2",  letterSpacing: "0.13em"  }],
        small:     ["21px", { lineHeight: "1.5"  }],
        body:      ["26px", { lineHeight: "1.55" }],
        cardbody:  ["22px", { lineHeight: "1.5"  }],
        cardtitle: ["26px", { lineHeight: "1.15" }],
        lead:      ["30px", { lineHeight: "1.5"  }],
        h2:        ["44px", { lineHeight: "1.08", letterSpacing: "-0.3px" }],
        h1:        ["64px", { lineHeight: "1.0",  letterSpacing: "-0.6px" }],
        stmt:      ["76px", { lineHeight: "1.07", letterSpacing: "-0.8px" }],
        cover:     ["100px",{ lineHeight: "0.93", letterSpacing: "-2px"   }],
        divider:   ["88px", { lineHeight: "0.97", letterSpacing: "-1.5px" }],
      },
      // Spacing - 8px base. Use ONLY these gap/padding values in slide layout.
      spacing: {
        s1: "8px",  s2: "16px", s3: "24px", s4: "28px",
        s5: "32px", s6: "36px", s7: "48px", s8: "56px",
        s9: "64px", s10:"72px", s11:"96px",
      },
      borderRadius: { card: "18px", chip: "12px", pill: "999px" },
      boxShadow: {
        card: "0 2px 14px rgba(0,0,0,0.055)",
        cardlg: "0 4px 24px rgba(0,0,0,0.10)",
      },
      maxWidth: { stage: "1920px" },
    },
  },
  plugins: [],
};
```

### 2.2 The frame rules (this is what fixes the inconsistency)

Every slide obeys the **same safe area and vertical rhythm**. These are enforced by the `Slide` and content components, never by individual slides.

- **Stage:** every slide is exactly `1920×1080`, `overflow-hidden`, `relative`.
- **Content slides** (Theory, Framework, Example, Reference, Wrap) use uniform padding: **`px-s11 pt-s9 pb-s8`** (96 / 64 / 56). Nothing overrides this.
- **Full-bleed slides** (DayDivider, SessionCover, Statement, Discussion, ToolOpen, Exercise) manage their own internal layout but still use **`px-s11`** horizontally so the left edge of text aligns with content slides.
- **Vertical rhythm inside content slides**, top to bottom, always in this order with these exact gaps:
  - Chrome (fixed block, see 2.3)
  - gap **s7 (48px)** to the header
  - Eyebrow → `mb-s1` (8) → Title → `mt-s3` (24) Rule → `mt-s6` (36) → content region
  - The content region is a flex column that fills remaining height (`flex-1 min-h-0`).
- **Never** place content closer than the safe-area padding to any edge.
- **Equal-height cards in a grid:** the grid provides equal heights; card *content is vertically centered* (`justify-center`) so a short card never leaves a dead void at the bottom. (This is the fix for the earlier whitespace problem.)

### 2.3 Chrome (header strip), every non-cover/divider slide

- Single row, space-between, vertically centered, height auto, sits at top of safe area.
- Left: `SAMEER UL HAQUE` (font-body 600, color `t2` on light / `white/60` on dark) + ` · UX MASTERCLASS` muted.
- Right: `DAY {d} · S{n} · {SESSION TITLE CAPS}` (color `t3` / `white/38`) followed by a circular page badge: 36px gold circle, navy number, font-display 700, 16px.
- The `·` separators are gold (`text-go`), `mx-[7px]`.
- DayDivider and SessionCover have **no chrome**.

### 2.4 Decorative system (subtle, brand-consistent)

Two SVG motifs, identical on every slide, low opacity, behind content (`-z-10`, `pointer-events-none`):

1. **Ripple rings** - concentric circles, bottom-right, bleeding off-canvas.
   - Light slides: `stroke #B8953F`, opacity `0.07`.
   - Dark slides: `stroke #FFFFFF`, opacity `0.075`.
2. **Waveform** - thin vertical bars along the very bottom edge, full width.
   - Light: `fill #B8953F`, opacity `0.05`. Dark: `fill #FFFFFF`, opacity `0.085`.

Generate both as React components in `Deco.tsx`. Rings = 9 `<circle>` elements r=70..550 step 60 in an 800×800 viewBox placed `right:-170px; bottom:-190px; width/height 660px` (cover/divider larger: 860px). Waveform = bars every 20px across 1920 width, height = `clamp(6, 16 + sin(i*0.009)*36 + sin(i*0.04+1)*14 + sin(i*0.007+3)*20, 72)`, width 7px, rounded.

### 2.5 Global rules

- **No emojis anywhere.** All iconography is Phosphor line icons (Section 5).
- **No em dashes** in any rendered copy. Use commas, periods, or " · ". (The manifest already follows this.)
- Default icon weight is **`"regular"`** for a clean line look; decorative/large feature icons may use **`"light"`**. Never `"fill"` except tiny inline status dots (use a filled `<span>` for those, not an icon).
- Body copy never exceeds ~90 characters per line; rely on max-width containers, not manual breaks, except where the manifest provides explicit line breaks for titles/statements.

---

## 3. Color usage map

| Element | Light slide | Dark slide |
|---|---|---|
| Background | `cr` (#FDFAF5) | `nv` / `nm` / `ns` |
| Primary heading | `nv` | `white` |
| Body text | `t2` | `white/72` |
| Muted/caption | `t3` | `white/38` |
| Accent (rule, eyebrow, dots, badges) | `go` | `gl` |
| Card bg | `wh` with `border nv/9` | `white/4` border `white/12`, or solid `nv` |
| Gold-tint card | `go/10` border `go/26` | `go/16` border `go/30` |

Statement, Discussion, Exercise, DayDivider slides are dark. ToolOpen is light with a strong gold-tint panel. Cover is a navy gradient. All Theory/Framework/Example/Reference/Wrap are light (cream), though Wrap and some Framework panels embed navy cards.

---

## 4. Typography rules

- **Display font (Geist)**: all titles (`h1`, `h2`, `cover`, `divider`, `stmt`), card titles, numbers, table headers, badges.
- **Body font (Inter)**: all body copy, bullets, captions, chrome, eyebrows.
- Eyebrow: `font-body font-semibold text-eyebrow uppercase text-go`.
- Title `h1`: `font-display font-bold text-h1 text-nv`.
- Rule: a `56px × 4px` rounded bar, `bg-gradient-to-r from-go to-gl`, sits under the title.
- Statement quote: `font-display font-bold text-stmt text-white`, with a highlighted clause in `text-gl`.
- Emphasis inside body: `<b>` → `font-semibold text-nv` (light) / `text-white` (dark); `<em>` → `not-italic font-medium text-go`.

---

## 5. Phosphor icon system

Import from `@phosphor-icons/react`. Centralize every icon in `deck/icons.ts` so usage is consistent and swappable:

```ts
import {
  Target, Gear, Sparkle, MagnifyingGlass, PencilSimple, Palette,
  Package, Lightning, TreeStructure, PenNib, Cards, Strategy,
  Users, ChatsCircle, MapTrifold, Path, Layout, Stack, Cube,
  Flask, Eye, Ruler, Browsers, DeviceMobile, CursorClick,
  ArrowsOutCardinal, Heart, ArrowClockwise, ShieldCheck, Warning,
  ListChecks, Clock, FigmaLogo, Brain, Compass, Books, Quotes,
  PuzzlePiece, GridFour, Stamp, Export, Devices, HandPointing,
  TestTube, NotePencil, Question, Check, ArrowRight, ArrowsLeftRight,
  Graph, Lightbulb, FlowArrow, Article, SlidersHorizontal,
} from "@phosphor-icons/react";

export const ICONS = {
  // foundations
  useful: Target, usable: Gear, desirable: Sparkle,
  research: MagnifyingGlass, design: PencilSimple, ui: Palette,
  product: Package, interaction: Lightning, ia: TreeStructure,
  writer: NotePencil, strategy: Strategy, architect: TreeStructure,
  // research / day 2
  users: Users, interview: ChatsCircle, journey: MapTrifold,
  scenario: FlowArrow, ideation: Lightbulb, jtbd: Target,
  empathy: Heart, ai: Brain, perplexity: Compass, synthesis: Graph,
  // figma / day 3
  figma: FigmaLogo, vector: PenNib, layout: Layout, autolayout: SlidersHorizontal,
  system: Stack, variables: GridFour, boolean: PuzzlePiece, components: Cube,
  // prototyping / day 4
  prototype: CursorClick, paper: Article, micro: Lightning,
  states: Stack, test: TestTube, multidevice: Devices,
  touch: HandPointing, principles: Ruler, visibility: Eye,
  // day 5
  atomic: GridFour, component: Cube, handoff: Export, devmode: Browsers,
  portfolio: Books, capstone: Stamp,
  // utility / shared
  check: Check, arrow: ArrowRight, swap: ArrowsLeftRight, clock: Clock,
  question: Question, quote: Quotes, list: ListChecks, warn: Warning,
  loop: ArrowClockwise, shield: ShieldCheck, ruler: Ruler, mobile: DeviceMobile,
} as const;

export type IconKey = keyof typeof ICONS;
```

**Icon container standard:** feature icons sit in a rounded square tile, `44×44px`, `rounded-chip`, `bg-go` with the icon in `nv` at `22px` (on light cards) or `bg-go/22` with icon in `gl` (on navy cards). Inline list icons render at `24px` in `text-go` with no tile. Never mix tiled and untiled icons in the same group.

---

## 6. Slide components (the 11 types)

Each component takes a typed props object (Section 8) and renders within `Slide`. All padding/rhythm comes from shared primitives; components only arrange content. Below is the contract for each. Build them to these specs exactly.

### 6.0 Primitives

- **`Slide`** - props `{variant: "light"|"darkNv"|"darkNm"|"darkNs"|"coverGrad", children}`. Renders the 1920×1080 stage, background per variant, `<Deco dark={...}/>`, and a content wrapper. For content variants it applies `px-s11 pt-s9 pb-s8 flex flex-col`. For full-bleed variants it applies `px-s11` only and lets the child manage vertical layout.
- **`Chrome`** - props `{day, session, sessionTitle, page}`. The header row from 2.3.
- **`Header`** - props `{eyebrow, title, titleHtml?}`. Renders Eyebrow + Title (`h1`) + Rule with the exact gaps from 2.2. `title` may contain `\n` for line breaks.
- **`Bullets`** - props `{items: RichText[], dark?}`. Vertical list, gap `s3` (24). Each item: a 10px gold dot (`mt-[11px]`) + text at `text-body`/`cardbody`, with `<b>`/`<em>` styling. Dark variant uses `white/72`.
- **`Card`** - props `{tone: "white"|"navy"|"gold", children, center?}`. `rounded-card p-s5 flex flex-col shadow-card`. `center` → `justify-center`. Tones per Section 3.
- **`Grid`** - props `{cols: 2|3|4, children}`. `grid gap-s4 flex-1` with the right column count. (g2 uses gap `s4`/28; keep uniform.)
- **`Table`** - props `{head: string[], rows: string[][]}`. Styled per 6.10.

### 6.1 `DayDivider` (5 total)
Full-bleed `darkNs`. Layout: vertical-centered block. A giant faded day numeral (`font-display 900`, `~560px`, `color white/[0.018]`) pinned right-center behind text. Content left-aligned: small gold tag line (`text-eyebrow`), then `divider`-size title (may wrap two lines), then italic theme line (`text-lead text-white/44`), then a session list (4 rows: each a 30px gold tick-line + `text-small text-white/40`). Gold 6px top bar across the very top. Props: `{dayLabel, title, theme, sessions[], dayNumber}`.

### 6.2 `SessionCover` (20 total)
Full-bleed `coverGrad` (`linear-gradient(140deg, nv, nm)`). Gold 6px top bar. A pill badge (`bg-go/12 border-go/26 rounded-pill`, gold caps text) reading `Day {d} · Session {n} · {time} AST`. Then `cover`-size title (white, accent clause in `gl`, may wrap). Then subtitle (`text-lead text-white/58`). A bottom footer row, separated by a `white/10` top border: left = `SAMEER UL HAQUE` (display 600 white) over role line (`white/42`); right = a gold-tint time chip. Props: `{day, session, time, title, subtitle}`.

### 6.3 `Statement` (dark moat, ~14 total)
Full-bleed `darkNv`. Has Chrome. Vertical-centered. An 80×5 gold gradient bar, then the quote at `text-stmt text-white` with one clause in `text-gl`, then an attribution line (`text-body text-white/38 italic`). Props: `{page, sessionMeta, quote (with \n + {hl} marker), attribution}`. Render `{hl}...{/hl}` as `text-gl`.

### 6.4 `Theory` (light, the workhorse)
Light `Slide` + Chrome + Header. Content region renders ONE of: `Bullets`, a `Grid` of `Card`s, or a two-column split, depending on `layout` prop. Optional footnote line at the bottom (`text-small text-t3 italic`, `mt-s4`). Props: `{..header, layout: "bullets"|"cards2"|"cards3"|"split", body, footnote?}`. Keep bullet sets to 4-6 items; card sets to 2-4. Never overflow; if content is long, the component must still fit 1080px (rely on the fixed scale - the manifest is already sized to fit).

### 6.5 `Framework` (light, diagram-led)
Light + Chrome + Header. Content is a structured visual: a process flow, a labelled diagram, an architecture stack, or a comparison. Supports these `kind`s:
- `flow` - horizontal steps (navy rounded boxes with gold arrow connectors; one step may be gold-filled to mark emphasis). Each step: number, title, one-line desc. Optional centered italic note under the row.
- `compare` - two panels side by side (one navy, one gold-tint) with a thin connector and a vertical bridge label.
- `stack` - vertical layered bars (token→component→pattern→template), each labelled.
- `diagram` - a custom SVG (e.g., Double Diamond, thumb-zone map) defined inline per slide via an `svg` field, with a labels row beneath.
Props: `{..header, kind, data, note?}`.

### 6.6 `Example` (light, real-world)
Light + Chrome + Header. Two patterns:
- `split` - two columns, e.g., bad vs good, each a tinted panel (red-tint `#FEF2F2/#FECACA` for negative, gold-tint for positive) containing 2-4 gold-left-strip items (`gsl` label + `gsc` text).
- `annotated` - a single panel with a left gold strip and 3-5 labelled callouts.
Closing italic takeaway line. Props: `{..header, mode, panels, takeaway?}`.

### 6.7 `Discussion` (dark moat)
Full-bleed `darkNv` + Chrome. A small gold-tint pill label (e.g., `OPEN DISCUSSION`), then a large question at `text-[60px] font-display 600 text-white` (accent clause in `gl`, may wrap), then a hint line (`text-body text-white/36`). Props: `{page, sessionMeta, label, question, hint}`.

### 6.8 `ToolOpen` (light, mode-switch signal)
Light + Chrome. A strong gold-tint full-width panel (`bg-go/10 border-go/26 rounded-card p-s7`) containing: a 56px tool icon tile (Phosphor: figma / figjam / claude / perplexity - see note), a big instruction line (`text-h2 text-nv`), a sub-line of what they're about to do (`text-lead text-t2`), and a small `YOU'LL NEED` row of chips. Props: `{..chrome, tool, instruction, sub, need[]}`.
> **Tool icons:** Figma → `FigmaLogo`. FigJam → `FigmaLogo` (Phosphor has no FigJam mark; use FigmaLogo with label "FigJam"). Claude → no brand mark in Phosphor; use `Sparkle` (weight light) in a `#D97757`-tint tile. Perplexity → use `Compass` in a `#20808D`-tint tile. Keep tile color per tool; icon white.

### 6.9 `Exercise` (dark, full-bleed, the practice card)
Full-bleed `darkNv`. **No chrome** beyond a tiny top-right `EXERCISE · DAY {d} S{n}` label. Centerpiece: a large tool icon tile, an `EXERCISE` kicker, a big bold task line (`text-[64px] font-display 700 text-white`, accent words in `gl`), a one-line method/sub instruction (`text-lead text-white/70`), and a prominent **timer badge** (gold pill, `text-h2 text-nv`, clock icon + duration). Optionally a thin `DELIVERABLE:` line at the bottom. Props: `{day, session, tool, task, sub, minutes, deliverable?}`.

### 6.10 `Reference` (light, dense)
Light + Chrome + Header. A `Table` (styled: navy header row, gold uppercase column labels, alternating `go/4` row tint, `t2` body, first column `nv 600`). Optional `note` line beneath (`text-small text-t3 italic`). Props: `{..header, head[], rows[][], note?}`.

### 6.11 `Wrap` (light, session close)
Light + Chrome + Header (title usually "Three Things to Take Into S{n}" or a day wrap). A 3-up `Grid` of navy `Card`s, each: big gold number (`text-[42px]`), white card title, `white/58` body. Then a full-width gold-tint "next up" bar (`bg-go/10 border-go/26`) with a `NEXT UP` label and the next session line. Props: `{..header, cards[3], next}`. For day-end wraps, `next` points to the next day.

---

## 7. Deck viewer & PDF export

### 7.1 Viewer (`App.tsx`)
- Build the full ordered slide array from `deck/content/index.ts`.
- Render the current slide inside a scaler: a wrapper that computes `scale = min(vw/1920, vh/1080)` and applies `transform: scale(...)` to the 1920×1080 stage, centered on a `#08111A` letterbox background.
- Keyboard: `←/→` to navigate, `f` toggles a print/all view, `g` opens a grid overview (optional).
- Show a small slide counter (`{i}/247`) bottom-right of the letterbox (outside the stage, not on the slide).

### 7.2 Print mode → PDF
- A route/flag (`?print=1`) renders ALL slides stacked vertically, each exactly `1920×1080px`, no scaler, no letterbox, with `break-after: page`.
- `index.css` print rules:
```css
@media print {
  @page { size: 1920px 1080px; margin: 0; }
  html, body { background: #fff; }
  .slide-stage { break-after: page; }
}
.slide-stage { width: 1920px; height: 1080px; overflow: hidden; position: relative; }
```
- Export by printing to PDF from Chrome at 100% scale, or script it with Playwright:
```js
// scripts/export.mjs  -  node scripts/export.mjs
import { chromium } from "playwright";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await p.goto("http://localhost:5173/?print=1", { waitUntil: "networkidle" });
await p.pdf({ path: "UX_Masterclass_Deck.pdf", width: "1920px", height: "1080px",
  printBackground: true, margin: { top:"0",bottom:"0",left:"0",right:"0" } });
await b.close();
```
- For per-session PDFs, accept `?print=1&day=2&session=3` and filter the array.

---

## 8. TypeScript slide types (`deck/types.ts`)

```ts
export type Day = 1 | 2 | 3 | 4 | 5;
export type RichText = string; // may contain <b>...</b> and <em>...</em>

export interface Base { day: Day; session: number; sessionTitle: string; page: number; }

export type Slide =
  | ({ type: "dayDivider"; dayLabel: string; title: string; theme: string;
       sessions: string[]; dayNumber: number } )
  | ({ type: "cover"; day: Day; session: number; time: string;
       title: string; subtitle: string } )
  | (Base & { type: "statement"; quote: string; attribution: string })
  | (Base & { type: "theory"; eyebrow: string; title: string;
       layout: "bullets"|"cards2"|"cards3"|"split";
       body: any; footnote?: string })
  | (Base & { type: "framework"; eyebrow: string; title: string;
       kind: "flow"|"compare"|"stack"|"diagram"; data: any; note?: string })
  | (Base & { type: "example"; eyebrow: string; title: string;
       mode: "split"|"annotated"; panels: any; takeaway?: string })
  | (Base & { type: "discussion"; label: string; question: string; hint: string })
  | (Base & { type: "toolOpen"; eyebrow: string; title: string; tool: ToolKey;
       instruction: string; sub: string; need: string[] })
  | ({ type: "exercise"; day: Day; session: number; tool: ToolKey;
       task: string; sub: string; minutes: number; deliverable?: string })
  | (Base & { type: "reference"; eyebrow: string; title: string;
       head: string[]; rows: string[][]; note?: string })
  | (Base & { type: "wrap"; eyebrow: string; title: string;
       cards: { n: string; t: string; b: string }[]; next: string });

export type ToolKey = "figma" | "figjam" | "claude" | "perplexity";
```

`{hl}...{/hl}` inside `quote`/`question`/`task` marks the gold-highlighted clause. `\n` marks an intentional line break. The `SlideRenderer` maps `type` → component and passes `page` (running 1-based index, computed at build time in `content/index.ts`, NOT stored per slide).

---

## 9. CONTENT MANIFEST - all 247 slides

The manifest is split into `day1.ts … day5.ts`, each exporting an array in slide order. `content/index.ts` concatenates them and injects the running `page` number. Render every entry verbatim. Section headers below mark day and session boundaries; within each session the slides are listed in order with their type and full content.

> Formatting note for whoever transcribes this into `.ts`: each block below is already in slide order. Convert each to one object literal matching the `Slide` union. Keep all copy exactly. Do not add, drop, or paraphrase slides.

_Content begins in the next section (9.1 Day 1 → 9.5 Day 5)._

---

### 9.1 Day 1 - `day1.ts` (49 slides)

```ts
import { Slide } from "../types";

export const day1: Slide[] = [

// ── DAY 1 DIVIDER ──────────────────────────────────────────────
{ type: "dayDivider", dayNumber: 1,
  dayLabel: "Day 1 of 5 · Riyadh, KSA · 12 July 2026",
  title: "UX Foundations\n+ Heuristics + FigJam",
  theme: "Understand before you design",
  sessions: [
    "S1 · What is UX Design?  9:00 - 10:30",
    "S2 · UX Principles + Heuristics  10:40 - 12:30",
    "S3 · Introduction to FigJam  1:30 - 3:30",
    "S4 · FigJam Workshop  3:40 - 5:00",
  ] },

// ══ DAY 1 · SESSION 1 · What is UX Design? (17) ══════════════════
{ type: "cover", day: 1, session: 1, time: "9:00 - 10:30",
  title: "What is\n{hl}UX Design?{/hl}",
  subtitle: "Foundations · Roles · The Design Process" },

{ type: "statement", day:1, session:1, sessionTitle:"What is UX Design?",
  quote: "\"Design is not what it looks like.\n{hl}Design is how it works.{/hl}\"",
  attribution: "Steve Jobs · Every concept this session leads back to this." },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Defining the Discipline", title:"What UX Actually Is",
  layout:"bullets",
  body:[
    "<b>UX is the totality of a person's experience with a product or service</b>, before, during, and after use. Not just the moment of interaction.",
    "It spans <b>feelings, perceptions, and behavioural responses</b>. How someone feels using something is as important as what they do with it.",
    "UX covers <b>digital platforms, physical products, services, and spaces</b>. A hospital waiting room has UX. So does an ATM flow.",
    "The discipline is three things: <em>researching</em> what users need, <em>designing</em> for those needs, and <em>testing</em> whether you got it right.",
    "<b>UX is not a deliverable.</b> Wireframes are deliverables. UX is the outcome. The distinction matters constantly.",
  ] },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Foundation", title:"Three Things Every Good Experience Must Be",
  layout:"cards3",
  body:[
    { icon:"useful", n:"01", t:"Useful",
      b:"Does it solve a real problem the user actually has? Without usefulness, the visual polish and smooth animation are decoration on top of nothing." },
    { icon:"usable", n:"02", t:"Usable", tone:"navy",
      b:"Can someone reach their goal without frustration or confusion? Usability is measured through testing, not assumed through intuition." },
    { icon:"desirable", n:"03", t:"Desirable",
      b:"Do people actually want to use it? Aesthetics, trust, and tone separate a product people tolerate from one they recommend." },
  ],
  footnote:"Peter Morville's full honeycomb adds Findable, Accessible, Credible, Valuable. These three are the irreducible core." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Most Common Confusion", title:"UX vs UI · Where One Ends and the Other Begins",
  kind:"compare",
  data:{
    bridge:"UI lives inside UX",
    left:{ tone:"navy", label:"UX", sub:"User Experience",
      def:"The logic, structure, and flow. Does the product make sense? Can a user achieve their goal without friction?",
      items:["User research and interview methodology","Information architecture and navigation","Wireframes and interaction logic","Usability testing and iteration","The experience before and after the screen"] },
    right:{ tone:"gold", label:"UI", sub:"User Interface",
      def:"The visual layer. Typography, colour, spacing, components, iconography, animation. Does it look and feel right?",
      items:["Colour systems and visual hierarchy","Typography and type scale","Component design and design systems","Animation and microinteraction design","Visual design for screens and touchpoints"] },
  },
  note:"You can have great UI and terrible UX. The interior can look beautiful while the floor plan makes no sense." },

{ type: "example", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"In Practice", title:"The Same Checkout Flow · Two Very Different Experiences",
  mode:"split",
  panels:{
    negative:{ heading:"Bad UX · E-commerce checkout", items:[
      { l:"Step 1 of 8", t:"<b>Forced account creation</b> before you can see your cart total. You must register to proceed." },
      { l:"Step 7 of 8", t:"<b>Shipping cost revealed</b> for the first time, 40% above expectation. Trust collapses." },
      { l:"Error state", t:"<b>\"Something went wrong. Please try again.\"</b> No indication of what failed or what to do." },
    ]},
    positive:{ heading:"Good UX · Same product, better design", items:[
      { l:"Step 1 of 3", t:"<b>Guest checkout available</b> immediately. Progress visible. Total shown from the first screen." },
      { l:"Post-purchase", t:"<b>Account creation offered after purchase</b>, order pre-filled. Opt in, not opt out." },
      { l:"Error state", t:"<b>\"Your card was declined.\"</b> Specific reason, next action, alternative payment shown." },
    ]},
  },
  takeaway:"Same product. Same technology. Completely different experience, because someone asked what the user needs at each step." },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Landscape", title:"Roles in UX · The Full Spectrum",
  layout:"cards4",
  body:[
    { icon:"research", t:"UX Researcher", b:"Generates insight from real users through interviews, observation, and testing. Turns behaviour into direction." },
    { icon:"design", t:"UX Designer", b:"Translates research into wireframes, flows, and tested interactions. Connects insight to interface." },
    { icon:"ui", t:"UI Designer", b:"Creates the visual language: colour, type, spacing, components, iconography. Makes it look right." },
    { icon:"product", t:"Product Designer", b:"Owns the end-to-end experience from research through shipping. Closest to the business outcome." },
    { icon:"interaction", t:"Interaction Designer", b:"Specialises in behaviour, motion, and microinteractions. Designs the moments between states." },
    { icon:"ia", t:"Information Architect", b:"Structures and organises content for findability. The skeleton before the skin." },
    { icon:"writer", t:"UX Writer", b:"Crafts the language of the interface: buttons, errors, onboarding, empty states. Words are UI." },
    { icon:"strategy", t:"UX Strategist", b:"Aligns experience goals with business objectives. Builds the case for design investment." },
  ] },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Organisational Context", title:"Where UX Lives in an Organisation",
  layout:"cards3",
  body:[
    { n:"A", t:"Embedded in Product", b:"UX sits inside the product team, beside engineering and business. Most common. Fastest for execution, closest to the roadmap.", tag:"Most common · Best for speed" },
    { n:"B", t:"Standalone Design Function", tone:"navy", b:"A dedicated design team reporting to the CPO or COO. Broader remit across products. Better for design maturity at scale.", tag:"Scale org · Best for consistency" },
    { n:"C", t:"External / Consultancy", b:"UX as project-based expertise: research sprints, audits, redesigns. High specialisation, lower context continuity.", tag:"Agency model · Specialised problems" },
  ],
  footnote:"No matter where UX sits in the chart, the work is identical: understand users, design for them, test the result." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Method", title:"The UX Design Process",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Empathise", d:"Research users. Observe, interview, immerse. Build understanding, not assumptions." },
    { n:"02", t:"Define", d:"Synthesise research. Frame the real problem, not the one you assumed going in." },
    { n:"03", t:"Ideate", gold:true, d:"Generate solutions. Breadth before depth. Quantity before quality." },
    { n:"04", t:"Prototype", d:"Build to think. Make ideas tangible enough to put in front of a user." },
    { n:"05", t:"Test", d:"Learn from users. What works, what breaks, what the next question is." },
  ]},
  note:"This process is circular, not linear. Testing feeds back into empathy and redefines the problem." },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Framework", title:"The Double Diamond · Diverge to Converge, Twice",
  kind:"diagram", data:{ diagram:"doubleDiamond",
    labels:[
      { t:"Discover", d:"Research widely. Gather without filtering. The goal is breadth of insight." },
      { t:"Define", d:"Narrow to the core. Find the real problem from what the research tells you." },
      { t:"Develop", d:"Generate options. Prototype multiple solutions. Explore before committing." },
      { t:"Deliver", d:"Test, refine, and ship the best solution. Then loop back with new learnings." },
    ] } },

{ type: "reference", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"For Everyone in This Room", title:"Entry Points · UX Has a Door for Every Background",
  head:["Your Background","What You Already Bring","Your UX Entry Path"],
  rows:[
    ["Graphic / Visual Designer","Visual craft, typography, spatial thinking","Add: research methods, information architecture, testing"],
    ["Software Developer","Technical fluency, systems thinking, logic","Add: user empathy, usability testing, interaction logic"],
    ["Marketing / Brand Professional","Audience analysis, messaging, behavioural cues","Add: qualitative research, direct user observation"],
    ["Project / Product Manager","Stakeholder management, process, prioritisation","Add: design fundamentals, wireframing, prototyping"],
    ["Researcher / Analyst","Data fluency, rigour, translating findings","Add: qualitative methods, design translation"],
    ["No design background","Fresh perspective, unfiltered domain expertise","Portfolio-first: case studies from real problems"],
  ] },

{ type: "framework", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"What You'll Build This Week", title:"The Case Study Thread · Day by Day",
  kind:"diagram", data:{ diagram:"weekArc",
    nodes:[
      { n:"1", day:"TODAY", t:"Discovery Canvas", d:"FigJam research board. HMW questions. First persona sketch." },
      { n:"2", day:"Day 2", t:"Research + JTBD", d:"JTBD-grounded persona. Experience map. AI-synthesised findings." },
      { n:"3", day:"Day 3", t:"Wireframes + System", d:"Figma wireframes. Variables. Component foundations." },
      { n:"4", day:"Day 4", t:"Prototype + Test", d:"Interactive Figma prototype. Usability test with a real person." },
      { n:"5", day:"Day 5", t:"Handoff + Portfolio", d:"Dev-ready file. Portfolio case study framing. Certificate." },
    ] },
  note:"Every exercise this week feeds one deliverable. You leave with a complete, portfolio-ready UX case study." },

{ type: "statement", day:1, session:1, sessionTitle:"What is UX Design?",
  quote: "\"{hl}Good design is invisible.{/hl}\nBad design is everywhere.\"",
  attribution: "Widely attributed · Your job this week is to learn to see what's invisible." },

{ type: "discussion", day:1, session:1, sessionTitle:"What is UX Design?",
  label:"Open Discussion",
  question:"Think of the last digital experience that {hl}frustrated{/hl} you.\nWhat broke down?\nWhat would good have looked like?",
  hint:"2 minutes with the person next to you. Then we hear three responses." },

{ type: "theory", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"The Week Ahead", title:"What This Week Builds Toward",
  layout:"cards2",
  body:[
    { tone:"gold", t:"By end of Day 2", b:"Real user insight: a JTBD-grounded persona, an experience map, and AI-synthesised research to design from. Not assumptions. Data." },
    { tone:"gold", t:"By end of Day 3", b:"A Figma file with wireframes on a real design system: variables, auto layout, components. Design that scales, not one-off screens." },
    { tone:"navy", t:"By end of Day 4", b:"You have tested your ideas with a real person using a Figma prototype. You know what works, what to fix, and you have the notes." },
    { tone:"navy", t:"By end of Day 5", b:"A developer-ready handoff file. A portfolio case study narrative. A certificate. One week. One complete, ownable artefact." },
  ],
  footnote:"The throughline across all five days is one case study, built session by session, grounded in real research." },

{ type: "reference", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Reference · Keep This Open", title:"UX Roles + Tools · Your Field Map",
  head:["Role","Primary Responsibility","Core Tools in This Training"],
  rows:[
    ["UX Researcher","User interviews, observation, synthesis into insight","FigJam, Claude AI, Perplexity Pro"],
    ["UX / Product Designer","Wireframes, user flows, interaction logic","Figma, FigJam, Claude AI"],
    ["UI Designer","Visual language, component libraries, tokens","Figma (Variables, Dev Mode)"],
    ["Interaction Designer","Behaviour design, motion, microinteractions","Figma (Prototype, Smart Animate)"],
    ["Information Architect","Content structure, taxonomy, navigation","FigJam (card sorting, affinity maps)"],
    ["UX Writer","Interface language, errors, onboarding, microcopy","Figma (annotation layers)"],
    ["UX Strategist","Business alignment, experience vision","FigJam, Perplexity Pro"],
  ],
  note:"Every tool in the third column is used in this training. Figma and FigJam open this afternoon." },

{ type: "wrap", day:1, session:1, sessionTitle:"What is UX Design?",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"UX is the whole experience", b:"Research, logic, emotion, and visual design are all part of it. The screen is just where it surfaces. It starts before the first tap." },
    { n:"02", t:"The process is circular", b:"There is no finish line, only the next research question informed by what you just learned. Testing begins the next round." },
    { n:"03", t:"Every role in this room does UX work", b:"The title is secondary. Anyone whose decisions affect a user's experience is doing UX. This week makes that work intentional." },
  ],
  next:"S2 · UX Principles + Heuristics (10:40) · The evaluative framework you'll apply to any product in under 30 minutes." },

// ══ DAY 1 · SESSION 2 · UX Principles + Heuristics (18) ══════════
{ type: "cover", day:1, session:2, time:"10:40 - 12:30",
  title:"UX Principles\n+ {hl}Heuristics{/hl}",
  subtitle:"User-Centered Design · Nielsen's 10 · Running an Audit" },

{ type:"statement", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  quote:"\"Good design is invisible.\n{hl}The rules that make it invisible are not.{/hl}\"",
  attribution:"This session makes the rules explicit and usable." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Core Philosophy", title:"What is User-Centered Design?",
  layout:"bullets",
  body:[
    "<b>UCD puts the user at the centre of every decision</b>, from first research question to final pixel. The user is consulted, not assumed.",
    "It is <b>iterative</b>. You design, test with real people, learn, and refine, in repeated loops rather than one straight line.",
    "Decisions are grounded in <em>evidence</em>, not the loudest opinion in the room or the preference of whoever has the most seniority.",
    "The opposite is <b>designer-centred or stakeholder-centred design</b>, building for your own taste or the boss's, then hoping users adapt.",
    "UCD is a posture before it is a process: <b>assume you are not the user</b>, and go find out who is.",
  ] },

{ type:"framework", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Loop", title:"The User-Centered Design Process",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Understand", d:"Research context, users, and their goals before proposing anything." },
    { n:"02", t:"Specify", d:"Define requirements from real user needs, framed as problems to solve." },
    { n:"03", t:"Design", gold:true, d:"Produce solutions, from sketches to prototypes, against those needs." },
    { n:"04", t:"Evaluate", d:"Test with real users. Measure against the requirements you set." },
  ]},
  note:"Evaluate always loops back to Understand. UCD never ends at launch, it restarts there." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Why It Matters Here", title:"Why UCD Matters for This Room",
  layout:"bullets",
  body:[
    "<b>For PMs and project leads:</b> UCD turns roadmap debates into testable questions. You stop arguing about opinions and start checking with users.",
    "<b>For developers and engineers:</b> it prevents building the wrong thing correctly. Catching a flawed flow on paper is far cheaper than in code.",
    "<b>For marketers and brand:</b> the same empathy that drives research drives messaging that actually resonates with a real audience.",
    "<b>For everyone:</b> UCD is the shared language that lets a mixed team make decisions together without defaulting to seniority.",
  ] },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Fastest Evaluation Method", title:"Introduction to Heuristic Evaluation",
  layout:"split",
  body:{
    left:[
      "A <b>heuristic evaluation</b> is an expert review of an interface against a set of established usability principles.",
      "It needs <b>no users and no budget</b>. One trained evaluator can audit a product in under an hour.",
      "It catches the <em>obvious, systemic problems</em> before you spend money testing with real people.",
    ],
    right:{ tone:"gold", t:"Why start here?",
      b:"Heuristics are the single highest-leverage skill a non-designer can learn. By the end of this session, anyone in this room can look at any product and name specifically what is wrong with it and why." },
  } },

{ type:"reference", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Canon", title:"Nielsen's 10 Usability Heuristics",
  head:["#","Heuristic","What It Means"],
  rows:[
    ["1","Visibility of system status","Always keep users informed about what is happening, through timely feedback."],
    ["2","Match system and real world","Speak the user's language, with familiar concepts, not internal jargon."],
    ["3","User control and freedom","Provide a clear exit, undo, and redo. Let users escape mistakes easily."],
    ["4","Consistency and standards","Follow platform and product conventions. Don't make users relearn."],
    ["5","Error prevention","Design so the error can't happen, better than a good error message."],
    ["6","Recognition over recall","Make options visible. Don't force users to remember information."],
    ["7","Flexibility and efficiency","Let novices and experts both work their own way. Add accelerators."],
    ["8","Aesthetic and minimalist design","Every extra element competes with the relevant ones. Cut noise."],
    ["9","Help users with errors","Plain-language errors that say what went wrong and how to fix it."],
    ["10","Help and documentation","When help is needed, make it findable and task-focused."],
  ] },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action · 1 to 3", title:"Visibility, Real-World Match, User Control",
  mode:"annotated",
  panels:[
    { l:"H1 · Visibility of status", t:"<b>A file upload with a live progress bar and percentage</b> respects status. A spinner with no end and no feedback violates it." },
    { l:"H2 · Match the real world", t:"<b>A trash icon for delete and a cart for purchases</b> match real-world models. \"Commit transaction\" as a button label does not." },
    { l:"H3 · User control and freedom", t:"<b>Undo send in email, and a clear cancel on every modal,</b> give control. A flow with no back button traps the user." },
  ],
  takeaway:"These three account for the majority of everyday frustration. Most bad UX fails one of them first." },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action · 4 to 7", title:"Consistency, Prevention, Recognition, Flexibility",
  mode:"annotated",
  panels:[
    { l:"H4 · Consistency", t:"<b>The primary button is the same colour and position on every screen.</b> When it moves and changes per page, users hesitate." },
    { l:"H5 · Error prevention", t:"<b>Disabling Submit until the form is valid</b> prevents the error. Greying out unavailable dates stops impossible bookings." },
    { l:"H6 · Recognition over recall", t:"<b>Showing recently used items and autocomplete</b> means users recognise, not memorise. Blank search boxes force recall." },
    { l:"H7 · Flexibility", t:"<b>Keyboard shortcuts for power users, simple defaults for novices.</b> Both paths exist without getting in each other's way." },
  ] },

{ type:"example", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Heuristics In Action · 8 to 10", title:"Minimalism, Error Recovery, Help",
  mode:"annotated",
  panels:[
    { l:"H8 · Aesthetic, minimalist", t:"<b>A checkout that shows only what's needed at each step</b> respects attention. A screen crowded with promos buries the primary action." },
    { l:"H9 · Help users recover", t:"<b>\"That email is already registered. Sign in instead?\"</b> with a direct link recovers gracefully. \"Error 400\" abandons the user." },
    { l:"H10 · Help and documentation", t:"<b>Inline contextual help and searchable docs</b> serve the moment of need. A 60-page PDF manual does not." },
  ],
  takeaway:"You now have the full set. Next, how to apply them as a structured audit." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Method", title:"Running a Heuristic Audit",
  layout:"bullets",
  body:[
    "<b>Step 1 · Define the scope.</b> Pick one flow, for example sign-up or checkout, not the entire product at once.",
    "<b>Step 2 · Walk the flow as a user would,</b> screen by screen, noting every friction point against the 10 heuristics.",
    "<b>Step 3 · Log each issue:</b> which heuristic it violates, where it happens, and a short description of the problem.",
    "<b>Step 4 · Rate severity</b> from 0 to 4 so the team knows what to fix first.",
    "<b>Step 5 · Recommend a fix</b> for each issue. An audit without recommendations is a complaint, not a deliverable.",
  ] },

{ type:"framework", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Prioritising What You Find", title:"The Severity Rating Scale",
  kind:"flow",
  data:{ steps:[
    { n:"0", t:"Not a problem", d:"Cosmetic at most. Does not need fixing unless time allows." },
    { n:"1", t:"Cosmetic", d:"Minor. Low priority. Fix if convenient." },
    { n:"2", t:"Minor", d:"Causes some friction. Worth fixing soon." },
    { n:"3", t:"Major", gold:true, d:"Frequently blocks or frustrates users. High priority." },
    { n:"4", t:"Catastrophe", d:"Prevents task completion. Must fix before release." },
  ]},
  note:"Severity blends frequency, impact, and persistence. A rare but blocking bug can still be a 4." },

{ type:"discussion", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  label:"Quick Challenge",
  question:"Pick any app on your phone right now.\nName {hl}one heuristic it violates{/hl}\nand how you would fix it.",
  hint:"90 seconds. We'll take four examples from the room." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"The Wider Toolkit", title:"UX Techniques Overview",
  layout:"cards3",
  body:[
    { icon:"research", t:"Discovery", b:"Interviews, surveys, contextual inquiry, competitive analysis, heuristic evaluation." },
    { icon:"jtbd", t:"Definition", tone:"navy", b:"Personas, JTBD, journey maps, experience maps, problem statements, HMW questions." },
    { icon:"prototype", t:"Delivery", b:"Wireframes, prototypes, usability testing, A/B testing, design systems, handoff." },
  ],
  footnote:"You will practise techniques from all three columns across this week. Today's audit is your first." },

{ type:"theory", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Fitting Into Delivery", title:"Planning the Development Cycle",
  layout:"bullets",
  body:[
    "<b>UX is not a phase before development,</b> it runs in parallel with it. Research and design stay one step ahead of the build.",
    "In an <b>agile cycle</b>, design works a sprint ahead: validating next sprint's work while engineering builds the current one.",
    "<b>Definition of ready</b> for a dev ticket should include tested designs, not just a written requirement.",
    "Heuristic audits fit naturally at <em>two moments</em>: early on competitor products, and late on your own build before release.",
  ] },

{ type:"reference", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Cheatsheet · Keep This Open", title:"Nielsen's 10 · One-Line Reference",
  head:["#","Heuristic","Ask Yourself"],
  rows:[
    ["1","Visibility of status","Does the user always know what's happening?"],
    ["2","Match real world","Does the language match the user's, not ours?"],
    ["3","Control and freedom","Is there always a clear way out and an undo?"],
    ["4","Consistency","Does the same thing look and behave the same everywhere?"],
    ["5","Error prevention","Have we designed the error out of existence?"],
    ["6","Recognition over recall","Are options visible instead of memorised?"],
    ["7","Flexibility","Can both novices and experts work efficiently?"],
    ["8","Minimalist design","Is every element earning its place?"],
    ["9","Error recovery","Do errors say what happened and how to fix it?"],
    ["10","Help and docs","Is help findable exactly when needed?"],
  ] },

{ type:"exercise", day:1, session:2, tool:"figjam",
  task:"Run a {hl}Heuristic Audit{/hl}",
  sub:"Pick one app you use daily. Score it against 3 heuristics of your choice.",
  minutes:20,
  deliverable:"For each: the heuristic, the issue, a severity 0 to 4, and your recommended fix, on FigJam stickies." },

{ type:"wrap", day:1, session:2, sessionTitle:"UX Principles + Heuristics",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"UCD is a posture, then a process", b:"Assume you are not the user, then go find out who is. Evidence over opinion, in iterative loops, never one straight line." },
    { n:"02", t:"Heuristics are your fastest tool", b:"Ten principles let anyone audit any product in under an hour, with no users and no budget. The highest-leverage skill here." },
    { n:"03", t:"An audit ends in recommendations", b:"Logging problems is half the job. Severity ratings and proposed fixes turn a complaint into a deliverable a team can act on." },
  ],
  next:"S3 · Introduction to FigJam (1:30) · The tool opens. We set up the canvas your whole week's research will live on." },

// ══ DAY 1 · SESSION 3 · Introduction to FigJam (8) ═══════════════
{ type:"cover", day:1, session:3, time:"1:30 - 3:30",
  title:"Introduction to\n{hl}FigJam{/hl}",
  subtitle:"The Collaboration Canvas · Tools · Setup" },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Orientation", title:"What FigJam Is, and Isn't",
  layout:"cards2",
  body:[
    { tone:"gold", t:"FigJam is for thinking", b:"An infinite collaborative whiteboard for research, brainstorming, affinity mapping, journey mapping, and workshops. Lo-fi by design. It's where ideas are messy and fast." },
    { tone:"navy", t:"Figma is for making", b:"The precise design tool for wireframes, UI, components, and prototypes. High-fidelity and structured. You move from FigJam to Figma as ideas firm up." },
  ],
  footnote:"Same company, same account, two tools. This afternoon is FigJam. Day 3 we move into Figma." },

{ type:"toolOpen", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Hands On", title:"Let's Open FigJam",
  tool:"figjam",
  instruction:"Create your first FigJam file",
  sub:"Name it: [Your Name] · Day 1 Workshop. This is the canvas your research lives on.",
  need:["A Figma account (free)","The shared workshop link","Your audit notes from S2"] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"The Toolset", title:"FigJam Tool Tour",
  layout:"cards3",
  body:[
    { icon:"list", t:"Stickies + Text", b:"The atomic unit. One idea per sticky. Colour-code by theme. Text for headers and framing." },
    { icon:"boolean", t:"Shapes + Connectors", tone:"navy", b:"Boxes, frames, and lines that snap and follow. Build flows, maps, and structures that stay connected as you move them." },
    { icon:"clock", t:"Timer + Cursor Chat", b:"Built-in timer to box exercises. Cursor chat and stamps for fast, low-friction group feedback." },
  ] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Working Together", title:"Collaboration Features",
  layout:"bullets",
  body:[
    "<b>Live multiplayer cursors:</b> everyone works on the same canvas at once. You see who is doing what in real time.",
    "<b>Sharing and permissions:</b> one link, set to edit or view. No exports, no version emailing, no \"final_v3_final\".",
    "<b>Voting:</b> drop dot-votes to prioritise ideas as a group in seconds, instead of debating endlessly.",
    "<b>Stamps and emotes:</b> lightweight reactions that keep a workshop moving without everyone talking over each other.",
  ] },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Before Figma", title:"Wireframing in FigJam",
  layout:"split",
  body:{
    left:[
      "FigJam is perfect for <b>lo-fi wireframes:</b> rough boxes and labels to agree on structure before precision matters.",
      "The goal is <em>speed and agreement,</em> not polish. If it looks too finished, people critique pixels instead of ideas.",
      "Once the structure is agreed here, you rebuild it properly in Figma on Day 3.",
    ],
    right:{ tone:"navy", t:"Lo-fi on purpose",
      b:"A wireframe that looks unfinished invites honest feedback about the flow. A wireframe that looks done invites silence or nitpicking. Stay rough until the structure is right." },
  } },

{ type:"theory", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Framing the Problem", title:"Working with POV Statements",
  layout:"bullets",
  body:[
    "A <b>Point of View statement</b> reframes raw research into a clear, actionable problem definition the whole team shares.",
    "The structure: <em>[User] needs [need] because [insight].</em> Specific user, real need, surprising insight.",
    "Example: <b>A first-time visitor needs to trust the platform quickly, because they've been burned by lookalike scams before.</b>",
    "A sharp POV becomes the bridge from research into ideation. It is what you'll build your How Might We questions on in S4 and Day 2.",
  ] },

{ type:"wrap", day:1, session:3, sessionTitle:"Introduction to FigJam",
  eyebrow:"Session 3 Complete", title:"Canvas Set Up · Into the Workshop",
  cards:[
    { n:"01", t:"You have a working canvas", b:"Your FigJam file is created, named, and shared. Stickies, shapes, connectors, timer, and voting are all at hand." },
    { n:"02", t:"FigJam is for thinking fast", b:"Lo-fi, collaborative, real-time. The place ideas are generated and structured before they are designed in Figma." },
    { n:"03", t:"A POV frames the problem", b:"User, need, insight. The statement that turns research into a problem worth solving and feeds the next exercise." },
  ],
  next:"S4 · FigJam Workshop (3:40) · Slides stop. You work. Affinity mapping, card sorting, and your first persona." },

// ══ DAY 1 · SESSION 4 · FigJam Workshop (5) ══════════════════════
{ type:"cover", day:1, session:4, time:"3:40 - 5:00",
  title:"FigJam\n{hl}Workshop{/hl}",
  subtitle:"Affinity Mapping · Card Sorting · First Persona" },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 1 · {hl}Affinity Mapping{/hl}",
  sub:"Write every user pain point you can think of on stickies. Then cluster them into themes.",
  minutes:20,
  deliverable:"3 to 5 labelled clusters of related pain points on your FigJam canvas." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 2 · {hl}Card Sorting{/hl}",
  sub:"Sort your clusters by frequency and severity. Which problems matter most, to the most people?",
  minutes:15,
  deliverable:"Your clusters ranked on a 2x2: frequency against severity." },

{ type:"exercise", day:1, session:4, tool:"figjam",
  task:"Exercise 3 · {hl}First Persona Sketch{/hl}",
  sub:"Who has the top-ranked problem? Sketch a rough persona: who they are, their context, their goal.",
  minutes:15,
  deliverable:"A one-card persona sketch. We turn it into a JTBD-grounded persona on Day 2." },

{ type:"wrap", day:1, session:4, sessionTitle:"FigJam Workshop",
  eyebrow:"Day 1 Complete", title:"What You Now Know",
  cards:[
    { n:"01", t:"You can define UX", b:"What it is, the roles, the process, and the principles. You can audit any product against ten heuristics with severity and fixes." },
    { n:"02", t:"You can use FigJam", b:"Canvas set up, stickies and connectors in hand, collaboration features known. Your research lives here for the rest of the week." },
    { n:"03", t:"Your case study has begun", b:"Pain points mapped, ranked, and a first persona sketched. This is the seed of everything you build over the next four days." },
  ],
  next:"Day 2 · Research, JTBD + AI Workflows · We turn this rough start into real, AI-accelerated user insight." },

];
```


---

### 9.2 Day 2 - `day2.ts` (54 slides)

```ts
import { Slide } from "../types";

export const day2: Slide[] = [

// ── DAY 2 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:2,
  dayLabel:"Day 2 of 5 · Riyadh, KSA · 13 July 2026",
  title:"Research, JTBD\n+ AI Workflows",
  theme:"Turn understanding into direction",
  sessions:[
    "S1 · Gathering User Data  9:00 - 10:30",
    "S2 · Interviews, JTBD + Personas  10:40 - 12:30",
    "S3 · AI Research Workflows  1:30 - 3:30",
    "S4 · Scenarios, Storyboards + Ideation  3:40 - 5:00",
  ] },

// ══ DAY 2 · S1 · Gathering User Data (13) ════════════════════════
{ type:"cover", day:2, session:1, time:"9:00 - 10:30",
  title:"Gathering\n{hl}User Data{/hl}",
  subtitle:"Research Methods · Experience Maps · Actionable Insight" },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Why Research First", title:"Why Data Changes Decisions",
  layout:"bullets",
  body:[
    "<b>Without data, the loudest voice wins.</b> With data, the clearest evidence wins. Research moves decisions from politics to facts.",
    "Most product failures are not <em>build</em> failures, they are <em>understanding</em> failures. The thing got made well, but no one needed it.",
    "Research is cheapest at the start and most expensive to ignore. A bad assumption found on Day 1 costs a sticky note; found post-launch it costs a rebuild.",
    "<b>The goal is not certainty,</b> it is reducing risk enough to commit with confidence and a plan to learn more.",
  ] },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Categories", title:"Types of User Data",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Qualitative · the why", b:"Interviews, observation, open-ended feedback. Explains motivation and behaviour. Small samples, deep insight. Answers why something happens." },
    { tone:"gold", t:"Quantitative · the what", b:"Analytics, surveys at scale, A/B tests. Measures how much and how often. Large samples, shallow per data point. Answers what is happening." },
    { tone:"navy", t:"Primary · you gathered it", b:"Data you collected directly for this question: your interviews, your tests. Highest relevance, highest effort." },
    { tone:"gold", t:"Secondary · already exists", b:"Existing reports, analytics, market research, competitor data. Fast and cheap, but not built for your exact question." },
  ],
  footnote:"Strong research triangulates: qual explains what quant reveals. Use both, not one." },

{ type:"framework", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Choosing a Method", title:"The Research Methods Map",
  kind:"compare",
  data:{
    bridge:"What question are you answering?",
    left:{ tone:"navy", label:"Generative", sub:"Explore the problem",
      def:"Used early, before you have a solution. Discovers needs, behaviours, and unknowns you didn't know to ask about.",
      items:["User interviews","Contextual inquiry and observation","Diary studies","Open-ended surveys","Competitive teardown"] },
    right:{ tone:"gold", label:"Evaluative", sub:"Test the solution",
      def:"Used later, once you have something to react to. Measures whether a design works and where it breaks.",
      items:["Usability testing","Heuristic evaluation","A/B testing","Analytics review","Satisfaction surveys"] },
  },
  note:"Most teams over-invest in evaluative and skip generative, then build a polished version of the wrong thing." },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Method Selection", title:"When to Use Which Method",
  layout:"bullets",
  body:[
    "<b>Don't know the problem yet?</b> Generative. Interviews and observation. Start wide, listen more than you ask.",
    "<b>Have a concept to validate?</b> Evaluative. Put a prototype in front of users and watch where they struggle.",
    "<b>Need scale and significance?</b> Quantitative. Surveys and analytics, once you know which questions matter.",
    "<b>Tight on time and budget?</b> Five user interviews will surface most major issues. Perfection is not the bar, direction is.",
  ] },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"A Core Artefact", title:"Experience Maps · What They Are",
  layout:"split",
  body:{
    left:[
      "An <b>experience map</b> visualises everything a user does, thinks, and feels as they try to accomplish a goal over time.",
      "It exposes <em>the gaps</em>: the moments of friction, confusion, and drop-off that no single screen reveals on its own.",
      "Unlike a journey map tied to one product, an experience map can span the whole problem, including the parts you don't yet own.",
    ],
    right:{ tone:"gold", t:"Why it works",
      b:"Laying the whole experience flat, end to end, makes the worst moments impossible to ignore. Teams stop optimising screens and start fixing the journey." },
  } },

{ type:"framework", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Anatomy", title:"What an Experience Map Is Made Of",
  kind:"stack",
  data:{ layers:[
    { t:"Phases", d:"The stages of the journey over time, left to right. e.g. Aware, Consider, Decide, Use, Return." },
    { t:"Actions", d:"What the user actually does in each phase. Concrete steps, not intentions." },
    { t:"Thoughts", d:"What they are thinking and asking themselves at each step." },
    { t:"Emotions", d:"The emotional curve, plotted high to low. Where does frustration spike?" },
    { t:"Opportunities", d:"The design openings each low point reveals. This is the output that matters." },
  ] },
  note:"The emotional curve is the heart of the map. Every dip is a design opportunity." },

{ type:"example", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"A Real Map", title:"Experience Map · Booking a First Online Course",
  mode:"annotated",
  panels:[
    { l:"Phase · Aware", t:"<b>Action:</b> sees an ad, clicks through. <b>Feeling:</b> curious but sceptical. <b>Opportunity:</b> lead with proof, not promises." },
    { l:"Phase · Consider", t:"<b>Action:</b> compares three options in browser tabs. <b>Feeling:</b> overwhelmed. <b>Opportunity:</b> a clear comparison removes the tab-juggling." },
    { l:"Phase · Decide", t:"<b>Action:</b> reaches checkout, hesitates at price. <b>Feeling:</b> anxious about commitment. <b>Opportunity:</b> guarantee and instalments visible early." },
    { l:"Phase · Use", t:"<b>Action:</b> attends first session. <b>Feeling:</b> relieved, then engaged. <b>Opportunity:</b> a strong first session drives the referral." },
  ],
  takeaway:"The lowest emotional point, hesitation at price, is the single highest-value place to design well." },

{ type:"theory", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"The Output", title:"From Data to Actionable Insight",
  layout:"bullets",
  body:[
    "<b>An observation is not an insight.</b> \"Users abandoned at checkout\" is data. \"Users abandon because shipping cost appears too late\" is insight.",
    "An insight names a <em>cause</em>, not just a symptom. It tells you what to change, not only what went wrong.",
    "Good insights are <b>specific, surprising, and actionable.</b> If it's obvious or you can't act on it, keep digging.",
    "Format that works: <b>We observed [behaviour], because [reason], which means [implication for design].</b>",
  ] },

{ type:"statement", day:2, session:1, sessionTitle:"Gathering User Data",
  quote:"\"The goal is not more data.\nIt is {hl}the right question answered with confidence.{/hl}\"",
  attribution:"Research is a means to a decision, never an end in itself." },

{ type:"toolOpen", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Hands On", title:"Back to Your FigJam Canvas",
  tool:"figjam",
  instruction:"Pull up your Day 1 persona sketch",
  sub:"We're extending it into a full experience map for your chosen persona and product.",
  need:["Your Day 1 FigJam file","Your ranked pain points","Your first persona sketch"] },

{ type:"exercise", day:2, session:1, tool:"figjam",
  task:"Map an {hl}Experience{/hl}",
  sub:"One persona, one product, one goal. Lay out the phases, then plot actions, thoughts, emotions, and pain points.",
  minutes:25,
  deliverable:"A 4 to 5 phase experience map with an emotional curve and at least 3 marked opportunities." },

{ type:"wrap", day:2, session:1, sessionTitle:"Gathering User Data",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Match method to question", b:"Generative to explore, evaluative to validate. Qual for why, quant for what. Most teams skip the generative work and pay for it later." },
    { n:"02", t:"Experience maps expose the gaps", b:"Laying the whole journey flat reveals the friction no single screen shows. The emotional low points are your richest design opportunities." },
    { n:"03", t:"Insight names a cause", b:"Data describes what happened. Insight explains why and tells you what to do. Observed, because, which means." },
  ],
  next:"S2 · Interviews, JTBD + Personas (10:40) · How to actually talk to users, and turn what they say into a person you can design for." },

// ══ DAY 2 · S2 · Interviews, JTBD + Personas (15) ════════════════
{ type:"cover", day:2, session:2, time:"10:40 - 12:30",
  title:"Interviews, JTBD\n+ {hl}Personas{/hl}",
  subtitle:"Talking to Users · Jobs to Be Done · Real Personas" },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Right Instrument", title:"Why Interviews Over Surveys",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Surveys confirm", b:"Good for measuring things you already understand at scale. But you can only ask what you already thought to ask. They can't surprise you." },
    { tone:"gold", t:"Interviews discover", b:"A conversation can follow the unexpected. The best insight usually comes from a follow-up question you didn't plan, to an answer you didn't expect." },
  ],
  footnote:"Survey when you know the question. Interview when you're still finding it. This week, you interview." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Approach", title:"Interview Methodology",
  layout:"bullets",
  body:[
    "Use a <b>semi-structured</b> interview: a written guide of topics, but freedom to follow interesting threads as they appear.",
    "A <b>guide is not a script.</b> It keeps you on track and consistent across interviews, without making the conversation robotic.",
    "<b>Listen far more than you talk.</b> Aim for the user speaking 80% of the time. Silence is a tool, let it pull out more.",
    "Ask about <em>past behaviour, not future intentions.</em> \"Tell me about the last time you…\" beats \"Would you use…\" every time.",
    "<b>Record and take notes,</b> but stay present. You'll synthesise later, in the room you focus on the human.",
  ] },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Shape of a Conversation", title:"Interview Script Structure",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Opening", d:"Set context, get consent to record, put them at ease. No real questions yet." },
    { n:"02", t:"Warm-Up", d:"Easy background questions. Build rapport and get them talking comfortably." },
    { n:"03", t:"Core", gold:true, d:"The real topics. Past behaviour, specific stories, the heart of the research." },
    { n:"04", t:"Deep Probe", d:"Follow the surprises. Ask why repeatedly. Chase the unexpected answer." },
    { n:"05", t:"Close", d:"Anything we missed? Thank them. Leave the door open for follow-up." },
  ]},
  note:"Spend the most time in Core and Deep Probe. The opening and warm-up earn the right to ask them." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Getting Beneath the Surface", title:"The Five Probing Techniques",
  layout:"cards3",
  body:[
    { n:"01", t:"The Five Whys", b:"Ask why, then why again, up to five times. The first answer is rarely the real reason." },
    { n:"02", t:"Silence", tone:"navy", b:"Pause after they finish. People fill silence with the more honest answer they were holding back." },
    { n:"03", t:"Echo", b:"Repeat their last few words as a question. \"It was frustrating?\" invites them to expand." },
    { n:"04", t:"Tell me about the last time", tone:"navy", b:"Anchor to a real, specific event. Memory of a real moment beats generalised opinion." },
    { n:"05", t:"Show me", b:"Ask them to demonstrate, not describe. What people do and what they say they do often differ." },
  ] },

{ type:"example", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Most Common Mistake", title:"Avoiding Leading Questions",
  mode:"split",
  panels:{
    negative:{ heading:"Leading · plants the answer", items:[
      { l:"Don't", t:"<b>\"Don't you find the checkout confusing?\"</b> You've told them what to think. They'll agree to be polite." },
      { l:"Don't", t:"<b>\"How much do you love the new design?\"</b> Assumes love. Leaves no room for an honest negative." },
      { l:"Don't", t:"<b>\"Would you use a feature that did X?\"</b> Everyone says yes to hypotheticals. It predicts nothing." },
    ]},
    positive:{ heading:"Neutral · invites the truth", items:[
      { l:"Do", t:"<b>\"Walk me through the last time you checked out here.\"</b> Neutral. The friction surfaces on its own." },
      { l:"Do", t:"<b>\"What was your reaction to the new design?\"</b> Open. Lets them lead with whatever they actually felt." },
      { l:"Do", t:"<b>\"Tell me about the last time you needed to do X.\"</b> Real behaviour, not predicted behaviour." },
    ]},
  },
  takeaway:"If your question contains the answer you're hoping for, rewrite it. Neutral questions get honest data." },

{ type:"statement", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  quote:"\"You are not asking people what they want.\nYou are understanding {hl}what they struggle with.{/hl}\"",
  attribution:"People can't design the solution. They can only show you the problem." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"A Sharper Lens", title:"Jobs to Be Done",
  layout:"split",
  body:{
    left:[
      "<b>People don't buy products, they hire them to do a job.</b> The classic line: nobody wants a drill, they want a hole in the wall.",
      "JTBD shifts focus from <em>who the user is</em> to <em>what they are trying to accomplish</em> and why.",
      "It explains why a demographic persona fails: two very different people can hire the same product for the same job.",
    ],
    right:{ tone:"gold", t:"Why this matters",
      b:"A persona built on age and job title produces demographic fiction. A persona built on the job to be done produces design direction. JTBD is the difference." },
  } },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Structure", title:"Writing a JTBD Statement",
  kind:"stack",
  data:{ layers:[
    { t:"When… (situation)", d:"The trigger and context. \"When I'm commuting and have 20 minutes free…\"" },
    { t:"I want to… (motivation)", d:"The actual job. \"…I want to learn something useful in short bursts…\"" },
    { t:"So I can… (outcome)", d:"The deeper goal. \"…so I can feel I'm progressing toward a career change.\"" },
  ] },
  note:"The outcome is the real prize. People hire your product for the \"so I can\", not the feature." },

{ type:"example", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Across Industries", title:"JTBD in Practice · Three Examples",
  mode:"annotated",
  panels:[
    { l:"Online learning", t:"<b>When</b> I'm stuck in a job with no growth, <b>I want to</b> build a portfolio-ready skill in weeks, <b>so I can</b> credibly switch careers." },
    { l:"Travel booking", t:"<b>When</b> I'm planning a rare big trip, <b>I want to</b> feel I've found the best option, <b>so I can</b> stop second-guessing and enjoy it." },
    { l:"Food delivery", t:"<b>When</b> I'm exhausted after work, <b>I want to</b> get a reliable meal with zero decisions, <b>so I can</b> rest without effort or risk." },
  ],
  takeaway:"Notice the job is emotional as often as functional. The \"so I can\" is usually a feeling." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"From Job to Person", title:"Building JTBD-Grounded Personas",
  layout:"bullets",
  body:[
    "<b>Start from the job, not the demographics.</b> Lead the persona with what they're trying to accomplish and why.",
    "Include <em>context and constraints:</em> when the job arises, what gets in the way, what they've tried before.",
    "Add <b>behaviours and motivations</b> over age and income. \"Researches obsessively before committing\" is more useful than \"34, urban\".",
    "Keep it to <b>one page and grounded in real interview quotes.</b> A persona with no real data behind it is just a stock photo with a name.",
  ] },

{ type:"framework", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"The Template", title:"Persona Anatomy",
  kind:"stack",
  data:{ layers:[
    { t:"Name + one-line identity", d:"A memorable handle and a single sentence. Not a stock photo, a real archetype." },
    { t:"The job to be done", d:"Their primary JTBD statement. This leads, everything else supports it." },
    { t:"Context + triggers", d:"When and where the job arises. What sets it off." },
    { t:"Pain points + frustrations", d:"What currently gets in the way, in their words." },
    { t:"Motivations + the real outcome", d:"What success feels like for them. The deeper goal." },
  ] },
  note:"If you removed the name and photo, the persona should still be unmistakably one specific person." },

{ type:"exercise", day:2, session:2, tool:"figjam",
  task:"Write Your {hl}JTBD Statement{/hl}",
  sub:"Using your experience map persona, write their primary job: When… I want to… so I can…",
  minutes:15,
  deliverable:"One sharp JTBD statement plus three supporting context or pain-point notes." },

{ type:"theory", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"One More Lens", title:"Empathy Mapping",
  layout:"cards4",
  body:[
    { icon:"interview", t:"Says", b:"Direct quotes from research. What the user actually told you, in their own words." },
    { icon:"ai", t:"Thinks", b:"What occupies them but they may not say aloud. Doubts, priorities, hopes." },
    { icon:"prototype", t:"Does", b:"Observed actions and behaviours. What they do, not what they claim to do." },
    { icon:"empathy", t:"Feels", b:"The emotional state. Anxious, confident, overwhelmed, relieved. The driver beneath the rest." },
  ],
  footnote:"Gaps between Says and Does are gold. They reveal where stated and real behaviour diverge." },

{ type:"wrap", day:2, session:2, sessionTitle:"Interviews, JTBD + Personas",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Interview for discovery", b:"Semi-structured, past behaviour over future intentions, neutral questions only. Listen 80% of the time. The follow-up holds the gold." },
    { n:"02", t:"Design for the job, not the demographic", b:"People hire products to do a job. When, I want to, so I can. The outcome is usually a feeling, and that's what you design for." },
    { n:"03", t:"A persona is grounded in real data", b:"Job first, context and behaviour over age and income, one page, real quotes. If there's no data behind it, it's fiction." },
  ],
  next:"S3 · AI Research Workflows (1:30) · Now we accelerate all of this with Claude and Perplexity." },

// ══ DAY 2 · S3 · AI Research Workflows (13) ══════════════════════
{ type:"cover", day:2, session:3, time:"1:30 - 3:30",
  title:"AI Research\n{hl}Workflows{/hl}",
  subtitle:"Claude for Synthesis · Perplexity for Competitive Research" },

{ type:"statement", day:2, session:3, sessionTitle:"AI Research Workflows",
  quote:"\"AI doesn't replace the researcher.\nIt removes {hl}the slowest parts of the process.{/hl}\"",
  attribution:"The judgement stays human. The grunt work doesn't have to." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Where It Helps", title:"Where AI Earns Its Place in UX Research",
  layout:"bullets",
  body:[
    "<b>Synthesis,</b> not collection. AI is fastest at clustering, summarising, and finding patterns across messy notes you've already gathered.",
    "<b>Breadth,</b> not depth of judgement. It scans a wide competitive landscape in minutes, then you decide what matters.",
    "<b>First drafts,</b> not final calls. Personas, themes, and HMW questions come back as a strong starting point you refine, never ship raw.",
    "<em>What it must not do:</em> invent users, fabricate quotes, or replace real interviews. AI accelerates your thinking, it doesn't supply the truth.",
  ] },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The First Workhorse", title:"Claude for Synthesis",
  layout:"cards3",
  body:[
    { icon:"synthesis", t:"Clustering", b:"Paste raw interview or sticky notes. Get back grouped themes far faster than manual affinity mapping." },
    { icon:"ai", t:"Theme naming", tone:"navy", b:"Turn a cluster of observations into a sharp, named insight with a supporting rationale." },
    { icon:"interview", t:"Persona drafting", b:"From real notes, draft a JTBD-grounded persona you then verify and correct against the source." },
  ],
  footnote:"Always feed it your real data. Claude organises what you gathered, it does not replace gathering it." },

{ type:"framework", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Workflow", title:"The AI Synthesis Loop",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Raw Notes", d:"Your real interview notes, stickies, or transcripts. The input must be genuine." },
    { n:"02", t:"Claude", d:"Prompt it to cluster, theme, and summarise against your research question." },
    { n:"03", t:"Themes", gold:true, d:"Named, grouped insights returned in seconds, not hours." },
    { n:"04", t:"Human Review", d:"You check every theme against the source. Correct, cut, reframe." },
    { n:"05", t:"Draft", d:"A verified synthesis you can design from with confidence." },
  ]},
  note:"Step 4 is non-negotiable. Unreviewed AI output is a hypothesis, not a finding." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Skill That Matters", title:"Prompt Craft for Research",
  layout:"split",
  body:{
    left:[
      "<b>Role:</b> tell it who to be. \"You are a UX researcher synthesising interview notes.\"",
      "<b>Context:</b> the product, the users, the research question you're answering.",
      "<b>Data:</b> paste the real notes. The output is only as good as the input.",
      "<b>Format:</b> specify exactly what you want back. \"Return 3 to 5 named themes, each with a one-line insight and supporting quotes.\"",
    ],
    right:{ tone:"gold", t:"The pattern",
      b:"Role + Context + Data + Format. Get any one wrong and the output drifts. Get all four right and AI synthesis is genuinely faster than doing it by hand, with no loss of rigour." },
  } },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Claude",
  tool:"claude",
  instruction:"Paste your FigJam research notes into Claude",
  sub:"We'll cluster them into named themes live, then review every one against your source.",
  need:["Your affinity notes from Day 1","Your experience map insights","The Role + Context + Data + Format pattern"] },

{ type:"exercise", day:2, session:3, tool:"claude",
  task:"Claude {hl}Synthesis{/hl}",
  sub:"Paste your affinity notes. Prompt with Role, Context, Data, Format. Get back clustered themes.",
  minutes:15,
  deliverable:"3 clustered, named themes, each reviewed and corrected against your real notes." },

{ type:"theory", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Second Workhorse", title:"Perplexity for Competitive + Trend Research",
  layout:"bullets",
  body:[
    "<b>Perplexity searches and cites.</b> Unlike a chatbot, it pulls current sources and links them, so you can verify every claim.",
    "Use it to <em>map the competitive landscape:</em> who else solves this job, how, and where users complain about them.",
    "Use it for <b>trend and market context:</b> what's shifting in your category, what users are asking for that no one delivers.",
    "Always <b>annotate findings against your JTBD.</b> A competitor feature only matters if it touches the job your user is hiring for.",
  ] },

{ type:"framework", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"The Workflow", title:"Competitive Research with Perplexity",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Query", d:"Ask a specific question: \"common complaints about [category] apps 2025\"." },
    { n:"02", t:"Sourced Output", gold:true, d:"Cited findings you can click through and verify. No black box." },
    { n:"03", t:"Annotate", d:"Mark each finding against your persona's JTBD. Relevant or noise?" },
    { n:"04", t:"Insight", d:"A short list of competitive gaps your design can exploit." },
  ]},
  note:"The citation is the point. If you can't verify it, you can't design on it." },

{ type:"toolOpen", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Hands On", title:"Let's Open Perplexity",
  tool:"perplexity",
  instruction:"Search your product category's user pain points",
  sub:"Try: \"[your category] user complaints and unmet needs 2025\". Then open the sources.",
  need:["Your persona's JTBD statement","Your product category","A note for findings"] },

{ type:"exercise", day:2, session:3, tool:"perplexity",
  task:"Competitive {hl}Scan{/hl}",
  sub:"Run two queries about your category. Capture three findings and annotate each against your persona.",
  minutes:20,
  deliverable:"3 sourced competitive findings, each marked relevant or not against your JTBD." },

{ type:"wrap", day:2, session:3, sessionTitle:"AI Research Workflows",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"AI accelerates, never replaces", b:"It clusters notes and scans markets in minutes. It does not gather truth or make the call. Human review of every output is mandatory." },
    { n:"02", t:"Claude needs Role, Context, Data, Format", b:"Feed it real data, tell it who to be and what to return. That pattern is the difference between useful synthesis and confident nonsense." },
    { n:"03", t:"Perplexity cites, so you can verify", b:"Use it to map competitors and trends, then annotate every finding against the job your user is hiring for. Unverifiable means unusable." },
  ],
  next:"S4 · Scenarios, Storyboards + Ideation (3:40) · Turn this research foundation into stories and ideas." },

// ══ DAY 2 · S4 · Scenarios, Storyboards + Ideation (12) ══════════
{ type:"cover", day:2, session:4, time:"3:40 - 5:00",
  title:"Scenarios, Storyboards\n+ {hl}Ideation{/hl}",
  subtitle:"From Insight to Story to Idea" },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Narrative as a Tool", title:"What Scenarios Are",
  layout:"split",
  body:{
    left:[
      "A <b>scenario</b> is a short, realistic story of a specific persona using a product to accomplish their goal in a real context.",
      "It is <em>not a user story</em> (the dev format). A scenario is richer, narrative, and human, centred on motivation and context.",
      "Scenarios keep the team anchored to a real situation while ideating, so solutions fit the moment, not an abstract ideal.",
    ],
    right:{ tone:"navy", t:"Why narrative works",
      b:"Teams design better for a story than for a spec. \"Sara, on a slow train, trying to finish a booking before her stop\" generates sharper ideas than \"the user completes checkout\"." },
  } },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Structure", title:"Anatomy of a Scenario",
  kind:"stack",
  data:{ layers:[
    { t:"Persona", d:"Who. Grounded in your JTBD persona, not a generic user." },
    { t:"Context", d:"Where, when, and on what device. The real-world situation and its constraints." },
    { t:"Goal", d:"What they're trying to accomplish, tied to their job to be done." },
    { t:"Constraints", d:"What's working against them: time, attention, environment, prior frustration." },
  ] },
  note:"The constraints are what make a scenario useful. Frictionless fiction generates lazy design." },

{ type:"example", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"A Real Scenario", title:"Scenario · Booking Under Pressure",
  mode:"annotated",
  panels:[
    { l:"Persona", t:"<b>Layla,</b> a first-time learner researching a career switch, sceptical after a bad past purchase online." },
    { l:"Context", t:"<b>Evening, on her phone,</b> half-watching TV, comparing three course providers across browser tabs." },
    { l:"Goal", t:"<b>Decide today</b> whether this course is worth the money, without feeling she's being sold to." },
    { l:"Constraints", t:"<b>Divided attention, low trust, price anxiety.</b> She'll abandon the moment something feels slippery or unclear." },
  ],
  takeaway:"Every design decision for Layla now has a test: does it help a distracted, sceptical person decide with confidence?" },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Seeing the Story", title:"Storyboards in UX",
  layout:"bullets",
  body:[
    "A <b>storyboard</b> turns a scenario into a sequence of frames, like a comic strip of the user's experience.",
    "Usually <b>6 to 8 frames:</b> the trigger, the steps, the key moments of friction or delight, and the outcome.",
    "<b>Lo-fi is the point.</b> Stick figures and boxes. The value is the sequence and the emotion, not the artwork.",
    "Storyboards make <em>gaps and assumptions visible.</em> When you draw the steps, the missing one becomes obvious.",
  ] },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Template", title:"What Each Storyboard Frame Holds",
  kind:"stack",
  data:{ layers:[
    { t:"The sketch", d:"A rough visual of what's happening on screen or in the world at this moment." },
    { t:"The action", d:"One line: what the user is doing in this frame." },
    { t:"The emotion", d:"How they feel here. The emotional beat carries the story." },
  ] },
  note:"Keep one moment per frame. If a frame needs two sentences to explain, split it." },

{ type:"theory", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Generating Options", title:"Ideation Techniques",
  layout:"cards3",
  body:[
    { icon:"ideation", t:"Crazy 8s", b:"Fold a sheet into 8. Eight ideas in eight minutes, one per minute. Forces quantity past your first obvious answer." },
    { icon:"boolean", t:"SCAMPER", tone:"navy", b:"Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, Reverse. A prompt list to break fixation." },
    { icon:"question", t:"How Might We", b:"Reframe each problem as an open question that invites many solutions. The bridge from insight to ideas." },
  ],
  footnote:"Separate generation from judgement. Generate wide first. Evaluate later, never in the same breath." },

{ type:"framework", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"The Bridge to Ideas", title:"How Might We · Framing",
  kind:"stack",
  data:{ layers:[
    { t:"Too narrow", d:"\"How might we add a progress bar?\" Bakes in the solution. Kills other ideas." },
    { t:"Too broad", d:"\"How might we fix onboarding?\" No focus. Generates vague answers." },
    { t:"Just right", d:"\"How might we help a sceptical first-timer feel confident before paying?\" Focused on the problem, open on the solution." },
  ] },
  note:"Aim between optimism and constraint. Open enough for many ideas, focused enough that they're relevant." },

{ type:"discussion", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  label:"Generate, Don't Filter",
  question:"From your JTBD, write {hl}three How Might We questions.{/hl}\nDon't judge them yet.\nWide before deep.",
  hint:"3 minutes solo. Then we pick the sharpest one to build on." },

{ type:"exercise", day:2, session:4, tool:"figjam",
  task:"Scenarios + {hl}HMW{/hl}",
  sub:"Write one full scenario for your persona, then three How Might We statements from their biggest pain point.",
  minutes:20,
  deliverable:"One scenario (persona, context, goal, constraints) and three well-framed HMW questions." },

{ type:"statement", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  quote:"\"Ideation is not about the right idea.\nIt is about {hl}removing the fear of the wrong one.{/hl}\"",
  attribution:"Quantity first. The best idea usually arrives after the obvious ones are out of the way." },

{ type:"wrap", day:2, session:4, sessionTitle:"Scenarios, Storyboards + Ideation",
  eyebrow:"Day 2 Complete", title:"Research Foundation Complete",
  cards:[
    { n:"01", t:"You can run real research", b:"Interviews, experience maps, and insight that names causes. You know which method answers which question, and how to talk to a user." },
    { n:"02", t:"You design for the job, accelerated by AI", b:"A JTBD-grounded persona, synthesised with Claude and contextualised with Perplexity, every output reviewed by you." },
    { n:"03", t:"You can turn insight into ideas", b:"Scenarios anchor design to a real moment. HMW questions open the solution space. You generate wide before you judge." },
  ],
  next:"Day 3 · Figma Foundations + Design Craft · The research is done. Now Figma opens and you start to build." },

];
```


---

### 9.3 Day 3 - `day3.ts` (49 slides)

```ts
import { Slide } from "../types";

export const day3: Slide[] = [

// ── DAY 3 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:3,
  dayLabel:"Day 3 of 5 · Riyadh, KSA · 14 July 2026",
  title:"Figma Foundations\n+ Design Craft",
  theme:"From blank canvas to design system",
  sessions:[
    "S1 · Introduction to Figma  9:00 - 10:30",
    "S2 · Vector Work + Graphics  10:40 - 12:30",
    "S3 · Layout Mastery  1:30 - 3:30",
    "S4 · Design Systems + Variables  3:40 - 5:00",
  ] },

// ══ DAY 3 · S1 · Introduction to Figma (8) ═══════════════════════
{ type:"cover", day:3, session:1, time:"9:00 - 10:30",
  title:"Introduction to\n{hl}Figma{/hl}",
  subtitle:"The Interface · Hierarchy · The Figma Mindset" },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Why One Tool", title:"The Case for Figma",
  layout:"bullets",
  body:[
    "<b>One tool from wireframe to handoff.</b> Design, prototype, document, and hand off all live in the same file. No exporting between apps.",
    "<b>Browser-based and real-time.</b> Like FigJam, everyone works on the same file at once. No versions emailed, no \"final\" naming wars.",
    "<b>It replaces Adobe XD entirely.</b> Everything XD did, Figma does, plus a living component system and a far larger community.",
    "<b>It's the industry standard.</b> The tool you learn here is the tool you'll actually use, and the one employers expect.",
  ] },

{ type:"toolOpen", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Hands On", title:"Let's Open Figma",
  tool:"figma",
  instruction:"Create your masterclass design file",
  sub:"Name it: [Your Name] · UX Masterclass. Everything you build for the rest of the week lives here.",
  need:["Your Figma account","The desktop app or browser","Your Day 2 persona and scenario"] },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Orientation", title:"The Figma Interface",
  layout:"cards3",
  body:[
    { icon:"layout", t:"Left · Layers + Assets", b:"Every object on the canvas, nested and named. Your components and styles live in the Assets tab here too." },
    { icon:"vector", t:"Centre · The Canvas", tone:"navy", b:"Infinite space where you design. Zoom, pan, and arrange frames freely. This is where the work happens." },
    { icon:"variables", t:"Right · Properties", b:"Everything about the selected object: size, position, fill, type, effects, and prototype connections." },
  ] },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"The Building Blocks", title:"Pages, Frames, Sections",
  layout:"cards3",
  body:[
    { n:"01", t:"Pages", b:"Top-level divisions of your file. Use them to separate research, wireframes, UI, and prototype. Keep work organised." },
    { n:"02", t:"Frames", tone:"navy", b:"Containers for your design. A frame is a screen, a card, a component. Frames can nest inside frames, infinitely." },
    { n:"03", t:"Sections", b:"Group related frames on the canvas with a labelled boundary. Great for organising flows and exploration." },
  ],
  footnote:"A frame is the single most important concept in Figma. Almost everything is a frame inside a frame." },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Setting Up Right", title:"Colour Space + Layout Grids",
  layout:"split",
  body:{
    left:[
      "<b>Figma works in sRGB.</b> What you design is what ships to screen. Set your colours once and trust them across the file.",
      "<b>Layout grids</b> bring structure: columns for desktop, a simpler grid for mobile. Design to the grid, not by eye.",
      "A common starting grid: <em>12 columns desktop, 4 mobile,</em> with consistent gutters and margins.",
    ],
    right:{ tone:"gold", t:"Why grids matter",
      b:"A grid is the invisible skeleton that makes a layout feel intentional. Align to it and even a first attempt looks considered. Ignore it and polished work still feels off." },
  } },

{ type:"theory", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"The Mental Model", title:"The Figma Mindset",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Everything is a layer", b:"Every object stacks in the layers panel. Order, nesting, and naming are how you stay in control as files grow complex." },
    { tone:"gold", t:"Everything is a frame", b:"Screens, cards, buttons, icons, all frames. Once this clicks, auto layout, components, and responsive design all follow naturally." },
  ],
  footnote:"Hold these two ideas and the rest of Figma stops feeling like a tool and starts feeling like a system." },

{ type:"wrap", day:3, session:1, sessionTitle:"Introduction to Figma",
  eyebrow:"Session 1 Complete", title:"You Can Navigate Figma",
  cards:[
    { n:"01", t:"You know the interface", b:"Layers and assets left, canvas centre, properties right. You can find anything and change anything about a selected object." },
    { n:"02", t:"You understand the hierarchy", b:"Pages hold frames, frames nest, sections organise. The frame is the atom of everything you'll build." },
    { n:"03", t:"You have the mindset", b:"Everything is a layer, everything is a frame. That model makes the next three sessions click into place." },
  ],
  next:"S2 · Vector Work + Graphics (10:40) · We teach Figma to draw, from the pen tool to masking." },

// ══ DAY 3 · S2 · Vector Work + Graphics (13) ═════════════════════
{ type:"cover", day:3, session:2, time:"10:40 - 12:30",
  title:"Vector Work\n+ {hl}Graphics{/hl}",
  subtitle:"Pen Tool · Paths · Masking · Alignment" },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Basics", title:"What Vector Graphics Are",
  layout:"bullets",
  body:[
    "<b>Vectors are defined by maths, not pixels.</b> Points, lines, and curves that stay perfectly sharp at any size.",
    "This is why <em>icons and logos are vectors:</em> the same file works at 16px in a menu and 2 metres on a banner.",
    "Vectors are <b>editable forever.</b> You can reshape, recolour, and recombine them non-destructively, unlike a flattened image.",
    "Everything you draw in Figma with shapes and the pen tool is a vector. Mastering them is mastering how Figma makes form.",
  ] },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Toolset", title:"Figma's Drawing Tools",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Shape tools", b:"Rectangle, ellipse, line, polygon, star. The fast primitives most UI is built from." },
    { icon:"vector", t:"Pen tool", b:"Draw any custom shape point by point. Full control over every anchor and curve." },
    { icon:"vector", t:"Pencil", b:"Freehand drawing, smoothed into a vector path. For quick organic marks." },
    { icon:"design", t:"Eyedropper", b:"Sample any colour on the canvas instantly. Keeps your palette consistent." },
  ] },

{ type:"framework", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"A Key Distinction", title:"Open vs Closed Paths",
  kind:"compare",
  data:{
    bridge:"Fill needs a closed loop",
    left:{ tone:"navy", label:"Open", sub:"Start and end don't meet",
      def:"A path with two loose ends. Behaves like a line. Takes a stroke, but a fill behaves unpredictably.",
      items:["Lines and connectors","Underlines and dividers","Signatures and freehand marks","Anything stroke-only"] },
    right:{ tone:"gold", label:"Closed", sub:"Start and end join",
      def:"A continuous loop. Behaves like a shape. Takes both a stroke and a clean, predictable fill.",
      items:["Icons and glyphs","Buttons and containers","Filled illustrations","Any solid form"] },
  },
  note:"If a fill looks wrong, your path is probably open. Close it and the fill behaves." },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"The Hardest Tool to Master", title:"The Pen Tool",
  layout:"bullets",
  body:[
    "<b>Click for corners, click-and-drag for curves.</b> A simple click sets a sharp anchor. Dragging pulls out handles that bend the line.",
    "<b>Handles control the curve.</b> Their length and angle shape how the line enters and leaves each point. Long handles, gentle curves.",
    "<b>Fewer points, smoother shapes.</b> Beginners use too many anchors. Pros use the minimum needed. Each extra point is a kink waiting to happen.",
    "Close the path by clicking the first point again. <em>Practice is the only teacher here,</em> the pen tool rewards repetition.",
  ] },

{ type:"example", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Walkthrough", title:"Pen Tool · Tracing a Search Icon",
  mode:"annotated",
  panels:[
    { l:"Step 1 · The circle", t:"<b>Use the ellipse, not the pen, for the lens.</b> Knowing when not to use the pen is part of the skill." },
    { l:"Step 2 · The handle", t:"<b>Pen tool, two anchors, a stroke.</b> A short open path at 45 degrees from the circle's edge." },
    { l:"Step 3 · Round the cap", t:"<b>Set stroke cap to round.</b> Small detail, but it's the difference between amateur and clean." },
    { l:"Step 4 · Combine", t:"<b>Select both, group or flatten.</b> One icon, infinitely scalable, fully editable later." },
  ],
  takeaway:"Most icons are primitives plus one or two pen strokes. You rarely draw the whole thing freehand." },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Working with Images", title:"Masking in Figma",
  layout:"split",
  body:{
    left:[
      "A <b>mask</b> uses one shape to control what's visible of another. The shape becomes a window onto the image.",
      "Workflow: <em>place the shape on top of the image, select both, right-click, Use as Mask.</em> The image shows only through the shape.",
      "Masks are <b>non-destructive.</b> The full image is still there, you're just controlling what shows. Reposition it anytime.",
    ],
    right:{ tone:"navy", t:"Common uses",
      b:"Rounded-corner avatars, images cropped to a card shape, photos inside custom illustration shapes, hero images clipped to a frame. Masking is how images fit your layout, not the other way round." },
  } },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Staying Organised", title:"Organising Content",
  layout:"bullets",
  body:[
    "<b>Name your layers.</b> \"Rectangle 47\" tells you nothing. \"card / bg\" tells you everything. Future-you will be grateful.",
    "<b>Group related elements</b> and nest logically. A card frame contains its image, text, and button as children.",
    "<b>Use frames over groups</b> for anything structural. Frames support layout, constraints, and clipping. Groups are just loose bundles.",
    "A tidy layer panel is not vanity, it's <em>how a file stays workable</em> when it grows to hundreds of objects.",
  ] },

{ type:"theory", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Precision", title:"Alignment + Smart Guides",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Alignment tools", b:"Align left, centre, right, top, middle, bottom, and distribute evenly. Select multiple objects and align in one click. Never nudge by eye." },
    { tone:"navy", t:"Smart guides", b:"Red lines that appear as you drag, showing spacing and alignment to nearby objects in real time. Figma is telling you when things line up. Trust it." },
  ],
  footnote:"Precise alignment is the cheapest way to make work look professional. The tools do it for you, use them." },

{ type:"toolOpen", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Hands On", title:"Open Your S2 Page",
  tool:"figma",
  instruction:"Create a new page named Vector Practice",
  sub:"We're about to draw live: custom shapes with the pen tool, then mask an image.",
  need:["Your masterclass Figma file","An image to mask (any photo)","The pen tool (P)"] },

{ type:"exercise", day:3, session:2, tool:"figma",
  task:"Vector + {hl}Masking{/hl}",
  sub:"Draw three custom shapes with the pen tool. Then mask an image inside one of them.",
  minutes:25,
  deliverable:"Three pen-tool shapes and one image masked into a shape, all cleanly named in your layers." },

{ type:"reference", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Cheatsheet · Keep This Open", title:"Pen Tool + Vector Shortcuts",
  head:["Action","Shortcut","Note"],
  rows:[
    ["Pen tool","P","Click for corners, drag for curves"],
    ["Pencil (freehand)","Shift + P","Smoothed organic paths"],
    ["Bend / edit point","Cmd / Ctrl + click anchor","Switch between corner and curve"],
    ["Add to selection","Shift + click","Build multi-object selections"],
    ["Use as mask","Cmd / Ctrl + Alt + M","Top shape masks what's below"],
    ["Flatten selection","Cmd / Ctrl + E","Merge vectors into one path"],
    ["Align centre (H / V)","Alt + H / Alt + V","After selecting two or more objects"],
    ["Eyedropper","I","Sample any colour on canvas"],
  ] },

{ type:"wrap", day:3, session:2, sessionTitle:"Vector Work + Graphics",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Vectors are maths, not pixels", b:"Sharp at any size, editable forever. Shapes and the pen tool are how Figma makes every icon, glyph, and custom form." },
    { n:"02", t:"The pen tool rewards restraint", b:"Click for corners, drag for curves, use the fewest points possible. Most icons are primitives plus one or two strokes, not freehand." },
    { n:"03", t:"Precision is free, so use it", b:"Name layers, group logically, align with tools and smart guides. A tidy, aligned file looks professional and stays workable." },
  ],
  next:"S3 · Layout Mastery (1:30) · Auto layout, the feature that turns static art into adaptive design." },

// ══ DAY 3 · S3 · Layout Mastery (14) ═════════════════════════════
{ type:"cover", day:3, session:3, time:"1:30 - 3:30",
  title:"Layout\n{hl}Mastery{/hl}",
  subtitle:"Auto Layout · Constraints · Boolean Operations" },

{ type:"statement", day:3, session:3, sessionTitle:"Layout Mastery",
  quote:"\"Layout is not decoration.\nIt is {hl}the logic of how things relate.{/hl}\"",
  attribution:"Master auto layout and your designs start to behave like real products." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"The Most Important Feature", title:"Auto Layout · What and Why",
  layout:"bullets",
  body:[
    "<b>Auto layout makes frames respond to their content.</b> Add text and the button grows. Remove an item and the list closes the gap.",
    "It replaces manual nudging with <em>rules:</em> direction, spacing, padding, and alignment that the frame enforces automatically.",
    "It's how real components behave. A button with auto layout resizes around its label, just like it will in code.",
    "<b>If you learn one thing in Figma, learn this.</b> Everything from buttons to full responsive screens is built on it.",
  ] },

{ type:"framework", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"The Three Resize Behaviours", title:"Fill, Hug, Fixed",
  kind:"stack",
  data:{ layers:[
    { t:"Hug contents", d:"The frame shrinks to wrap its content exactly. Use for buttons, tags, chips. The frame is as big as what's inside." },
    { t:"Fixed size", d:"The frame stays a set dimension regardless of content. Use for fixed cards, avatars, set-width panels." },
    { t:"Fill container", d:"The frame stretches to fill its parent's available space. Use for full-width inputs, flexible columns." },
  ] },
  note:"Every layer in an auto layout frame is set to one of these three. Master the combination and layout becomes effortless." },

{ type:"example", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Seeing It Work", title:"Auto Layout in Action",
  mode:"split",
  panels:{
    negative:{ heading:"Without auto layout", items:[
      { l:"Add text", t:"<b>The button stays the same size,</b> text overflows or clips. You manually resize every time." },
      { l:"Reorder a list", t:"<b>You drag each item and realign by hand,</b> leaving gaps and misalignment behind." },
      { l:"Translate copy", t:"<b>Longer words break the layout.</b> Every screen needs manual repair for each language." },
    ]},
    positive:{ heading:"With auto layout", items:[
      { l:"Add text", t:"<b>The button grows to fit,</b> padding intact, instantly. No manual resizing ever." },
      { l:"Reorder a list", t:"<b>Drag one item, the rest reflow</b> and respace automatically. Always aligned." },
      { l:"Translate copy", t:"<b>Frames expand to fit longer text</b> on their own. One design survives every language." },
    ]},
  },
  takeaway:"Auto layout is the difference between a picture of an app and something that behaves like one." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Going Deeper", title:"Nested Auto Layout",
  layout:"split",
  body:{
    left:[
      "<b>Auto layout frames nest inside each other,</b> and that's how complex components are built.",
      "A card is a <em>vertical</em> auto layout (image, then body). The body is a vertical stack. The footer is a <em>horizontal</em> auto layout of tag and button.",
      "Each level handles its own spacing and resizing. Change the content anywhere and the whole structure adapts cleanly.",
    ],
    right:{ tone:"navy", t:"The pro move",
      b:"Think of a screen as auto layout frames inside auto layout frames, all the way down. Build it that way and the entire screen becomes responsive almost for free." },
  } },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Speed Tools", title:"Tidy Up + Smart Selection",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Tidy Up", b:"Select messy objects and Figma instantly arranges them into an even grid or row with consistent spacing. One shortcut, instant order." },
    { tone:"navy", t:"Smart Selection", b:"Select a row or grid and pink handles appear. Drag to respace evenly, or reorder items by dragging. Bulk-edit spacing without touching each gap." },
  ],
  footnote:"These two save hours over a project. Reach for them before you ever align by hand." },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Control at the Edges", title:"Rulers, Guides + Constraints",
  layout:"bullets",
  body:[
    "<b>Constraints define how a layer behaves when its frame resizes:</b> pin to left, right, centre, or scale with the frame.",
    "Set a button to pin <em>bottom-right</em> and it stays there whether the frame is phone-width or tablet-width.",
    "<b>Rulers and guides</b> (drag from the edges) give you manual reference lines for precise, repeatable placement.",
    "Constraints are the foundation of responsive design before auto layout, and they still matter for absolute-positioned elements.",
  ] },

{ type:"theory", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Combining Shapes", title:"Boolean Operations",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Union", b:"Merge shapes into one combined form. The sum of both outlines." },
    { icon:"boolean", t:"Subtract", b:"Cut the top shape out of the one beneath. Punch holes and notches." },
    { icon:"boolean", t:"Intersect", b:"Keep only where the shapes overlap. The shared core." },
    { icon:"boolean", t:"Exclude", b:"Keep everything except the overlap. The opposite of intersect." },
  ],
  footnote:"Booleans are non-destructive in Figma. The source shapes stay editable inside the result." },

{ type:"example", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Booleans in Practice", title:"Building a Crescent from Two Circles",
  mode:"annotated",
  panels:[
    { l:"Step 1", t:"<b>Draw two overlapping circles,</b> one offset from the other." },
    { l:"Step 2", t:"<b>Select both, choose Subtract.</b> The top circle carves a curve out of the bottom one." },
    { l:"Step 3", t:"<b>A clean crescent remains,</b> made from primitives, no pen tool needed." },
    { l:"Step 4", t:"<b>Still fully editable.</b> Move a source circle and the crescent reshapes live." },
  ],
  takeaway:"Many icons that look hand-drawn are just primitives combined with booleans. Faster, cleaner, more precise." },

{ type:"toolOpen", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Hands On", title:"Open Your S3 Page",
  tool:"figma",
  instruction:"New page: Layout Practice",
  sub:"We're building a card component with nested auto layout, the real foundation for Day 5.",
  need:["Your masterclass Figma file","An image for the card","Shortcut: Shift + A for auto layout"] },

{ type:"exercise", day:3, session:3, tool:"figma",
  task:"Auto Layout {hl}Card{/hl}",
  sub:"Build a card: image, title, tag, and button, using nested auto layout so it adapts to its content.",
  minutes:30,
  deliverable:"One responsive card using nested auto layout. Add text and watch it grow correctly." },

{ type:"reference", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Cheatsheet · Keep This Open", title:"Auto Layout · Fill, Hug, Fixed + Shortcuts",
  head:["Behaviour / Action","Use For","How"],
  rows:[
    ["Hug contents","Buttons, tags, chips","Resizing dropdown to Hug"],
    ["Fixed size","Cards, avatars, set panels","Resizing dropdown to Fixed"],
    ["Fill container","Inputs, flexible columns","Resizing dropdown to Fill"],
    ["Add auto layout","Any frame","Shift + A"],
    ["Adjust spacing","Gap between items","Drag handles or set in panel"],
    ["Set padding","Inside the frame","Padding fields in panel"],
    ["Tidy Up","Messy objects to grid","Select, then Tidy Up button"],
    ["Boolean menu","Combine shapes","Toolbar, with shapes selected"],
  ] },

{ type:"wrap", day:3, session:3, sessionTitle:"Layout Mastery",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"Auto layout is the core skill", b:"Frames that respond to content via rules, not nudging. Fill, hug, fixed on every layer. It's how designs start to behave like real products." },
    { n:"02", t:"Nest it for whole screens", b:"Auto layout inside auto layout, all the way down. Build a screen that way and responsiveness comes almost for free." },
    { n:"03", t:"Let the tools do precision", b:"Tidy up, smart selection, constraints, and booleans. Combine primitives instead of drawing freehand. Faster, cleaner, more editable." },
  ],
  next:"S4 · Design Systems + Variables (3:40) · Turn these pieces into a reusable system with tokens." },

// ══ DAY 3 · S4 · Design Systems + Variables (13) ═════════════════
{ type:"cover", day:3, session:4, time:"3:40 - 5:00",
  title:"Design Systems\n+ {hl}Variables{/hl}",
  subtitle:"Styles · Tokens · Libraries · One Source of Truth" },

{ type:"statement", day:3, session:4, sessionTitle:"Design Systems + Variables",
  quote:"\"A design system is not a library.\nIt is {hl}a shared language.{/hl}\"",
  attribution:"Components are the vocabulary. Consistency is the grammar." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Concept", title:"What a Design System Is",
  layout:"bullets",
  body:[
    "<b>A design system is the single source of truth</b> for how a product looks and behaves: colours, type, spacing, components, and the rules for using them.",
    "It lets a team <em>design faster and stay consistent</em> without re-deciding the same things on every screen.",
    "It is built in layers: <b>tokens</b> (the raw decisions), <b>components</b> (reusable parts), <b>patterns</b> (combinations), and <b>templates</b> (full layouts).",
    "A real system is <b>living,</b> not a one-time style guide. Update it once and every product using it updates too.",
  ] },

{ type:"framework", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Hierarchy", title:"From Token to Template",
  kind:"stack",
  data:{ layers:[
    { t:"Tokens", d:"The atomic decisions. A colour value, a spacing unit, a font size. The raw material." },
    { t:"Components", d:"Reusable parts built from tokens. A button, an input, a card." },
    { t:"Patterns", d:"Components combined into a recurring solution. A form, a nav bar, a list row." },
    { t:"Templates", d:"Patterns arranged into a full layout. A complete screen, ready for content." },
  ] },
  note:"Each layer is built from the one below it. Change a token and the change flows all the way up." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Original Tool", title:"Styles in Figma",
  layout:"cards3",
  body:[
    { icon:"ui", t:"Colour styles", b:"Save a colour once, name it, reuse it everywhere. Change the style and every use updates." },
    { icon:"design", t:"Text styles", tone:"navy", b:"Save font, size, weight, and spacing as a named style. Apply consistent type in one click." },
    { icon:"system", t:"Effect styles", b:"Save shadows and blurs as reusable styles. Consistent elevation across the whole file." },
  ],
  footnote:"Styles were Figma's first system tool. Variables now go further, but styles still matter for type and effects." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"The Modern Layer", title:"Figma Variables · Beyond Styles",
  layout:"bullets",
  body:[
    "<b>Variables store named values</b> for colour, number, string, and boolean, that you reference everywhere instead of hard-coding.",
    "Unlike styles, variables support <em>modes:</em> one variable can hold a light value and a dark value, so theming becomes a single switch.",
    "They map directly to <b>developer tokens.</b> The variable you name here is the token the engineer uses in code. The handoff gets cleaner.",
    "Variables can reference other variables, which is how you build <b>primitive to semantic</b> token systems that scale.",
  ] },

{ type:"framework", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Token Architecture", title:"Primitive to Semantic to Component",
  kind:"stack",
  data:{ layers:[
    { t:"Primitive tokens", d:"Raw values. navy-900 = #0D1B2E, gold-500 = #B8953F. The full palette, named by what they are." },
    { t:"Semantic tokens", d:"Roles, not values. bg-surface points to navy-900, accent points to gold-500. Named by what they do." },
    { t:"Component tokens", d:"button-bg points to accent. Components reference semantics, never raw values. Maximum flexibility." },
  ] },
  note:"Theme an entire product by repointing semantic tokens. Components never change, they just follow." },

{ type:"example", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Why It Pays Off", title:"One Variable, Three Places",
  mode:"annotated",
  panels:[
    { l:"The setup", t:"<b>accent-colour</b> is defined once and used by a button, a card border, and a link." },
    { l:"The change", t:"<b>Marketing wants a new brand colour.</b> You update one variable, not three components." },
    { l:"The result", t:"<b>Button, border, and link all update instantly</b> and stay perfectly in sync. Zero missed instances." },
    { l:"Without variables", t:"<b>You'd hunt every hard-coded colour by hand,</b> miss several, and ship an inconsistent product." },
  ],
  takeaway:"This is the entire argument for a token system: change once, update everywhere, never drift." },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Sharing the System", title:"Team Libraries",
  layout:"split",
  body:{
    left:[
      "<b>Publish your styles, variables, and components as a library</b> and the whole team can pull from one source.",
      "When you update a component in the library, <em>every file using it gets the update,</em> with a prompt to accept changes.",
      "This is how design systems scale across products and teams without copy-paste drift.",
    ],
    right:{ tone:"navy", t:"The payoff",
      b:"One published library means a ten-person team designs as if it were one mind. Update the button once, and every screen in every file moves together. That is the whole promise of a system, realised." },
  } },

{ type:"theory", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Two More Essentials", title:"Effects + Repeat Grids via Instances",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Effect styles", b:"Shadows, blurs, and layer effects saved as reusable styles. Consistent elevation and depth across every card and modal in the file." },
    { tone:"navy", t:"Repeat grids via instances", b:"Figma has no literal repeat grid like Adobe XD. You achieve the same result with components and auto layout: place instances and they repeat cleanly, each editable." },
  ],
  footnote:"This is the Figma answer to XD's repeat grid: component instances inside an auto layout frame." },

{ type:"toolOpen", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Hands On", title:"Open Your Variables Panel",
  tool:"figma",
  instruction:"Create your first colour variables",
  sub:"We'll define five core variables and apply them to the card you built in S3.",
  need:["Your card from S3","The local variables panel","The brand palette: navy, gold, cream"] },

{ type:"exercise", day:3, session:4, tool:"figma",
  task:"Variables + {hl}Styles{/hl}",
  sub:"Create five variables: background, surface, primary, text, border. Apply all five to your card.",
  minutes:20,
  deliverable:"Five named colour variables applied to your card. Change one and watch the card update." },

{ type:"wrap", day:3, session:4, sessionTitle:"Design Systems + Variables",
  eyebrow:"Day 3 Complete", title:"Design System Foundation Done",
  cards:[
    { n:"01", t:"You can build in Figma", b:"Interface, vectors, the pen tool, masking, auto layout, and booleans. From a blank canvas to a responsive card component." },
    { n:"02", t:"You think in systems", b:"Token, component, pattern, template. Styles for type and effects, variables for everything that should theme and scale." },
    { n:"03", t:"Change once, update everywhere", b:"Variables and published libraries mean one decision flows across every screen. That is what separates design that scales from one-off art." },
  ],
  next:"Day 4 · Prototyping + Microinteractions + Multidevice · We make all of this interactive and testable." },

];
```


---

### 9.4 Day 4 - `day4.ts` (55 slides)

```ts
import { Slide } from "../types";

export const day4: Slide[] = [

// ── DAY 4 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:4,
  dayLabel:"Day 4 of 5 · Riyadh, KSA · 15 July 2026",
  title:"Prototyping, Microinteractions\n+ Multidevice",
  theme:"Make it move, then make it testable",
  sessions:[
    "S1 · Prototyping + Paper  9:00 - 10:30",
    "S2 · Prototyping in Figma  10:40 - 12:30",
    "S3 · Microinteractions + Usability Testing  1:30 - 3:30",
    "S4 · Multidevice + Principles  3:40 - 5:00",
  ] },

// ══ DAY 4 · S1 · Prototyping + Paper (16) ════════════════════════
{ type:"cover", day:4, session:1, time:"9:00 - 10:30",
  title:"Prototyping\n+ {hl}Paper{/hl}",
  subtitle:"The Fidelity Spectrum · Paper Prototyping · Think-Aloud" },

{ type:"statement", day:4, session:1, sessionTitle:"Prototyping + Paper",
  quote:"\"If you are not embarrassed by your first prototype,\nyou {hl}built it too late.{/hl}\"",
  attribution:"The point of a prototype is to be wrong cheaply, early, and on purpose." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"The Concept", title:"What Prototyping Is For",
  layout:"bullets",
  body:[
    "<b>A prototype is a question, not a deliverable.</b> You build it to learn something specific, then you throw most of it away.",
    "It makes an idea <em>tangible enough to react to.</em> People can't critique a description, but they can critique something they touch.",
    "The goal is <b>validated learning before expensive commitment.</b> Find the flaw on paper, not in production code.",
    "Match fidelity to the question. <b>Testing the flow?</b> Paper is enough. <b>Testing the feel?</b> You'll need higher fidelity.",
  ] },

{ type:"framework", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Choosing How Real", title:"The Fidelity Spectrum",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Sketch", d:"Pen on paper. Seconds to make. Tests the roughest concept and structure." },
    { n:"02", t:"Paper Proto", d:"Hand-drawn screens you can shuffle. Tests flow and logic with real people." },
    { n:"03", t:"Lo-fi Digital", gold:true, d:"Greyscale wireframes, clickable. Tests structure and navigation without visual bias." },
    { n:"04", t:"Hi-fi Digital", d:"Real visuals and interaction. Tests look, feel, and detailed usability." },
    { n:"05", t:"Coded Proto", d:"Live in the browser. Tests performance and true behaviour. Most costly." },
  ]},
  note:"Higher fidelity is not better. It's more expensive. Use the lowest fidelity that answers your question." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Counterintuitive but True", title:"Why Start on Paper",
  layout:"cards3",
  body:[
    { icon:"clock", t:"It's faster", b:"You can draw ten screens in the time it takes to build one in Figma. Iterate at the speed of thought." },
    { icon:"empathy", t:"It invites honesty", tone:"navy", b:"People critique rough sketches freely. A polished screen makes them hold back, as if it's too finished to change." },
    { icon:"ideation", t:"It frees ideas", b:"No tool friction, no pixel-fiddling. Paper keeps you focused on the idea and the flow, not the software." },
  ],
  footnote:"The roughness is a feature. It signals \"this is changeable\", which is exactly what early testing needs." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"How To", title:"Running a Paper Prototype",
  layout:"bullets",
  body:[
    "<b>Draw each screen on a separate card or sheet.</b> One screen per page so you can swap them as the user navigates.",
    "<b>You are the computer.</b> When the user taps a button, you place the next screen down. You manually respond to their actions.",
    "<b>Use sticky notes for dynamic bits:</b> dropdowns, error messages, expanded states. Add and remove them as the interaction demands.",
    "<b>Don't explain, observe.</b> Give the task, then stay quiet. Where they hesitate is your data.",
  ] },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"The Testing Method", title:"Think-Aloud Protocol",
  layout:"split",
  body:{
    left:[
      "<b>Ask the user to narrate their thoughts</b> as they use the prototype. \"Tell me what you're looking at and what you expect to happen.\"",
      "You hear <em>where their mental model breaks</em> from your design, in real time. The hesitations and surprises are the findings.",
      "Resist helping. Every time you explain, you contaminate the data. Silence is uncomfortable and essential.",
    ],
    right:{ tone:"gold", t:"What you listen for",
      b:"\"Where is the…?\" means findability failed. \"I thought this would…\" means an expectation was broken. \"Wait, what happened?\" means feedback was missing. Each phrase points to a specific fix." },
  } },

{ type:"example", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Reading the Signals", title:"What Users Say vs What It Means",
  mode:"annotated",
  panels:[
    { l:"\"Hmm, where do I…\"", t:"<b>Findability problem.</b> The thing they need exists but isn't visible or labelled in their language." },
    { l:"\"I guess I'll click this?\"", t:"<b>Low confidence.</b> They're guessing, not knowing. The affordance isn't clear enough." },
    { l:"\"Oh, that's not what I expected.\"", t:"<b>Broken mental model.</b> Your logic and theirs diverged. The interaction surprised them." },
    { l:"Silence, then a frown", t:"<b>Missing feedback.</b> Something happened, or didn't, and the interface didn't tell them. Watch the face." },
  ],
  takeaway:"You're not collecting opinions. You're collecting moments of friction. The words just point you to them." },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Avoiding Bad Data", title:"Facilitation Pitfalls",
  layout:"bullets",
  body:[
    "<b>Don't lead.</b> \"Would you tap the big green button now?\" hands them the answer. Just give the goal and watch.",
    "<b>Don't rescue.</b> When they struggle, wait. The struggle is the most valuable thing you'll see all day.",
    "<b>Don't defend.</b> If they criticise it, write it down, don't explain why you did it that way. You won't be there to explain in real life.",
    "<b>Don't test more than five users per round.</b> Five surfaces most major issues. Fix, then test five more.",
  ] },

{ type:"theory", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Writing the Task", title:"Good Task Scenarios",
  layout:"cards2",
  body:[
    { tone:"navy", t:"A weak task", b:"\"Use the search bar to find a blue jacket under fifty riyals and add it to your cart.\" It lists the exact steps, so you only test whether they can follow instructions." },
    { tone:"gold", t:"A strong task", b:"\"You need a jacket for a trip next week and have a tight budget. Find something that works.\" Goal, not steps. Now you see how they actually think and navigate." },
  ],
  footnote:"Give people a goal and a context, never a sequence of clicks. Real users arrive with goals, not instructions." },

{ type:"discussion", day:4, session:1, sessionTitle:"Prototyping + Paper",
  label:"Spot the Lead",
  question:"\"Don't you think this button should be bigger?\"\nRewrite it as {hl}a neutral question{/hl}\nthat gets honest data.",
  hint:"60 seconds. The fix is the same principle as Day 2's interview questions." },

{ type:"toolOpen", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Hands On · Analog", title:"Pens and Paper Out",
  tool:"figjam",
  instruction:"Sketch your case study's core flow on paper",
  sub:"Four to six screens of your main user task. Rough boxes and labels only. We test them next.",
  need:["Paper and a pen","Your scenario and JTBD from Day 2","Sticky notes for dynamic states"] },

{ type:"exercise", day:4, session:1, tool:"figjam",
  task:"Paper {hl}Prototype{/hl}",
  sub:"Sketch your core flow on paper, four to six screens. Keep it rough. One screen per sheet.",
  minutes:20,
  deliverable:"A hand-drawn paper prototype of your main flow, ready to test with a partner." },

{ type:"exercise", day:4, session:1, tool:"figjam",
  task:"Think-Aloud {hl}Test{/hl}",
  sub:"Swap with a partner. Give them a goal-based task. Stay silent, observe, note every hesitation.",
  minutes:20,
  deliverable:"Notes on at least three friction points your partner hit, in their words." },

{ type:"reference", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Reference · Keep This Open", title:"Fidelity · When to Use What",
  head:["Fidelity","Tests","Cost / Speed"],
  rows:[
    ["Sketch","Raw concept, rough structure","Seconds · near free"],
    ["Paper prototype","Flow, logic, navigation","Minutes · very cheap"],
    ["Lo-fi digital","Structure without visual bias","Hours · cheap"],
    ["Hi-fi digital","Look, feel, detailed usability","Days · moderate"],
    ["Coded prototype","Real behaviour, performance","Days+ · expensive"],
  ],
  note:"Pick the lowest row that answers your current question. Climb only when you must." },

{ type:"wrap", day:4, session:1, sessionTitle:"Prototyping + Paper",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"A prototype is a question", b:"Built to learn one thing cheaply, then mostly discarded. Match fidelity to the question. Lowest fidelity that answers it wins." },
    { n:"02", t:"Paper tests flow honestly", b:"Faster to make, and its roughness invites the candour a polished screen kills. You are the computer, swapping screens as they tap." },
    { n:"03", t:"Think-aloud surfaces the truth", b:"Give a goal, not steps. Stay silent. The hesitations, surprises, and where-is-its are your findings. Don't lead, rescue, or defend." },
  ],
  next:"S2 · Prototyping in Figma (10:40) · We take that paper flow and make it really click." },

// ══ DAY 4 · S2 · Prototyping in Figma (8) ════════════════════════
{ type:"cover", day:4, session:2, time:"10:40 - 12:30",
  title:"Prototyping\nin {hl}Figma{/hl}",
  subtitle:"Connections · Smart Animate · Overlays + Components" },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Orientation", title:"Figma Prototype Mode",
  layout:"bullets",
  body:[
    "<b>Switch from Design to Prototype</b> in the right panel. The same frames you designed become connectable, clickable screens.",
    "You draw <em>connections</em> between frames: from a button to the screen it opens. Each connection is an interaction.",
    "Hit <b>Present</b> to play it in the browser, share a link, and watch someone use it. No code, no export.",
    "This is what you'll test on a real person this afternoon, and hand to a developer on Day 5.",
  ] },

{ type:"framework", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"The Grammar of Interaction", title:"Trigger, Action, Destination",
  kind:"stack",
  data:{ layers:[
    { t:"Trigger", d:"What the user does. On tap, on hover, on drag, after delay, while pressing." },
    { t:"Action", d:"What the prototype does. Navigate to, open overlay, swap, scroll to, go back." },
    { t:"Animation", d:"How it happens. Instant, dissolve, move in, push, or Smart Animate." },
  ] },
  note:"Every interaction in Figma is this triple. Learn it once and you can build any flow." },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"The Magic Feature", title:"Smart Animate",
  layout:"split",
  body:{
    left:[
      "<b>Smart Animate tweens between two frames</b> by matching layers with the same name and animating the differences.",
      "Move, resize, or recolour a layer between frames, and Smart Animate <em>fills in the motion automatically.</em>",
      "This is how you build <b>carousels, expanding cards, toggles, and page transitions</b> that feel real, without a single line of code.",
    ],
    right:{ tone:"gold", t:"The one rule",
      b:"Matching layer names is everything. Smart Animate finds \"card / image\" in both frames and animates between them. Rename one and the magic breaks. Name consistently and it just works." },
  } },

{ type:"example", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Building Real Patterns", title:"Three Patterns with Smart Animate",
  mode:"annotated",
  panels:[
    { l:"Carousel", t:"<b>Two frames, the image row shifted left.</b> Same layer names, drag trigger, Smart Animate. It slides like a real carousel." },
    { l:"Expanding card", t:"<b>A small card and a large card, same layers.</b> On tap, Smart Animate grows it open smoothly." },
    { l:"Hamburger menu", t:"<b>Menu off-screen, then on-screen.</b> Tap the icon, the panel slides in via an overlay with Smart Animate." },
  ],
  takeaway:"Most app interactions are two states and a tween. Once you see that, you can prototype almost anything." },

{ type:"theory", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Two Power Features", title:"Overlays + Interactive Components",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Overlays", b:"Open a frame on top of the current screen: modals, menus, tooltips, bottom sheets. The base screen stays put underneath. Essential for dialogs and nav." },
    { tone:"gold", t:"Interactive components", b:"Bake the interaction into the component itself. A toggle that flips on tap, a button that changes on hover. Build it once, and every instance just works everywhere." },
  ],
  footnote:"Interactive components are the pro move: the interaction lives in the component, not in dozens of manual connections." },

{ type:"exercise", day:4, session:2, tool:"figma",
  task:"Build a {hl}Clickable Prototype{/hl}",
  sub:"Take your paper flow into Figma. Connect your screens. Add one Smart Animate transition.",
  minutes:35,
  deliverable:"A clickable Figma prototype of your core flow, with at least one Smart Animate interaction." },

{ type:"wrap", day:4, session:2, sessionTitle:"Prototyping in Figma",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Every interaction is a triple", b:"Trigger, action, animation. Draw a connection from a button to a frame, hit present, and your design plays in the browser. No code." },
    { n:"02", t:"Smart Animate needs matching names", b:"It tweens between frames by matching layer names. Carousels, expanding cards, menus, all just two states and a tween. Name consistently." },
    { n:"03", t:"Bake interaction into components", b:"Overlays for modals and menus. Interactive components for toggles and hovers. Build the behaviour once, every instance inherits it." },
  ],
  next:"S3 · Microinteractions + Usability Testing (1:30) · The small details, and proof your design works." },

// ══ DAY 4 · S3 · Microinteractions + Usability Testing (14) ══════
{ type:"cover", day:4, session:3, time:"1:30 - 3:30",
  title:"Microinteractions\n+ {hl}Usability Testing{/hl}",
  subtitle:"The Details That Delight · Testing With Real People" },

{ type:"statement", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  quote:"\"Details are not the details.\n{hl}They make the design.{/hl}\"",
  attribution:"Charles Eames · Microinteractions are where products earn trust or lose it." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Concept", title:"What Microinteractions Are",
  layout:"bullets",
  body:[
    "<b>A microinteraction is a single, contained moment</b> built around one task: a toggle flipping, a like animating, a field validating.",
    "They are the <em>texture of a product.</em> Individually tiny, collectively the difference between a product that feels alive and one that feels dead.",
    "Done well, they're <b>invisible and reassuring.</b> Done badly or missing, they leave users uncertain whether anything happened.",
    "They communicate <b>system status</b> at the smallest scale, which loops straight back to Nielsen's first heuristic.",
  ] },

{ type:"framework", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Model", title:"Saffer's Four Parts of a Microinteraction",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Trigger", d:"What starts it. A user action like a tap, or a system event like a new message." },
    { n:"02", t:"Rules", gold:true, d:"What happens and in what order. The logic of the interaction." },
    { n:"03", t:"Feedback", d:"What the user sees, hears, or feels. The visible response that confirms the action." },
    { n:"04", t:"Loops + Modes", d:"What happens over time and on repeat. The long-term behaviour and edge states." },
  ]},
  note:"Dan Saffer's model. Most microinteractions fail at Feedback, the user does the trigger but sees nothing back." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Where They Live", title:"Microinteractions Everywhere",
  layout:"cards4",
  body:[
    { icon:"states", t:"Toggles + switches", b:"The satisfying flip that confirms on or off. State change made visible and tactile." },
    { icon:"empathy", t:"Pull to refresh", b:"The stretch, the spinner, the snap back. Status and control in one gesture." },
    { icon:"check", t:"Form validation", b:"The green tick or inline error as you type. Catches mistakes in the moment." },
    { icon:"loop", t:"Loading states", b:"Skeletons and progress over blank screens. Tells the user the system is alive and working." },
  ],
  footnote:"Notice them today in every app you use. Once you see microinteractions, you can't unsee them." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Designing the Unseen States", title:"Component States",
  layout:"bullets",
  body:[
    "<b>Every interactive element has multiple states,</b> and beginners design only the first one. The default is just the beginning.",
    "A button alone needs: <em>default, hover, pressed, focused, disabled, and loading.</em> Six states, not one.",
    "Inputs need <b>empty, focused, filled, error, and success.</b> The error state is where most designs go silent and fail users.",
    "Design the <b>empty, loading, and error states</b> for every screen too. They're not edge cases, they're most of real usage.",
  ] },

{ type:"example", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Forgotten States", title:"A Button Has Six States, Not One",
  mode:"annotated",
  panels:[
    { l:"Default + Hover", t:"<b>Resting, then a subtle shift on hover.</b> The hover says \"this is clickable\" before the click." },
    { l:"Pressed + Focused", t:"<b>A pressed depression, a focus ring for keyboards.</b> Focus is an accessibility must, not optional." },
    { l:"Disabled", t:"<b>Greyed and non-interactive, with a reason if possible.</b> Don't leave users tapping a dead button." },
    { l:"Loading", t:"<b>A spinner or label change after the tap.</b> Without it, users tap again and double-submit." },
  ],
  takeaway:"The states you forget are exactly the ones that frustrate users. Design all six, every time." },

{ type:"statement", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  quote:"\"You cannot test whether it works\nby {hl}asking the person who built it.{/hl}\"",
  attribution:"This is why we put it in front of someone who has never seen it." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"The Proof", title:"Usability Testing · The Essentials",
  layout:"bullets",
  body:[
    "<b>Usability testing watches real people attempt real tasks</b> on your design. It's the single most honest signal you can get.",
    "<b>Five users</b> per round surface roughly 85% of usability problems. You don't need a big sample, you need the right method.",
    "<b>Test tasks, not opinions.</b> \"Can you book a room for next weekend?\" beats \"Do you like this screen?\" every time.",
    "<b>Measure</b> task success, time, errors, and where they hesitate. Pair the numbers with the think-aloud narration.",
  ] },

{ type:"framework", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"How to Run One", title:"The Usability Test Session",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Set up", d:"Pick three tasks. Recruit five users like your persona. Prepare the prototype." },
    { n:"02", t:"Brief", d:"Explain think-aloud. Stress you're testing the design, not them. Put them at ease." },
    { n:"03", t:"Observe", gold:true, d:"Give each task as a goal. Stay silent. Note hesitations, errors, and quotes." },
    { n:"04", t:"Debrief", d:"A few open questions at the end. What stood out, what confused them." },
    { n:"05", t:"Synthesise", d:"Cluster findings across users. Rate severity. Prioritise fixes." },
  ]},
  note:"The hardest skill is silence during Observe. Every word you offer is data you destroy." },

{ type:"theory", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Writing the Script", title:"Test Tasks + Scenarios",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Frame as a scenario", b:"\"You're planning a weekend trip and want somewhere central under a budget. Find and book it.\" Context plus goal, the way real life arrives." },
    { tone:"gold", t:"Never narrate the steps", b:"Don't say \"tap search, then filter by price\". That tests instruction-following, not your design. The struggle to find the path is the finding." },
  ],
  footnote:"Same principle as Day 2 interviews and S1 paper testing: goals, never steps. It runs through everything." },

{ type:"toolOpen", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Hands On", title:"Prototype Ready to Test",
  tool:"figma",
  instruction:"Open your S2 prototype in Present mode",
  sub:"Write three goal-based tasks. You'll test them on a partner who hasn't seen your design.",
  need:["Your clickable prototype","Three task scenarios","A notes page for findings"] },

{ type:"exercise", day:4, session:3, tool:"figma",
  task:"Run a {hl}Usability Test{/hl}",
  sub:"Test your prototype on a partner. Three goal-based tasks. Think-aloud. Observe in silence, note everything.",
  minutes:30,
  deliverable:"Findings from one test: task success, friction points, and at least three prioritised fixes." },

{ type:"wrap", day:4, session:3, sessionTitle:"Microinteractions + Usability Testing",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"Microinteractions are the texture", b:"Trigger, rules, feedback, loops. Tiny moments that make a product feel alive. Most fail at feedback, the user acts and sees nothing." },
    { n:"02", t:"Design every state", b:"A button has six, an input has five. The empty, loading, and error states are most of real usage, not edge cases. Design them all." },
    { n:"03", t:"Five users, real tasks, total silence", b:"Usability testing is the most honest signal there is. Goals not steps, observe don't help, then cluster findings and prioritise fixes." },
  ],
  next:"S4 · Multidevice + Principles (3:40) · Make it work on every screen, and lock in the visual rules." },

// ══ DAY 4 · S4 · Multidevice + Principles (16) ═══════════════════
{ type:"cover", day:4, session:4, time:"3:40 - 5:00",
  title:"Multidevice\n+ {hl}Principles{/hl}",
  subtitle:"Responsive Design · Thumb Zones · The Visual Rules" },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Reality", title:"Designing for Many Screens",
  layout:"bullets",
  body:[
    "<b>Your design will be used on screens you never tested,</b> from a small phone to a wide monitor. It must hold up across all of them.",
    "<b>Responsive</b> means one layout that fluidly adapts. <b>Adaptive</b> means distinct layouts for set breakpoints. Most products blend both.",
    "Content priority changes by device. <em>What's essential on mobile</em> may be one of several things shown at once on desktop.",
    "This is exactly why you built with auto layout and constraints on Day 3, so the design can flex instead of break.",
  ] },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Discipline", title:"Mobile-First Thinking",
  layout:"split",
  body:{
    left:[
      "<b>Design the smallest screen first,</b> then expand. It forces ruthless prioritisation of what truly matters.",
      "Starting on desktop and shrinking down <em>always ends in a cramped, compromised mobile experience.</em> The constraints come too late.",
      "Mobile-first means the hardest decisions, what to cut, get made first, when they're cheapest.",
    ],
    right:{ tone:"gold", t:"Why it works",
      b:"A small screen has no room for the non-essential. Decide what survives on mobile and you've found your true priorities. Everything you add on larger screens is then a considered enhancement, not clutter you forgot to remove." },
  } },

{ type:"framework", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Breakpoints", title:"Common Device Tiers",
  kind:"stack",
  data:{ layers:[
    { t:"Mobile · 360 to 430px", d:"Single column, thumb-driven, one primary action per screen. Design here first." },
    { t:"Tablet · 768 to 1024px", d:"Two columns emerge, more content visible, touch still primary." },
    { t:"Desktop · 1280px+", d:"Multi-column, hover states return, dense information, pointer-driven." },
  ] },
  note:"These are starting points, not laws. Set breakpoints where your content needs them, not by device fashion." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Physical Ergonomics", title:"Thumb Zones",
  layout:"split",
  body:{
    left:[
      "<b>Most phone use is one-handed and thumb-driven.</b> The screen has a natural reach map: easy, stretch, and hard zones.",
      "The <em>bottom-centre is easiest</em>, the top corners are hardest. This is why mobile nav bars sit at the bottom now.",
      "Put <b>primary actions in the easy zone,</b> destructive or rare actions out of casual reach. Ergonomics is UX.",
    ],
    right:{ tone:"navy", t:"The map",
      b:"Easy: bottom and centre, where the thumb rests. Stretch: the mid and upper screen. Hard: the far top corners. Design your most-used controls into the easy zone, and never put a destructive action where a thumb naturally lands." },
  } },

{ type:"statement", day:4, session:4, sessionTitle:"Multidevice + Principles",
  quote:"\"A layout has rules\nwhether you choose them or not.\n{hl}Choose them.{/hl}\"",
  attribution:"The principles aren't decoration. They're the difference between considered and accidental." },

{ type:"framework", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"The Foundation of Visual Design", title:"The Core Design Principles",
  kind:"diagram", data:{ diagram:"weekArc",
    nodes:[
      { n:"1", day:"Contrast", t:"Contrast", d:"Difference creates hierarchy. Size, weight, colour guide the eye to what matters." },
      { n:"2", day:"Alignment", t:"Alignment", d:"Shared edges create order. Nothing placed arbitrarily. Everything relates." },
      { n:"3", day:"Proximity", t:"Proximity", d:"Related things sit close. Space groups and separates meaning." },
      { n:"4", day:"Repetition", t:"Repetition", d:"Repeated styles build consistency and rhythm across a design." },
      { n:"5", day:"Balance", t:"Balance", d:"Visual weight distributed so the layout feels stable, not lopsided." },
    ] },
  note:"CARP, plus balance. These are the grammar of every layout you'll ever judge or build." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 1", title:"Contrast + Visual Hierarchy",
  layout:"bullets",
  body:[
    "<b>Contrast is how you tell the eye what matters most.</b> Without it, everything competes and nothing leads.",
    "Create it with <em>size, weight, colour, and space.</em> The biggest, boldest, or most isolated element wins attention first.",
    "<b>Establish a clear hierarchy:</b> primary action, secondary, tertiary. Every screen should answer \"where do I look first?\" instantly.",
    "Contrast also serves <b>accessibility:</b> sufficient colour contrast is what makes text legible for everyone, in every light.",
  ] },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 2", title:"Alignment + Proximity",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Alignment", b:"Every element shares an edge or centre with another. A strong grid and consistent alignment make even simple layouts feel deliberate and trustworthy. Misalignment reads as carelessness." },
    { tone:"gold", t:"Proximity", b:"Things that belong together sit together. Generous space between groups, tight space within them. Proximity tells the user what relates to what, before they read a single word." },
  ],
  footnote:"Most amateur layouts are fixed by tightening proximity and enforcing alignment. Two principles, huge payoff." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 3", title:"Colour + Typography",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Colour", b:"A restrained palette with clear roles: one accent for actions, neutrals for surfaces, semantic colours for success and error. Colour carries meaning, so use it consistently, never decoratively." },
    { tone:"navy", t:"Typography", b:"A limited type scale, strong size and weight contrast between levels, generous line height for body. Type is most of the interface, get it right and the design is most of the way there." },
  ],
  footnote:"Colour and type do the heaviest lifting in UI. Discipline here beats decoration everywhere." },

{ type:"theory", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principle Deep Dive · 4", title:"Consistency + Visibility",
  layout:"bullets",
  body:[
    "<b>Consistency</b> means the same thing looks and behaves the same way everywhere. It's what lets users transfer what they learned on one screen to the next.",
    "It operates on two levels: <em>internal</em> (consistent within your product) and <em>external</em> (consistent with platform conventions users already know).",
    "<b>Visibility</b> means the important things are seen, not hidden behind menus and gestures. If users can't find it, it doesn't exist.",
    "Both trace straight back to Nielsen. The heuristics from Day 1 and these principles are the same wisdom, at different scales.",
  ] },

{ type:"example", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Principles in Judgement", title:"Reading One Screen Through the Principles",
  mode:"annotated",
  panels:[
    { l:"Contrast", t:"<b>Is there one clear focal point?</b> If three things shout equally, hierarchy has failed and the eye has nowhere to land." },
    { l:"Alignment", t:"<b>Do elements share clean edges?</b> Drop a vertical guide. Anything that doesn't touch it reads as a mistake." },
    { l:"Proximity", t:"<b>Does spacing group what belongs together?</b> Equal spacing everywhere means nothing is grouped, so everything feels loose." },
    { l:"Consistency", t:"<b>Do repeated elements match?</b> Two buttons that should be identical but aren't quietly erode trust in the whole product." },
  ],
  takeaway:"This is now your evaluation lens. You can critique any screen, including your own, against these in seconds." },

{ type:"discussion", day:4, session:4, sessionTitle:"Multidevice + Principles",
  label:"Apply the Lens",
  question:"Look at your own prototype.\nWhich principle is it {hl}weakest{/hl} on?\nWhat's the one fix?",
  hint:"2 minutes. Be honest. The point is to catch it before Day 5 handoff." },

{ type:"exercise", day:4, session:4, tool:"figma",
  task:"Make It {hl}Responsive{/hl}",
  sub:"Take your main screen and create a mobile version using auto layout and constraints. Mind the thumb zone.",
  minutes:25,
  deliverable:"Your core screen at mobile and desktop widths, adapting cleanly, primary action in the easy zone." },

{ type:"reference", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Reference · Keep This Open", title:"The Design Principles Checklist",
  head:["Principle","The Question","Quick Fix If It Fails"],
  rows:[
    ["Contrast","Where does the eye go first?","Increase size or weight of the priority element"],
    ["Alignment","Does everything share an edge?","Apply a grid, align to it strictly"],
    ["Proximity","Is related content grouped?","Tighten space within, widen space between"],
    ["Repetition","Are styles consistent?","Apply shared styles and components"],
    ["Balance","Does it feel stable?","Redistribute visual weight across the layout"],
    ["Colour","Does colour carry meaning?","Restrain the palette, assign clear roles"],
    ["Typography","Is the hierarchy clear?","Increase contrast between type levels"],
    ["Visibility","Can users find what matters?","Surface key actions, hide less"],
  ],
  note:"Run any screen through this list. It's the fastest design critique you own." },

{ type:"wrap", day:4, session:4, sessionTitle:"Multidevice + Principles",
  eyebrow:"Day 4 Complete", title:"It Works, It Moves, It's Tested",
  cards:[
    { n:"01", t:"You can prototype and test", b:"Paper to Figma, Smart Animate, real interactions. Then proven on real people with goal-based tasks and silent observation." },
    { n:"02", t:"You sweat the details", b:"Microinteractions and every component state. The feedback, the loading, the error, the empty, the parts beginners forget and users feel." },
    { n:"03", t:"You design for every screen, by principle", b:"Mobile-first, thumb zones, responsive auto layout. Judged against contrast, alignment, proximity, consistency, the grammar of good design." },
  ],
  next:"Day 5 · Atomic Design + Handoff + Portfolio · Systematise it, hand it off, and tell its story." },

];
```


---

### 9.5 Day 5 - `day5.ts` (40 slides)

```ts
import { Slide } from "../types";

export const day5: Slide[] = [

// ── DAY 5 DIVIDER ──────────────────────────────────────────────
{ type:"dayDivider", dayNumber:5,
  dayLabel:"Day 5 of 5 · Riyadh, KSA · 16 July 2026",
  title:"Atomic Design, Handoff\n+ Portfolio",
  theme:"Systematise it, ship it, tell its story",
  sessions:[
    "S1 · Atomic Design + Components  9:00 - 10:30",
    "S2 · Dev Handoff + Sharing  10:40 - 12:30",
    "S3 · Portfolio + Capstone I  1:30 - 3:30",
    "S4 · Capstone II + Wrap  3:40 - 5:00",
  ] },

// ══ DAY 5 · S1 · Atomic Design + Components (13) ═════════════════
{ type:"cover", day:5, session:1, time:"9:00 - 10:30",
  title:"Atomic Design\n+ {hl}Components{/hl}",
  subtitle:"Atoms to Pages · Properties · Variants" },

{ type:"statement", day:5, session:1, sessionTitle:"Atomic Design + Components",
  quote:"\"We are not designing pages.\nWe are designing {hl}systems of components.{/hl}\"",
  attribution:"Brad Frost · Atomic Design" },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Mental Model", title:"What Atomic Design Is",
  layout:"bullets",
  body:[
    "<b>Atomic Design, by Brad Frost, borrows from chemistry:</b> complex interfaces are built from small, combinable parts.",
    "Five levels, smallest to largest: <em>atoms, molecules, organisms, templates, pages.</em> Each is made from the level below.",
    "It gives a team a <b>shared vocabulary</b> and a logical way to build and name a design system that scales.",
    "It's the conceptual backbone behind Figma's components, and behind how this very slide system was built.",
  ] },

{ type:"framework", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Five Levels", title:"Atoms to Pages",
  kind:"stack",
  data:{ layers:[
    { t:"Atoms", d:"The smallest parts. A label, an input, a button, a colour, an icon. Can't break down further." },
    { t:"Molecules", d:"A few atoms bonded into a unit. A search field: label plus input plus button." },
    { t:"Organisms", d:"Molecules and atoms forming a distinct section. A header, a product card, a nav bar." },
    { t:"Templates", d:"Organisms arranged into a page-level structure, without real content yet." },
    { t:"Pages", d:"Templates filled with real content. The actual screen a user sees." },
  ] },
  note:"Each level is composed of the one beneath it. Fix an atom and every molecule, organism, and page inherits the fix." },

{ type:"example", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Made Concrete", title:"Atomic Design · A Worked Example",
  mode:"annotated",
  panels:[
    { l:"Atom", t:"<b>A single input field and a button,</b> each on its own, styled from your tokens." },
    { l:"Molecule", t:"<b>Combine them into a search bar:</b> input plus button, working as one unit." },
    { l:"Organism", t:"<b>The search bar joins a logo and nav links</b> to form a complete header." },
    { l:"Template to Page", t:"<b>The header tops a page template,</b> then real content fills it into a finished screen." },
  ],
  takeaway:"You already did this on Day 3. The card was a molecule, built from atoms, ready to become an organism." },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Figma Tool", title:"Components + Instances",
  layout:"split",
  body:{
    left:[
      "<b>A component is a master element you define once.</b> Every copy you use is an instance that stays linked to it.",
      "<b>Change the master, every instance updates.</b> This is the single biggest consistency and speed win in Figma.",
      "Instances can <em>override</em> text, colour, and content locally while still inheriting structure from the master.",
    ],
    right:{ tone:"gold", t:"Atoms become components",
      b:"Atomic Design is the theory. Components are how Figma makes it real. Your atoms, molecules, and organisms all become components, and your whole product stays in sync from one source." },
  } },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Making Components Flexible", title:"Component Properties",
  layout:"cards4",
  body:[
    { icon:"boolean", t:"Boolean", b:"Toggle a part on or off. Show or hide an icon, a badge, a label, from one switch." },
    { icon:"variables", t:"Text", b:"Expose editable text as a property. Change the label without entering the instance." },
    { icon:"states", t:"Instance swap", b:"Swap a nested component. Change which icon a button uses, from a dropdown." },
    { icon:"system", t:"Variant", b:"Switch between predefined versions, size, state, style, in one property." },
  ],
  footnote:"Properties turn a rigid component into a flexible one configured entirely from the right-hand panel." },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"The Power Feature", title:"Variants",
  layout:"bullets",
  body:[
    "<b>Variants group related versions of a component</b> into one, with properties to switch between them.",
    "A button's variants: <em>primary, secondary, ghost</em> times <em>default, hover, disabled.</em> One component, every combination.",
    "Instead of twelve separate button components cluttering your assets, you have <b>one, configured by properties.</b>",
    "This is how the six button states from Day 4 live together cleanly, as variants of a single component.",
  ] },

{ type:"example", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Variants in Practice", title:"One Button Component, Every State",
  mode:"annotated",
  panels:[
    { l:"Property · Type", t:"<b>Primary, Secondary, Ghost.</b> One dropdown switches the button's visual role." },
    { l:"Property · State", t:"<b>Default, Hover, Pressed, Disabled.</b> A second dropdown switches its state." },
    { l:"The matrix", t:"<b>Three types times four states is twelve buttons,</b> all inside one tidy component." },
    { l:"In use", t:"<b>Drop one instance, set two properties,</b> done. Never hunt for the right button again." },
  ],
  takeaway:"This is the difference between a pile of buttons and a button system. Variants make it manageable." },

{ type:"theory", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Editing the Master", title:"Edit Object Mode",
  layout:"split",
  body:{
    left:[
      "<b>To change a component everywhere, edit the master,</b> not an instance. Double-click into the main component to edit it.",
      "Edits to the master <em>propagate to every instance</em> across every file using the library, instantly.",
      "Edit an instance instead and you create a local override, which only affects that one copy. Know which you're doing.",
    ],
    right:{ tone:"navy", t:"The discipline",
      b:"Master edits flow everywhere. Instance edits stay local. The most common Figma mistake is editing an instance when you meant the master, then wondering why the rest didn't update. Always know which you're in." },
  } },

{ type:"toolOpen", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Hands On", title:"Componentise Your Card",
  tool:"figma",
  instruction:"Turn your Day 3 card into a component with variants",
  sub:"Make the master, add a variant or two, then place instances. This is your case study's first real component.",
  need:["Your card from Day 3","Your variables","Shortcut: Cmd/Ctrl + Alt + K to create component"] },

{ type:"exercise", day:5, session:1, tool:"figma",
  task:"Build a {hl}Component System{/hl}",
  sub:"Make your card a component. Add a button component with two variants. Place instances and override content.",
  minutes:30,
  deliverable:"A card component and a two-variant button, used as instances in your design." },

{ type:"wrap", day:5, session:1, sessionTitle:"Atomic Design + Components",
  eyebrow:"Session 1 Complete", title:"Three Things to Take Into S2",
  cards:[
    { n:"01", t:"Build systems, not pages", b:"Atoms to pages. Every interface is small combinable parts. Fix one atom and the fix flows up through everything built on it." },
    { n:"02", t:"Components are atomic design, realised", b:"Master and instances, linked. Change the master, every instance updates. The biggest consistency and speed win in Figma." },
    { n:"03", t:"Properties and variants make it flexible", b:"One button component holds every type and state as variants, configured from the panel. A system, not a pile of duplicates." },
  ],
  next:"S2 · Dev Handoff + Sharing (10:40) · Turn your system into something a developer can build from." },

// ══ DAY 5 · S2 · Dev Handoff + Sharing (8) ═══════════════════════
{ type:"cover", day:5, session:2, time:"10:40 - 12:30",
  title:"Dev Handoff\n+ {hl}Sharing{/hl}",
  subtitle:"Dev Mode · Inspect · Export · Version History" },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"The Critical Bridge", title:"What Handoff Really Is",
  layout:"bullets",
  body:[
    "<b>Handoff is where design becomes product.</b> A beautiful file that a developer can't build from has failed at the last step.",
    "It's <em>not throwing a file over the wall.</em> It's a conversation: specs, intent, edge cases, and the states you designed.",
    "Good handoff answers the developer's questions <b>before they ask them:</b> spacing, colour, behaviour, and what happens when things go wrong.",
    "Everything you built, variables, components, states, was quietly preparing for this moment. A systematised file hands off cleanly.",
  ] },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"The Handoff Tool", title:"Figma Dev Mode",
  layout:"cards3",
  body:[
    { icon:"devmode", t:"Inspect", b:"Developers read exact sizes, spacing, colours, and typography as values, and as ready code snippets." },
    { icon:"variables", t:"Tokens as code", tone:"navy", b:"Your variables surface as named tokens, the same names the developer uses in code. Design and build speak one language." },
    { icon:"check", t:"Ready for dev", b:"Mark frames ready, track changes, and let developers see exactly what's current and what's still moving." },
  ],
  footnote:"Dev Mode is why the variables work on Day 3 pays off now. The token you named is the token they ship." },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Reading a Design", title:"Inspect + Measure",
  layout:"bullets",
  body:[
    "<b>Select any element and Dev Mode shows its full spec:</b> dimensions, padding, colour values, font, and border radius.",
    "<b>Hover between elements to measure spacing</b> in pixels. No guessing, no asking, the gaps are right there.",
    "<b>Code snippets generate</b> for CSS, iOS, and Android, a starting point the developer adapts, not blindly copies.",
    "The cleaner your auto layout and variables, the cleaner and more trustworthy these specs and snippets are.",
  ] },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Getting Assets Out", title:"Exporting + Asset Settings",
  layout:"cards2",
  body:[
    { tone:"gold", t:"Export settings", b:"Set any layer to export as PNG, JPG, SVG, or PDF, at multiple resolutions at once. Icons and illustrations go out as SVG, sharp at any size." },
    { tone:"navy", t:"Naming and slices", b:"Name exports clearly and use slices for precise regions. Tidy, well-named assets save the developer hours and prevent the wrong file shipping." },
  ],
  footnote:"Export discipline mirrors layer discipline. A messy file exports messy assets." },

{ type:"theory", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Collaboration + Safety", title:"Version History + Sharing",
  layout:"bullets",
  body:[
    "<b>Figma autosaves a full version history.</b> Name key versions, and you can always roll back to any earlier state.",
    "<b>Share with precise permissions:</b> view or edit, per person or by link. Developers usually need view plus Dev Mode, not edit.",
    "<b>Comments live on the canvas,</b> pinned to exact elements. Feedback and questions stay attached to what they're about.",
    "This is the same collaborative spine as FigJam on Day 1. One platform, from first sticky to final handoff.",
  ] },

{ type:"exercise", day:5, session:2, tool:"figma",
  task:"Prepare a {hl}Handoff{/hl}",
  sub:"Open your design in Dev Mode. Mark a frame ready for dev. Set up an SVG export for one icon. Add a spec comment.",
  minutes:25,
  deliverable:"One frame marked dev-ready, one asset export configured, one clarifying comment pinned." },

{ type:"wrap", day:5, session:2, sessionTitle:"Dev Handoff + Sharing",
  eyebrow:"Session 2 Complete", title:"Three Things to Take Into S3",
  cards:[
    { n:"01", t:"Handoff is a conversation", b:"Not a file thrown over a wall. It answers the developer's questions before they ask: specs, states, behaviour, and edge cases." },
    { n:"02", t:"Dev Mode pays off your system", b:"Inspect gives exact specs and code. Your variables arrive as the same named tokens the developer ships. Design and build speak one language." },
    { n:"03", t:"Version history and comments protect the work", b:"Roll back anytime, share with the right permissions, and keep feedback pinned to the exact element. One platform from first sticky to handoff." },
  ],
  next:"S3 · Portfolio + Capstone I (1:30) · Now we turn this week's work into a story that gets you hired." },

// ══ DAY 5 · S3 · Portfolio + Capstone I (13) ═════════════════════
{ type:"cover", day:5, session:3, time:"1:30 - 3:30",
  title:"Portfolio\n+ {hl}Capstone I{/hl}",
  subtitle:"The Case Study Narrative · Building Your Story" },

{ type:"statement", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  quote:"\"Nobody hires the prettiest screens.\nThey hire {hl}the clearest thinking.{/hl}\"",
  attribution:"A portfolio sells your process, not your pixels." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Truth About Portfolios", title:"What a Portfolio Is Really For",
  layout:"bullets",
  body:[
    "<b>A portfolio proves how you think,</b> not how you decorate. Reviewers scan for reasoning, decisions, and judgement.",
    "The strongest portfolios are <em>case studies,</em> not galleries. A wall of pretty screens tells no one why anything was done.",
    "Hiring managers spend <b>seconds per project.</b> Your narrative has to make the value obvious fast, then reward a deeper read.",
    "One well-told case study beats ten thin ones. <b>Depth over volume,</b> always.",
  ] },

{ type:"framework", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Structure That Works", title:"The Case Study Arc",
  kind:"flow",
  data:{ steps:[
    { n:"01", t:"Problem", d:"What was wrong, for whom, and why it mattered. Set the stakes." },
    { n:"02", t:"Research", d:"What you did to understand it. Methods, and what you found." },
    { n:"03", t:"Insight", gold:true, d:"The key realisation that changed your direction. The turning point." },
    { n:"04", t:"Decisions", d:"What you designed and, crucially, why. The trade-offs you made." },
    { n:"05", t:"Outcome", d:"What happened. Results, learnings, what you'd do next." },
  ]},
  note:"The insight step is what separates a memorable case study from a project log. Lead with the thinking." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"The Most Skipped Step", title:"Show the Why, Not Just the What",
  layout:"cards2",
  body:[
    { tone:"navy", t:"Weak · a screen tour", b:"\"Here's the home screen. Here's the profile. Here's the settings.\" It describes what you made. It says nothing about your judgement, so it proves nothing." },
    { tone:"gold", t:"Strong · a decision story", b:"\"Users abandoned at checkout, so I moved the cost up front and cut the steps from eight to three. Drop-off fell.\" It shows a problem, a decision, a result." },
  ],
  footnote:"For every screen you show, answer one question: why is it like this and not otherwise?" },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Telling It Well", title:"Portfolio Storytelling Principles",
  layout:"bullets",
  body:[
    "<b>Lead with the outcome or the insight,</b> not a long preamble. Hook the reader in the first screenful.",
    "<b>Be honest about constraints and failures.</b> \"This didn't work, so I changed it\" reads as maturity, not weakness.",
    "<b>Show the messy middle:</b> sketches, rejected ideas, test findings. Process artefacts prove the thinking is real.",
    "<b>Quantify where you can,</b> qualify where you can't. \"Cut drop-off\" is good. \"Cut drop-off by a third\" is better.",
  ] },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"You Already Have One", title:"Your Week Is a Case Study",
  layout:"split",
  body:{
    left:[
      "<b>You've unknowingly built a full case study this week,</b> following the exact arc that gets people hired.",
      "Problem and research: <em>Day 1 and 2.</em> Insight: your JTBD and synthesis. Decisions: your wireframes, prototype, and tests.",
      "Outcome: your usability findings and what you'd do next. <b>It's all there, in your Figma and FigJam files.</b>",
    ],
    right:{ tone:"gold", t:"The capstone",
      b:"For the rest of today, you assemble this week's work into one portfolio case study. Problem, research, insight, decisions, outcome. By 5pm tomorrow you walk out with a real, presentable project, not just notes." },
  } },

{ type:"toolOpen", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Hands On", title:"Open a Fresh Figma Page",
  tool:"figma",
  instruction:"Create a page named Case Study",
  sub:"We'll lay out your week as a five-section narrative: problem, research, insight, decisions, outcome.",
  need:["All your files from Days 1 to 4","Your research, persona, and test findings","The case study arc"] },

{ type:"exercise", day:5, session:3, tool:"figma",
  task:"Capstone I · {hl}Structure Your Story{/hl}",
  sub:"Lay out the five sections. Drop in your strongest artefact for each. Write a one-line caption per section.",
  minutes:35,
  deliverable:"A five-section case study skeleton with your best artefact and a caption in each." },

{ type:"discussion", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  label:"The Insight Test",
  question:"In one sentence:\nwhat was the {hl}key insight{/hl}\nthat shaped your design this week?",
  hint:"If you can't say it in a sentence, the case study isn't focused yet. 2 minutes." },

{ type:"theory", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Common Mistakes", title:"What Sinks a Portfolio",
  layout:"cards3",
  body:[
    { icon:"warn", t:"All output, no thinking", b:"Screens with no story. The reviewer can't tell whether you decided anything or just decorated." },
    { icon:"warn", t:"Too long, no hierarchy", tone:"navy", b:"A wall of text and images with no lead, no structure. The reader bounces before the good part." },
    { icon:"warn", t:"No outcome or reflection", b:"It ends at the final screen. No results, no learnings, no sense that you'd grow from it." },
  ],
  footnote:"Avoid these three and you're ahead of most portfolios reviewers see all day." },

{ type:"reference", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Reference · Keep This Open", title:"The Case Study Checklist",
  head:["Section","Must Answer","Common Failure"],
  rows:[
    ["Problem","What was wrong, for whom, why it mattered","Starting with the solution, no stakes set"],
    ["Research","What you did and what you found","Listing methods with no findings"],
    ["Insight","The realisation that changed direction","No turning point, just a project log"],
    ["Decisions","What you designed and why","Showing screens without the reasoning"],
    ["Outcome","Results, learnings, what's next","Ending at the final screen, no reflection"],
    ["Story","Leads with insight, honest about constraints","A wall of text with no hierarchy or hook"],
  ],
  note:"If a section can't answer its question, that's the part of your case study to rework first." },

{ type:"wrap", day:5, session:3, sessionTitle:"Portfolio + Capstone I",
  eyebrow:"Session 3 Complete", title:"Three Things to Take Into S4",
  cards:[
    { n:"01", t:"A portfolio sells thinking", b:"Case studies, not galleries. Reviewers scan for reasoning and judgement in seconds. One deep story beats ten thin ones." },
    { n:"02", t:"The arc is problem to outcome", b:"Problem, research, insight, decisions, outcome. Lead with the insight. For every screen, answer why it is the way it is." },
    { n:"03", t:"You already have the case study", b:"This whole week followed the arc. Your files hold the problem, research, insight, decisions, and outcome. Now you assemble it." },
  ],
  next:"S4 · Capstone II + Wrap (3:40) · Finish the story, present it, and close the masterclass." },

// ══ DAY 5 · S4 · Capstone II + Wrap (5) ══════════════════════════
{ type:"cover", day:5, session:4, time:"3:40 - 5:00",
  title:"Capstone II\n+ {hl}Wrap{/hl}",
  subtitle:"Finish · Present · Where You Go Next" },

{ type:"exercise", day:5, session:4, tool:"figma",
  task:"Capstone II · {hl}Finish + Polish{/hl}",
  sub:"Complete your case study. Tighten captions, apply the design principles, make the narrative flow start to finish.",
  minutes:35,
  deliverable:"A complete, presentable case study: problem to outcome, with your artefacts and your reasoning." },

{ type:"exercise", day:5, session:4, tool:"figjam",
  task:"Present in {hl}90 Seconds{/hl}",
  sub:"Pair up. Walk your partner through your case study in 90 seconds: problem, insight, decision, outcome.",
  minutes:20,
  deliverable:"A 90-second spoken walkthrough of your case study. Practice the story you'll tell in interviews." },

{ type:"theory", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Where You Go Next", title:"Your Path From Here",
  layout:"cards3",
  body:[
    { icon:"portfolio", t:"Build the portfolio", b:"Turn this capstone into a published case study. Add one or two more real projects using the same arc." },
    { icon:"figma", t:"Keep the tools sharp", b:"Use Figma weekly. Rebuild interfaces you admire. Fluency comes from reps, not from courses alone." },
    { icon:"research", t:"Stay close to users", b:"Every project, talk to real people. The research habit is what separates designers from decorators long term." },
  ],
  footnote:"You have the method, the tools, and the AI workflows. From here it's practice, projects, and people." },

{ type:"wrap", day:5, session:4, sessionTitle:"Capstone II + Wrap",
  eyebrow:"Masterclass Complete", title:"Five Days. One Complete Designer.",
  cards:[
    { n:"01", t:"You can run the full process", b:"Research, JTBD, synthesis with AI, wireframes, prototypes, usability testing, handoff. The entire arc, end to end, with judgement at every step." },
    { n:"02", t:"You think and build in systems", b:"Heuristics and principles as your lens. Tokens, components, variants, and atomic design as your craft. Figma fluency throughout." },
    { n:"03", t:"You have a story to tell", b:"A complete, portfolio-ready case study and the narrative to present it. You leave with proof, not just knowledge." },
  ],
  next:"Thank you. Your certificate is at designient.com/verify. Now go build, talk to users, and tell the story." },

];
```

---

## 10. `content/index.ts` - assembling the deck

```ts
import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import { Slide } from "../types";

// Concatenate in order and inject a running 1-based page number.
// `page` is NOT stored per slide in the manifest; it is computed here so
// reordering or inserting slides never requires re-numbering by hand.
const raw: Slide[] = [...day1, ...day2, ...day3, ...day4, ...day5];

export const deck: Slide[] = raw.map((s, i) => ({ ...s, page: i + 1 }));

// Sanity check: expect 247 slides.
if (deck.length !== 247) {
  console.warn(`Deck length is ${deck.length}, expected 247.`);
}
```

The page badge in `Chrome` reads `String(page).padStart(2, "0")`. DayDivider, SessionCover, and Exercise slides don't show the page badge (they have no Chrome), but they still consume a page index so the running count stays correct.

---

## 11. Build order for Cursor

Work in this sequence. Don't start content until the system renders one slide of every type cleanly.

1. **Scaffold** the Vite + React + TS project, install Tailwind, Phosphor, and the fonts (Section 1).
2. **Tokens first.** Paste the Tailwind config (Section 2.1). Build `index.css` with the print rules (Section 7.2) and the font imports.
3. **Primitives.** Build `Slide`, `Chrome`, `Deco`, `Header`, `Bullets`, `Card`, `Grid`, `Table` exactly to the rhythm rules in Section 2.2. This is where consistency is won or lost. Get the spacing tokens right here and every slide inherits them.
4. **Icon map.** Build `deck/icons.ts` (Section 5).
5. **One of each slide type.** Build all 11 slide components (Section 6). Render one hard-coded example of each and eyeball them against the rules. Fix spacing at the component level only.
6. **Renderer.** Build `SlideRenderer.tsx` mapping `type` to component, and the `App.tsx` viewer with the scaler and arrow-key navigation (Section 7.1).
7. **Content.** Paste Sections 9.1 to 9.5 into `day1.ts` to `day5.ts`, and `content/index.ts` from Section 10. The deck should now be 247 slides.
8. **PDF.** Wire the `?print=1` route and the export script (Section 7.2). Generate `UX_Masterclass_Deck.pdf` and check the page count is 247 at 1920x1080.

### Acceptance checks
- Every slide is exactly 1920x1080, nothing clipped, nothing past the safe area.
- No emojis anywhere. Every icon is Phosphor. No em dashes in any rendered text.
- Chrome is identical in position and size on every content slide. DayDivider and SessionCover have none.
- Type sizes only ever come from the scale in 2.1. Spacing only ever from the spacing tokens.
- Exercise slides are dark, full-bleed, with a timer badge and tool icon. ToolOpen slides are light with the gold panel.
- The five day-divider slides each carry the correct day number, theme, and four-session list.
- PDF is 247 pages, 16:9, fonts embedded, background printed.

---

**End of spec.** Everything needed to build all 247 slides is above: the system in Sections 1 to 8, the full content in Section 9, assembly in Section 10, and the build order in Section 11. Build the system first, validate one of each slide type, then pour in the content.
