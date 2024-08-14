import { Icon } from "@components/icon";
import { authorDesc, authorName, authorRole } from "@constants/aboutme";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

export function AboutMe({ className }: Props) {
  return (
    <div className={cn("flex w-full flex-col justify-between gap-16", className)}>
      <div className="flex flex-col justify-start">
        <div>
          <p className="text-5xl font-bold">{authorName}</p>
          <p className="mt-2 text-2xl">{authorRole}</p>
          <p className="hidden font-mono text-sm text-muted-foreground lg:block">[Arch user btw]</p>
        </div>
        <div>
          <p className="mt-4 w-full text-lg text-muted-foreground lg:max-w-md">{authorDesc}</p>
        </div>
      </div>
      <div className="flex gap-4 fill-muted-foreground">
        <Icon name="linkedin" className="h-8 w-8 hover:fill-foreground" />
        <Icon name="github" className="h-8 w-8 hover:fill-foreground" />
      </div>
    </div>
  );
}
