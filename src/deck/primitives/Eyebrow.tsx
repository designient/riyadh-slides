import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  dark?: boolean;
}

export function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <p
      className={`mb-s1 font-body text-eyebrow font-semibold uppercase ${dark ? "text-gl" : "text-go"}`}
    >
      {children}
    </p>
  );
}
