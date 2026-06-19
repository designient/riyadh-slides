import { parseRichText } from "../utils";

interface TableProps {
  head: string[];
  rows: string[][];
}

export function Table({ head, rows }: TableProps) {
  return (
    <div className="flex-1 overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-nv">
            {head.map((h, i) => (
              <th
                key={i}
                className="px-s4 py-s3 text-left font-display text-small font-bold uppercase tracking-wide text-go"
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
                  className={`px-s4 py-s3 text-body ${ci === 0 ? "font-semibold text-nv" : "text-t2"}`}
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
