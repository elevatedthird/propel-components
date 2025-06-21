import MicroModal from "micromodal";

((Drupal) => {
  // eslint-disable-next-line
  Drupal.behaviors.kineticModal = {
    attach: function attach(context) {
      const modals = once("kinetic-modal", "[data-micromodal]", context);
      modals.forEach((element) => {
        let mm = null;
        const { behaviorName } = element.dataset;
        if (behaviorName in Drupal.behaviors) {
          if ("options" in Drupal.behaviors[behaviorName]) {
            mm = MicroModal.init(Drupal.behaviors[behaviorName].options);
          } else {
            console.error(
              "kineticModal: Expected Drupal.behaviors.%s.options, but it's undefined. Please add an options key containing Micromodal options",
            );
          }
          if (typeof Drupal.behaviors[behaviorName].init === "function") {
            Drupal.behaviors[behaviorName].init(mm, element);
          } else {
            console.error(
              "kineticModal: Expected Drupal.behaviors.%s.init, but it's undefined. Please add an init function to your JS file.",
            );
          }
        }
      });
      // Initialize the modal.
      MicroModal.init();
    },
  };
})(Drupal);
