import { cn } from "@lib/utils";
import { Music, X } from "lucide-react";
import { useState } from "react";

const TRACK_ID = "2423539855";
const TRACK_TITLE = "リサフランク420 / 現代のコンピュー — Macintosh Plus";

const EFFECTS = [
  { id: "checkerboard", weight: 1 },
  { id: "blobs", weight: 1 },
  { id: "equalizer", weight: 1 },
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

function createEqualizerBars() {
  return Array.from({ length: EQ_BAR_COUNT }).map((_, i) => ({
    key: i,
    duration: 0.6 + Math.random() * 0.9,
    delay: -Math.random() * 1.5,
  }));
}

export function BackgroundMusic() {
  const [open, setOpen] = useState(false);
  // Re-rolled only when the player transitions closed -> open (our "play" proxy),
  // or on a full page reload. Stays fixed for as long as it's open.
  const [effect, setEffect] = useState<EffectId>(() => pickEffect());
  const [bars] = useState(createEqualizerBars);

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
            {bars.map((bar) => (
              <span
                key={bar.key}
                className="vaporwave-equalizer-bar"
                style={{ animationDuration: `${bar.duration}s`, animationDelay: `${bar.delay}s` }}
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
