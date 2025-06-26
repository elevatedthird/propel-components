import{t as g,D as h,T as s,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const v=e=>{e.extendFunction("include",(t,r)=>{const i=window.SDC_MANIFEST[t];if(!i)throw new Error(`Template ${t} not found`);const{id:o,href:m}=i;try{const n=e.twig({ref:o});if(n)return n.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:o,href:m,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};v(s);const f=e=>e.extendFilter("clean_unique_id",t=>t);f(s);w(s);s.cache(!1);const l=e=>e,y=(e={})=>{const t=g.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/teaser/teaser.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"link_title",expression:[{type:"Twig.expression.type.variable",value:"link_text",match:["link_text"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"Read more"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:0,end:53}},position:{start:0,end:53}},{type:"raw",value:`<article class="cursor-pointer group relative">
  <div class="bg-gray-100">
    <div class="aspect-16/9">
      `,position:{start:54,end:166}},{type:"output",position:{start:166,end:177},stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"],position:{start:166,end:177}}]},{type:"raw",value:`
    </div>
  </div>
  <div class="my-4">
    <h3 class="h3 inline-block">
      <a href="`,position:{start:177,end:267}},{type:"output",position:{start:267,end:276},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:267,end:276}}]},{type:"raw",value:'" aria-label="',position:{start:276,end:290}},{type:"output",position:{start:290,end:306},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:290,end:306}}]},{type:"raw",value:'" title="',position:{start:306,end:315}},{type:"output",position:{start:315,end:331},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:315,end:331}}]},{type:"raw",value:'" class="after:absolute after:inset-0"> ',position:{start:331,end:371}},{type:"output",position:{start:371,end:384},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:371,end:384}}]},{type:"raw",value:`</a>
    </h3>
    <div class="text-formatted">
      `,position:{start:384,end:438}},{type:"output",position:{start:438,end:448},stack:[{type:"Twig.expression.type.variable",value:"body",match:["body"],position:{start:438,end:448}}]},{type:"raw",value:`
    </div>
    <div class="mt-4">
      <span aria-hidden="true" class="link-next group-hover:gap-3"> `,position:{start:448,end:551}},{type:"output",position:{start:551,end:588},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:551,end:588}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:551,end:588},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:551,end:588}},{type:"Twig.expression.type.string",value:"Read more",position:{start:551,end:588}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:551,end:588},expression:!1}]}]},{type:"raw",value:` </span>
    </div>
  </div>
</article>
`,position:{start:588,end:588}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),l(t.render({attributes:new h(r),...e}))}catch(r){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/teaser/teaser.twig: "+r.toString())}},k={title:"01-composites/teaser",tags:["autodocs"],parameters:{docs:{description:{component:"A teaser for content preview."},source:{code:"drush propel:add teaser"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},description:"The link to the card.",table:{type:{summary:"text"}}},link_text:{control:{type:"text"},type:{required:!1,name:""},description:"The text for the link.",table:{defaultValue:{summary:"Read more"},type:{summary:"text"}}}},component:y},a={args:{heading:"Some title here",url:"https://google.com",link_text:"Read more"},render:e=>y({...e,body:"<p> Teaser description text. lorem ipsum</p>"})};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: "Some title here",
    url: "https://google.com",
    link_text: "Read more"
  },
  render: args => teaser({
    ...args,
    body: "<p> Teaser description text. lorem ipsum</p>"
  })
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,k as default};
