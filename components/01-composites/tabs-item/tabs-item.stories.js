
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
  argTypes: {"id":{"description":"The machine id of the pane.","control":{"type":"text"}},"show_active":{"description":"The default tab that should be active","control":{"type":"number"}}},
  component: tabs_item,
};

export const Default = {
  args: { text: 'Click me' },
};