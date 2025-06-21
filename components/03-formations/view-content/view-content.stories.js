import view_content from "./view-content.twig";

export default {
  title: "03-formations/view-content",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Views Content.",
      },
      source: {
        code: "drush propel:add view-content",
      },
    },
  },
  argTypes: {
    rows: {
      control: { type: "object" },
      type: { required: false, name: "" },
      table: { type: { summary: "array" } },
    },
    empty: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    columns: {
      control: { type: "number" },
      type: { required: false, name: "" },
      table: { type: { summary: "number" } },
    },
    gap: {
      control: { type: "number" },
      type: { required: false, name: "" },
      table: { type: { summary: "number" } },
    },
  },
  component: view_content,
};

export const Default = {
  args: {
    rows: {},
    empty: "",
    columns: 0,
    gap: 0,
  },
};
