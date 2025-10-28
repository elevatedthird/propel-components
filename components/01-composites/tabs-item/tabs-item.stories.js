
import tabs_item from './tabs-item.twig';

export default {
  title: '01-composites/tabs-item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Represents a tabs component pane.',
      },
      source: {
        code: 'drush propel:add tabs-item',
      }
    },
  },
  argTypes: {},
};

export const Default = {
  args: {},
  render: (args) => {
    return tabs_item({
      ...args,
      tab_content: () => '<!-- tab_content slot content -->'
    });
  },
};