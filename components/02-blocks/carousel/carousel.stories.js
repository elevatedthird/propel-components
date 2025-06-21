
import carousel from './carousel.twig';

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
    return carousel({
      ...args,
      items: () => ''
    });
  },
};