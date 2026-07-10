import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

const requiredPdfs = [
  { path: join(root, "public", "UX-Masterclass-Deck.pdf"), label: "Main deck PDF" },
  { path: join(root, "public", "takeaways", "day-1-discovery-kit.pdf"), label: "Day 1 takeaway" },
  { path: join(root, "public", "takeaways", "day-2-research-kit.pdf"), label: "Day 2 takeaway" },
  { path: join(root, "public", "takeaways", "day-3-design-system-kit.pdf"), label: "Day 3 takeaway" },
  { path: join(root, "public", "takeaways", "day-4-responsible-design-kit.pdf"), label: "Day 4 takeaway" },
  { path: join(root, "public", "takeaways", "day-5-portfolio-kit.pdf"), label: "Day 5 takeaway" },
];

let failed = false;

for (const pdf of requiredPdfs) {
  const exists = existsSync(pdf.path);
  const size = exists ? statSync(pdf.path).size : 0;

  if (!exists || size < 10_000) {
    console.error(`Missing or too small: ${pdf.label} (${pdf.path})`);
    failed = true;
  } else {
    console.log(`PDF ok: ${pdf.label} (${(size / 1024).toFixed(0)} KB)`);
  }
}

if (failed) {
  console.error("\nRun `npm run build:local` locally to generate all PDFs before deploying.");
  process.exit(1);
}

console.log(`\nAll ${requiredPdfs.length} PDFs verified.`);
