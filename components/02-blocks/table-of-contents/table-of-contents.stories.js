import table_of_contents from "./table-of-contents.twig";
import "./table-of-contents.es6.js";

export default {
  title: "02-blocks/table-of-contents",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Generates a table of contents for a page using the tocbot library",
      },
      source: {
        code: "drush propel:add table-of-contents",
      },
    },
  },
  argTypes: {
    content_selector: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description:
        "The selector of the elements to create the table of contents from",
      table: { defaultValue: { summary: "body" }, type: { summary: "text" } },
    },
    heading_selector: {
      control: { type: "text" },
      type: { required: false, name: "" },
      description:
        "The selector of the headings to create the table of contents from",
      table: {
        defaultValue: { summary: "h2, h3, h4" },
        type: { summary: "text" },
      },
    },
  },
  component: table_of_contents,
};

export const Default = {
  args: {
    content_selector: ".content",
    heading_selector: "h2, h3, h4",
  },
  render: (args) => {
    return `
      <div class="grid grid-cols-2">
        <div class="col-span-1">${table_of_contents(args)}</div>
        <div class="col-span-1 content">
            <h2> heading 2 </h2>
            <h3> heading 3 </h3>
            <p> content </p>
            <h2> heading 2 </h2>
            <p> content </p>
            <h2> heading 2 </h2>
            <p> content </p>
            <h2> heading 2 </h2>
            <p> content </p>
        </div>
      </div>`;
  },
};
