import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { highlightMultiline } from "../utils";

interface DiscussionProps extends Base {
  label: string;
  question: string;
  hint: string;
}

export function Discussion({
  day,
  session,
  sessionTitle,
  page,
  label,
  question,
  hint,
}: DiscussionProps) {
  return (
    <Slide variant="darkNv">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} dark />
      <div className="flex min-h-0 flex-1 flex-col justify-center">
        <span className="mb-s6 inline-flex w-fit rounded-pill border border-go/30 bg-go/16 px-s5 py-s2 font-body text-eyebrow font-semibold uppercase text-gl">
          {label}
        </span>
        <h2 className="max-w-[1500px] font-display text-[60px] font-semibold leading-tight text-white">
          {highlightMultiline(question, "text-white", "text-gl")}
        </h2>
        <p className="mt-s6 text-body text-white">{hint}</p>
      </div>
    </Slide>
  );
}
