import { Icon } from "@components/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import { NAVBAR } from "@constants/defaults";
import { useScroll } from "@hooks/use-scroll";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { langStore } from "src/shared/stores/lang-store";

export function NavMenu() {
  const lang = useStore(langStore);
  const [open, setOpen] = useState(false);
  const handleProjects = useScroll("projects", () => setOpen(false));
  const handleExperience = useScroll("experience", () => setOpen(false));

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex h-full w-32 items-center justify-center hover:bg-accent" onClick={() => setOpen(true)}>
            <Icon name="menu" className="h-4 w-4 fill-foreground" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{NAVBAR.content[lang]}</DialogTitle>
          </DialogHeader>
          <div className="flex w-full flex-col gap-2">
            <a className="flex h-16 items-center rounded px-4 hover:bg-accent" onClick={handleExperience}>
              {NAVBAR.experience[lang]}
            </a>
            <Separator />
            <a className="flex h-16 items-center rounded px-4 hover:bg-accent" onClick={handleProjects}>
              {NAVBAR.projects[lang]}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
