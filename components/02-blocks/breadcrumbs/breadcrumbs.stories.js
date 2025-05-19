
import breadcrumbs from './breadcrumbs.twig';

export default {
  title: '02-blocks/breadcrumbs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides breadcrumb navigation for the site. Intended to wrap the breadcrumb entity.',
      },
      source: {
        code: 'drush propel:add breadcrumbs',
      }
    },
  },
  argTypes: {"items":{"control":{"type":"object"},"type":{"required":false,"name":""},"table":{"type":{"summary":"array"}}}},
  component: breadcrumbs,
};

export const Default = {
  args: {
    items: {}
},
};