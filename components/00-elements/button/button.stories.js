
import button from './button.twig';

export default {
  title: '00-elements/button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'undefined',
      },
      source: {
        code: 'drush propel:add button',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"}},"variant":{"control":"select","options":["link"]},"style":{"control":"select","options":["primary","outline"]}},
  component: button,
};

export const Default = {
  args: { text: 'Click me' },
};