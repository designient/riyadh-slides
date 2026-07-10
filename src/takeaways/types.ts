export type TakeawayDayId = "day1" | "day2" | "day3" | "day4" | "day5";

export interface TakeawayPage {
  eyebrow: string;
  title: string;
  head?: string[];
  rows?: string[][];
  bullets?: string[];
  fields?: { label: string; placeholder: string }[];
  note?: string;
}

export interface TakeawayPack {
  id: TakeawayDayId;
  day: number;
  title: string;
  description: string;
  pdfPath: string;
  filename: string;
  pages: TakeawayPage[];
}
