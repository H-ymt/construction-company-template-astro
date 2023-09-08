import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind()],
  output: "server",
  adapter: vercel({
    functionPerRoute: false,
  }),
});
