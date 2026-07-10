import { parseRichText } from "../utils";

interface TableProps {
  head: string[];
  rows: string[][];
}

export function Table({ head, rows }: TableProps) {
  const veryDense = rows.length >= 9;
  const dense = rows.length >= 6;
  const headPad = veryDense ? "px-s4 py-s2" : dense ? "px-s4 py-s2" : "px-s4 py-s3";
  const cellPad = veryDense ? "px-s4 py-s1" : dense ? "px-s4 py-s2" : "px-s4 py-s3";
  const bodyTextSize = dense ? "text-cardbody" : "text-body";

  return (
    <div className="flex-1 overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-nv">
            {head.map((h, i) => (
              <th
                key={i}
                className={`${headPad} text-left font-display text-small font-bold uppercase tracking-wide text-go`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? "bg-go/4" : "bg-transparent"}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`${cellPad} ${bodyTextSize} ${ci === 0 ? "font-semibold text-nv" : "text-t2"}`}
                >
                  {parseRichText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
