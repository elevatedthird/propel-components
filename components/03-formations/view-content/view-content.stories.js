
import view_content from './view-content.twig';

export default {
  title: '03-formations/view-content',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Views Content.',
      },
      source: {
        code: 'drush propel:add view-content',
      }
    },
  },
  argTypes: {"rows":{"control":"object"},"empty":{"control":{"type":"text"}},"columns":{"control":{"type":"number"}},"gap":{"control":{"type":"number"}}},
  component: view_content,
};

export const Default = {
  args: { text: 'Click me' },
};