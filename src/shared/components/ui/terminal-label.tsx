import { cn } from "@lib/utils";
import * as React from "react";

export interface TerminalLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "comment" | "bracket" | "prompt";
  cursor?: boolean;
}

export const TerminalLabel = React.forwardRef<HTMLSpanElement, TerminalLabelProps>(
  ({ className, variant = "comment", cursor, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center gap-1 font-mono text-xs font-semibold tracking-widest text-muted-foreground",
        variant === "comment" && "text-primary/50",
        className
      )}
      {...props}
    >
      {variant === "comment" && <>{"// "}{children}</>}
      {variant === "bracket" && <>[{children}]</>}
      {variant === "prompt" && (
        <>
          <span className="text-primary/50">$</span>
          <span>{children}</span>
        </>
      )}
      {cursor && <span aria-hidden className="animate-blink">▍</span>}
    </span>
  )
);
TerminalLabel.displayName = "TerminalLabel";
