
import blog from './blog.twig';
import byline from '@components/01-composites/byline/byline.twig';

export default {
  title: '04-pages/blog',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A basic Blog page.',
      },
      source: {
        code: 'drush propel:add blog',
      }
    },
  },
  argTypes: {"category":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"title":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}},"publish_date":{"control":{"type":"text"},"type":{"required":false,"name":""},"table":{"type":{"summary":"text"}}}},
  component: blog,
};

export const Default = {
  args: {
    category: "news",
    title: "E3 Blog Post",
    publish_date: "June 15, 2025"
  },
  render: (args) => {
    const body = `
      <h2> Heading 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, sem vitae cursus pulvinar, leo erat congue quam, in fermentum metus nisi vitae tortor. In in sapien et dolor laoreet accumsan venenatis sit amet magna. Nulla tortor enim, efficitur eget quam eget, sollicitudin interdum nisl. Sed sed efficitur mauris. Nunc sit amet pulvinar nulla. Quisque sagittis posuere vulputate. Fusce interdum iaculis lobortis. Aenean nunc dui, sagittis sit amet efficitur non, malesuada quis massa. Vestibulum congue lectus consectetur sem tristique, sit amet facilisis justo faucibus. Nam id neque a neque fringilla vulputate a dapibus massa. Nulla vitae efficitur diam, vitae hendrerit ante. Maecenas et maximus ante. In tempor enim ut sem lacinia ullamcorper. Vestibulum pharetra arcu ac dapibus mattis.</p>
      <h2> Heading 2</h2>
      <p>Suspendisse potenti. Nulla fringilla fringilla dignissim. Ut at lorem at elit sollicitudin interdum at in ex. Fusce eget egestas ante, ac suscipit eros. Nunc viverra ex eu ex dignissim fermentum. Donec enim lacus, pulvinar quis congue vitae, sodales eget enim. Ut eleifend nulla felis, eu dictum leo vehicula vitae. Aliquam viverra venenatis velit, in varius lorem tempor eu. </p>
      <h3> Heading 3</h3>
      <p>Ut et lectus dignissim, fermentum erat nec, fermentum ante. Nulla aliquam dolor in ex commodo, sit amet posuere libero ullamcorper. Cras vestibulum neque et sem malesuada condimentum. Vestibulum nec pellentesque purus, viverra posuere tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla at urna sit amet erat aliquet accumsan vitae at enim. Duis commodo rhoncus finibus. Suspendisse ut iaculis magna. Aenean at odio volutpat, dignissim metus quis, tristique dui. Suspendisse potenti. Nulla dignissim tellus at elementum malesuada. Aenean vitae quam non sapien facilisis viverra. Integer eu accumsan sem, nec eleifend erat. Nullam et lorem quis ex posuere ultrices ac sed quam. Nunc dictum ligula id nibh porta vestibulum. Duis in nibh vel mauris iaculis dapibus.</p>
    `
    return blog({
      ...args,
      authors: byline({
        name: 'John Doe',
        image: '<img src="https://placehold.co/32x32" width="32" height="32" />',
        title: 'Senior Writer'
      }),
      content: body
    });
  }
};