import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import { useScroll } from "@hooks/use-scroll";
import { useState } from "react";

export function NavMenu() {
  const [open, setOpen] = useState(false);
  const handleProjects = useScroll("projects", () => setOpen(false));
  const handleExperience = useScroll("experience", () => setOpen(false));

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex h-full w-32 items-center justify-center hover:bg-accent" onClick={() => setOpen(true)}>
            Menu
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Menu</DialogTitle>
          </DialogHeader>
          <div className="flex w-full flex-col gap-2">
            <a className="flex h-16 items-center rounded px-4 hover:bg-accent" onClick={handleProjects}>
              Experience
            </a>
            <Separator />
            <a className="flex h-16 items-center rounded px-4 hover:bg-accent" onClick={handleExperience}>
              Project
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
