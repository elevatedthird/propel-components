
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
  argTypes: {"show_arrows":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"table":{"type":{"summary":"boolean"}}},"show_bullets":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"table":{"type":{"summary":"boolean"}}},"item_count":{"control":{"type":"number"},"type":{"required":false,"name":""},"table":{"type":{"summary":"number"}}},"classes":{"control":{"type":"object"},"type":{"required":false,"name":""},"table":{"type":{"summary":"array"}}},"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: glide,
};

export const Default = {
  args: {
    show_arrows: false,
    show_bullets: false,
    item_count: 0,
    classes: {},
    behavior_name: ""
},
};