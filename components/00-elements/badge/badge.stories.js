
import badge from './badge.twig';

export default {
  title: '00-elements/badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'undefined',
      },
      source: {
        code: 'drush propel:add badge',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"}},"style":{"control":"select","options":["light","dark"]}},
  component: badge,
};

export const Default = {
  args: { text: 'Click me' },
};