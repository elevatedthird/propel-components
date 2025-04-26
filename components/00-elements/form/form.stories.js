
import form from './form.twig';

export default {
  title: '00-elements/form',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A Form.',
      },
      source: {
        code: 'drush propel:add form',
      }
    },
  },
  argTypes: {},
  component: form,
};

export const Default = {
  args: {},
};