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
  layout: "bullets" | "cards2" | "cards3" | "cards4" | "split";
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

function TheoryCardItem({ card }: { card: TheoryCard }) {
  const tone = card.tone ?? "white";
  const onDark = tone === "navy";
  return (
    <Card tone={tone} center>
      {card.icon && <IconTile icon={card.icon} onDark={onDark} />}
      {card.n && (
        <span className={`mb-s2 font-display text-small font-bold ${onDark ? "text-gl" : "text-go"}`}>
          {card.n}
        </span>
      )}
      <h3 className={`font-display text-cardtitle font-bold ${onDark ? "text-white" : "text-nv"}`}>
        {card.t}
      </h3>
      <p className={`mt-s2 text-cardbody ${onDark ? "text-white" : "text-t2"}`}>
        {parseRichText(card.b)}
      </p>
      {card.tag && (
        <p className={`mt-s3 text-small italic ${onDark ? "text-white" : "text-t3"}`}>
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
        <div className="grid flex-1 grid-cols-2 gap-s4">
          <Bullets items={split.left} />
          <Card tone={(split.right.tone as "gold" | "navy") ?? "gold"} center>
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
    const cols = layout === "cards2" ? 2 : layout === "cards3" ? 3 : 4;
    const cards = body as TheoryCard[];
    return (
      <Grid cols={cols as 2 | 3 | 4}>
        {cards.map((card, i) => (
          <TheoryCardItem key={i} card={card} />
        ))}
      </Grid>
    );
  };

  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s6 flex min-h-0 flex-1 flex-col">{renderContent()}</div>
      {footnote && (
        <p className="mt-s4 shrink-0 text-small italic text-t3">{footnote}</p>
      )}
    </Slide>
  );
}
