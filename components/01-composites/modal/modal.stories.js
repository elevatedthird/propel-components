
import modal from './modal.twig';

export default {
  title: '01-composites/modal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A bootstrap modal. Providing a trigger and a dialog.',
      },
      source: {
        code: 'drush propel:add modal',
      }
    },
  },
  argTypes: {"test":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"test prop","table":{"type":{"summary":"text"}}}},
  component: modal,
};

export const Default = {
  args: {
    test: ""
},
};