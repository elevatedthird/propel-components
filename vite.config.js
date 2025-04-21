import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import twig from 'vite-plugin-twig-drupal'
import { join, resolve } from 'node:path'

/**
 * A simple shim to add the twig include function.
 */
function registerIncludeFunction(twigInstance) {
  // If any of the twig files include another one, you must list it here.
  const templateManifest = {
    "kinetic:badge": "./components/00-elements/badge/badge.twig",
    "kinetic:title": "./components/01-composites/title/title.twig",
  };
  twigInstance.extendFunction("include", (templateName, vars) => {
    const templatePath = templateManifest[templateName];
    if (!templatePath) {
      throw new Error(`Template ${templateName} not found`);
    }
    return twigInstance.twig({
      id: templateName,
      href: templatePath,
      async: false
    }).render(vars);
  });
}

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(join(__dirname, 'components')),
    },
  },
  plugins: [
    tailwindcss(),
    twig({
      namespaces: {
        kinetic: join(__dirname, "/components"),
      },
      functions: {
        include: registerIncludeFunction,
        // e.g. extendFilter to register a filter
        clean_unique_id: (twigInstance) => twigInstance.extendFilter("clean_unique_id", () => (text) => text.split(' ').reverse().join(' ')),
      },
    }),
  ],
})