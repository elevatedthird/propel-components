import teaser_person from "./teaser-person.twig";

export default {
  title: "01-composites/teaser-person",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A teaser for a person or author.",
      },
      source: {
        code: "drush propel:add teaser-person",
      },
    },
  },
  argTypes: {
    name: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
    job_title: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "Job title or designation.",
      table: { type: { summary: "text" } },
    },
    description: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description: "Shot description of this person.",
      table: { type: { summary: "text" } },
    },
  },
  component: teaser_person,
};

export const Default = {
  args: {
    name: "",
    job_title: "",
    description: "",
  },
};
