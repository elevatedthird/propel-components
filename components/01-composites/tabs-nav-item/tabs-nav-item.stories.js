
import tabs_nav_item from './tabs-nav-item.twig';

export default {
  title: '01-composites/tabs-nav-item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Represents a tabs component pane.',
      },
      source: {
        code: 'drush propel:add tabs-nav-item',
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
    description: "The tab navigation item content.",
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
    heading: ""
},
  render: (args) => {
    return tabs_nav_item({
      ...args,
      
    });
  },
};