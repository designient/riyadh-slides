import type { ReactNode } from "react";

export function parseRichText(
  text: string,
  dark = false,
  className = "",
): ReactNode[] {
  const parts = text.split(/(<b>.*?<\/b>|<em>.*?<\/em>)/g);
  return parts.map((part, i) => {
    if (part.startsWith("<b>") && part.endsWith("</b>")) {
      return (
        <b
          key={i}
          className={`font-semibold ${dark ? "text-white" : "text-nv"}`}
        >
          {part.slice(3, -4)}
        </b>
      );
    }
    if (part.startsWith("<em>") && part.endsWith("</em>")) {
      return (
        <em key={i} className="not-italic font-medium text-go">
          {part.slice(4, -5)}
        </em>
      );
    }
    return (
      <span key={i} className={className}>
        {part}
      </span>
    );
  });
}

export function parseHighlight(
  text: string,
  baseClass = "",
  hlClass = "text-gl",
): ReactNode[] {
  const parts = text.split(/(\{hl\}.*?\{\/hl\})/g);
  return parts.map((part, i) => {
    if (part.startsWith("{hl}") && part.endsWith("{/hl}")) {
      return (
        <span key={i} className={hlClass}>
          {part.slice(4, -5)}
        </span>
      );
    }
    return <span key={i} className={baseClass}>{part}</span>;
  });
}

export function multilineText(text: string): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

export function richMultiline(text: string, dark = false): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {parseRichText(line, dark)}
    </span>
  ));
}

export function highlightMultiline(
  text: string,
  baseClass = "",
  hlClass = "text-gl",
): ReactNode {
  const lines = text.split("\n");
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {parseHighlight(line, baseClass, hlClass)}
    </span>
  ));
}
