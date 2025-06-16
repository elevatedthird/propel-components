import{t as v,D as b,T as s,a as f}from"./twig--J2y2TUI.js";import{b as h}from"./byline-4NipKZri.js";import"./_commonjsHelpers-D6-XlEtG.js";const y=e=>{e.extendFunction("include",(t,i)=>{const u=window.SDC_MANIFEST[t];if(!u)throw new Error(`Template ${t} not found`);const{id:r,href:g}=u;try{const n=e.twig({ref:r});if(n)return n.render(i);throw new Error(`Template ${t} not found`)}catch{const o=e.twig({id:r,href:g,async:!1});if(o)return o.render(i);throw new Error(`Template ${t} not found`)}})};y(s);const q=e=>e.extendFilter("clean_unique_id",t=>t);q(s);f(s);s.cache(!1);const l=e=>e,d=(e={})=>{const t=v.twig({id:"/home/runner/work/propel-components/propel-components/components/04-pages/blog/blog.twig",data:[{type:"raw",value:`<section>
  <div class="bg-gray-100 py-12">
    <div class="container">
      <div class="inline-block border-2 border-black rounded-full py-1 px-4 uppercase text-sm">
        `,position:{start:0,end:176}},{type:"output",position:{start:176,end:190},stack:[{type:"Twig.expression.type.variable",value:"category",match:["category"],position:{start:176,end:190}}]},{type:"raw",value:`
      </div>
      <h1 class="h1 mt-6">`,position:{start:190,end:230}},{type:"output",position:{start:230,end:241},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:230,end:241}}]},{type:"raw",value:`</h1>
      <div class="flex items-center gap-2">
        `,position:{start:241,end:299}},{type:"output",position:{start:299,end:312},stack:[{type:"Twig.expression.type.variable",value:"authors",match:["authors"],position:{start:299,end:312}}]},{type:"raw",value:`
        · <p> `,position:{start:312,end:327}},{type:"output",position:{start:327,end:345},stack:[{type:"Twig.expression.type.variable",value:"publish_date",match:["publish_date"],position:{start:327,end:345}}]},{type:"raw",value:` </p>
    </div>
  </div>
</section>
<section class="container max-w-4xl my-12">
  <div class="text-formatted">
    `,position:{start:345,end:461}},{type:"output",position:{start:461,end:474},stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"],position:{start:461,end:474}}]},{type:"raw",value:`
  </div>
</section>`,position:{start:474,end:474}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let i=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(i)||(i=Object.entries(i)),l(t.render({attributes:new b(i),...e}))}catch(i){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/04-pages/blog/blog.twig: "+i.toString())}},A={title:"04-pages/blog",tags:["autodocs"],parameters:{docs:{description:{component:"A basic Blog page."},source:{code:"drush propel:add blog"}}},argTypes:{category:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},title:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},publish_date:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:d},a={args:{category:"news",title:"E3 Blog Post",publish_date:"June 15, 2025"},render:e=>d({...e,authors:h({name:"John Doe",image:'<img src="https://placehold.co/32x32" width="32" height="32" />',title:"Senior Writer"}),content:`
      <h2> Heading 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, sem vitae cursus pulvinar, leo erat congue quam, in fermentum metus nisi vitae tortor. In in sapien et dolor laoreet accumsan venenatis sit amet magna. Nulla tortor enim, efficitur eget quam eget, sollicitudin interdum nisl. Sed sed efficitur mauris. Nunc sit amet pulvinar nulla. Quisque sagittis posuere vulputate. Fusce interdum iaculis lobortis. Aenean nunc dui, sagittis sit amet efficitur non, malesuada quis massa. Vestibulum congue lectus consectetur sem tristique, sit amet facilisis justo faucibus. Nam id neque a neque fringilla vulputate a dapibus massa. Nulla vitae efficitur diam, vitae hendrerit ante. Maecenas et maximus ante. In tempor enim ut sem lacinia ullamcorper. Vestibulum pharetra arcu ac dapibus mattis.</p>
      <h2> Heading 2</h2>
      <p>Suspendisse potenti. Nulla fringilla fringilla dignissim. Ut at lorem at elit sollicitudin interdum at in ex. Fusce eget egestas ante, ac suscipit eros. Nunc viverra ex eu ex dignissim fermentum. Donec enim lacus, pulvinar quis congue vitae, sodales eget enim. Ut eleifend nulla felis, eu dictum leo vehicula vitae. Aliquam viverra venenatis velit, in varius lorem tempor eu. </p>
      <h3> Heading 3</h3>
      <p>Ut et lectus dignissim, fermentum erat nec, fermentum ante. Nulla aliquam dolor in ex commodo, sit amet posuere libero ullamcorper. Cras vestibulum neque et sem malesuada condimentum. Vestibulum nec pellentesque purus, viverra posuere tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla at urna sit amet erat aliquet accumsan vitae at enim. Duis commodo rhoncus finibus. Suspendisse ut iaculis magna. Aenean at odio volutpat, dignissim metus quis, tristique dui. Suspendisse potenti. Nulla dignissim tellus at elementum malesuada. Aenean vitae quam non sapien facilisis viverra. Integer eu accumsan sem, nec eleifend erat. Nullam et lorem quis ex posuere ultrices ac sed quam. Nunc dictum ligula id nibh porta vestibulum. Duis in nibh vel mauris iaculis dapibus.</p>
    `})};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    category: "news",
    title: "E3 Blog Post",
    publish_date: "June 15, 2025"
  },
  render: args => {
    const body = \`
      <h2> Heading 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, sem vitae cursus pulvinar, leo erat congue quam, in fermentum metus nisi vitae tortor. In in sapien et dolor laoreet accumsan venenatis sit amet magna. Nulla tortor enim, efficitur eget quam eget, sollicitudin interdum nisl. Sed sed efficitur mauris. Nunc sit amet pulvinar nulla. Quisque sagittis posuere vulputate. Fusce interdum iaculis lobortis. Aenean nunc dui, sagittis sit amet efficitur non, malesuada quis massa. Vestibulum congue lectus consectetur sem tristique, sit amet facilisis justo faucibus. Nam id neque a neque fringilla vulputate a dapibus massa. Nulla vitae efficitur diam, vitae hendrerit ante. Maecenas et maximus ante. In tempor enim ut sem lacinia ullamcorper. Vestibulum pharetra arcu ac dapibus mattis.</p>
      <h2> Heading 2</h2>
      <p>Suspendisse potenti. Nulla fringilla fringilla dignissim. Ut at lorem at elit sollicitudin interdum at in ex. Fusce eget egestas ante, ac suscipit eros. Nunc viverra ex eu ex dignissim fermentum. Donec enim lacus, pulvinar quis congue vitae, sodales eget enim. Ut eleifend nulla felis, eu dictum leo vehicula vitae. Aliquam viverra venenatis velit, in varius lorem tempor eu. </p>
      <h3> Heading 3</h3>
      <p>Ut et lectus dignissim, fermentum erat nec, fermentum ante. Nulla aliquam dolor in ex commodo, sit amet posuere libero ullamcorper. Cras vestibulum neque et sem malesuada condimentum. Vestibulum nec pellentesque purus, viverra posuere tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla at urna sit amet erat aliquet accumsan vitae at enim. Duis commodo rhoncus finibus. Suspendisse ut iaculis magna. Aenean at odio volutpat, dignissim metus quis, tristique dui. Suspendisse potenti. Nulla dignissim tellus at elementum malesuada. Aenean vitae quam non sapien facilisis viverra. Integer eu accumsan sem, nec eleifend erat. Nullam et lorem quis ex posuere ultrices ac sed quam. Nunc dictum ligula id nibh porta vestibulum. Duis in nibh vel mauris iaculis dapibus.</p>
    \`;
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
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,A as default};
