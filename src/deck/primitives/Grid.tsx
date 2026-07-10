import type { ReactNode } from "react";

interface GridProps {
  cols: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}

const colClasses = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

export function Grid({ cols, children, className = "" }: GridProps) {
  return (
    <div className={`grid gap-s4 ${colClasses[cols]} ${className}`}>
      {children}
    </div>
  );
}
