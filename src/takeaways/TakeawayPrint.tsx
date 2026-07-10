import { getTakeawayPack } from "./content";
import { TakeawayPageSlide } from "./TakeawayPageSlide";

interface TakeawayPrintProps {
  dayId: string;
}

export function TakeawayPrint({ dayId }: TakeawayPrintProps) {
  const pack = getTakeawayPack(dayId);

  if (!pack) {
    return (
      <div className="flex h-full items-center justify-center bg-cr text-t2">
        Unknown takeaway pack: {dayId}
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {pack.pages.map((page, i) => (
        <TakeawayPageSlide key={i} page={page} packTitle={pack.title} />
      ))}
    </div>
  );
}
