Drupal.behaviors.kineticMenuTrigger = {
  attach(context) {
    const buttons = once('kinetic-menu-trigger', '.kinetic-menu-trigger', context);
    buttons.forEach((element) => {
      // Event to open/close the mobile menu.
      function openOrClose(e, close = false) {
        if ('code' in e) {
          if (e.code !== 'Enter' || e.code !== 'Space') {
            return;
          }
        }
        const targetId = this.getAttribute('aria-controls');
        const container = document.getElementById(targetId);
        const triggers = document.querySelectorAll(`[aria-controls="${targetId}"]`);
        if (!container) {
          console.error(`Cannot find container with ID: ${targetId}`);
          return;
        }
        if (triggers.length > 0) {
          let isOpen = container.classList.contains('is-open');
          if (close) {
            isOpen = true;
          }
          // Set the state on all triggers.
          triggers.forEach((el) => {
            if (isOpen) {
              el.classList.remove('is-open');
              el.setAttribute('aria-expanded', 'false');
              el.setAttribute('aria-label', 'Open mobile menu');
            } else {
              el.classList.add('is-open');
              el.setAttribute('aria-expanded', 'true');
              el.setAttribute('aria-label', 'Close mobile menu');
            }
          });
          // Toggle the container state.
          if (isOpen) {
            container.classList.remove('is-open');
            document.body.style.overflow = '';
          } else {
            container.classList.add('is-open');
            document.body.style.overflow = 'hidden';
          }
        }
      }
      element.addEventListener('click', openOrClose);
      element.addEventListener('keyup', openOrClose);

      // Automatically close the mobile menu if the window is resized above 1024px.
      window.addEventListener('resize', (e) => {
        if (window.innerWidth >= 1024 && buttons.length > 0) {
          buttons.forEach((element) => openOrClose.call(element, e, true));
        }
      });
    });
  },
};
