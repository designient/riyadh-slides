import { useCallback, useEffect, useMemo, useState } from "react";
import { deck } from "./deck/content";
import type { DeckSlide } from "./deck/types";
import { SlideRenderer } from "./deck/SlideRenderer";

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

  const [index, setIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [scale, setScale] = useState(1);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + delta)));
    },
    [slides.length],
  );

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
      } else if (e.key === "Escape") {
        setShowGrid(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, printMode]);

  if (printMode) {
    return (
      <div className="flex flex-col">
        {slides.map((slide) => (
          <SlideRenderer key={slide.page} slide={slide} />
        ))}
      </div>
    );
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

      <div className="no-print absolute bottom-6 right-6 font-body text-small text-white/50">
        {index + 1} / {slides.length}
        {deck.length !== 247 && (
          <span className="ml-2 text-red-400">(deck: {deck.length})</span>
        )}
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
