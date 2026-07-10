export type Day = 1 | 2 | 3 | 4 | 5;
export type RichText = string;

export interface SessionMeta {
  day: Day;
  session: number;
  sessionTitle: string;
}

export interface Base extends SessionMeta {
  page: number;
}

export type ManifestSlide =
  | {
      type: "dayDivider";
      dayLabel: string;
      title: string;
      theme: string;
      sessions: string[];
      dayNumber: number;
    }
  | {
      type: "cover";
      day: Day;
      session: number;
      time: string;
      title: string;
      subtitle: string;
    }
  | (SessionMeta & { type: "statement"; quote: string; attribution: string })
  | (SessionMeta & {
      type: "theory";
      eyebrow: string;
      title: string;
      layout: "bullets" | "cards2" | "cards3" | "cards4" | "cards5" | "split";
      body: unknown;
      footnote?: string;
    })
  | (SessionMeta & {
      type: "framework";
      eyebrow: string;
      title: string;
      kind: "flow" | "compare" | "stack" | "diagram";
      data: unknown;
      note?: string;
    })
  | (SessionMeta & {
      type: "example";
      eyebrow: string;
      title: string;
      mode: "split" | "annotated";
      panels: unknown;
      takeaway?: string;
    })
  | (SessionMeta & {
      type: "discussion";
      label: string;
      question: string;
      hint: string;
    })
  | (SessionMeta & {
      type: "toolOpen";
      eyebrow: string;
      title: string;
      tool: ToolKey;
      instruction: string;
      sub: string;
      need: string[];
    })
  | {
      type: "exercise";
      day: Day;
      session: number;
      tool: ToolKey;
      task: string;
      sub: string;
      minutes: number;
      deliverable?: string;
    }
  | (SessionMeta & {
      type: "reference";
      eyebrow: string;
      title: string;
      head: string[];
      rows: string[][];
      note?: string;
    })
  | (SessionMeta & {
      type: "facilitator";
      eyebrow: string;
      name: string;
      tagline: string;
      bio: string[];
      stats: { value: string; label: string }[];
      photo: string;
    })
  | (SessionMeta & {
      type: "wrap";
      eyebrow: string;
      title: string;
      cards: { n: string; t: string; b: string }[];
      next: string;
    });

export type ToolKey = "figma" | "figjam" | "claude" | "perplexity";

export type Slide = ManifestSlide;

export type DeckSlide = ManifestSlide & { page: number };

export interface TheoryCard {
  icon?: string;
  n?: string;
  t: string;
  b: string;
  tone?: "white" | "navy" | "gold";
  tag?: string;
}

export interface FlowStep {
  n: string;
  t: string;
  d: string;
  gold?: boolean;
}

export interface ComparePanel {
  tone: "navy" | "gold";
  label: string;
  sub: string;
  def: string;
  items: string[];
}

export interface StackLayer {
  t: string;
  d: string;
}
