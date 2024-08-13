import { Switch } from "@components/ui/switch";
import { useStore } from "@nanostores/react";
import { MoonIcon, SunIcon } from "lucide-react";
import { themeStore } from "src/shared/stores/theme-store";

export function ThemeSwitch() {
  const theme = useStore(themeStore);

  const handleClick = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      return themeStore.set("light");
    }

    document.documentElement.classList.add("dark");
    return themeStore.set("dark");
  };

  return (
    <div className="flex h-full w-32 items-center justify-center gap-2 hover:bg-accent" onClick={handleClick}>
      {theme === "dark" && <MoonIcon className="fill-secondary stroke-foreground" />}
      {theme === "light" && <SunIcon className="fill-secondary stroke-foreground" />}
      <Switch onCheckedChange={handleClick} checked={theme === "light"} />
    </div>
  );
}
