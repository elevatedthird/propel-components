import logo_bar from './logo-bar.twig';
import '@components/01-composites/marquee/marquee.es6.js';

export default {
  title: '02-blocks/logo-bar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays a list of company logos',
      },
      source: {
        code: 'drush propel:add logo-bar',
      }
    },
  },
  argTypes: {"variant":{"control":{"type":"select"},"type":{"required":false,"name":""},"description":"How the logo bar should display","table":{"defaultValue":{"summary":"default"},"type":{"summary":"text"}},"options":["grid","animate"]}},
  component: logo_bar,
};

export const Default = {
  args: {
    variant: "animate"
  },
  render: (args) => {
    return logo_bar({
      ...args,
      logos: `
        <img width="120" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" alt="Image 1" />
        <img width="120" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" alt="Image 2" />
        <img width="120" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" alt="Image 3" />
        <img width="120" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" alt="Image 4" />
      `
    });

  },
};
