import { Eyebrow } from "./Eyebrow";
import { Title } from "./Title";
import { Rule } from "./Rule";

interface HeaderProps {
  eyebrow: string;
  title: string;
  dark?: boolean;
}

export function Header({ eyebrow, title, dark = false }: HeaderProps) {
  return (
    <div className="mt-s7 shrink-0">
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <Title dark={dark}>{title}</Title>
      <Rule className="mt-s3" />
    </div>
  );
}
