/** @type { import('@storybook/html').Preview } */

import '../style.css';

const preview = {
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    backgrounds: {
      values: [
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        { name: 'Maroon', value: '#400' },
      ],
      // Specify which background is shown by default
      default: 'Light',
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