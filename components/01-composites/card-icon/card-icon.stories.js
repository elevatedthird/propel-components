import card_icon from "./card-icon.twig";

export default {
  title: "01-composites/card-icon",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A card with an icon, heading and description.",
      },
      source: {
        code: "drush propel:add card-icon",
      },
    },
  },
  argTypes: {
    heading: {
      control: {
        type: "text",
      },
      type: {
        required: false,
        name: "",
      },
      table: {
        type: {
          summary: "text",
        },
      },
    },
    description: {
      control: {
        type: "text",
      },
      type: {
        required: false,
        name: "",
      },
      table: {
        type: {
          summary: "text",
        },
      },
    },
  },
};

export const Default = {
  args: {
    heading: "Card Icon Heading",
    description: "This is short description of the card icon.",
  },
  render: (args) => {
    return card_icon({
      ...args,
      icon: () => "<img src='https://placehold.co/30x30'>",
    });
  },
};
