import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import twig from 'vite-plugin-twig-drupal'
import { join, resolve } from 'node:path'
import postcssNested from 'postcss-nested'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(join(__dirname, 'components')),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNested(),
        autoprefixer(),
      ],
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
            // The id of the template is the absolute file path.
            return twigInstance.twig({ ref: templatePath }).render(vars);
          });
        },
        // e.g. extendFilter to register a filter
        clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
      },
    }),
  ],
})