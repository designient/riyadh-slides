import { highlightMultiline } from "../utils";

interface TitleProps {
  children: string;
  dark?: boolean;
  size?: "h1" | "h2";
}

export function Title({ children, dark = false, size = "h1" }: TitleProps) {
  const sizeClass = size === "h2" ? "text-h2" : "text-h1";
  return (
    <h1
      className={`font-display font-bold ${sizeClass} ${dark ? "text-white" : "text-nv"}`}
    >
      {highlightMultiline(children, dark ? "text-white" : "text-nv", "text-gl")}
    </h1>
  );
}
