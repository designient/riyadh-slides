import { useState } from "react";
import { AUTH_STORAGE_KEY, PasswordGate } from "./deck/PasswordGate";
import { syncAuthCookie } from "./deck/auth";
import { takeawayPacks } from "./takeaways/content";

function downloadPdf(path: string, filename: string) {
  syncAuthCookie();
  const link = document.createElement("a");
  link.href = path;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function TakeawaysContent() {
  return (
    <div
      className="flex h-full w-full items-center justify-center px-6 py-10"
      style={{ background: "linear-gradient(140deg, #0D1B2E, #1A2F4A)" }}
    >
      <div className="w-full max-w-[640px] rounded-card border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur">
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.09em] text-white/55">
          Sameer Ul Haque · UX Masterclass
        </p>
        <h1 className="mt-3 font-display text-[30px] font-bold leading-tight text-white">
          Programme Takeaways
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-white/70">
          Day-by-day reference packs — checklists, templates, and prompts to use after the training.
        </p>

        <ul className="mt-8 flex flex-col gap-3">
          {takeawayPacks.map((pack) => (
            <li
              key={pack.id}
              className="flex items-center justify-between gap-4 rounded-chip border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="min-w-0">
                <p className="font-display text-[15px] font-bold text-white">
                  Day {pack.day} · {pack.title}
                </p>
                <p className="mt-0.5 text-[13px] leading-snug text-white/60">{pack.description}</p>
              </div>
              <button
                type="button"
                onClick={() => downloadPdf(pack.pdfPath, pack.filename)}
                className="shrink-0 rounded-pill bg-[#D4A84A] px-4 py-2 font-display text-[13px] font-bold text-[#0D1B2E] transition hover:opacity-90"
              >
                ↓ PDF
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-[14px]">
          <a
            href="/download-pdf"
            className="text-white/70 underline-offset-2 hover:text-white hover:underline"
          >
            Full slide deck PDF →
          </a>
          <a
            href="/"
            className="text-white/55 underline-offset-2 hover:text-white/80 hover:underline"
          >
            Back to live deck
          </a>
        </div>
      </div>
    </div>
  );
}

export function Takeaways() {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(AUTH_STORAGE_KEY) === "1",
  );

  if (!authenticated) {
    return <PasswordGate onSuccess={() => setAuthenticated(true)} />;
  }

  return <TakeawaysContent />;
}
