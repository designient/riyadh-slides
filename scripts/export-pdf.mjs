import { createServer } from "node:http";
import { appendFileSync, existsSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const port = 4173;
const pdfPath = join(root, "public", "UX-Masterclass-Deck.pdf");
const logPath = join(root, ".cursor", "debug-02ec83.log");

function debugLog(message, data, hypothesisId) {
  const entry = {
    sessionId: "02ec83",
    runId: process.env.DEBUG_RUN_ID ?? "export",
    hypothesisId,
    location: "scripts/export-pdf.mjs",
    message,
    data,
    timestamp: Date.now(),
  };
  // #region agent log
  try {
    appendFileSync(logPath, `${JSON.stringify(entry)}\n`);
  } catch {
    /* ignore */
  }
  // #endregion
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".json": "application/json",
};

function startStaticServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let path = req.url?.split("?")[0] ?? "/";
      if (path === "/") path = "/index.html";

      const file = join(dist, path);
      if (!file.startsWith(dist) || !existsSync(file)) {
        res.writeHead(404);
        res.end("Not found");
        return;
      }

      res.writeHead(200, {
        "Content-Type": MIME[extname(file)] ?? "application/octet-stream",
      });
      res.end(readFileSync(file));
    });

    server.listen(port, "127.0.0.1", () => resolve(server));
  });
}

if (!existsSync(join(dist, "index.html"))) {
  console.error("dist/index.html not found — run vite build first.");
  process.exit(1);
}

const server = await startStaticServer();
debugLog("Static server started", { port, dist }, "B");

let browser;
try {
  browser = await chromium.launch();
  debugLog("Chromium launched", { platform: process.platform }, "B");
} catch (error) {
  debugLog("Chromium launch failed", { error: String(error) }, "A");
  server.close();
  throw error;
}

const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

try {
  await page.goto(`http://127.0.0.1:${port}/?print=1`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  await page.waitForSelector(".slide-stage", { timeout: 30_000 });
  const slideCount = await page.locator(".slide-stage").count();
  debugLog("Slides rendered", { slideCount }, "C");
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(1500);

  await page.pdf({
    path: pdfPath,
    width: "1920px",
    height: "1080px",
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" },
  });

  console.log(`Exported ${pdfPath}`);
  debugLog("PDF exported", { pdfPath, slideCount }, "C");
} finally {
  await browser.close();
  server.close();
}
