import { useScrollCoverage } from "@hooks/use-scroll-percentage";
import { cn } from "@lib/utils";
import { type ReactNode, useEffect, useMemo, useState } from "react";

interface Props {
  className?: string;
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
  onClick: () => void;
}

interface Opt {
  label: string;
  active?: boolean;
}

const defOpts: Opt[] = [{ label: "experience", active: true }, { label: "projects" }, { label: "blog" }];

function Item({ active = false, className = "", children, onClick }: ItemProps) {
  return (
    <div
      className={cn(
        "flex h-8 w-full cursor-pointer rounded text-lg font-thin",
        className,
        active && "font-medium text-white"
      )}
      onClick={() => onClick()}
    >
      <div className="flex w-full items-center justify-start gap-2">
        <div
          className={cn(
            "h-[4px] w-1/6 bg-muted-foreground",
            active && "bg-white",
            "rounded transition-all duration-300 ease-in-out",
            active && "w-2/4"
          )}
        />
        <span className="w-5/6">{children}</span>
      </div>
    </div>
  );
}

export function NavMenu({ className }: Props) {
  const opts = useMemo(() => [...defOpts], []);
  const [selected, setSelected] = useState(opts.find((opt) => opt.active) ?? opts[0]);

  const coverages = useScrollCoverage(
    "scroll-content",
    opts.map((opt) => opt.label)
  );

  useEffect(() => {
    const covered = coverages?.toSorted((a, b) => a.coverage - b.coverage).pop();
    const visible = opts.find((opt) => opt.label === covered?.id);

    if (visible) {
      setSelected(visible);
    }
  }, [coverages]);

  const handleClick = (opt: Opt) => {
    setSelected(opt);
    document.getElementById(opt.label)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={cn("flex w-96 flex-col gap-2", className)}>
      {selected &&
        opts.map((opt) => (
          <Item key={opt.label} active={opt.label === selected.label} onClick={() => handleClick(opt)}>
            {opt.label.charAt(0).toUpperCase() + opt.label.substring(1)}
          </Item>
        ))}
    </div>
  );
}
