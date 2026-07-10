import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { Table } from "../primitives/Table";

interface ReferenceProps extends Base {
  eyebrow: string;
  title: string;
  head: string[];
  rows: string[][];
  note?: string;
}

export function Reference({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  head,
  rows,
  note,
}: ReferenceProps) {
  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s6 flex min-h-0 flex-1 flex-col">
        <Table head={head} rows={rows} />
      </div>
      {note && (
        <p className="mt-s4 shrink-0 text-small italic text-t3">{note}</p>
      )}
    </Slide>
  );
}
