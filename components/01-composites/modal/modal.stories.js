import modal from "./modal.twig";
import "@components/00-elements/dialog/dialog.es6.js";
import "@components/00-elements/dialog/dialog.pcss.css";

export default {
  title: "01-composites/modal",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A micromodal modal with a trigger and a dialog.",
      },
      source: {
        code: "drush propel:add modal",
      },
    },
  },
  argTypes: {
    modal_trigger: {
      control: { type: "text" },
      type: { required: true, name: "" },
      description: "The trigger for the modal.",
      table: { type: { summary: "text" } },
    },
  },
  component: modal,
};

export const Default = {
  args: {
    modal_trigger: "Open me",
  },
  render: (args) =>
    modal({
      ...args,
      modal_heading: "Modal Heading",
      modal_content: "<p> Modal content goes here. </p>",
    }),
};
