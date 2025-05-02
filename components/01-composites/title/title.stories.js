
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
  argTypes: {"eyebrow":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"eyebrow_tag":{"control":{"type":"select"},"type":{"required":false,"name":""},"description":"Tag for eyebrow. Default is p. this doesn't change the style","table":{"type":{"summary":"boolean"}},"options":["p","h1","h2"]},"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"heading_tag":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["h1","h2","h3","h4","h5"]},"heading_style":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["h1","h2","h3","h4","h5"]}},
  component: title,
};

export const Default = {
  args: {
    eyebrow: "this is the eyebrow",
    eyebrow_tag: "p",
    heading: "this is the heading",
    heading_tag: "h1",
    heading_style: "h1"
},
};