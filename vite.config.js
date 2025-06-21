import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import twig from "vite-plugin-twig-drupal";
import { join, resolve } from "node:path";
import postcssNested from "postcss-nested";
import autoprefixer from "autoprefixer";

export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(join(__dirname, "components")),
      "@base": resolve(join(__dirname, "01-base")),
    },
  },
  css: {
    postcss: {
      plugins: [postcssNested(), autoprefixer()],
    },
  },
  plugins: [
    tailwindcss(),
    twig({
      namespaces: {
        kinetic: join(__dirname, "/components"),
      },
      functions: {
        include: (twigInstance) => {
          twigInstance.extendFunction("include", (templateName, vars) => {
            // See .storybook/createSDCManifest.js.
            const templatePath = window.SDC_MANIFEST[templateName];
            if (!templatePath) {
              throw new Error(`Template ${templateName} not found`);
            }
            const { id, href } = templatePath;
            try {
              // Try to get a cached version of the template.
              const template = twigInstance.twig({ ref: id });
              if (template) {
                return template.render(vars);
              } else {
                throw new Error(`Template ${templateName} not found`);
              }
            } catch (error) {
              // Get the template path from the SDC_MANIFEST.
              const template = twigInstance.twig({
                id: id,
                href: href,
                async: false,
              });
              if (template) {
                return template.render(vars);
              } else {
                throw new Error(`Template ${templateName} not found`);
              }
            }
          });
        },
        // e.g. extendFilter to register a filter
        clean_unique_id: (twigInstance) =>
          twigInstance.extendFilter("clean_unique_id", (text) => text),
      },
    }),
  ],
});
