import{t as y,D as f,T as n,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const b=e=>{e.extendFunction("include",(t,r)=>{const a=window.SDC_MANIFEST[t];if(!a)throw new Error(`Template ${t} not found`);const{id:i,href:m}=a;try{const s=e.twig({ref:i});if(s)return s.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:m,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};b(n);const g=e=>e.extendFilter("clean_unique_id",t=>t);g(n);w(n);n.cache(!1);const c=e=>e,h=(e={})=>{const t=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/teaser-person/teaser-person.twig",data:[{type:"raw",value:`<div class="flex items-center gap-4">
  <div class="rounded-full bg-gray-050 w-[64px] h-[64px]">
    `,position:{start:0,end:101}},{type:"output",position:{start:101,end:112},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:101,end:112}}]},{type:"raw",value:`
  </div>
  <div class="byline__author-info">
    <h4 class="font-body text-[16px] mb-0 font-bold"> `,position:{start:112,end:212}},{type:"output",position:{start:212,end:222},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:212,end:222}}]},{type:"raw",value:` </h4>
    <p class="text-gray mb-0"> `,position:{start:222,end:260}},{type:"output",position:{start:260,end:275},stack:[{type:"Twig.expression.type.variable",value:"job_title",match:["job_title"],position:{start:260,end:275}}]},{type:"raw",value:` </p>
  </div>
</div>`,position:{start:275,end:275}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),c(t.render({attributes:new f(r),...e}))}catch(r){return c("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/teaser-person/teaser-person.twig: "+r.toString())}},v={title:"01-composites/teaser-person",tags:["autodocs"],parameters:{docs:{description:{component:"A teaser for a person or author."},source:{code:"drush propel:add teaser-person"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},job_title:{control:{type:"text"},type:{required:!1,name:""},description:"Job title or designation.",table:{type:{summary:"text"}}},description:{control:{type:"text"},type:{required:!1,name:""},description:"Shot description of this person.",table:{type:{summary:"text"}}}},component:h},o={args:{name:"",job_title:"",description:""}};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "",
    job_title: "",
    description: ""
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const T=["Default"];export{o as Default,T as __namedExportsOrder,v as default};
