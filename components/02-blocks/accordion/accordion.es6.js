import Accordion from 'accordion-js';

Drupal.behaviors.accordion = {
  attach(context) {
    const accordions = once('accordion', '.accordion', context);
    accordions.forEach((accordion) => {
      new Accordion(accordion);
    });
  },
};
