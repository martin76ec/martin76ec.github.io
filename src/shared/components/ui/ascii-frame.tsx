import { cn } from "@lib/utils";
import * as React from "react";

export interface AsciiFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  dashed?: boolean;
}

const cornerClass = "pointer-events-none absolute font-mono leading-none text-muted-foreground/60 select-none";

export const AsciiFrame = React.forwardRef<HTMLDivElement, AsciiFrameProps>(
  ({ className, label, dashed, children, ...props }, ref) => (
    <div ref={ref} className={cn("relative rounded-none border", dashed && "border-dashed", className)} {...props}>
      {label && (
        <span className="absolute -top-3 left-4 select-none bg-background px-2 font-mono text-xs tracking-widest text-muted-foreground">
          {label}
        </span>
      )}
      <span aria-hidden className={cn(cornerClass, "-left-[1px] -top-[1px]")}>
        ┌
      </span>
      <span aria-hidden className={cn(cornerClass, "-right-[1px] -top-[1px]")}>
        ┐
      </span>
      <span aria-hidden className={cn(cornerClass, "-bottom-[1px] -left-[1px]")}>
        └
      </span>
      <span aria-hidden className={cn(cornerClass, "-bottom-[1px] -right-[1px]")}>
        ┘
      </span>
      {children}
    </div>
  )
);
AsciiFrame.displayName = "AsciiFrame";
