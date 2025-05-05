
import card_horizontal from './card-horizontal.twig';

export default {
  title: '01-composites/card-horizontal',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A single horzontal card.',
      },
      source: {
        code: 'drush propel:add card-horizontal',
      }
    },
  },
  argTypes: {"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"url":{"control":{"type":"text"},"type":{"required":false,"name":""},"description":"The link to the card.","table":{"type":{"summary":"text"}}}},
  component: card_horizontal,
};

export const Default = {
  args: {
    heading: "Card heading",
    url: "https://example.com",
  },
  render:(context) => {
    return card_horizontal({
      ...context,
      media: () => {
        return '<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" />';
      },
      body: () => {
        return '<p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>'
      },
    });
  }
};