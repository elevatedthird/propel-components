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
    columns: {
      description: 'Columns for components',
      toolbar: {
        icon: 'paintbrush',
        // These are the section background colors.
        items: [
          { value: 'grid-cols-1', title: '1 Column' },
          { value: 'grid-cols-2', title: '2 Column' },
          { value: 'grid-cols-3', title: '3 Column' },
        ],
       title: 'Columns',
      },
    },
  },
  initialGlobals: {
    theme: 'bg-white',
    columns: 'grid-cols-1',
  },
  decorators: [
    (story, context) => {
      const classes = [context.globals.theme];
      const regex = /(01|02)-/;
      if (!context.componentId.includes('04-pages')) {
        classes.push('p-12');
      }
      if (regex.test(context.componentId)) {
        classes.push('grid', 'gap-4', context.globals.columns);
      }
      return `<section class="${classes.join(' ')}">${story()}</section>`;
    },
  ],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'fullscreen',
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