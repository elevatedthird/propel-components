import ctas from "./ctas.twig";

export default {
  title: "01-composites/ctas",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A group of buttons or links that are styled as calls to action.",
      },
      source: {
        code: "drush propel:add ctas",
      },
    },
  },
  argTypes: {
    classes: {
      control: { type: "object" },
      type: { required: false, name: "" },
      table: { type: { summary: "array" } },
    },
  },
  component: ctas,
};

export const Default = {
  args: {
    classes: {},
  },
};
