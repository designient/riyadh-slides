import { day1 } from "./day1";
import { day2 } from "./day2";
import { day3 } from "./day3";
import { day4 } from "./day4";
import { day5 } from "./day5";
import type { DeckSlide, ManifestSlide as Slide } from "../types";

// Concatenate in order and inject a running 1-based page number.
// `page` is NOT stored per slide in the manifest; it is computed here so
// reordering or inserting slides never requires re-numbering by hand.
const raw: Slide[] = [...day1, ...day2, ...day3, ...day4, ...day5];

export const deck: DeckSlide[] = raw.map((s, i) => ({ ...s, page: i + 1 }) as DeckSlide);

// Sanity check: expect 247 slides.
if (deck.length !== 247) {
  console.warn(`Deck length is ${deck.length}, expected 247.`);
}
