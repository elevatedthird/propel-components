
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
  }
},
};

export const Default = {
  args: {
    heading: "This is the heading",
    url: "https://google.com",
},
  render: (args) => {
    return teaser_menu({
      ...args,
      image: () => '<img src="https://plachold.co/300x200" alt="Placeholder image"/>'
    });
  },
};