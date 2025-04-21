
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
  argTypes: {"parent_id":{"description":"The ID of the accordion element.","control":{"type":"text"}},"heading":{"description":"The heading of the accordion item.","control":{"type":"text"}},"heading_level":{"description":"The heading type of the accordion item.","control":"select","options":[2,3,4]},"open":{"description":"The key of the intially opened item, or false.","control":"boolean"}},
  component: accordion_item,
};

export const Default = {
  args: { text: 'Click me' },
};