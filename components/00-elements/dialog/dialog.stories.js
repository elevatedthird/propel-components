
import dialog from './dialog.twig';

export default {
  title: '00-elements/dialog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Micromodal dialog.',
      },
      source: {
        code: 'drush propel:add dialog',
      }
    },
  },
  argTypes: {
  modal_id: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Unique ID for the modal.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  behavior_name: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      type: {
        summary: "text"
      }
    }
  }
},
};

export const Default = {
  args: {
    modal_id: "",
    behavior_name: ""
},
  render: (args) => {
    return dialog({
      ...args,
      modal_header: () => '<!-- modal_header slot content -->',
	modal_content: () => '<!-- modal_content slot content -->'
    });
  },
};