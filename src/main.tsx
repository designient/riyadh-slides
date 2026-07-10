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

const isDownloadPdf =
  window.location.pathname.replace(/\/$/, "") === "/download-pdf";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isDownloadPdf ? <DownloadPdf /> : <App />}
  </StrictMode>,
);
