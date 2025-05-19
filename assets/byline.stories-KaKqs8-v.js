import{t as m,D as b,T as r,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const f=t=>{t.extendFunction("include",(e,o)=>{const a=window.SDC_MANIFEST[e];if(!a)throw new Error(`Template ${e} not found`);const{id:s,href:y}=a;try{const i=t.twig({ref:s});if(i)return i.render(o);throw new Error(`Template ${e} not found`)}catch{const p=t.twig({id:s,href:y,async:!1});if(p)return p.render(o);throw new Error(`Template ${e} not found`)}})};f(r);const h=t=>t.extendFilter("clean_unique_id",e=>e);h(r);w(r);r.cache(!1);const l=t=>t,v=(t={})=>{const e=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig",data:[{type:"raw",value:`<div>
  <div class="byline__image">
    `,position:{start:0,end:40}},{type:"output",position:{start:40,end:51},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:40,end:51}}]},{type:"raw",value:`
  </div>
  <div class="byline__author">
    <div class="byline__author-info">
      <h4 class="font-body fs-lead mb-2 text-primary"> `,position:{start:51,end:185}},{type:"output",position:{start:185,end:195},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:185,end:195}}]},{type:"raw",value:` </h4>
      <h5 class="font-body fs-md mb-0"> `,position:{start:195,end:242}},{type:"output",position:{start:242,end:257},stack:[{type:"Twig.expression.type.variable",value:"job_title",match:["job_title"],position:{start:242,end:257}}]},{type:"raw",value:` </h5>
    </div>
    <div class="byline__author-about">
      `,position:{start:257,end:320}},{type:"output",position:{start:320,end:329},stack:[{type:"Twig.expression.type.variable",value:"bio",match:["bio"],position:{start:320,end:329}}]},{type:"raw",value:`
    </div>
  </div>
  <div class="byline__company">
    `,position:{start:329,end:386}},{type:"output",position:{start:386,end:404},stack:[{type:"Twig.expression.type.variable",value:"company_logo",match:["company_logo"],position:{start:386,end:404}}]},{type:"raw",value:`
  </div>
</div>`,position:{start:404,end:404}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let o=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(o)||(o=Object.entries(o)),l(e.render({attributes:new b(o),...t}))}catch(o){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig: "+o.toString())}},x={title:"01-composites/byline",tags:["autodocs"],parameters:{docs:{description:{component:"A component for showing an author byline."},source:{code:"drush propel:add byline"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},description:"Author name.",table:{type:{summary:"text"}}},job_title:{control:{type:"text"},type:{required:!1,name:""},description:"Author job title.",table:{type:{summary:"text"}}},bio:{control:{type:"text"},type:{required:!1,name:""},description:"Author bio.",table:{type:{summary:"text"}}}},component:v},n={args:{name:"",job_title:"",bio:""}};var d,c,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "",
    job_title: "",
    bio: ""
  }
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,x as default};
