
import eyebrow from './eyebrow.twig';

export default {
  title: '00-elements/eyebrow',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A short line of text that may appear above a heading.',
      },
      source: {
        code: 'drush propel:add eyebrow',
      }
    },
  },
  argTypes: {"text":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"variant":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["eyebrow"]}},
  component: eyebrow,
};

export const Default = {
  args: {
    text: "This is an eyebrow",
    variant: "eyebrow"
},
};