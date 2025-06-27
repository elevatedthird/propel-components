
import search_result from './search-result.twig';

export default {
  title: '01-composites/search-result',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a search result for Site Search.',
      },
      source: {
        code: 'drush propel:add search-result',
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
    description: "The heading for the search result.",
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
    description: "The description for the search result.",
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
    description: "The URL for the search result.",
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
    heading: "",
    description: "",
    url: ""
},
  render: (args) => {
    return search_result({
      ...args,
      
    });
  },
};