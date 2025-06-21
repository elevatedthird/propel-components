import tabs from "./tabs.twig";
import tabItem from "@components/01-composites/tabs-item/tabs-item.twig";
import tabNavItem from "@components/01-composites/tabs-nav-item/tabs-nav-item.twig";
import "./tabs.es6.js";
import "./tabs.pcss.css";

export default {
  title: "02-blocks/tabs",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Provides an accesible tabs component",
      },
      source: {
        code: "drush propel:add tabs",
      },
    },
  },
  argTypes: {
    behavior_name: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
  },
  component: tabs,
};

export const Default = {
  args: {
    behavior_name: "",
  },
  render: (context) => {
    const tabMarkup = `
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;
    return `${tabs({
      ...context,
      panels: () => `
        ${tabItem({ tab_content: "<h3> Tab content 1</h3>" + tabMarkup })}
        ${tabItem({ tab_content: "<h3> Tab content 2</h3>" + tabMarkup })}
        ${tabItem({ tab_content: "<h3> Tab content 3</h3>" + tabMarkup })}
      `,
      tab_navigation: () => `
        ${tabNavItem({ heading: "heading 1" })}
        ${tabNavItem({ heading: "heading 2" })}
        ${tabNavItem({ heading: "heading 3" })}
      `,
    })}`;
  },
};
