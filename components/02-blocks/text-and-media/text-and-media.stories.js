import text_and_media from "./text-and-media.twig";

export default {
  title: "02-blocks/text-and-media",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Shows media and text content side by side with configurable order.",
      },
      source: {
        code: "drush propel:add text-and-media",
      },
    },
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    layout: {
      control: { type: "select" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
      options: ["left", "right"],
    },
  },
  component: text_and_media,
};

export const Default = {
  args: {
    heading: "This is a heading",
    layout: "left",
  },
  render: (args) =>
    text_and_media({
      ...args,
      media:
        '<img src="https://placehold.co/600x400" alt="Placeholder image"/>',
    }),
};
