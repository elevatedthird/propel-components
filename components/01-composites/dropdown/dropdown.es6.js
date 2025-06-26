((window) => {
  class KineticDropdown {
    constructor(element) {
      this.trigger = element.querySelector(":scope > button");
      if (!this.trigger) {
        throw new Error("Trigger button not found");
      }
      this.dropdown = element.querySelector(
        `[aria-labelledby="${this.trigger.id}"]`,
      );
      if (!this.dropdown) {
        throw new Error("Dropdown not found");
      }
      this.init();
    }

    close(target) {
      if (this.trigger === target || this.trigger.contains(target)) {
        return;
      }
      if ((this.dropdown === target || !this.dropdown.contains(target)) && this.trigger.getAttribute("aria-expanded") === "true" ) {
        this.trigger.setAttribute("aria-expanded", "false");
        this.trigger.setAttribute("aria-label", "Open dropdown");
        this.dropdown.classList.add('d-none');
        this.dropdown.classList.remove('block');
      }
    }

    init() {
      // Attach events.
      // Close dropdowns if ESC is pressed.
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.close(this.dropdown);
        }
      });
      // Close dropdown if clicked outside.
      document.addEventListener("click", (e) => this.close(e.target));
      // Close dropdown if focus leaves the dropdown.
      this.dropdown.addEventListener("focusout", (e) => this.close(e.relatedTarget));
      // Open dropdown on click.
      this.trigger.addEventListener("click", () => {
        if (this.trigger.getAttribute("aria-expanded") === "false") {
          this.trigger.setAttribute("aria-expanded", 'true');
          this.trigger.setAttribute("aria-label", "Close dropdown");
          this.dropdown.classList.remove('d-none');
          this.dropdown.classList.add('block');
          return;
        }
        this.close(this.dropdown);
      });
    }
  }
  window.KineticDropdown = KineticDropdown;
})(window);

Drupal.behaviors.kineticDropdown = {
  attach(context) {
    // Set aria attributes for accessibility.
    const dropdowns = once("kinetic-dropdown", ".kinetic-dropdown", context);
    dropdowns.forEach((dropdown) => {
      new KineticDropdown(dropdown);
    });
  },
};
