import { Icon } from "@components/icon";
import { NavMenu } from "@components/nav-menu/nav-menu";
import { authorDesc, authorName, authorRole } from "@constants/aboutme";
import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { langStore } from "src/shared/stores/lang-store";

interface Props {
  className?: string;
}

export function AboutMe({ className }: Props) {
  const lang = useStore(langStore);

  return (
    <div className={cn("flex h-full w-full flex-col justify-start gap-16", className)}>
      <div className="flex flex-col justify-start gap-12">
        <div>
          <p className="text-5xl font-bold">{authorName}</p>
          <p className="mt-2 text-2xl">{authorRole[lang]}</p>
          <p className="hidden font-mono text-sm text-muted-foreground lg:block">[Arch user btw]</p>
        </div>
        <NavMenu />
        <div>
          <p className="w-full text-lg text-muted-foreground lg:max-w-md">{authorDesc[lang]}</p>
        </div>
      </div>
      <div className="flex gap-4 fill-muted-foreground">
        <a href="https://www.linkedin.com/in/martinlarrea/" target="_blank" rel="noreferrer">
          <Icon name="linkedin" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
        </a>
        <a href="https://github.com/martin76ec" target="_blank" rel="noreferrer">
          <Icon name="github" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
        </a>
      </div>
    </div>
  );
}
