import { cn } from "@lib/utils";
import { Music, X } from "lucide-react";
import { useEffect, useState } from "react";

const TRACK_ID = "2423539855";
const TRACK_TITLE = "リサフランク420 / 現代のコンピュー — Macintosh Plus";

// checkerboard and equalizer are disabled (weight 0) for now - revisit later.
// Set them back to 1 to bring them back into rotation.
const EFFECTS = [
  { id: "checkerboard", weight: 0 },
  { id: "blobs", weight: 1 },
  { id: "equalizer", weight: 0 },
] as const;
type EffectId = (typeof EFFECTS)[number]["id"];

function pickEffect(): EffectId {
  const total = EFFECTS.reduce((sum, e) => sum + e.weight, 0);
  let roll = Math.random() * total;
  for (const e of EFFECTS) {
    if (roll < e.weight) return e.id;
    roll -= e.weight;
  }
  return EFFECTS[0].id;
}

const EQ_BAR_COUNT = 56;
const EQ_DESKTOP_QUERY = "(min-width: 641px)";
const EQ_COLLISION_STEP = 16;
const EQ_MIN_HEIGHT = 8;

function createEqualizerBars() {
  return Array.from({ length: EQ_BAR_COUNT }).map((_, i) => ({
    key: i,
    duration: 0.6 + Math.random() * 0.9,
    delay: -Math.random() * 1.5,
  }));
}

function isOpenSpot(el: Element | null) {
  return !el || el === document.body || el === document.documentElement;
}

// For each bar column, raycasts upward from the viewport bottom (skipping our
// own pointer-events:none overlay automatically) to find the nearest real UI
// element, and caps that bar's max rise there - so it visually piles up
// against cards/text instead of passing behind them.
function measureEqualizerCeilings(): number[] {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const colWidth = vw / EQ_BAR_COUNT;
  const ceilings: number[] = [];
  for (let i = 0; i < EQ_BAR_COUNT; i++) {
    const x = Math.min(vw - 1, Math.max(0, Math.round((i + 0.5) * colWidth)));
    let obstructedAt = 0;
    for (let y = vh - 1; y >= 0; y -= EQ_COLLISION_STEP) {
      if (!isOpenSpot(document.elementFromPoint(x, y))) {
        obstructedAt = y;
        break;
      }
    }
    ceilings.push(Math.max(EQ_MIN_HEIGHT, vh - obstructedAt));
  }
  return ceilings;
}

function useEqualizerCollision(active: boolean) {
  const [ceilings, setCeilings] = useState<number[] | null>(null);

  useEffect(() => {
    if (!active) {
      setCeilings(null);
      return;
    }

    const desktop = window.matchMedia(EQ_DESKTOP_QUERY);
    let debounce: ReturnType<typeof setTimeout> | undefined;

    const recompute = () => {
      setCeilings(desktop.matches ? measureEqualizerCeilings() : null);
    };
    const scheduleRecompute = () => {
      clearTimeout(debounce);
      debounce = setTimeout(recompute, 150);
    };

    requestAnimationFrame(recompute);

    const scrollPanel = document.getElementById("scroll-content");
    window.addEventListener("resize", scheduleRecompute);
    window.addEventListener("scroll", scheduleRecompute, { passive: true });
    scrollPanel?.addEventListener("scroll", scheduleRecompute, { passive: true });
    desktop.addEventListener("change", scheduleRecompute);

    return () => {
      clearTimeout(debounce);
      window.removeEventListener("resize", scheduleRecompute);
      window.removeEventListener("scroll", scheduleRecompute);
      scrollPanel?.removeEventListener("scroll", scheduleRecompute);
      desktop.removeEventListener("change", scheduleRecompute);
    };
  }, [active]);

  return ceilings;
}

export function BackgroundMusic() {
  const [open, setOpen] = useState(false);
  // Math.random() must never run during the initial render: that render also
  // happens server-side, and a client render with different random values
  // would mismatch the server-rendered HTML and fail hydration. Start with a
  // fixed, deterministic value and roll the real pick client-side in an
  // effect (mount-only), after hydration has already succeeded.
  const [effect, setEffect] = useState<EffectId>(EFFECTS[0].id);
  const [bars, setBars] = useState<ReturnType<typeof createEqualizerBars>>(() =>
    Array.from({ length: EQ_BAR_COUNT }).map((_, i) => ({ key: i, duration: 1, delay: 0 }))
  );
  const ceilings = useEqualizerCollision(open && effect === "equalizer");

  useEffect(() => {
    setEffect(pickEffect());
    setBars(createEqualizerBars());
  }, []);

  const toggle = () => {
    setOpen((wasOpen) => {
      const next = !wasOpen;
      if (next) setEffect(pickEffect());
      return next;
    });
  };

  return (
    <>
      <div className={cn("vaporwave-overlay", open && "is-active")} aria-hidden="true">
        {effect === "checkerboard" && <div className="vaporwave-checkerboard" />}
        {effect === "blobs" && (
          <>
            <div className="vaporwave-blob vaporwave-blob--pink" />
            <div className="vaporwave-blob vaporwave-blob--mint" />
          </>
        )}
        {effect === "equalizer" && (
          <div className="vaporwave-equalizer">
            {bars.map((bar, i) => (
              <span
                key={bar.key}
                className="vaporwave-equalizer-bar"
                style={{
                  animationDuration: `${bar.duration}s`,
                  animationDelay: `${bar.delay}s`,
                  ...(ceilings ? { height: `${ceilings[i]}px` } : {}),
                }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="overflow-hidden rounded-none border border-muted/40 bg-background shadow-lg">
            <iframe
              title={TRACK_TITLE}
              style={{ border: 0, width: "300px", height: "42px" }}
              src={`https://bandcamp.com/EmbeddedPlayer/track=${TRACK_ID}/size=small/bgcol=333333/linkcol=ffffff/transparent=true/`}
              seamless
            />
          </div>
        )}
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? "Hide background music" : "Show background music player"}
          aria-pressed={open}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-none border border-foreground/20 bg-background/90 text-foreground/80 backdrop-blur-md transition-colors hover:bg-accent hover:text-foreground",
            !open && "background-music-button"
          )}
        >
          {open ? <X className="h-4 w-4" /> : <Music className="h-4 w-4" />}
        </button>
      </div>
    </>
  );
}
