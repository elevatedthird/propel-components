import header from "./header.twig";

export default {
  title: "03-formations/header",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "This is used to layout organisms or other components that build up the header of the site.",
      },
      source: {
        code: "drush propel:add header",
      },
    },
  },
  argTypes: {},
  component: header,
};

export const Default = {
  args: {},
};
