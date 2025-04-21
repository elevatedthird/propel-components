
import page from './page.twig';

export default {
  title: '04-pages/page',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Page template for structured pages.',
      },
      source: {
        code: 'drush propel:add page',
      }
    },
  },
  argTypes: {"title":{"description":"Page title.","control":{"type":"text"}},"date":{"description":"Formatted publish date.","control":{"type":"text"}},"type":{"description":"Page type.","control":{"type":"text"}}},
  component: page,
};

export const Default = {
  args: { text: 'Click me' },
};