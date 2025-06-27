
import search_reveal from './search-reveal.twig';

export default {
  title: '01-composites/search-reveal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a collapsible search input that goes in the header.',
      },
      source: {
        code: 'drush propel:add search-reveal',
      }
    },
  },
  argTypes: {
  placeholder: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The placeholder text for the search input.",
    table: {
      defaultValue: {
        summary: "Search"
      },
      type: {
        summary: "text"
      }
    }
  },
  action: {
    control: {
      type: "text"
    },
    type: {
      required: false,
      name: ""
    },
    description: "The URL to which the search form will submit.",
    table: {
      defaultValue: {
        summary: "/search"
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
    placeholder: "Search",
    action: "/search"
},
  render: (args) => {
    return search_reveal({
      ...args,
      
    });
  },
};