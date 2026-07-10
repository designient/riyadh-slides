import { useEffect, useState } from "react";

const PDF_PATH = "/UX-Masterclass-Deck.pdf";
const PDF_FILENAME = "UX-Masterclass-Riyadh-2026.pdf";

function triggerDownload() {
  const link = document.createElement("a");
  link.href = PDF_PATH;
  link.download = PDF_FILENAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function DownloadPdf() {
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function startDownload() {
      try {
        const response = await fetch(PDF_PATH, { method: "HEAD" });
        if (!response.ok) throw new Error("PDF not found");
        if (cancelled) return;
        triggerDownload();
        setStarted(true);
      } catch {
        if (!cancelled) setError(true);
      }
    }

    void startDownload();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="flex h-full w-full items-center justify-center px-6"
      style={{ background: "linear-gradient(140deg, #0D1B2E, #1A2F4A)" }}
    >
      <div className="w-full max-w-[520px] rounded-card border border-white/10 bg-white/[0.04] p-10 text-center shadow-2xl backdrop-blur">
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.09em] text-white/55">
          Sameer Ul Haque · UX Masterclass
        </p>
        <h1 className="mt-3 font-display text-[30px] font-bold leading-tight text-white">
          Download Presentation PDF
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-white/70">
          Full 5-day slide deck for the Riyadh 2026 cohort.
        </p>

        {error ? (
          <p className="mt-6 text-[14px] text-[#F1A3A3]">
            The PDF is not available yet. Please try again after the next deploy finishes.
          </p>
        ) : started ? (
          <p className="mt-6 text-[14px] text-white/75">
            Your download should start automatically. If it doesn&apos;t, use the button below.
          </p>
        ) : (
          <p className="mt-6 text-[14px] text-white/75">Preparing your download…</p>
        )}

        <button
          type="button"
          onClick={triggerDownload}
          disabled={error}
          className="mt-6 w-full rounded-pill bg-[#D4A84A] py-3 font-display text-[16px] font-bold text-[#0D1B2E] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Download PDF
        </button>

        <a
          href="/"
          className="mt-4 inline-block text-[14px] text-white/55 underline-offset-2 hover:text-white/80 hover:underline"
        >
          Back to live deck
        </a>
      </div>
    </div>
  );
}
