
import observer from './observer.twig';

export default {
  title: '00-elements/observer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper for observing an element',
      },
      source: {
        code: 'drush propel:add observer',
      }
    },
  },
  argTypes: {"tag":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The HTML tag to use for the element","table":{"defaultValue":{"summary":"div"},"type":{"summary":"text"}}},"classes":{"control":{"type":"object"},"type":{"required":false,"name":""},"description":"Classes to apply to the element","table":{"type":{"summary":"array"}}},"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The name of the Drupal Behavior that defines the callbacks","table":{"type":{"summary":"text"}}}},
  component: observer,
};

export const Default = {
  args: {
    tag: "div",
    classes: {},
    behavior_name: ""
},
};