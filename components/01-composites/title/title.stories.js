
import title from './title.twig';

export default {
  title: '01-composites/title',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A title section containing a title and optional description and eyebrow. This is inteneded to be included by other SDCs',
      },
      source: {
        code: 'drush propel:add title',
      }
    },
  },
  argTypes: {"eyebrow":{"control":{"type":"text"}},"heading":{"control":{"type":"text"}},"heading_tag":{"control":"select","options":["h1","h2","h3","h4","h5"]},"heading_style":{"control":"select","options":["h1","h2","h3","h4","h5"]}},
  component: title,
};

export const Default = {
  args: { text: 'Click me' },
};