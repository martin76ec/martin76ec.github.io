import { Icon } from "@components/icon";
import { useStore } from "@nanostores/react";
import { langStore } from "src/shared/stores/lang-store";

export function LangSwitch() {
  const lang = useStore(langStore);

  const handleClick = () => {
    if (lang === "en") return langStore.set("es");
    return langStore.set("en");
  };

  return (
    <div
      className="flex h-full w-32 select-none items-center justify-center gap-3 hover:bg-accent"
      onClick={handleClick}
    >
      {lang === "en" && <Icon name="us-flag" className="h-8 w-8 rounded-md" />}
      {lang === "es" && <Icon name="spain-flag" className="h-8 w-8 rounded-md" />}
      <p className="text-sm uppercase text-foreground">{lang}</p>
    </div>
  );
}
