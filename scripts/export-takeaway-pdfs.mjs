import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const outDir = join(root, "public", "takeaways");
const port = 4174;

const packs = [
  { id: "day1", file: "day-1-discovery-kit.pdf" },
  { id: "day2", file: "day-2-research-kit.pdf" },
  { id: "day3", file: "day-3-design-system-kit.pdf" },
  { id: "day4", file: "day-4-responsible-design-kit.pdf" },
  { id: "day5", file: "day-5-portfolio-kit.pdf" },
];

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

mkdirSync(outDir, { recursive: true });

const server = await startStaticServer();
const browser = await chromium.launch();

try {
  for (const pack of packs) {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    const url = `http://127.0.0.1:${port}/?takeaway-print=${pack.id}`;
    await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
    await page.waitForSelector(".slide-stage", { timeout: 30_000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1000);

    const outPath = join(outDir, pack.file);
    await page.pdf({
      path: outPath,
      width: "1920px",
      height: "1080px",
      printBackground: true,
      margin: { top: "0", bottom: "0", left: "0", right: "0" },
    });
    await page.close();
    console.log(`Exported ${outPath}`);
  }
} finally {
  await browser.close();
  server.close();
}
