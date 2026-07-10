import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { parseRichText } from "../utils";

interface ExampleItem {
  l: string;
  t: string;
}

interface ExamplePanel {
  heading?: string;
  items: ExampleItem[];
}

interface ExampleProps extends Base {
  eyebrow: string;
  title: string;
  mode: "split" | "annotated";
  panels: unknown;
  takeaway?: string;
}

function StripItem({ item, negative }: { item: ExampleItem; negative?: boolean }) {
  return (
    <div className="flex gap-s4 border-b border-black/5 py-s3 last:border-0">
      <span className="w-[120px] shrink-0 font-display text-small font-bold text-go">
        {item.l}
      </span>
      <span className={`text-cardbody ${negative ? "text-t2" : "text-t2"}`}>
        {parseRichText(item.t)}
      </span>
    </div>
  );
}

function ExamplePanelBox({
  panel,
  negative,
}: {
  panel: ExamplePanel;
  negative?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col rounded-card p-s5 ${negative ? "border border-[#FECACA] bg-[#FEF2F2]" : "border border-go/26 bg-go/10"}`}
    >
      {panel.heading && (
        <h3 className="mb-s3 font-display text-cardtitle font-bold text-nv">
          {panel.heading}
        </h3>
      )}
      {panel.items.map((item, i) => (
        <StripItem key={i} item={item} negative={negative} />
      ))}
    </div>
  );
}

export function Example({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  mode,
  panels,
  takeaway,
}: ExampleProps) {
  const renderPanels = () => {
    if (mode === "split") {
      const p = panels as { negative: ExamplePanel; positive: ExamplePanel };
      return (
        <div className="grid flex-1 grid-cols-2 gap-s4">
          <ExamplePanelBox panel={p.negative} negative />
          <ExamplePanelBox panel={p.positive} />
        </div>
      );
    }
    const items = panels as ExampleItem[];
    return (
      <div className="flex flex-1 flex-col rounded-card border border-go/26 bg-go/10 p-s5">
        <div className="border-l-4 border-go pl-s5">
          {items.map((item, i) => (
            <div key={i} className="mb-s4 last:mb-0">
              <span className="font-display text-small font-bold text-go">
                {item.l}
              </span>
              <p className="mt-s1 text-cardbody text-t2">
                {parseRichText(item.t)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s6 flex min-h-0 flex-1 flex-col">{renderPanels()}</div>
      {takeaway && (
        <p className="mt-s4 shrink-0 text-small italic text-t3">{takeaway}</p>
      )}
    </Slide>
  );
}
