import type { IconName } from "./types";
import { Github } from "./github";
import { Instagram } from "./instagram";
import { Linkedin } from "./linkedin";
import { LogoWhite } from "./logo-white";
import { SpainFlag } from "./spain-flag";
import { USFlag } from "./us-flag";

interface Props {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: Props) {
  if (name === "github") return <Github className={className} />;
  if (name === "instagram") return <Instagram className={className} />;
  if (name === "linkedin") return <Linkedin className={className} />;
  if (name === "logo-white") return <LogoWhite className={className} />;
  if (name === "spain-flag") return <SpainFlag className={className} />;
  return <USFlag className={className} />;
}
