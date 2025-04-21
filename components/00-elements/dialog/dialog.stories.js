
import dialog from './dialog.twig';

export default {
  title: '00-elements/dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A boostrap 5 modal. Use the trigger SDC to add a trigger to open the modal.',
      },
      source: {
        code: 'drush propel:add dialog',
      }
    },
  },
  argTypes: {"modal_title":{"description":"title to show in this modal","control":{"type":"text"}},"behavior_name":{"control":{"type":"text"}}},
  component: dialog,
};

export const Default = {
  args: { text: 'Click me' },
};