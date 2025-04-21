
import card from './card.twig';

export default {
  title: '01-composites/card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A single card.',
      },
      source: {
        code: 'drush propel:add card',
      }
    },
  },
  argTypes: {"heading":{"control":{"type":"text"}}},
  component: card,
};

export const Default = {
  args: { text: 'Click me' },
};