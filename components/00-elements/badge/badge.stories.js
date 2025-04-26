
import badge from './badge.twig';

export default {
  title: '00-elements/badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A badge.',
      },
      source: {
        code: 'drush propel:add badge',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"},"type":{"required":true,"name":""},"table":{"type":{"summary":"text"}}}},
  component: badge,
};

export const Default = {
  args: {
    text: "badge text"
},
};