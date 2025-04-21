
import link from './link.twig';

export default {
  title: '00-elements/link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'undefined',
      },
      source: {
        code: 'drush propel:add link',
      }
    },
  },
  argTypes: {"title":{"control":{"type":"text"}},"href":{"control":{"type":"text"}},"variant":{"control":"select","options":["nolink"]},"style":{"control":"select","options":["primary","underline"]}},
  component: link,
};

export const Default = {
  args: { text: 'Click me' },
};