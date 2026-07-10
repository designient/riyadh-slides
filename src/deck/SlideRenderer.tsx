import type { DeckSlide } from "./types";
import { DayDivider } from "./slides/DayDivider";
import { SessionCover } from "./slides/SessionCover";
import { Statement } from "./slides/Statement";
import { Theory } from "./slides/Theory";
import { Framework } from "./slides/Framework";
import { Example } from "./slides/Example";
import { Discussion } from "./slides/Discussion";
import { ToolOpen } from "./slides/ToolOpen";
import { Exercise } from "./slides/Exercise";
import { Reference } from "./slides/Reference";
import { Facilitator } from "./slides/Facilitator";
import { Wrap } from "./slides/Wrap";

export function SlideRenderer({ slide }: { slide: DeckSlide }) {
  switch (slide.type) {
    case "dayDivider":
      return (
        <DayDivider
          dayLabel={slide.dayLabel}
          title={slide.title}
          theme={slide.theme}
          sessions={slide.sessions}
          dayNumber={slide.dayNumber}
        />
      );
    case "cover":
      return (
        <SessionCover
          day={slide.day}
          session={slide.session}
          time={slide.time}
          title={slide.title}
          subtitle={slide.subtitle}
        />
      );
    case "statement":
      return (
        <Statement
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          quote={slide.quote}
          attribution={slide.attribution}
        />
      );
    case "theory":
      return (
        <Theory
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          layout={slide.layout}
          body={slide.body}
          footnote={slide.footnote}
        />
      );
    case "framework":
      return (
        <Framework
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          kind={slide.kind}
          data={slide.data}
          note={slide.note}
        />
      );
    case "example":
      return (
        <Example
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          mode={slide.mode}
          panels={slide.panels}
          takeaway={slide.takeaway}
        />
      );
    case "discussion":
      return (
        <Discussion
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          label={slide.label}
          question={slide.question}
          hint={slide.hint}
        />
      );
    case "toolOpen":
      return (
        <ToolOpen
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          tool={slide.tool}
          instruction={slide.instruction}
          sub={slide.sub}
          need={slide.need}
        />
      );
    case "exercise":
      return (
        <Exercise
          day={slide.day}
          session={slide.session}
          tool={slide.tool}
          task={slide.task}
          sub={slide.sub}
          minutes={slide.minutes}
          deliverable={slide.deliverable}
        />
      );
    case "reference":
      return (
        <Reference
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          head={slide.head}
          rows={slide.rows}
          note={slide.note}
        />
      );
    case "facilitator":
      return (
        <Facilitator
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          name={slide.name}
          tagline={slide.tagline}
          bio={slide.bio}
          stats={slide.stats}
          photo={slide.photo}
        />
      );
    case "wrap":
      return (
        <Wrap
          day={slide.day}
          session={slide.session}
          sessionTitle={slide.sessionTitle}
          page={slide.page}
          eyebrow={slide.eyebrow}
          title={slide.title}
          cards={slide.cards}
          next={slide.next}
        />
      );
    default:
      return null;
  }
}
