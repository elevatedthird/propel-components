
import section from './section.twig';

export default {
  title: '03-formations/section',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An easy wrapper to use for creating sections. Either Via layout builder or to mimic layout build on a structured page.',
      },
      source: {
        code: 'drush propel:add section',
      }
    },
  },
  argTypes: {"layout_class":{"description":"The layout class to use for this section","control":{"type":"text"}},"layout_id":{"description":"The layout ID to use for this section","control":{"type":"text"}},"settings":{"control":"object"},"wrapper_classes":{"description":"Classes to add to the wrapper","control":"object"},"inner_wrapper_classes":{"description":"Classes to add to the inner wrapper","control":"object"}},
  component: section,
};

export const Default = {
  args: { text: 'Click me' },
};