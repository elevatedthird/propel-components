import tocbot from "tocbot";

Drupal.behaviors.kineticTableOfContents = {
  attach(context) {
    const tocContainers = once("kinetic-toc", ".kinetic-toc", context);
    tocContainers.forEach((tocContainer) => {
      const { contentSelector, headingSelector } = tocContainer.dataset;
      if (contentSelector === undefined) {
        throw new error("data-content-selector attribute is undefined.");
      }
      if (headingSelector === undefined) {
        throw new error("data-heading-selector attribute is undefined.");
      }
      tocbot.init({
        tocSelector: ".kinetic-toc-inner",
        contentSelector: contentSelector,
        headingSelector: headingSelector,
        hasInnerContainers: true,
        ignoreSelector: ".toc-ignore",
        headingsOffset: 1,
        scrollSmoothDuration: 100,
        throttleTimeout: 0,
      });
    });
  },
};
