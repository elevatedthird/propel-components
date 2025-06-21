import byline from "./byline.twig";

export default {
  title: "01-composites/byline",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A component for showing an author byline.",
      },
      source: {
        code: "drush propel:add byline",
      },
    },
  },
  argTypes: {
    name: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "Author name.",
      table: { type: { summary: "text" } },
    },
  },
  component: byline,
};

export const Default = {
  args: {
    name: "John Doe",
  },
  render: (args) => {
    return byline({
      ...args,
      image: '<img src="https://placehold.co/32x32" alt="Author Image" />',
    });
  },
};
