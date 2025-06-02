import{t as y,D as b,T as r,a as f}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const w=e=>{e.extendFunction("include",(t,o)=>{const i=window.SDC_MANIFEST[t];if(!i)throw new Error(`Template ${t} not found`);const{id:a,href:m}=i;try{const s=e.twig({ref:a});if(s)return s.render(o);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:a,href:m,async:!1});if(p)return p.render(o);throw new Error(`Template ${t} not found`)}})};w(r);const h=e=>e.extendFilter("clean_unique_id",t=>t);h(r);f(r);r.cache(!1);const l=e=>e,g=(e={})=>{const t=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig",data:[{type:"raw",value:`<div class="flex items-center gap-4">
  <div class="rounded-full bg-gray-050 w-[64px] h-[64px]">
    `,position:{start:0,end:101}},{type:"output",position:{start:101,end:112},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:101,end:112}}]},{type:"raw",value:`
  </div>
  <div class="byline__author">
    <div class="byline__author-info">
      <h4 class="font-body text-[19px] mb-0 font-bold"> `,position:{start:112,end:247}},{type:"output",position:{start:247,end:257},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:247,end:257}}]},{type:"raw",value:` </h4>
      <p class="text-gray mb-0"> `,position:{start:257,end:297}},{type:"output",position:{start:297,end:312},stack:[{type:"Twig.expression.type.variable",value:"job_title",match:["job_title"],position:{start:297,end:312}}]},{type:"raw",value:` </p>
    </div>
  </div>
</div>`,position:{start:312,end:312}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let o=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(o)||(o=Object.entries(o)),l(t.render({attributes:new b(o),...e}))}catch(o){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig: "+o.toString())}},_={title:"01-composites/byline",tags:["autodocs"],parameters:{docs:{description:{component:"A component for showing an author byline."},source:{code:"drush propel:add byline"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},description:"Author name.",table:{type:{summary:"text"}}},job_title:{control:{type:"text"},type:{required:!1,name:""},description:"Author job title.",table:{type:{summary:"text"}}},bio:{control:{type:"text"},type:{required:!1,name:""},description:"Author bio.",table:{type:{summary:"text"}}}},component:g},n={args:{name:"",job_title:"",bio:""}};var c,d,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "",
    job_title: "",
    bio: ""
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,_ as default};
