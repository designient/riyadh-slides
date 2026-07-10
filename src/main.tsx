import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/geist";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";
import App from "./App.tsx";
import { DownloadPdf } from "./DownloadPdf.tsx";
import { Takeaways } from "./Takeaways.tsx";
import { TakeawayPrint } from "./takeaways/TakeawayPrint.tsx";
import { isTakeawayDayId } from "./takeaways/content";

const path = window.location.pathname.replace(/\/$/, "");
const params = new URLSearchParams(window.location.search);
const takeawayPrint = params.get("takeaway-print");

function Root() {
  if (takeawayPrint && isTakeawayDayId(takeawayPrint)) {
    return <TakeawayPrint dayId={takeawayPrint} />;
  }
  if (path === "/download-pdf") return <DownloadPdf />;
  if (path === "/takeaways") return <Takeaways />;
  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
