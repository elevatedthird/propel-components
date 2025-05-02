
import glide from './glide.twig';
import './glide.es6.js';
import './glide.pcss.css';
import glideSlide from '../glide-slide/glide-slide.twig';

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
  argTypes: {
    "show_arrows":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"table":{"type":{"summary":"boolean"}}},
    "show_bullets":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"table":{"type":{"summary":"boolean"}}},
    "slide_count":{"control":{"type":"number"},"type":{"required":true,"name":""},"table":{disable: true, "type":{"summary":"number"}}},
    "classes":{"control":{"type":"array"},"type":{"required":false,"name":""},"table":{"type":{"summary":"array"}}},"behavior_name":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: glide,
};

export const Default = {
  args: {
    show_arrows: false,
    show_bullets: false,
    classes: [],
    behavior_name: ""
  },
  render: (context) => {
    const slideMarkup = `
      <p class="p-8 border rounded-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;
    return `${glide({
      ...context,
      slide_count: 3,
      items: () => {
        let markup = '';
        markup += glideSlide({ item: slideMarkup });
        markup += glideSlide({ item: slideMarkup });
        markup += glideSlide({ item: slideMarkup });
        return markup;
      },
    })}`;
  },
};