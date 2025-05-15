/** @type { import('@storybook/html').Preview } */
import '@base/global/css/index.pcss.css';

const preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        icon: 'paintbrush',
        // These are the section background colors.
        items: [
          { value: 'bg-white', title: 'White' },
          { value: 'bg-navy', title: 'Navy' },
          { value: 'bg-dark-navy', title: 'Dark Navy' },
          { value: 'bg-blue', title: 'Blue' },
          { value: 'bg-dark-blue', title: 'Dark Blue' },
        ],
       title: 'Surfaces',
      },
    },
  },
  initialGlobals: {
    theme: 'bg-white',
  },
  decorators: [
    (story, context) => {
      return `<section class="${context.globals.theme} p-12">${story()}</section>`;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    // Disable the backgrounds and grid in the controls panel.
    // We will use our own decorator for this.
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      }
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;