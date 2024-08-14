import GridPattern from "@components/magicui/grid-pattern";
import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { useMemo } from "react";
import { themeStore } from "src/shared/stores/theme-store";

export function GridBG() {
  const theme = useStore(themeStore);
  const color = useMemo(() => {
    if (theme === "dark") return "fill-muted-foreground/25 stroke-muted-foreground/50";
    return "fill-muted-foreground/15 stroke-muted-foreground/25";
  }, [theme]);

  return (
    <GridPattern
      squares={[
        [7, 9],
        [5, 12],
        [4, 10],
        [6, 7],
        [3, 5],
        [8, 5],
      ]}
      width={60}
      height={60}
      x={-1}
      y={-1}
      strokeDasharray={"4 2"}
      className={cn(
        "[mask-image:radial-gradient(1000px_circle_at_bottom_left,white,transparent)]",
        "inset-x-0 inset-y-[10%] skew-y-12",
        color
      )}
    />
  );
}
