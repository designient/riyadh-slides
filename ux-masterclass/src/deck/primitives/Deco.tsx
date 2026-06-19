interface DecoProps {
  dark?: boolean;
  large?: boolean;
}

function barHeight(i: number): number {
  const h =
    16 +
    Math.sin(i * 0.009) * 36 +
    Math.sin(i * 0.04 + 1) * 14 +
    Math.sin(i * 0.007 + 3) * 20;
  return Math.max(6, Math.min(72, h));
}

export function Deco({ dark = false, large = false }: DecoProps) {
  const ringColor = dark ? "#FFFFFF" : "#B8953F";
  const ringOpacity = dark ? 0.075 : 0.07;
  const barColor = dark ? "#FFFFFF" : "#B8953F";
  const barOpacity = dark ? 0.085 : 0.05;
  const size = large ? 860 : 660;

  const bars = [];
  for (let x = 0; x < 1920; x += 20) {
    const h = barHeight(x);
    bars.push(
      <rect
        key={x}
        x={x}
        y={1080 - h}
        width={7}
        height={h}
        rx={3.5}
        fill={barColor}
        opacity={barOpacity}
      />,
    );
  }

  const rings = [];
  for (let r = 70; r <= 550; r += 60) {
    rings.push(
      <circle
        key={r}
        cx={400}
        cy={400}
        r={r}
        fill="none"
        stroke={ringColor}
        strokeWidth={1.5}
        opacity={ringOpacity}
      />,
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute"
        style={{ right: -170, bottom: -190, width: size, height: size }}
        viewBox="0 0 800 800"
      >
        {rings}
      </svg>
      <svg
        className="absolute bottom-0 left-0"
        width={1920}
        height={1080}
        viewBox="0 0 1920 1080"
      >
        {bars}
      </svg>
    </div>
  );
}
