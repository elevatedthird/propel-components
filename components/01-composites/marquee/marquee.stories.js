import marquee from "./marquee.twig";

export default {
  title: "01-composites/marquee",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Provides a component that scrolls content vertically or horizontally infinitely.",
      },
      source: {
        code: "drush propel:add marquee",
      },
    },
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      type: { required: false, name: "" },
      table: {
        defaultValue: { summary: "horizontal" },
        type: { summary: "text" },
      },
      options: ["horizontal", "vertical"],
    },
    gap: {
      control: { type: "number" },
      type: { required: false, name: "" },
      table: { defaultValue: { summary: 24 }, type: { summary: "number" } },
    },
    reverse: {
      control: { type: "boolean" },
      type: { required: false, name: "" },
      table: { type: { summary: "boolean" } },
    },
  },
  component: marquee,
};

export const Default = {
  args: {
    direction: "horizontal",
    gap: 24,
    reverse: false,
  },
};
