
import section_intro from './section-intro.twig';

export default {
  title: '02-blocks/section-intro',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A title section containing a title and optional description, eyebrow, and ctas.',
      },
      source: {
        code: 'drush propel:add section-intro',
      }
    },
  },
  argTypes: {"eyebrow":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"heading":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"alignment":{"control":{"type":"select"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}},"options":["left","right","center"]},},
  component: section_intro,
};

export const Default = {
  args: {
    eyebrow: "This is the eyebrow",
    heading: "This is a Heading",
    alignment: "left",
  },
  render: (context) => {
    return section_intro({
      ...context,
      description: '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sodales magna, ac lobortis ipsum. Vestibulum consequat tempus sem, in ultricies libero fermentum id. Morbi aliquet id sem ac malesuada. Praesent tempus mauris venenatis diam pretium, finibus mollis magna feugiat. Duis sed quam blandit, elementum nisi nec, semper quam. </p>',
      ctas: '<div class="flex gap-4"><a href="" class="btn-primary"> Learn More</a><a href="" class="btn-secondary"> Get in Touch</a></div>'
    });
  },
};