
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
  argTypes: {"open":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"description":"The key of the intially opened item, or false.","table":{"type":{"summary":"boolean"}}},"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: accordion,
};

export const Default = {
  args: {
    open: false,
    behavior_name: ""
},
};