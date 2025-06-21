import homepage_hero from "./homepage-hero.twig";

export default {
  title: "02-blocks/homepage-hero",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Provides a hero component for a homepage",
      },
      source: {
        code: "drush propel:add homepage-hero",
      },
    },
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    eyebrow: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    eyebrow_h1: {
      control: { type: "boolean" },
      type: { required: false, name: "" },
      table: { type: { summary: "boolean" } },
    },
  },
  component: homepage_hero,
};

export const Default = {
  args: {
    heading: "This is the heading",
    eyebrow: "This is the eyebrow",
    eyebrow_h1: false,
  },
  render: (context) => {
    return homepage_hero({
      ...context,
      media:
        '<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=980" />',
      description:
        "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sodales magna, ac lobortis ipsum. Vestibulum consequat tempus sem, in ultricies libero fermentum id. Morbi aliquet id sem ac malesuada. Praesent tempus mauris venenatis diam pretium, finibus mollis magna feugiat. Duis sed quam blandit, elementum nisi nec, semper quam. </p>",
      ctas: '<div class="flex gap-4"><a href="" class="btn-primary"> Learn More</a><a href="" class="btn-secondary"> Get in Touch</a></div>',
    });
  },
};
