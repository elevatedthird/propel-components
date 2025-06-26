
import quote from './quote.twig';

export default {
  title: '01-composites/quote',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a block quote component.',
      },
      source: {
        code: 'drush propel:add quote',
      }
    },
  },
  argTypes: {
  quote: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The quote text.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  attribution: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The attribution text.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  attribution_description: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The attribution description text.",
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
    quote: "This is a quote. It can be a testimonial, a saying, or any other text that you want to highlight.",
    attribution: "John Doe",
    attribution_description: "Head of marketing, Acme corp",
},
  render: (args) => {
    return quote({
      ...args,
      image: () => '<img src="https://placehold.co/100x100" alt="Placeholder image"/>',
    });
  },
};