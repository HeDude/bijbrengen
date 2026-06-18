import { defineConfig } from "astro/config";

const site = "https://www.bijbrengen.nl";
const base = process.env.BIJBRENGEN_SITE_BASE ?? "";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "never",
  build: {
    assets: "_astro"
  }
});
