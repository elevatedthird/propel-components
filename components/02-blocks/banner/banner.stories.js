import banner from "./banner.twig";

export default {
  title: "02-blocks/banner",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A simple banner for structured pages.",
      },
      source: {
        code: "drush propel:add banner",
      },
    },
  },
  argTypes: {
    eyebrow: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    heading: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
  },
  component: banner,
};

export const Default = {
  args: {
    eyebrow: "This is an eyebrow",
    heading: "Heading 1",
  },
};
