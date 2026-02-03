import { Icon } from "@components/icon";
import { NavMenu } from "@components/nav-menu/nav-menu";
import { Button } from "@components/ui/button";
import { authorDesc, authorName, authorRole, socialLinks } from "@constants/aboutme";
import { cn } from "@lib/utils";
import { useStore } from "@nanostores/react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { langStore } from "src/shared/stores/lang-store";

interface Props {
  className?: string;
}

function Email() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = async (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      toast.success("Email copied to the clipboard :D");

      setTimeout(() => {
        setCopiedText("");
      }, 3000);
    });
  };

  return (
    <div className="bg-muted-accent/50 flex max-w-96 items-center justify-between gap-2 rounded-lg border border-accent p-2 text-muted-foreground backdrop-blur-2xl">
      <code className="rounded p-1 text-xs">martin.elarrea27@gmail.com</code>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleCopy("martin.elarrea27@gmail.com")}
        className="h-6 w-6 border-muted/20 bg-accent"
      >
        {copiedText === "martin.elarrea27@gmail.com" ? (
          <Check className="text-muted-background animate-spin-once h-4 w-4" />
        ) : (
          <Copy className="text-muted-background animate-spin-once h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export function AboutMe({ className }: Props) {
  const lang = useStore(langStore);

  return (
    <div className={cn("flex h-full w-full flex-col justify-start gap-16", className)}>
      <div className="flex flex-col justify-start gap-12">
        <div>
          <p className="text-5xl font-bold">{authorName}</p>
          <p className="mt-2 text-2xl">{authorRole[lang]}</p>
          <p className="hidden font-mono text-sm text-muted-foreground lg:block">[Arch user btw]</p>
        </div>
        <div className="hidden lg:block">
          <NavMenu />
        </div>
        <div className="relative group">
          <div className="absolute -right-12 -top-12 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-5 lg:opacity-5">
            <Icon name="logo-white" className="h-48 w-48 -rotate-12" />
          </div>
          <span className="mb-4 block font-mono text-xs font-semibold tracking-widest text-primary/50">
            // ABOUT
          </span>
          <div className="border-l-2 border-primary/30 pl-6 py-1 transition-all duration-300 hover:border-primary/60">
            <p className="w-full text-lg leading-relaxed text-muted-foreground lg:max-w-md">
              {authorDesc[lang]}
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse gap-8">
        <div className="flex items-center gap-4 fill-muted-foreground">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <Icon name="github" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
          </a>
          <a href={socialLinks.spotify} target="_blank" rel="noreferrer">
            <Icon name="spotify" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
          </a>
          <a href={socialLinks.productHunt} target="_blank" rel="noreferrer">
            <Icon name="product-hunt" className="h-8 w-8 fill-muted-foreground hover:fill-foreground" />
          </a>
        </div>
        <Email />
      </div>
    </div>
  );
}
