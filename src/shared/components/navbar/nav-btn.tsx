import type { ComponentProps, ReactNode } from "react";
import { cn } from "@lib/utils";

interface Props extends ComponentProps<"div"> {
  children: ReactNode;
}

export function NavButton({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn(
        "flex h-full min-w-32 select-none items-center justify-center text-foreground hover:bg-accent",
        className
      )}
    >
      {children}
    </div>
  );
}
