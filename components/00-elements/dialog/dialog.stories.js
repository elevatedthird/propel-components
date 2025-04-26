
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
  argTypes: {"modal_title":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"title to show in this modal","table":{"type":{"summary":"text"}}},"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: dialog,
};

export const Default = {
  args: {
    modal_title: "",
    behavior_name: ""
},
};