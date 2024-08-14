import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
const iconConf = {
  iconDir: "src/lib/icons",
};

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(iconConf), react()],
  site: "https://martin76.github.io",
});
