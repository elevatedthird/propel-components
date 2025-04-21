
import ctas from './ctas.twig';

export default {
  title: '01-composites/ctas',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A group of buttons or links that are styled as calls to action.',
      },
      source: {
        code: 'drush propel:add ctas',
      }
    },
  },
  argTypes: {"classes":{"control":"object"}},
  component: ctas,
};

export const Default = {
  args: { text: 'Click me' },
};