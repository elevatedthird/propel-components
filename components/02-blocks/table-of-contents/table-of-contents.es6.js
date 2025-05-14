Drupal.behaviors.kineticTableOfContents = {
  attach(context) {
    const tocContainers = once('kinetic-toc', '.kinetic-toc', context);
    tocContainers.forEach((tocContainer) => {
      const { selector } = tocContainer.dataset;
      if (selector === undefined) {
        console.error('The selector is not defined in the data-selector attribute.');
        return;
      }
      // Select elements to create the TOC from.
      const sourceContent = context.querySelectorAll(selector);
      const tocList = tocContainer.querySelector('ul');
      // Create the links in the TOC.
      sourceContent.forEach((block) => {
        const heading = block.querySelector('h2');
        if (heading) {
          // Generate an ID and set it on the heading.
          const headingText = heading.textContent;
          const id = headingText.toLowerCase().split(' ').join('-').replace(/^[0-9]/, '').replace(/\xA0/g, '');
          heading.setAttribute('id', id);
          // Create the link.
          const a = document.createElement('a');
          a.setAttribute('href', `#${id}`);
          a.textContent = headingText;
          // Create the list item.
          const li = document.createElement('li');
          li.appendChild(a);
          tocList.appendChild(li);
        }
      });
    });
  },
};