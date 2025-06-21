Drupal.behaviors.kineticIntersectionObserver = {
  handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Check for callbacks.
        const { behaviorName } = entry.target.dataset;
        if (Drupal.behaviors[behaviorName]) {
          // On Enter callback.
          if (typeof Drupal.behaviors[behaviorName].onEnter === "function") {
            Drupal.behaviors[behaviorName].onEnter(entry, observer);
          }
        } else {
          console.error(
            `Kinetic IntersectionObserver: Behavior ${behaviorName} not found.`,
          );
        }
      }
    });
  },
  attach(context) {
    const elements = once(
      "observer",
      '[data-component-id="kinetic:observer"]',
      context,
    );
    const observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: [0.2, 0.5, 0.8],
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  },
};
