import layout__content_header from "./layout--content-header.twig";

export default {
  title: "03-formations/layout--content-header",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The Content Header component is used to display intro content to the page. Things such as the page title, a hero, a banner or whatnot. This is the first section of really any page. It has no padding and is intended to be a blank canvas.",
      },
      source: {
        code: "drush propel:add layout--content-header",
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
  component: layout__content_header,
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
