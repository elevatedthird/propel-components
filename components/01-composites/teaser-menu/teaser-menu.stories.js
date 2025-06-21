
import teaser_menu from './teaser-menu.twig';

export default {
  title: '01-composites/teaser-menu',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A small teaser that displays in the menu.',
      },
      source: {
        code: 'drush propel:add teaser-menu',
      }
    },
  },
  argTypes: {
  heading: {
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
  },
  url: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The link to the card.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  link_text: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The text for the link.",
    table: {
      defaultValue: {
        summary: "Read more"
      },
      type: {
        summary: "text"
      }
    }
  }
},
};

export const Default = {
  args: {
    heading: "",
    url: "",
    link_text: "Read more"
},
  render: (args) => {
    return teaser_menu({
      ...args,
      	image: () => { <!-- image slot content --> }
    });
  },
};