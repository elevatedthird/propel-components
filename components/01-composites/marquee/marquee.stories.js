
import marquee from './marquee.twig';
import './marquee.es6.js';
import './marquee.pcss.css';

export default {
  title: '01-composites/marquee',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a component that scrolls content vertically or horizontally infinitely.',
      },
      source: {
        code: 'drush propel:add marquee',
      }
    },
  },
  argTypes: {
  direction: {
    control: {
      type: "select"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      defaultValue: {
        summary: "horizontal"
      },
      type: {
        summary: "text"
      }
    },
    options: [
      "horizontal",
      "vertical"
    ]
  },
  gap: {
    control: {
      type: "number"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      defaultValue: {
        summary: 24
      },
      type: {
        summary: "number"
      }
    }
  },
  duration: {
    control: {
      type: "number"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      defaultValue: {
        summary: 40000
      },
      type: {
        summary: "number"
      }
    }
  },
  focusable: {
    control: {
      type: "boolean"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      type: {
        summary: "boolean"
      }
    }
  },
  reverse: {
    control: {
      type: "boolean"
    },
    type: {
      required: false,
      name: ""
    },
    table: {
      type: {
        summary: "boolean"
      }
    }
  }
},
};

export const Default = {
  args: {
    direction: "horizontal",
    gap: 24,
    focusable: true,
    duration: 40000,
    reverse: false
},
  render: (args) => {
    return marquee({
      ...args,
      items: () => '<img src="https://placehold.co/200x100" alt="logo"><img src="https://placehold.co/200x100" alt="logo"><img src="https://placehold.co/200x100" alt="logo"><img src="https://placehold.co/200x100" alt="logo">'
    });
  },
};