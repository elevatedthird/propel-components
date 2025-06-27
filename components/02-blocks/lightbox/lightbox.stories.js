import lightbox from './lightbox.twig';
import './lightbox.es6.js';
import './lightbox.pcss.css';
import '@components/00-elements/dialog/dialog.es6.js';
import '@components/00-elements/dialog/dialog.pcss.css';
import '@components/01-composites/glide/glide.es6.js';
import '@components/01-composites/glide/glide.pcss.css';

export default {
  title: '02-blocks/lightbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a lightbox component for displaying images in a modal view',
      },
      source: {
        code: 'drush propel:add lightbox',
      }
    },
  },
  argTypes: {},
};

export const Default = {
  args: {},
  render: (args) => {
    return lightbox({
      ...args,
      thumbnails: () => '<!-- thumbnails slot content -->',
      lightbox: () => '<!-- lightbox slot content -->'
    });
  },
};