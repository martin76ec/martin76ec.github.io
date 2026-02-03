import type { IconName } from "./types";
import { ExternalLink } from "./external-link";
import { Github } from "./github";
import { Instagram } from "./instagram";
import { Linkedin } from "./linkedin";
import { LogoWhite } from "./logo-white";
import { Menu } from "./menu";
import { ProductHunt } from "./product-hunt";
import { SpainFlag } from "./spain-flag";
import { Spotify } from "./spotify";
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
  if (name === "menu") return <Menu className={className} />;
  if (name === "external-link") return <ExternalLink className={className} />;
  if (name === "spotify") return <Spotify className={className} />;
  if (name === "product-hunt") return <ProductHunt className={className} />;
  return <USFlag className={className} />;
}
