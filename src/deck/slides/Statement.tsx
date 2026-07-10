import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { highlightMultiline } from "../utils";

interface StatementProps extends Base {
  quote: string;
  attribution: string;
}

export function Statement({ day, session, sessionTitle, page, quote, attribution }: StatementProps) {
  return (
    <Slide variant="darkNv">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} dark />
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <div className="mb-s6 h-[5px] w-20 rounded-full bg-gradient-to-r from-go to-gl" />
        <blockquote className="max-w-[1500px] font-display text-stmt font-bold text-white">
          {highlightMultiline(quote, "text-white", "text-gl")}
        </blockquote>
        <p className="mt-s6 text-body italic text-white">{attribution}</p>
      </div>
    </Slide>
  );
}
