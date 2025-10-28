
import speaker from './speaker.twig';

export default {
  title: '01-composites/speaker',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays information about a speaker for an event, webinar, etc.',
      },
      source: {
        code: 'drush propel:add speaker',
      }
    },
  },
  argTypes: {
  name: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Speaker name",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  role: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Speaker role or title.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  company: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Speaker company.",
    table: {
      type: {
        summary: "text"
      }
    }
  },
  bio: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "Short speaker bio.",
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
    name: "",
    role: "",
    company: "",
    bio: ""
},
  render: (args) => {
    return speaker({
      ...args,
      headshot: () => '<!-- headshot slot content -->',
	social_link: () => '<!-- social_link slot content -->'
    });
  },
};