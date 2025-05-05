import{t as y,D as b,T as i,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const w=e=>{e.extendFunction("include",(o,t)=>{const n=window.SDC_MANIFEST[o];if(!n)throw new Error(`Template ${o} not found`);try{const s=e.twig({ref:n});if(s)return s.render(t);throw new Error(`Template ${n} not found`)}catch{const u=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",m=n.split("/").slice(-4).join("/"),a=e.twig({id:n,href:`${u}/${m}`,async:!1});if(a)return a.render(t);throw new Error(`Template ${n} not found`)}})};w(i);const f=e=>e.extendFilter("clean_unique_id",()=>o=>o.split(" ").reverse().join(" "));f(i);h(i);i.cache(!1);const p=e=>e,v=(e={})=>{const o=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig",data:[{type:"raw",value:`<div>
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
</div>`,position:{start:404,end:404}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),p(o.render({attributes:new b(t),...e}))}catch(t){return p("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/byline/byline.twig: "+t.toString())}},x={title:"01-composites/byline",tags:["autodocs"],parameters:{docs:{description:{component:"A component for showing an author byline."},source:{code:"drush propel:add byline"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},description:"Author name.",table:{type:{summary:"text"}}},job_title:{control:{type:"text"},type:{required:!1,name:""},description:"Author job title.",table:{type:{summary:"text"}}},bio:{control:{type:"text"},type:{required:!1,name:""},description:"Author bio.",table:{type:{summary:"text"}}}},component:v},r={args:{name:"",job_title:"",bio:""}};var l,c,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "",
    job_title: "",
    bio: ""
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,x as default};
