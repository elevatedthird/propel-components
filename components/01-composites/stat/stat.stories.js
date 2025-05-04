
import stat from './stat.twig';

export default {
  title: '01-composites/stat',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a statistic component.',
      },
      source: {
        code: 'drush propel:add stat',
      }
    },
  },
  argTypes: {"stat":{"control":{"type":"text"},"type":{"required":true,"name":""},"description":"The statistic to display.","table":{"type":{"summary":"text"}}},"description":{"control":{"type":"text"},"type":{"required":true,"name":""},"description":"The description for the statistic.","table":{"type":{"summary":"text"}}}},
  component: stat,
};

export const Default = {
  args: {
    stat: "",
    description: ""
},
};