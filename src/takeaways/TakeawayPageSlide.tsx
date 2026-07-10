import type { TakeawayPage } from "./types";
import { Header } from "../deck/primitives/Header";
import { Slide } from "../deck/primitives/Slide";
import { Table } from "../deck/primitives/Table";
import { parseRichText } from "../deck/utils";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-s4 flex flex-col gap-s3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-s3 text-body text-t2">
          <span className="mt-1 shrink-0 font-display text-go">▸</span>
          <span>{parseRichText(item)}</span>
        </li>
      ))}
    </ul>
  );
}

function FieldList({ fields }: { fields: { label: string; placeholder: string }[] }) {
  return (
    <div className="mt-s4 flex flex-col gap-s4">
      {fields.map((field, i) => (
        <div key={i}>
          <p className="font-display text-cardtitle font-semibold text-nv">{field.label}</p>
          <div className="mt-s2 min-h-[52px] rounded-chip border border-nv/15 bg-white/60 px-s4 py-s3 text-body text-t3">
            {field.placeholder || "\u00A0"}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TakeawayPageSlide({ page, packTitle }: { page: TakeawayPage; packTitle: string }) {
  return (
    <Slide variant="light">
      <div className="mb-s4 flex items-center justify-between border-b border-nv/10 pb-s3">
        <p className="font-body text-small font-semibold uppercase tracking-[0.12em] text-t3">
          UX Masterclass · Riyadh 2026
        </p>
        <p className="font-body text-small text-t3">{packTitle}</p>
      </div>
      <Header eyebrow={page.eyebrow} title={page.title} />
      <div className="mt-s5 flex min-h-0 flex-1 flex-col overflow-hidden">
        {page.head && page.rows && <Table head={page.head} rows={page.rows} />}
        {page.bullets && <BulletList items={page.bullets} />}
        {page.fields && <FieldList fields={page.fields} />}
      </div>
      {page.note && (
        <p className="mt-s4 shrink-0 text-small italic text-t3">{page.note}</p>
      )}
    </Slide>
  );
}
