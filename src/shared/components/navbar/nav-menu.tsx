import { Icon } from "@components/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import { NAVBAR } from "@constants/defaults";
import { useStore } from "@nanostores/react";
import { useState } from "react";
import { Link } from "react-scroll";
import { langStore } from "src/shared/stores/lang-store";

export function NavMenu() {
  const lang = useStore(langStore);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex h-full w-32 items-center justify-center hover:bg-accent" onClick={() => setOpen(true)}>
            <Icon name="menu" className="h-6 w-6 fill-foreground" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{NAVBAR.content[lang]}</DialogTitle>
          </DialogHeader>
          <div className="flex w-full flex-col gap-2">
            <Link
              to="experience"
              smooth={true}
              spy={true}
              className="flex h-16 items-center rounded px-4 hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {NAVBAR.experience[lang]}
            </Link>
            <Separator />
            <Link
              to="projects"
              smooth={true}
              spy={true}
              className="flex h-16 items-center rounded px-4 hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              {NAVBAR.projects[lang]}
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
