
import rich_text from './rich-text.twig';

export default {
  title: '00-elements/rich-text',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A wrapper that adds the text-formatted class around the CKEditor output.',
      },
      source: {
        code: 'drush propel:add rich-text',
      }
    },
  },
  argTypes: {},
  component: rich_text,
};

export const Default = {
  args: {},
};