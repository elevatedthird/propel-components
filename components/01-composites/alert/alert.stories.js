
import alert from './alert.twig';

export default {
  title: '01-composites/alert',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A sitewide notification or alert.',
      },
      source: {
        code: 'drush propel:add alert',
      }
    },
  },
  argTypes: {"dismissible":{"control":{"type":"boolean"},"type":{"required":true,"name":""},"description":"Whether the alert can be dismissed by the user.","table":{"type":{"summary":"boolean"}}}},
  component: alert,
};

export const Default = {
  args: {
    dismissible: false
},
};