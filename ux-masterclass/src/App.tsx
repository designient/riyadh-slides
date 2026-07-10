import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowsIn, ArrowsOut } from "@phosphor-icons/react";
import { deck } from "./deck/content";
import type { DeckSlide } from "./deck/types";
import { SlideRenderer } from "./deck/SlideRenderer";
import { AUTH_STORAGE_KEY, PasswordGate } from "./deck/PasswordGate";

function useQueryParams() {
  return useMemo(() => new URLSearchParams(window.location.search), []);
}

function filterDeck(
  slides: DeckSlide[],
  day: string | null,
  session: string | null,
): DeckSlide[] {
  if (!day && !session) return slides;
  return slides.filter((s) => {
    const slideDay = "day" in s ? s.day : "dayNumber" in s ? s.dayNumber : null;
    const slideSession = "session" in s ? s.session : null;
    if (day && slideDay !== Number(day)) return false;
    if (session && slideSession !== Number(session)) return false;
    return true;
  });
}

export default function App() {
  const params = useQueryParams();
  const printMode = params.get("print") === "1";
  const dayFilter = params.get("day");
  const sessionFilter = params.get("session");

  const slides = useMemo(
    () => filterDeck(deck as DeckSlide[], dayFilter, sessionFilter),
    [dayFilter, sessionFilter],
  );

  const [authenticated, setAuthenticated] = useState(
    () => printMode || sessionStorage.getItem(AUTH_STORAGE_KEY) === "1",
  );
  const [index, setIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
    },
    [slides.length],
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (printMode) return;
    const onResize = () => {
      const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      setScale(s);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [printMode]);

  useEffect(() => {
    if (printMode) return;
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, [printMode]);

  useEffect(() => {
    if (printMode || !authenticated) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "f") {
        window.open("?print=1", "_blank");
      } else if (e.key === "g") {
        setShowGrid((v) => !v);
      } else if (e.key === "Enter") {
        toggleFullscreen();
      } else if (e.key === "Escape") {
        setShowGrid(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, printMode, authenticated, toggleFullscreen]);

  if (printMode) {
    return (
      <div className="flex flex-col">
        {slides.map((slide) => (
          <SlideRenderer key={slide.page} slide={slide} />
        ))}
      </div>
    );
  }

  if (!authenticated) {
    return <PasswordGate onSuccess={() => setAuthenticated(true)} />;
  }

  const current = slides[index];

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ background: "#08111A" }}
    >
      <div
        className="origin-center"
        style={{ transform: `scale(${scale})` }}
      >
        {current && <SlideRenderer slide={current} />}
      </div>

      <button
        type="button"
        className="no-print absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white/60 hover:bg-white/20"
        onClick={() => go(-1)}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        type="button"
        className="no-print absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white/60 hover:bg-white/20"
        onClick={() => go(1)}
        aria-label="Next slide"
      >
        →
      </button>

      <button
        type="button"
        className="no-print absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-3 text-white/60 hover:bg-white/20"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
        title={isFullscreen ? "Exit full screen (Esc)" : "Enter full screen (Enter)"}
      >
        {isFullscreen ? <ArrowsIn size={18} /> : <ArrowsOut size={18} />}
      </button>

      {showGrid && (
        <div
          className="no-print absolute inset-0 z-50 overflow-auto bg-[#08111A]/95 p-8"
          onClick={() => setShowGrid(false)}
        >
          <div className="grid grid-cols-4 gap-4">
            {slides.map((slide, i) => (
              <button
                key={slide.page}
                type="button"
                className={`rounded border p-2 text-left text-xs text-white/70 hover:border-go ${i === index ? "border-go" : "border-white/20"}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                  setShowGrid(false);
                }}
              >
                <span className="text-go">{String(slide.page).padStart(3, "0")}</span>
                {" · "}
                {slide.type}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
