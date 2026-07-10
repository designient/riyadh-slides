import { useState } from "react";
import type { Base } from "../types";
import { Slide } from "../primitives/Slide";
import { Chrome } from "../primitives/Chrome";

interface FacilitatorProps extends Base {
  eyebrow: string;
  name: string;
  tagline: string;
  bio: string[];
  stats: { value: string; label: string }[];
  photo: string;
}

export function Facilitator({
  day,
  session,
  sessionTitle,
  page,
  eyebrow,
  name,
  tagline,
  bio,
  stats,
  photo,
}: FacilitatorProps) {
  const [photoError, setPhotoError] = useState(false);
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 3);

  return (
    <Slide variant="coverGrad" largeDeco>
      <Chrome day={day} session={session} sessionTitle={sessionTitle} page={page} dark />
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex min-h-0 flex-1 gap-s10">
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <span className="mb-s4 inline-flex w-fit rounded-pill border border-go/30 bg-go/16 px-s5 py-s2 font-body text-eyebrow font-semibold uppercase text-gl">
              {eyebrow}
            </span>
            <h2 className="font-display text-[56px] font-bold leading-tight text-white">
              {name}
            </h2>
            <p className="mt-s3 text-lead text-gl">{tagline}</p>
            <div className="mt-s6 max-w-[920px] space-y-s4 text-body text-white/90">
              {bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-s8 grid grid-cols-5 gap-s4 border-t border-white/10 pt-s6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-go pt-s3">
                  <p className="font-display text-[28px] font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-s1 text-small text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-[340px] shrink-0 items-center justify-center">
            <div className="relative h-[420px] w-[300px] overflow-hidden rounded-card border border-white/10 shadow-2xl">
              {!photoError ? (
                <img
                  src={photo}
                  alt={name}
                  className="h-full w-full object-cover object-top"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-nm to-nv">
                  <span className="font-display text-[72px] font-bold text-go/80">
                    {initials}
                  </span>
                  <p className="mt-s3 px-s4 text-center text-small text-white/60">
                    Add headshot at public/facilitator/sameer.png
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
