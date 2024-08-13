import { Icon } from "@components/icon";
import { cn } from "@lib/utils";

interface Props {
  className?: string;
}

export function AboutMe({ className }: Props) {
  return (
    <div className={cn("flex w-full flex-col justify-between gap-4", className)}>
      <div className="flex flex-col justify-start">
        <div>
          <p className="text-5xl font-bold">Martin Larrea</p>
          <p className="mt-2 text-2xl">Backend Engineer</p>
          <p className="hidden font-mono text-sm text-muted-foreground lg:block">[Arch user btw]</p>
        </div>
        <div>
          <p className="mt-4 max-w-64 text-lg text-muted-foreground">I create reliable and high quality solutions.</p>
        </div>
      </div>
      <div className="flex gap-4 fill-muted-foreground">
        <Icon name="linkedin" className="h-8 w-8 hover:fill-foreground" />
        <Icon name="github" className="h-8 w-8 hover:fill-foreground" />
      </div>
    </div>
  );
}
