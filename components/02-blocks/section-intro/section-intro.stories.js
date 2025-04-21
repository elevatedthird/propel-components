
import section_intro from './section-intro.twig';

export default {
  title: '02-blocks/section-intro',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A title section containing a title and optional description, eyebrow, and ctas.',
      },
      source: {
        code: 'drush propel:add section-intro',
      }
    },
  },
  argTypes: {"eyebrow":{"control":{"type":"text"}},"heading":{"control":{"type":"text"}},"heading_style":{"control":"select","options":["h2","h3","h4","h5"]},"alignment":{"control":"select","options":["left","right","center"]},"description":{"description":"The description to be displayed in the section intro","control":{"type":"text"}}},
  component: section_intro,
};

export const Default = {
  args: { text: 'Click me' },
};