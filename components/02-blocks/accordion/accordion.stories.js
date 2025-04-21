
import accordion from './accordion.twig';

export default {
  title: '02-blocks/accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A bootstrap accordion. Providing a trigger and a accordion.',
      },
      source: {
        code: 'drush propel:add accordion',
      }
    },
  },
  argTypes: {"open":{"description":"The key of the intially opened item, or false.","control":"boolean"},"behavior_name":{"control":{"type":"text"}}},
  component: accordion,
};

export const Default = {
  args: { text: 'Click me' },
};