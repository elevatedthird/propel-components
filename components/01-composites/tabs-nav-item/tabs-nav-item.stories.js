
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
  argTypes: {"id":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The machine id of the pane.","table":{"type":{"summary":"text"}}},"is_active":{"control":{"type":"number"},"type":{"required":false,"name":""},"description":"The default tab that should be active","table":{"type":{"summary":"number"}}}},
  component: tabs_nav_item,
};

export const Default = {
  args: {
    id: "",
    is_active: 0
},
};