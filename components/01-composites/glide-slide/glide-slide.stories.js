
import glide_slide from './glide-slide.twig';

export default {
  title: '01-composites/glide-slide',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Provides a slide for the glidejs carousel.',
      },
      source: {
        code: 'drush propel:add glide-slide',
      }
    },
  },
  argTypes: {},
  component: glide_slide,
};

export const Default = {
  args: {},
};