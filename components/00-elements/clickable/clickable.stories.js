
import clickable from './clickable.twig';

export default {
  title: '00-elements/clickable',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A utility SDC that makes the content clickable',
      },
      source: {
        code: 'drush propel:add clickable',
      }
    },
  },
  argTypes: {"title":{"control":{"type":"text"},"type":{"required":true,"name":""},"description":"Link Title attribute","table":{"type":{"summary":"text"}}},"url":{"control":{"type":"text"},"type":{"required":true,"name":""},"description":"Link url","table":{"type":{"summary":"text"}}}},
  component: clickable,
};

export const Default = {
  args: {
    title: "",
    url: ""
},
};