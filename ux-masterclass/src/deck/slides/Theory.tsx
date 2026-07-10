import type { Base, TheoryCard } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { Bullets } from "../primitives/Bullets";
import { Card } from "../primitives/Card";
import { Grid } from "../primitives/Grid";
import { ICONS, type IconKey } from "../icons";
import { parseRichText } from "../utils";

interface TheoryProps extends Base {
  eyebrow: string;
  title: string;
  layout: "bullets" | "cards2" | "cards3" | "cards4" | "cards5" | "split";
  body: unknown;
  footnote?: string;
}

function IconTile({ icon, onDark = false }: { icon: string; onDark?: boolean }) {
  const Icon = ICONS[icon as IconKey];
  if (!Icon) return null;
  return (
    <div
      className={`mb-s3 flex h-11 w-11 items-center justify-center rounded-chip ${onDark ? "bg-go/22" : "bg-go"}`}
    >
      <Icon size={22} weight="regular" className={onDark ? "text-gl" : "text-nv"} />
    </div>
  );
}

function TheoryCardItem({ card, compact = false }: { card: TheoryCard; compact?: boolean }) {
  const tone = card.tone ?? "white";
  const onDark = tone === "navy";
  return (
    <Card tone={tone} center compact={compact}>
      {card.icon && <IconTile icon={card.icon} onDark={onDark} />}
      {card.n && (
        <span className={`mb-s1 font-display text-small font-bold ${onDark ? "text-gl" : "text-go"}`}>
          {card.n}
        </span>
      )}
      <h3 className={`font-display font-bold ${compact ? "text-body leading-snug" : "text-cardtitle"} ${onDark ? "text-white" : "text-nv"}`}>
        {card.t}
      </h3>
      <p className={`mt-s1 ${compact ? "text-small leading-snug" : "mt-s2 text-cardbody"} ${onDark ? "text-white" : "text-t2"}`}>
        {parseRichText(card.b)}
      </p>
      {card.tag && (
        <p className={`${compact ? "mt-s1 text-[17px] leading-snug" : "mt-s3 text-small"} italic ${onDark ? "text-white/80" : "text-t3"}`}>
          {card.tag}
        </p>
      )}
    </Card>
  );
}

export function Theory({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  layout,
  body,
  footnote,
}: TheoryProps) {
  const renderContent = () => {
    if (layout === "bullets") {
      return <Bullets items={body as string[]} />;
    }
    if (layout === "split") {
      const split = body as {
        left: string[];
        right: { tone?: string; t: string; b: string };
      };
      return (
        <div className="flex flex-1 gap-s6">
          <Bullets items={split.left} />
          <Card
            tone={(split.right.tone as "gold" | "navy") ?? "gold"}
            center
            className="flex-1"
          >
            <h3 className={`font-display text-cardtitle font-bold ${split.right.tone === "navy" ? "text-white" : "text-nv"}`}>
              {split.right.t}
            </h3>
            <p className={`mt-s2 text-cardbody ${split.right.tone === "navy" ? "text-white" : "text-t2"}`}>
              {parseRichText(split.right.b)}
            </p>
          </Card>
        </div>
      );
    }
    if (layout === "cards5") {
      const cards = body as TheoryCard[];
      const topRow = cards.slice(0, 3);
      const bottomRow = cards.slice(3, 5);
      return (
        <div className="flex min-h-0 flex-1 flex-col gap-s3">
          <Grid cols={3} className="flex-none">
            {topRow.map((card, i) => (
              <TheoryCardItem key={i} card={card} compact />
            ))}
          </Grid>
          <div className="grid flex-none grid-cols-6 gap-s3">
            {bottomRow.map((card, i) => (
              <div key={i} className={`col-span-2 ${i === 0 ? "col-start-2" : "col-start-4"}`}>
                <TheoryCardItem card={card} compact />
              </div>
            ))}
          </div>
        </div>
      );
    }
    const cols = layout === "cards2" ? 2 : layout === "cards3" ? 3 : 4;
    const cards = body as TheoryCard[];
    return (
      <Grid cols={cols as 2 | 3 | 4} className="flex-1">
        {cards.map((card, i) => (
          <TheoryCardItem key={i} card={card} />
        ))}
      </Grid>
    );
  };

  const isCards5 = layout === "cards5";

  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className={`flex min-h-0 flex-1 flex-col ${isCards5 ? "mt-s4" : "mt-s6"}`}>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">{renderContent()}</div>
        {footnote && (
          <p
            className={`shrink-0 italic text-t3 ${
              isCards5
                ? "mt-s3 border-t border-nv/10 pt-s3 text-small leading-snug"
                : "mt-s4 text-small"
            }`}
          >
            {footnote}
          </p>
        )}
      </div>
    </Slide>
  );
}
