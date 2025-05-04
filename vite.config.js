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
            try {
              // Try to get a cached version of the template.
              const template = twigInstance.twig({ ref: templatePath });
              if (template) {
                return template.render(vars);
              } else {
                throw new Error(`Template ${templatePath} not found`);
              }
            } catch (error) {
              // If the template isn't found in the cache, fetch it from the remote URL.
              const baseURL = window.CONFIG_TYPE === 'PRODUCTION' ? 'https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main' : '.';
              // Get relative path from the templatePath.
              const path = templatePath.split('/').slice(-4).join('/');
              const template = twigInstance.twig({
                id: templatePath,
                href: `${baseURL}/${path}`,
                async: false,
              });
              if (template) {
                return template.render(vars);
              } else {
                throw new Error(`Template ${templatePath} not found`);
              }
            }
          });
        },
        // e.g. extendFilter to register a filter
        clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
      },
    }),
  ],
})