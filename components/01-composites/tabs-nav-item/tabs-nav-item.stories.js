
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
  argTypes: {"id":{"description":"The machine id of the pane.","control":{"type":"text"}},"is_active":{"description":"The default tab that should be active","control":{"type":"number"}}},
  component: tabs_nav_item,
};

export const Default = {
  args: { text: 'Click me' },
};