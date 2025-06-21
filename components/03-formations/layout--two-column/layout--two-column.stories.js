import layout__two_column from "./layout--two-column.twig";

export default {
  title: "03-formations/layout--two-column",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Provides a one column layout. Can be used with Layout builder or replicate a one column layout",
      },
      source: {
        code: "drush propel:add layout--two-column",
      },
    },
  },
  argTypes: {
    layout_class: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "The layout class to use for this section",
      table: { type: { summary: "text" } },
    },
    layout_id: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "The layout ID to use for this section",
      table: { type: { summary: "text" } },
    },
    settings: {
      control: { type: "object" },
      type: { required: false, name: "" },
      table: { type: { summary: "object" } },
    },
    wrapper_classes: {
      control: { type: "object" },
      type: { required: false, name: "" },
      description: "Classes to add to the wrapper",
      table: { type: { summary: "array" } },
    },
    inner_wrapper_classes: {
      control: { type: "object" },
      type: { required: false, name: "" },
      description: "Classes to add to the inner wrapper",
      table: { type: { summary: "array" } },
    },
  },
  component: layout__two_column,
};

export const Default = {
  args: {
    layout_class: "",
    layout_id: "",
    settings: {},
    wrapper_classes: {},
    inner_wrapper_classes: {},
  },
};
