import dropdown from "./dropdown.twig";
import "./dropdown.es6.js";

export default {
  title: "01-composites/dropdown",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An accessible dropdown with keyboard navigation.",
      },
      source: {
        code: "drush propel:add dropdown",
      },
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
  },
  component: dropdown,
};

export const Default = {
  args: {
    label: "Dropdown Heading",
  },
  render: (args) => dropdown({
    ...args,
    content: `<p> Dropdown content </p>`
  }),
};
