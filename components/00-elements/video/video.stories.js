
import video from './video.twig';

export default {
  title: '00-elements/video',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Renders Video media type',
      },
      source: {
        code: 'drush propel:add video',
      }
    },
  },
  argTypes: {"view_mode":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: video,
};

export const Default = {
  args: {
    view_mode: ""
},
};