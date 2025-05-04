
import icon_link from './icon-link.twig';

export default {
  title: '01-composites/icon-link',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays an icon with a link.',
      },
      source: {
        code: 'drush propel:add icon-link',
      }
    },
  },
  argTypes: {"url":{"control":{"type":"object"},"type":{"required":false,"name":""},"description":"The URL to link to.","table":{"type":{"summary":"object"}}},"title":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The title attribute for the link.","table":{"type":{"summary":"text"}}}},
  component: icon_link,
};

export const Default = {
  args: {
    url: {},
    title: ""
},
};