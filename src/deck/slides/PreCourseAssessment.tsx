import { QrCode } from "@phosphor-icons/react";
import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";
import { Header } from "../primitives/Header";
import { parseRichText } from "../utils";

interface PreCourseAssessmentProps extends Base {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  duration: string;
  formUrl: string;
  qrImage?: string;
  footnote?: string;
}

function QrPlaceholder() {
  const cells = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const corner =
      (row < 3 && col < 3) || (row < 3 && col > 4) || (row > 4 && col < 3);
    const filled = corner || (row + col) % 3 === 0;
    return filled;
  });

  return (
    <div className="relative flex h-[280px] w-[280px] items-center justify-center rounded-card border-2 border-dashed border-go/40 bg-wh p-s3 shadow-card">
      <div className="grid h-full w-full grid-cols-8 grid-rows-8 gap-[3px] opacity-25">
        {cells.map((filled, i) => (
          <div
            key={i}
            className={`rounded-[2px] ${filled ? "bg-nv" : "bg-transparent"}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-s2 bg-wh/85">
        <div className="flex h-16 w-16 items-center justify-center rounded-card bg-go/15">
          <QrCode size={36} weight="light" className="text-go" />
        </div>
        <p className="font-display text-small font-semibold text-nv">QR code coming soon</p>
      </div>
    </div>
  );
}

function QrPanel({ formUrl, qrImage }: { formUrl: string; qrImage?: string }) {
  const displayUrl = formUrl.replace(/^https?:\/\//, "");

  return (
    <div className="flex flex-col items-center">
      {qrImage ? (
        <img
          src={qrImage}
          alt="Pre-course assessment QR code"
          className="h-[280px] w-[280px] rounded-card border border-go/26 bg-wh object-contain p-s3 shadow-card"
        />
      ) : (
        <QrPlaceholder />
      )}
      <p className="mt-s4 font-display text-cardtitle font-semibold text-nv">
        Scan with your phone camera
      </p>
      <p className="mt-s2 max-w-[320px] break-all text-center font-mono text-small text-t3">
        {displayUrl}
      </p>
    </div>
  );
}

export function PreCourseAssessment({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  title,
  intro,
  bullets,
  duration,
  formUrl,
  qrImage,
  footnote,
}: PreCourseAssessmentProps) {
  return (
    <Slide variant="light">
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} />
      <Header eyebrow={eyebrow} title={title} />
      <div className="mt-s6 flex min-h-0 flex-1 gap-s10">
        <div className="flex min-w-0 flex-1 flex-col">
          <p className="text-lead text-t2">{intro}</p>
          <ul className="mt-s5 flex flex-col gap-s3">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-s3 text-body text-t2">
                <span className="mt-1 shrink-0 font-display font-bold text-go">▸</span>
                <span>{parseRichText(bullet)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-s6">
            <span className="inline-flex rounded-pill border border-go/30 bg-go/12 px-s5 py-s2 font-display text-small font-bold text-go">
              {duration}
            </span>
          </div>
          {footnote && (
            <p className="mt-auto pt-s6 text-small italic text-t3">{footnote}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center">
          <QrPanel formUrl={formUrl} qrImage={qrImage} />
        </div>
      </div>
    </Slide>
  );
}
