import{b as a}from"./byline-4NipKZri.js";import"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const p={title:"01-composites/byline",tags:["autodocs"],parameters:{docs:{description:{component:"A component for showing an author byline."},source:{code:"drush propel:add byline"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},description:"Author name.",table:{type:{summary:"text"}}}},component:a},e={args:{name:"John Doe"},render:n=>a({...n,image:'<img src="https://placehold.co/32x32" alt="Author Image" />'})};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: "John Doe"
  },
  render: args => {
    return byline({
      ...args,
      image: '<img src="https://placehold.co/32x32" alt="Author Image" />'
    });
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const i=["Default"];export{e as Default,i as __namedExportsOrder,p as default};
