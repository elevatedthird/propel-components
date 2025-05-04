/** @type { import('@storybook/html-vite').StorybookConfig } */
import { mergeConfig } from 'vite';
import createSDCManifest from './createSDCManifest';

const config = {
  "stories": [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  previewHead: (head) => `
    ${head}
    <!-- Add IDs (absolute paths) of all the twig templates -->
    <script> window.SDC_MANIFEST = ${createSDCManifest()} </script>
  `,
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      base: process.env.BASE_PATH || config.base,
    });
  },
};
export default config;