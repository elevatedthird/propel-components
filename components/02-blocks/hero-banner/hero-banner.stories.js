
import hero_banner from './hero-banner.twig';

export default {
  title: '02-blocks/hero-banner',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple hero with text overlayed on an image or solid color.',
      },
      source: {
        code: 'drush propel:add hero-banner',
      }
    },
  },
  argTypes: {
  eyebrow: {
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
  description: {
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
  height: {
    control: {
      type: "select"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      defaultValue: {
        summary: "short"
      },
      type: {
        summary: "text"
      }
    },
    options: [
      "default",
      "short"
    ]
  }
},
};

export const Default = {
  args: {
    eyebrow: "this is an eyebrow",
    heading: "Hero banner heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.",
    height: "short"
},
  render: (args) => {
    return hero_banner({
      ...args,
      media: () => '<img src="https://images.unsplash.com/photo-1761470758032-42acd372d6f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1020" alt="Placeholder Image" />',
      ctas: () => '<a href="#" class="btn-primary">Call to Action</a>',
    });
  },
};