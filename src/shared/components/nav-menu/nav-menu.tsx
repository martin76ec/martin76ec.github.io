import { cn } from "@lib/utils";
import { type ReactNode, useMemo } from "react";
import { Link } from "react-scroll";

interface Props {
  className?: string;
}

interface ItemProps {
  children: ReactNode;
  to: string;
}

interface Opt {
  label: string;
}

const defOpts: Opt[] = [{ label: "experience" }, { label: "projects" }, { label: "blog" }];

function Item({ children, to }: ItemProps) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      containerId="scroll-content"
      activeClass="active"
      className="group flex h-8 w-full cursor-pointer rounded text-lg font-thin transition-all [&.active]:font-medium [&.active]:text-white"
    >
      <div className="flex w-full items-center justify-start gap-2">
        <div
          className={cn(
            "h-[4px] w-1/6 rounded bg-muted-foreground transition-all duration-300 ease-in-out",
            "group-[.active]:w-2/4 group-[.active]:bg-white"
          )}
        />
        <span className="w-5/6">{children}</span>
      </div>
    </Link>
  );
}

export function NavMenu({ className }: Props) {
  const opts = useMemo(() => [...defOpts], []);

  return (
    <div className={cn("flex w-96 flex-col gap-2", className)}>
      {opts.map((opt) => (
        <Item key={opt.label} to={opt.label}>
          {opt.label.charAt(0).toUpperCase() + opt.label.substring(1)}
        </Item>
      ))}
    </div>
  );
}
