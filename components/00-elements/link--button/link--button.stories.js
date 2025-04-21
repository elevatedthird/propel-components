
import link__button from './link--button.twig';

export default {
  title: '00-elements/link--button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An anchor tag that looks like a button.',
      },
      source: {
        code: 'drush propel:add link--button',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"}},"href":{"control":{"type":"text"}},"style":{"control":"select","options":["primary","outline"]}},
  component: link__button,
};

export const Default = {
  args: { text: 'Click me' },
};