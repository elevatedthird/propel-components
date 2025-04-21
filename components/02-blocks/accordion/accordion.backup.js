import Accordion from './accordion.twig';
import './accordion.es6.js';
// Dependencies.
import AccordionItem from '@components/01-composites/accordion-item/accordion-item.twig';

export default {
  title: 'Blocks/Accordion',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
};

// Set default variables in the story.
export const Default = {
  args: { open: false },
  render: () => {
    return `${Accordion({
      open: false,
      accordion_items: [AccordionItem({ heading: 'asdf', body: 'asdf'})],
    })}`;
  }
};
