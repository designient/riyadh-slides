import { useState, type FormEvent } from "react";

const CORRECT_PASSWORD = "Riyadh@ux2026";
export const AUTH_STORAGE_KEY = "uxmc-authenticated";

interface PasswordGateProps {
  onSuccess: () => void;
}

export function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value === CORRECT_PASSWORD) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, "1");
      onSuccess();
    } else {
      setError(true);
      setValue("");
    }
  };

  return (
    <div
      className="flex h-full w-full items-center justify-center px-6"
      style={{ background: "linear-gradient(140deg, #0D1B2E, #1A2F4A)" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[440px] rounded-card border border-white/10 bg-white/[0.04] p-10 shadow-2xl backdrop-blur"
      >
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.09em] text-white/55">
          Sameer Ul Haque · UX Masterclass
        </p>
        <h1 className="mt-3 font-display text-[30px] font-bold leading-tight text-white">
          Riyadh 2026 Cohort
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-white/70">
          This deck is private. Enter the workshop password to continue.
        </p>

        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="mt-6 w-full rounded-chip border border-white/15 bg-white/5 px-4 py-3 text-[16px] text-white outline-none placeholder:text-white/35 focus:border-[#D4A84A]"
        />

        {error && (
          <p className="mt-2 text-[14px] text-[#F1A3A3]">Incorrect password. Please try again.</p>
        )}

        <button
          type="submit"
          className="mt-5 w-full rounded-pill bg-[#D4A84A] py-3 font-display text-[16px] font-bold text-[#0D1B2E] transition hover:opacity-90"
        >
          Unlock Deck
        </button>
      </form>
    </div>
  );
}
