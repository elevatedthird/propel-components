
import accordion from './accordion.twig';
import './accordion.es6.js';
import AccordionItem from '@components/01-composites/accordion-item/accordion-item.twig';
import '@components/01-composites/accordion-item/accordion-item.module.css';

export default {
  title: '02-blocks/accordion',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A bootstrap accordion. Providing a trigger and a accordion.',
      },
      source: {
        code: 'drush propel:add accordion',
      }
    },
  },
  argTypes: {
    "open":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"description":"Check if the first item should be opened by default.","table":{"type":{"summary":"boolean"}}},
    "allow_multiple":{"control":{"type":"boolean"},"type":{"required":false,"name":""},"description":"Check if multiple items can be opened at the same time.","table":{"type":{"summary":"boolean"}}}
  },
  component: accordion,
};

export const Default = {
  args: { 
    open: true,
    allow_multiple: true,
  },
  render: (context) => {
    return `${accordion({
      ...context,
      accordion_items: () => {
        let markup = '';
        markup += AccordionItem({ heading: `Heading 1`, body: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>'});
        markup += AccordionItem({ heading: `Heading 2`, body: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>'});
        markup += AccordionItem({ heading: `Heading 3`, body: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>'});
        markup += AccordionItem({ heading: `Heading 4`, body: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>'});
        return markup;
      },
    })}`;
  }
};