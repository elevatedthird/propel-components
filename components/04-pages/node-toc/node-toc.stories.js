
import node_toc from './node-toc.twig';

export default {
  title: '04-pages/node-toc',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Node content with a table of contents.',
      },
      source: {
        code: 'drush propel:add node-toc',
      }
    },
  },
  argTypes: {
  show_toc: {
    control: {
      type: "boolean"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Show table of contents",
    table: {
      type: {
        summary: "boolean"
      }
    }
  },
  content_classes: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "classes to wrap the page content.",
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
    show_toc: false,
    content_classes: ""
},
  render: (args) => {
    return node_toc({
      ...args,
      	page_banner: () => { <!-- page_banner slot content --> },
	page_content: () => { <!-- page_content slot content --> },
	page_bottom: () => { <!-- page_bottom slot content --> }
    });
  },
};