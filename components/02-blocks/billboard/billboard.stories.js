
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
  argTypes: {"heading":{"control":{"type":"text"}},"heading_style":{"control":"select","options":["h1","h2","h3"]},"heading_tag":{"control":"select","options":["h1","h2","h3"]},"alignment":{"control":"select","options":["left","right","center"]}},
  component: billboard,
};

export const Default = {
  args: { text: 'Click me' },
};