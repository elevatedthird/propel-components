
import teaser_featured from './teaser-featured.twig';

export default {
  title: '01-composites/teaser-featured',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A teaser for content preview.',
      },
      source: {
        code: 'drush propel:add teaser-featured',
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
    return teaser_featured({
      ...args,
      	media: () => { <!-- media slot content --> },
	body: () => { <!-- body slot content --> }
    });
  },
};