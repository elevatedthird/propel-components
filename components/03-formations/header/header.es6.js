Drupal.behaviors.kineticMenu = {
  attach(context) {
    const subMenus = context === document ? context.querySelectorAll('.kinetic-nav') : [context];
    subMenus.forEach((menu) => {
      if (!menu) {
        return;
      }
      // Set up dropdowns.
      const triggers = once('kinetic-menu', 'ul.menu-level-0 > li', menu);
      triggers.forEach((trigger, index) => {
        if (!trigger.classList.contains('menu-item--expanded')) {
          return;
        }
        const dropdown = trigger.querySelector('.menu-dropdown');
        // Check if there's a link.
        const link = trigger.querySelector('.menu-link > a');
        let toggle = null;
        if (link) {
          // Add a button to trigger the dropdown.
          const button = document.createElement('button');
          const menuItem = trigger.querySelector('.menu-link');
          menuItem.appendChild(button);
          toggle = button;
        }
        // Check if there's a span.
        const span = trigger.querySelector('.menu-link > span');
        if (span) {
          toggle = span;
        }
        const menulinkTitle = link ? link.textContent : toggle.textContent;
        // Set aria attributes and event listeners.
        if (toggle) {
          toggle.setAttribute('role', 'button');
          toggle.setAttribute('aria-haspopup', 'true');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.setAttribute('aria-label', `Open submenu for ${menulinkTitle}`);
          toggle.setAttribute('tabindex', '0');
          toggle.setAttribute('aria-controls', dropdown.id);
          toggle.addEventListener('keydown', (event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
              trigger.dispatchEvent(new MouseEvent('mouseover', {
                bubbles: true,
                cancelable: true,
              }));
            }
          });
        }
        const firstLink = dropdown.querySelector('a');
        const lastLink = Array.from(dropdown.querySelectorAll('a')).pop();
        let closeTimeout = null;

        function close(timeout) {
          if (closeTimeout) {
            clearTimeout(closeTimeout);
          }
          closeTimeout = setTimeout(() => {
            trigger.classList.remove('is-open');
            dropdown.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', `Open menu for ${menulinkTitle}`);
          }, timeout);
        }

        function closeDesktop() {
          if (window.innerWidth >= 768) {
            close(300);
          }
        }

        function open() {
          if (dropdown) {
            trigger.classList.add('is-open');
            dropdown.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            toggle.setAttribute('aria-label', `Close menu for ${menulinkTitle}`);
          }
        }

        /**
         * Attach events.
         */
        trigger.addEventListener('mouseover', (event) => {
          event.preventDefault();
          if (window.innerWidth < 768) {
            return;
          }
          open();
        });
        trigger.addEventListener('click', (event) => {
          if (window.innerWidth < 768) {
            if (toggle.getAttribute('aria-expanded') === 'true') {
              close(0);
              return;
            }
            open();
          }
        });
        trigger.addEventListener('mouseleave', closeDesktop);
        dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimeout));
        dropdown.addEventListener('mouseleave', closeDesktop);
        firstLink.addEventListener('blur', (event) => {
          if (!dropdown.contains(event.relatedTarget)) {
            close(0);
          }
        });
        lastLink.addEventListener('blur', (event) => {
          if (!dropdown.contains(event.relatedTarget)) {
            close(0);
          }
        });
      });
    });
  },
};

Drupal.behaviors.kineticMobileMenu = {
  attach(context) {
    const subMenus = once('kinetic-mobile-menu', '.kinetic-nav', context);
    subMenus.forEach((menuWrapper) => {
      const subnav = menuWrapper.querySelector('.mobile-menu-wrapper');
      const button = menuWrapper.querySelector(`button[aria-controls='${subnav.id}']`);
      button.addEventListener('click', () => {
        if (button.getAttribute('aria-expanded') === 'true') {
          subnav.classList.add('!d-none');
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-label', 'Expand menu links');
          return;
        }
        subnav.classList.toggle('!d-none');
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Collapse menu links');
      });

      /**
       * Toggle classes based on width.
       */
      function checkWidth() {
        if (window.innerWidth < 768) {
          subnav.classList.add('!d-none');
          button.classList.remove('!d-none');
        } else {
          subnav.classList.remove('!d-none');
          button.classList.add('!d-none');
        }
      }

      window.addEventListener('resize', Drupal.debounce(() => {
        checkWidth();
      }, 300));
      checkWidth();
    });

  }
}