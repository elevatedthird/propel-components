Drupal.behaviors.searchReveal = {
  attach(context) {
    const [trigger] = once('search-reveal', 'button[aria-controls="search-reveal"]', context);
    const [searchReveal] = once('search-reveal', '#search-reveal', context);
    const [form] = once('search-reveal', 'form', searchReveal);
    if (trigger && searchReveal && form) {
      // Get the buttons inside the form.
      const formSubmit = searchReveal.querySelector(':scope > button[type="submit"]');
      const formClose = searchReveal.querySelector(':scope > button[type="reset"]');

      // Open reveal.
      const open = () => {
        trigger.setAttribute('aria-expanded', 'true');
        trigger.setAttribute('aria-label', 'Close Search');
        searchReveal.classList.add('is-open');
        searchReveal.querySelector('input[type="search"]').focus();
      };

      const close = () => {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-label', 'Open Search');
        searchReveal.classList.remove('is-open');
        trigger.focus();
      };

      // Attach events.
      trigger.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
          open();
        } else {
          window.location.href = form.action;
        }
      });
      formClose.addEventListener('click', close);
      formSubmit.addEventListener('click', () => form.submit());
      trigger.addEventListener('focus', () => {
        if (trigger.getAttribute('aria-expanded') === 'true') {
          close();
        }
      });
      // Close form if clicked outside.
      document.addEventListener('click', (e) => {
        if (trigger.contains(e.target) || e.target === trigger) {
          return;
        }
        if (!e.target.closest('#search-reveal') && trigger.getAttribute('aria-expanded') === 'true') {
          close();
        }
      });
      document.addEventListener('keydown', (e) => {
        // Close Search if ESC is pressed.
        if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
          close();
        }
    });
    }
  },
};