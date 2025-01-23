import { cn } from "@lib/utils";
import { type ReactNode, useMemo, useState } from "react";

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

const defOpts: Opt[] = [
  { label: "Experience", active: true },
  { label: "Projects" },
];

function Item({ active = false, className = "", children, onClick }: ItemProps) {
  return (
    <div
      className={cn(
        "flex h-8 w-full cursor-pointer rounded-md text-lg font-thin",
        className,
        active && "font-medium text-white"
      )}
      onClick={() => onClick()}
    >
      <div className="flex w-full items-center justify-start gap-2">
        <div className={cn("h-[1px] w-1/4 bg-muted-foreground", active && "bg-white", "transition-all duration-1000 ease-in-out", active && "w-2/4")} />
        <span className="w-3/4">{children}</span>
      </div>
    </div>
  );
}

export function NavMenu({ className }: Props) {
  const opts = useMemo(() => [...defOpts], []);
  const [ selected, setSelected ] = useState(opts.find(opt => opt.active) ?? opts[0]);

  const handleClick = (opt: Opt) => {
    setSelected(opt);
  };

  return (
    <div className={cn("flex w-64 flex-col gap-2", className)}>
      {selected && opts.map((opt) => (
        <Item key={opt.label} active={opt.label === selected.label} onClick={() => handleClick(opt)}>{opt.label}</Item>
      ))}
    </div>
  );
}
