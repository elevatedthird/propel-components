
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
  argTypes: {"title":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"Page title.","table":{"type":{"summary":"text"}}},"date":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"Formatted publish date.","table":{"type":{"summary":"text"}}},"type":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"Page type.","table":{"type":{"summary":"text"}}}},
  component: page,
};

export const Default = {
  args: {
    title: "",
    date: "",
    type: ""
},
};