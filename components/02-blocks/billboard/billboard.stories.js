
import billboard from './billboard.twig';

export default {
  title: '02-blocks/billboard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A component like a hero that can be displayed in the middle of a page.',
      },
      source: {
        code: 'drush propel:add billboard',
      }
    },
  },
  argTypes: {"items":{"control":{"type":"object"},"type":{"required":false,"name":""},"table":{"type":{"summary":"array"}}}},
  component: billboard,
};

export const Default = {
  args: {
    items: {}
},
};