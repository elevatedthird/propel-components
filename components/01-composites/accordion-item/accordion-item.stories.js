
import accordion_item from './accordion-item.twig';

export default {
  title: '01-composites/accordion-item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A bootstrap accordion item.',
      },
      source: {
        code: 'drush propel:add accordion-item',
      }
    },
  },
  argTypes: {"parent_id":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The ID of the accordion element.","table":{"type":{"summary":"text"}}},"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The heading of the accordion item.","table":{"type":{"summary":"text"}}},"heading_level":{"control":{"type":"select"},"type":{"required":false,"name":""},"description":"The heading type of the accordion item.","table":{"defaultValue":{"summary":3},"type":{"summary":"number"}},"options":[2,3,4]},"open":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"description":"The key of the intially opened item, or false.","table":{"type":{"summary":"boolean"}}}},
  component: accordion_item,
};

export const Default = {
  args: {
    parent_id: "",
    heading: "",
    heading_level: 2,
    open: false
},
};