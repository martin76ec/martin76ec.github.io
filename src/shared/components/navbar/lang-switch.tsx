import { Icon } from "@components/icon";
import { useState } from "react";

type Langs = "EN" | "ES";

export function LangSwitch() {
  const [lang, setLang] = useState<Langs>("EN");

  const handleClick = () => {
    if (lang === "EN") return setLang("ES");
    return setLang("EN");
  };

  return (
    <div
      className="flex h-full w-32 select-none items-center justify-center gap-3 hover:bg-accent"
      onClick={handleClick}
    >
      {lang === "EN" && <Icon name="us-flag" className="h-8 w-8 rounded-md" />}
      {lang === "ES" && <Icon name="spain-flag" className="h-8 w-8 rounded-md" />}
      <p className="text-sm text-foreground">{lang}</p>
    </div>
  );
}
