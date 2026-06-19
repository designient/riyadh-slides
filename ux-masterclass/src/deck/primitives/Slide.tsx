import type { ReactNode } from "react";
import { Deco } from "./Deco";

type SlideVariant = "light" | "darkNv" | "darkNm" | "darkNs" | "coverGrad";

interface SlideProps {
  variant: SlideVariant;
  children: ReactNode;
  fullBleed?: boolean;
  largeDeco?: boolean;
}

const bgMap: Record<SlideVariant, string> = {
  light: "bg-cr",
  darkNv: "bg-nv",
  darkNm: "bg-nm",
  darkNs: "bg-ns",
  coverGrad: "bg-gradient-to-br from-nv to-nm",
};

export function Slide({
  variant,
  children,
  fullBleed = false,
  largeDeco = false,
}: SlideProps) {
  const isDark = variant !== "light";
  const isCover = variant === "coverGrad" || variant === "darkNs";

  return (
    <div
      className={`slide-stage ${bgMap[variant]} ${isDark ? "text-white" : ""} ${fullBleed ? "px-s11" : "flex flex-col px-s11 pt-s9 pb-s8"}`}
      style={variant === "coverGrad" ? { background: "linear-gradient(140deg, #0D1B2E, #1A2F4A)" } : undefined}
    >
      <Deco dark={isDark} large={largeDeco || isCover} />
      {children}
    </div>
  );
}
