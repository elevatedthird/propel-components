
import section_region from './section-region.twig';

export default {
  title: '03-formations/section-region',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple component to add section regions with appropriate attributes to a layout builder section',
      },
      source: {
        code: 'drush propel:add section-region',
      }
    },
  },
  argTypes: {"layout__region":{"description":"The layout region to use for this section","control":{"type":"text"}},"region":{"description":"The region to use for this section","control":"object"}},
  component: section_region,
};

export const Default = {
  args: { text: 'Click me' },
};