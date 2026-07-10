import type { Day } from "../types";

interface ChromeProps {
  day: Day;
  session: number;
  sessionTitle: string;
  page: number;
  dark?: boolean;
}

export function Chrome({ day, session, sessionTitle, page, dark = false }: ChromeProps) {
  return (
    <div className="flex shrink-0 items-center justify-between">
      <div className={`font-body text-chrome font-semibold ${dark ? "text-white" : "text-t2"}`}>
        SAMEER UL HAQUE
        <span className={dark ? "text-white" : "text-t3"}>
          <span className="text-go mx-[7px]">·</span>
          UX MASTERCLASS
        </span>
      </div>
      <div className={`flex items-center font-body text-chrome ${dark ? "text-white" : "text-t3"}`}>
        DAY {day}
        <span className="text-go mx-[7px]">·</span>
        S{session}
        <span className="text-go mx-[7px]">·</span>
        <span className="uppercase">{sessionTitle}</span>
        <span
          className="ml-s3 flex h-9 w-9 items-center justify-center rounded-full bg-go font-display text-[16px] font-bold text-nv"
        >
          {String(page).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
