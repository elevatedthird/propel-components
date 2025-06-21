import image from "./image.twig";

export default {
  title: "00-elements/image",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Renders Image media type",
      },
      source: {
        code: "drush propel:add image",
      },
    },
  },
  argTypes: {
    view_mode: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
  },
  component: image,
};

export const Default = {
  args: {
    view_mode: "",
  },
};
