
import glide from './glide.twig';

export default {
  title: '01-composites/glide',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a glidejs carousel.',
      },
      source: {
        code: 'drush propel:add glide',
      }
    },
  },
  argTypes: {"show_arrows":{"control":"boolean"},"show_bullets":{"control":"boolean"},"item_count":{"control":{"type":"number"}},"classes":{"control":"object"},"behavior_name":{"control":{"type":"text"}}},
  component: glide,
};

export const Default = {
  args: { text: 'Click me' },
};