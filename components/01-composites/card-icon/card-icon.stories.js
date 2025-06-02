
import card_icon from './card-icon.twig';

export default {
  title: '01-composites/card-icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of buttons or links that are styled as calls to action.',
      },
      source: {
        code: 'drush propel:add card-icon',
      }
    },
  },
  argTypes: {"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"description":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"icon":{"control":{"type":"object"},"type":{"required":false,"name":""},"table":{"type":{"summary":"array"}}}},
  component: card_icon,
};

export const Default = {
  args: {
    heading: "",
    description: "",
    icon: {}
},
};