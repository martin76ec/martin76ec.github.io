import { Progress } from "@components/ui/progress";
import { NAVBAR } from "@constants/defaults";
import { useScroll } from "@hooks/use-scroll";
import { useScrollProgress } from "@hooks/use-scroll-progress";
import LogoDark from "@lib/assets/logo-dark.png";
import LogoWhite from "@lib/assets/logo-white.svg";
import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { type ComponentProps } from "react";
import { langStore } from "src/shared/stores/lang-store";
import { themeStore } from "src/shared/stores/theme-store";
import { LangSwitch } from "./lang-switch";
import { NavButton } from "./nav-btn";
import { NavMenu } from "./nav-menu";
import { ThemeSwitch } from "./theme-switch";

type Props = Partial<ComponentProps<"div">>;

export function Navbar({ className, ...props }: Props) {
  const theme = useStore(themeStore);
  const lang = useStore(langStore);
  const progress = useScrollProgress();
  const handleProjects = useScroll("projects");
  const handleExperience = useScroll("experience");

  return (
    <nav
      {...props}
      className={cn(
        "fixed z-10 flex h-24 w-full flex-col backdrop-blur-2xl",
        "xs:border-b-0 border-t-[1px] border-border md:border-b-[1px] md:border-t-0",
        "bottom-0 lg:top-0",
        className
      )}
    >
      <Progress className="h-1 w-full rounded-none lg:hidden" value={progress} />
      <div className="flex h-full w-full justify-center">
        <div className="flex h-full w-full max-w-screen-xl items-center justify-between bg-background/70">
          <div className="flex h-full sm:hidden">
            <NavMenu />
          </div>
          <div className="hidden h-full items-center justify-start gap-4 sm:flex">
            <NavButton className="hidden sm:flex">
              <img className="w-[2.5rem]" src={theme === "dark" ? LogoWhite.src : LogoDark.src} />
            </NavButton>
            <div className="flex h-full items-center gap-4">
              <NavButton className="h-full" onClick={handleExperience}>
                {NAVBAR.experience[lang]}
              </NavButton>
            </div>
            <div className="flex h-full items-center gap-4">
              <NavButton className="h-full" onClick={handleProjects}>
                {NAVBAR.projects[lang]}
              </NavButton>
            </div>
          </div>
          <div className="flex h-full gap-1">
            <ThemeSwitch />
            <LangSwitch />
          </div>
        </div>
      </div>
      <Progress className="hidden h-1 w-full rounded-none lg:block" value={progress} />
    </nav>
  );
}
