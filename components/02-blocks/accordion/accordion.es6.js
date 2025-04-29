import Accordion from 'accordion-js';

Drupal.behaviors.accordion = {
  attach(context) {
    const accordions = once('accordion', '.accordion', context);
    accordions.forEach((accordion) => {
      const { allowMultiple, open } = accordion.dataset;
      const options = {
        showMultiple: allowMultiple === 'true'
      };
      if (open === 'true') {
        options.openOnInit = [0];
      }
      new Accordion(accordion, options);
    });
  },
};
