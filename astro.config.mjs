import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import mdx from "@astrojs/mdx";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx(), image()],
  output: "server",
  adapter: netlify()
});