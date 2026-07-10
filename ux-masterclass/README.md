# UX Masterclass Slide Deck

A 194-slide presentation deck for the 5-day UX/UI Design Masterclass (Riyadh, July 2026).

Built with **Vite + React + TypeScript + Tailwind CSS** per the spec in `../UX_Masterclass_Deck_Cursor_Spec.md`.

## Quick start

```bash
cd ux-masterclass
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Controls

| Key | Action |
|-----|--------|
| `←` / `→` | Previous / next slide |
| `Space` | Next slide |
| `g` | Grid overview |
| `f` | Open print view (all slides) |

## Print / PDF export

1. Start the dev server: `npm run dev`
2. Open `http://localhost:5173/?print=1` and use Chrome **Print → Save as PDF** at 100% scale

Or use Playwright (requires `npm install -D playwright` and `npx playwright install chromium`):

```bash
npm run dev   # in one terminal
node scripts/export.mjs   # in another
```

### Per-session export

Filter slides with query params:

```
?print=1&day=2&session=3
```

## Structure

- `src/deck/content/day1.ts` … `day5.ts` — slide manifest (verbatim from spec)
- `src/deck/slides/` — 11 reusable slide components
- `src/deck/primitives/` — shared layout primitives (Slide, Chrome, Card, etc.)
- `tailwind.config.js` — design tokens (navy/gold palette, type scale, spacing)

## Build

```bash
npm run build
npm run preview
```
