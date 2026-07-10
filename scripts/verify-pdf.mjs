import { appendFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");
const pdfPath = join(root, "public", "UX-Masterclass-Deck.pdf");
const logPath = join(root, ".cursor", "debug-02ec83.log");

function debugLog(message, data, hypothesisId) {
  const entry = {
    sessionId: "02ec83",
    runId: process.env.DEBUG_RUN_ID ?? "verify",
    hypothesisId,
    location: "scripts/verify-pdf.mjs",
    message,
    data,
    timestamp: Date.now(),
  };
  // #region agent log
  try {
    appendFileSync(logPath, `${JSON.stringify(entry)}\n`);
  } catch {
    /* ignore if log dir missing */
  }
  // #endregion
}

const exists = existsSync(pdfPath);
const size = exists ? statSync(pdfPath).size : 0;

debugLog("PDF verification check", { pdfPath, exists, sizeBytes: size }, "A");

if (!exists || size < 1_000_000) {
  console.error(
    "Missing public/UX-Masterclass-Deck.pdf — run `npm run build:local` locally to generate it before deploying.",
  );
  debugLog("PDF verification failed", { exists, sizeBytes: size }, "A");
  process.exit(1);
}

console.log(`PDF ok: ${pdfPath} (${(size / 1024 / 1024).toFixed(1)} MB)`);
debugLog("PDF verification passed", { sizeBytes: size }, "A");
