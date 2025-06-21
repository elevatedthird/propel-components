import footer from "./footer.twig";

export default {
  title: "03-formations/footer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The layout area for the parts of the footer.",
      },
      source: {
        code: "drush propel:add footer",
      },
    },
  },
  argTypes: {},
  component: footer,
};

export const Default = {
  args: {},
};
