
import table_of_contents from './table-of-contents.twig';

export default {
  title: '02-blocks/table-of-contents',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Programmatically generates a table of contents for a page',
      },
      source: {
        code: 'drush propel:add table-of-contents',
      }
    },
  },
  argTypes: {"selector":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The selector of the elements to create the table of contents from","table":{"type":{"summary":"text"}}}},
  component: table_of_contents,
};

export const Default = {
  args: {
    selector: ""
},
};