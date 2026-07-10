import { day1Pages } from "./data/day1";
import { day2Pages } from "./data/day2";
import { day3Pages } from "./data/day3";
import { day4Pages } from "./data/day4";
import { day5Pages } from "./data/day5";
import type { TakeawayDayId, TakeawayPack } from "./types";

export const takeawayPacks: TakeawayPack[] = [
  {
    id: "day1",
    day: 1,
    title: "Discovery & Heuristics Kit",
    description: "Heuristic audit sheet, prioritisation matrix, affinity mapping guide, and responsible design flags.",
    pdfPath: "/takeaways/day-1-discovery-kit.pdf",
    filename: "Day-1-Discovery-Heuristics-Kit.pdf",
    pages: day1Pages,
  },
  {
    id: "day2",
    day: 2,
    title: "Research & AI Synthesis Kit",
    description: "5-prompt research pack, interview guide, JTBD templates, and AI bias checklist.",
    pdfPath: "/takeaways/day-2-research-kit.pdf",
    filename: "Day-2-Research-AI-Synthesis-Kit.pdf",
    pages: day2Pages,
  },
  {
    id: "day3",
    day: 3,
    title: "Design System & Privacy Kit",
    description: "Data handling checklist, token architecture, auto layout reference, and privacy-safe prompts.",
    pdfPath: "/takeaways/day-3-design-system-kit.pdf",
    filename: "Day-3-Design-System-Privacy-Kit.pdf",
    pages: day3Pages,
  },
  {
    id: "day4",
    day: 4,
    title: "Responsible Design Kit",
    description: "Accessibility checklist, AI governance reference, pre-ship checklist, and usability test script.",
    pdfPath: "/takeaways/day-4-responsible-design-kit.pdf",
    filename: "Day-4-Responsible-Design-Kit.pdf",
    pages: day4Pages,
  },
  {
    id: "day5",
    day: 5,
    title: "Handoff & Portfolio Kit",
    description: "Case study template, atomic design audit, dev handoff checklist, and capstone rubric.",
    pdfPath: "/takeaways/day-5-portfolio-kit.pdf",
    filename: "Day-5-Handoff-Portfolio-Kit.pdf",
    pages: day5Pages,
  },
];

export function getTakeawayPack(id: string): TakeawayPack | undefined {
  return takeawayPacks.find((p) => p.id === id);
}

export function isTakeawayDayId(id: string): id is TakeawayDayId {
  return takeawayPacks.some((p) => p.id === id);
}
