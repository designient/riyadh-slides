interface RuleProps {
  className?: string;
}

export function Rule({ className = "" }: RuleProps) {
  return (
    <div
      className={`h-1 w-14 rounded-full bg-gradient-to-r from-go to-gl ${className}`}
    />
  );
}
