
import tabs from './tabs.twig';

export default {
  title: '01-composites/tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a tabs component',
      },
      source: {
        code: 'drush propel:add tabs',
      }
    },
  },
  argTypes: {"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: tabs,
};

export const Default = {
  args: {
    behavior_name: ""
},
};