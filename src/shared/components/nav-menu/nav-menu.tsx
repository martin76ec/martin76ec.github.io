import { cn } from "@lib/utils";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

interface Opt {
  id: string;
  label: string;
}

const SECTIONS: Opt[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

const ACTIVE_PIXEL_COUNT = 14;
const INACTIVE_PIXEL_COUNT = 7;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
}

function PixelBar({ active }: { active: boolean }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: ACTIVE_PIXEL_COUNT }).map((_, i) => {
        const visible = active || i < INACTIVE_PIXEL_COUNT;
        return (
          <span
            key={i}
            style={{ transitionDuration: "300ms", transitionTimingFunction: "ease-out" }}
            className={cn(
              "h-[7px] transition-all",
              visible ? "w-[7px] mr-[3px] opacity-100" : "w-0 mr-0 opacity-0",
              active ? "bg-white" : "bg-muted-foreground/40"
            )}
          />
        );
      })}
    </div>
  );
}

function Item({ id, label, active }: { id: string; label: string; active: boolean }) {
  return (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(id);
      }}
      className={cn(
        "flex h-8 w-full cursor-pointer rounded-none text-base text-muted-foreground opacity-60 transition-all md:text-lg",
        active && "font-medium text-white opacity-100"
      )}
    >
      <div className="flex w-full items-center justify-start gap-3">
        <PixelBar active={active} />
        <span>{label}</span>
      </div>
    </a>
  );
}

export function NavMenu({ className }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.getElementById("scroll-content");
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (!container || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top <= b.boundingClientRect.top ? a : b
        );
        setActiveId(topMost.target.id);
      },
      { root: container, rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("flex w-96 flex-col gap-2", className)}>
      {SECTIONS.map((opt) => (
        <Item key={opt.id} id={opt.id} label={opt.label} active={activeId === opt.id} />
      ))}
    </div>
  );
}
