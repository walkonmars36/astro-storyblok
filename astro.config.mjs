import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: true,
      apiOptions: {}, // storyblok-js-client options
      components: {
        page: "storyblok/Page",
        config: "storyblok/Config",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
      },
      componentsDir: "src",
      enableFallbackComponent: false,
      customFallbackComponent: "",
      useCustomApi: false,
    }),
    tailwind(),
  ],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
