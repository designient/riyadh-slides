import type { ReactNode } from "react";

interface CardProps {
  tone?: "white" | "navy" | "gold";
  children: ReactNode;
  center?: boolean;
}

const toneClasses: Record<string, string> = {
  white: "bg-wh border border-nv/9 shadow-card",
  navy: "bg-nv border border-white/12 shadow-card text-white",
  gold: "bg-go/10 border border-go/26 shadow-card",
};

export function Card({ tone = "white", children, center = false }: CardProps) {
  return (
    <div
      className={`flex flex-col rounded-card p-s5 ${toneClasses[tone]} ${center ? "justify-center" : ""}`}
    >
      {children}
    </div>
  );
}
