
import quote from './quote.twig';

export default {
  title: '01-composites/quote',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a block quote component.',
      },
      source: {
        code: 'drush propel:add quote',
      }
    },
  },
  argTypes: {"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: quote,
};

export const Default = {
  args: {
    behavior_name: ""
},
};