import vimeo from "./vimeo.twig";
import "./vimeo.es6.js";
import "./vimeo.pcss.css";

export default {
  title: "00-elements/vimeo",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A wraper around the vimeo-lite web component. Use this if you need more control around the vimeo player.",
      },
      source: {
        code: "drush propel:add vimeo",
      },
    },
  },
  argTypes: {
    video_id: {
      control: { type: "text" },
      type: { required: false, name: "" },
      table: { type: { summary: "text" } },
    },
  },
  component: vimeo,
};

export const Default = {
  args: {
    video_id: "27246366",
  },
};
