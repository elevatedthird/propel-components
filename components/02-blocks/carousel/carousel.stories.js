
import carousel from './carousel.twig';
import '@components/01-composites/glide/glide.es6.js';
import '@components/01-composites/glide/glide.pcss.css';
import './carousel.es6.js';

export default {
  title: '02-blocks/carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a simple carousel',
      },
      source: {
        code: 'drush propel:add carousel',
      }
    },
  },
  argTypes: {},
};

export const Default = {
  args: {},
  render: (args) => {
    const slideMarkup = `
      <p class="p-8 border rounded-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;
    return carousel({
      ...args,
      slide_count: 3,
      items: () => [slideMarkup, slideMarkup, slideMarkup],
    });
  },
};