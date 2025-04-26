
import button from './button.twig';

export default {
  title: '00-elements/button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A button.',
      },
      source: {
        code: 'drush propel:add button',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"},"type":{"required":true,"name":""},"table":{"type":{"summary":"text"}}},"variant":{"control":{"type":"select"},"type":{"required":true,"name":""},"table":{"defaultValue":{"summary":"btn-primary"},"type":{"summary":"text"}},"options":["btn-primary","btn-secondary","btn-tertiary"]}},
  component: button,
};

export const Default = {
  args: {
    text: "button text",
    variant: "btn-primary"
},
};