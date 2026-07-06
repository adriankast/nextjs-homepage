import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://adriankast.de",
  trailingSlash: "always",
  markdown: {
    syntaxHighlight: "prism",
  },
});
