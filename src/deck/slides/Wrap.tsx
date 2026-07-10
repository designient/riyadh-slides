import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { Grid } from "../primitives/Grid";
import { Card } from "../primitives/Card";
import { parseRichText } from "../utils";

interface WrapProps extends Base {
  eyebrow: string;
  title: string;
  cards: { n: string; t: string; b: string }[];
  next: string;
}

export function Wrap({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  cards,
  next,
}: WrapProps) {
  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s6 flex min-h-0 flex-1 flex-col gap-s4">
        <Grid cols={3}>
          {cards.map((card, i) => (
            <Card key={i} tone="navy" center>
              <span className="font-display text-[42px] font-bold text-go">
                {card.n}
              </span>
              <h3 className="mt-s2 font-display text-cardtitle font-bold text-white">
                {card.t}
              </h3>
              <p className="mt-s2 text-cardbody text-white">
                {parseRichText(card.b)}
              </p>
            </Card>
          ))}
        </Grid>
        <div className="mt-auto rounded-card border border-go/26 bg-go/10 px-s6 py-s5">
          <p className="font-body text-eyebrow font-semibold uppercase text-go">
            NEXT UP
          </p>
          <p className="mt-s2 text-body text-t2">{next}</p>
        </div>
      </div>
    </Slide>
  );
}
