((window) => {
  class KineticDropdown {
    constructor(element) {
      this.trigger = element.querySelector('> button');
      if (!this.trigger) {
        throw new Error('Trigger button not found');
      }
      this.dropdown = element.querySelector(`[aria-labelledby="${this.trigger.id}"]`);
      if (!this.dropdown) {
        throw new Error('Dropdown not found');
      }
      this.init();
    }

    init() {
      // Attach events.
      document.addEventListener('keydown', (e) => {
        // Close dropdowns if ESC is pressed.
        if (e.key === 'Escape' && this.dropdown.getAttribute('aria-expanded') === 'true') {
          this.dropdown.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('click', (e) => {
        const id = dropdown.getAttribute('id');
        if (!e.target.closest(`#${id}`) && this.dropdown.getAttribute('aria-expanded') === 'true') {
          this.dropdown.setAttribute('aria-expanded', 'false');
        }
      });
      // close dropdown if focus leaves the dropdown.
      this.dropdown.addEventListener('focusout', (e) => {
        if (!tocListBox.contains(e.relatedTarget) && this.dropdown.getAttribute('aria-expanded') === 'true') {
          this.dropdown.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }
  window.KineticDropdown = KineticDropdown;
})(window);

Drupal.behaviors.kineticDropdown = {
  attach(context) {
    // Set aria attributes for accessibility.
    const dropdowns = once('kinetic-dropdown', '.kinetic-dropdown', context);
    dropdowns.forEach((dropdown) => {
      new KineticDropdown(dropdown);
    });

  },
};