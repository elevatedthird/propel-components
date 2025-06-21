import related_content from "./related-content.twig";

export default {
  title: "02-blocks/related-content",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "displays related content for a node",
      },
      source: {
        code: "drush propel:add related-content",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "The title of the related content block",
      table: { type: { summary: "text" } },
    },
    href: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "URL to full list of related content",
      table: { type: { summary: "text" } },
    },
    link_text: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "Link text",
      table: { type: { summary: "text" } },
    },
    columns: {
      control: { type: "number" },
      type: { required: false, name: "" },
      description: "Number of columns to display related content in",
      table: { defaultValue: { summary: 3 }, type: { summary: "number" } },
    },
    gap: {
      control: { type: "boolean" },
      type: { required: false, name: "" },
      description: "Gap between related content items in pixels",
      table: { defaultValue: { summary: true }, type: { summary: "boolean" } },
    },
  },
  component: related_content,
};

export const Default = {
  args: {
    title: "",
    href: "",
    link_text: "",
    columns: 3,
    gap: true,
  },
};
