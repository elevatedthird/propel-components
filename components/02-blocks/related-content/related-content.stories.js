
import related_content from './related-content.twig';

export default {
  title: '02-blocks/related-content',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'displays related content for a node',
      },
      source: {
        code: 'drush propel:add related-content',
      }
    },
  },
  argTypes: {"title":{"description":"The title of the related content block","control":{"type":"text"}},"href":{"description":"URL to full list of related content","control":{"type":"text"}},"link_text":{"description":"Link text","control":{"type":"text"}},"columns":{"description":"Number of columns to display related content in","control":{"type":"number"}},"gap":{"description":"Gap between related content items in pixels","control":"boolean"}},
  component: related_content,
};

export const Default = {
  args: { text: 'Click me' },
};