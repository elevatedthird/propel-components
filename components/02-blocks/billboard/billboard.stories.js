
import billboard from './billboard.twig';

export default {
  title: '02-blocks/billboard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Hero like component that can be displayed in the middle of a page.',
      },
      source: {
        code: 'drush propel:add billboard',
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
  }
},
};

export const Default = {
  args: {
    eyebrow: "eyebrow",
    heading: "Billboard heading",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},
  render: (args) => {
    return billboard({
      ...args,
      image: () => '<img src="https://placehold.co/1000x700" alt="Placeholder Image" />',
      ctas: () => '<a class="btn-primary" href="#">Call to Action</a>',
    });
  },
};