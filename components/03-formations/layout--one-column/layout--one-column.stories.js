
import layout__one_column from './layout--one-column.twig';

export default {
  title: '03-formations/layout--one-column',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a one column layout. Can be used with Layout builder or replicate a one column layout',
      },
      source: {
        code: 'drush propel:add layout--one-column',
      }
    },
  },
  argTypes: {"layout_class":{"description":"The layout class to use for this section","control":{"type":"text"}},"layout_id":{"description":"The layout ID to use for this section","control":{"type":"text"}},"settings":{"control":"object"},"wrapper_classes":{"description":"Classes to add to the wrapper","control":"object"},"inner_wrapper_classes":{"description":"Classes to add to the inner wrapper","control":"object"}},
  component: layout__one_column,
};

export const Default = {
  args: { text: 'Click me' },
};