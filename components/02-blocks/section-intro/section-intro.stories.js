
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
  argTypes: {"eyebrow":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"heading_style":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["h2","h3","h4","h5"]},"alignment":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["left","right","center"]},"description":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The description to be displayed in the section intro","table":{"type":{"summary":"text"}}}},
  component: section_intro,
};

export const Default = {
  args: {
    eyebrow: "",
    heading: "",
    heading_style: "h2",
    alignment: "left",
    description: ""
},
};