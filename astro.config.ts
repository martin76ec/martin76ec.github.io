import million from "million/compiler";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      config: {
        path: "./tailwind.config.ts",
      },
    }),
  ],
  site: "https://martin76ec.github.io",
  vite: {
    resolve: {
      alias: {
        "@components": resolve(__dirname, "./src/components"),
        "@hooks": resolve(__dirname, "src/hooks"),
        "@layouts": resolve(__dirname, "./src/layouts"),
        "@pages": resolve(__dirname, "src/pages"),
        "@assets": resolve(__dirname, "src/assets"),
      },
    },
    plugins: [million.vite({ mode: "react", server: true })],
  },
});
