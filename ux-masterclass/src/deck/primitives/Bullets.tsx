import type { RichText } from "../types";
import { parseRichText } from "../utils";

interface BulletsProps {
  items: RichText[];
  dark?: boolean;
  size?: "body" | "cardbody";
}

export function Bullets({ items, dark = false, size = "body" }: BulletsProps) {
  const textSize = size === "cardbody" ? "text-cardbody" : "text-body";
  return (
    <ul className="flex flex-col gap-s3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-s3">
          <span className="mt-[11px] h-[10px] w-[10px] shrink-0 rounded-full bg-go" />
          <span
            className={`${textSize} ${dark ? "text-white" : "text-t2"}`}
          >
            {parseRichText(item, dark)}
          </span>
        </li>
      ))}
    </ul>
  );
}
