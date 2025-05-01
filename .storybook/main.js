/** @type { import('@storybook/html-vite').StorybookConfig } */
import { mergeConfig } from 'vite';

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
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      base: process.env.BASE_PATH || config.base,
    });
  },
};
export default config;