import Modal from 'bootstrap/js/dist/modal';

((Drupal) => {
  // eslint-disable-next-line
  Drupal.behaviors.kinecticModal = {
    attach: function attach(context) {
      const modals = once('kinetic-modal', '[data-component-id="kinetic:modal"]', context);
      modals.forEach((el) => {
        // assign to var if you need to call methods
        // const modal = new Modal(el);
        new Modal(el);
      });
    },
  };
})(Drupal);
