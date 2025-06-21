import link from "./link.twig";

export default {
  title: "00-elements/link",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Anchor tag.",
      },
      source: {
        code: "drush propel:add link",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      type: { required: true, name: "" },
      table: { type: { summary: "text" } },
    },
    href: {
      control: { type: "text" },
      type: { required: true, name: "" },
      table: { type: { summary: "text" } },
    },
    variant: {
      control: { type: "select" },
      type: { required: false, name: "" },
      table: { defaultValue: { summary: "link" }, type: { summary: "text" } },
      options: ["link", "link-next", "link-prev"],
    },
  },
  component: link,
};

export const Default = {
  args: {
    title: "Link text",
    href: "#",
    variant: "link",
  },
};
