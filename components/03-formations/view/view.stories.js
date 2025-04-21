
import view from './view.twig';

export default {
  title: '03-formations/view',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Drupal View.',
      },
      source: {
        code: 'drush propel:add view',
      }
    },
  },
  argTypes: {"pager":{"control":"object"}},
  component: view,
};

export const Default = {
  args: { text: 'Click me' },
};