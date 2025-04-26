
import billboard from './billboard.twig';

export default {
  title: '02-blocks/billboard',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a media background with text content overlay',
      },
      source: {
        code: 'drush propel:add billboard',
      }
    },
  },
  argTypes: {"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"heading_style":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["h1","h2","h3"]},"heading_tag":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["h1","h2","h3"]},"alignment":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["left","right","center"]}},
  component: billboard,
};

export const Default = {
  args: {
    heading: "",
    heading_style: "h1",
    heading_tag: "h1",
    alignment: "left"
},
};