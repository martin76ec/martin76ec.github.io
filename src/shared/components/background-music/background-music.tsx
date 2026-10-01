import { cn } from "@lib/utils";
import { Music, X } from "lucide-react";
import { useState } from "react";

const TRACK_ID = "2423539855";
const TRACK_TITLE = "リサフランク420 / 現代のコンピュー — Macintosh Plus";

export function BackgroundMusic() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={cn("vaporwave-overlay", open && "is-active")} aria-hidden="true">
        <div className="vaporwave-blob vaporwave-blob--pink" />
        <div className="vaporwave-blob vaporwave-blob--mint" />
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
          onClick={() => setOpen((v) => !v)}
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
