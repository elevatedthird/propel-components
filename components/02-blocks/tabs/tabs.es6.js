((window) => {
  let uniqueTabsId = 0;
  // Tabs based on https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/
  class TabsAutomatic {
    constructor(groupNode) {
      this.tablistNode = groupNode;

      this.tabs = [];

      this.firstTab = null;
      this.lastTab = null;

      this.tabs = Array.from(this.tablistNode.querySelectorAll("[role=tab]"));
      this.tabpanels = Array.from(
        this.tablistNode.querySelectorAll("[role=tabpanel]"),
      );

      if (this.tabs.length !== this.tabpanels.length) {
        console.error(
          "TabsAutomatic: The number of tabs and tabpanels must be the same.",
        );
        return;
      }

      // Set Ids and aria attributes.
      this.tabs.forEach((tab, index) => {
        const tabHeadingId = `tabheading-id-${uniqueTabsId}`;
        const tabContentId = `tabpanel-id-${uniqueTabsId}`;
        tab.setAttribute("id", tabHeadingId);
        tab.setAttribute("aria-controls", tabContentId);
        const panel = this.tabpanels[index];
        panel.setAttribute("id", tabContentId);
        panel.setAttribute("aria-labelledby", tabHeadingId);
        uniqueTabsId += 1;
        // Add Event Listeners.
        tab.addEventListener("keydown", this.onKeydown.bind(this));
        tab.addEventListener("click", this.onClick.bind(this));
        // Set first and last tabs.
        if (!this.firstTab) {
          this.firstTab = tab;
        }
        this.lastTab = tab;
      });

      this.setSelectedTab(this.firstTab, false);
    }

    setSelectedTab(currentTab, setFocus) {
      if (typeof setFocus !== "boolean") {
        setFocus = true;
      }
      for (var i = 0; i < this.tabs.length; i += 1) {
        var tab = this.tabs[i];
        if (currentTab === tab) {
          tab.setAttribute("aria-selected", "true");
          tab.removeAttribute("tabindex");
          this.tabpanels[i].classList.remove("is-hidden");
          if (setFocus) {
            tab.focus();
          }
        } else {
          tab.setAttribute("aria-selected", "false");
          tab.tabIndex = -1;
          this.tabpanels[i].classList.add("is-hidden");
        }
      }
    }

    setSelectedToPreviousTab(currentTab) {
      var index;

      if (currentTab === this.firstTab) {
        this.setSelectedTab(this.lastTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.setSelectedTab(this.tabs[index - 1]);
      }
    }

    setSelectedToNextTab(currentTab) {
      var index;

      if (currentTab === this.lastTab) {
        this.setSelectedTab(this.firstTab);
      } else {
        index = this.tabs.indexOf(currentTab);
        this.setSelectedTab(this.tabs[index + 1]);
      }
    }

    /* EVENT HANDLERS */
    onKeydown(event) {
      var tgt = event.currentTarget,
        flag = false;

      switch (event.key) {
        case "ArrowLeft":
          this.setSelectedToPreviousTab(tgt);
          flag = true;
          break;

        case "ArrowRight":
          this.setSelectedToNextTab(tgt);
          flag = true;
          break;

        case "Home":
          this.setSelectedTab(this.firstTab);
          flag = true;
          break;

        case "End":
          this.setSelectedTab(this.lastTab);
          flag = true;
          break;

        default:
          break;
      }

      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    onClick(event) {
      this.setSelectedTab(event.currentTarget);
    }
  }

  window.TabsAutomatic = TabsAutomatic;
})(window);

Drupal.behaviors.kineticTabs = {
  attach(context) {
    const tabs = once("kinetic-tabs", ".kinetic-tabs", context);
    tabs.forEach((element) => {
      new TabsAutomatic(element);
    });
  },
};
