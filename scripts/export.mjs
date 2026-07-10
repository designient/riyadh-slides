import { chromium } from "playwright";

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
// ?print=1 already bypasses the password gate (see src/App.tsx), so no
// session setup is needed here.
await p.goto("http://localhost:5173/?print=1", { waitUntil: "networkidle" });
await p.pdf({
  path: "UX-Masterclass-Deck.pdf",
  width: "1920px",
  height: "1080px",
  printBackground: true,
  margin: { top: "0", bottom: "0", left: "0", right: "0" },
});
await b.close();
console.log("Exported UX_Masterclass_Deck.pdf");
