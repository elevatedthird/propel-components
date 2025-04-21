
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
  argTypes: {"test":{"description":"test prop","control":{"type":"text"}}},
  component: modal,
};

export const Default = {
  args: { text: 'Click me' },
};