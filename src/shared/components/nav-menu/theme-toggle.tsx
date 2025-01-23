import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { themeStore } from "src/shared/stores/theme-store";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const theme = useStore(themeStore);
  const [isDark, setIsDark] = useState(theme === "dark");

  useEffect(() => {
    themeStore.set(isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      className={cn(
        "flex h-8 w-16 cursor-pointer rounded-full p-1 transition-all duration-300",
        isDark ? "border border-zinc-800 bg-zinc-950" : "border border-zinc-200 bg-white",
        className
      )}
      onClick={() => setIsDark(!isDark)}
      role="button"
      tabIndex={0}
    >
      <div className="flex w-full items-center justify-between">
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "translate-x-0 transform bg-zinc-800" : "translate-x-8 transform bg-gray-200"
          )}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-white" strokeWidth={1.5} />
          ) : (
            <Sun className="h-4 w-4 text-gray-700" strokeWidth={1.5} />
          )}
        </div>
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "-translate-x-8 transform"
          )}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-gray-500" strokeWidth={1.5} />
          ) : (
            <Moon className="h-4 w-4 text-black" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </div>
  );
}
