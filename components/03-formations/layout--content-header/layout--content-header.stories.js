
import layout__content_header from './layout--content-header.twig';

export default {
  title: '03-formations/layout--content-header',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Content Header component is used to display intro content to the page. Things such as the page title, a hero, a banner or whatnot. This is the first section of really any page. It has no padding and is intended to be a blank canvas.',
      },
      source: {
        code: 'drush propel:add layout--content-header',
      }
    },
  },
  argTypes: {"layout_class":{"description":"The layout class to use for this section","control":{"type":"text"}},"layout_id":{"description":"The layout ID to use for this section","control":{"type":"text"}},"settings":{"control":"object"},"wrapper_classes":{"description":"Classes to add to the wrapper","control":"object"},"inner_wrapper_classes":{"description":"Classes to add to the inner wrapper","control":"object"}},
  component: layout__content_header,
};

export const Default = {
  args: { text: 'Click me' },
};