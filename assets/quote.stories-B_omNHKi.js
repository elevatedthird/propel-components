import{t as y,D as w,T as r,a as v}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const f=t=>{t.extendFunction("include",(e,o)=>{const i=window.SDC_MANIFEST[e];if(!i)throw new Error(`Template ${e} not found`);const{id:a,href:m}=i;try{const s=t.twig({ref:a});if(s)return s.render(o);throw new Error(`Template ${e} not found`)}catch{const p=t.twig({id:a,href:m,async:!1});if(p)return p.render(o);throw new Error(`Template ${e} not found`)}})};f(r);const g=t=>t.extendFilter("clean_unique_id",e=>e);g(r);v(r);r.cache(!1);const u=t=>t,b=(t={})=>{const e=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/quote/quote.twig",data:[{type:"raw",value:`<div>
  <blockquote>
    `,position:{start:0,end:25}},{type:"output",position:{start:25,end:42},stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"],position:{start:25,end:42}}]},{type:"raw",value:`
  </blockquote>

  <div class="mt-10">
    <div class="flex items-center gap-4 justify-end">
      `,position:{start:42,end:142}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:142,end:169},output:[{type:"raw",value:`        <div class="rounded-full w-[64px] h-[64px]">
          `,position:{start:170,end:233}},{type:"output",position:{start:233,end:244},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:233,end:244}}]},{type:"raw",value:`
        </div>
      `,position:{start:244,end:266}}]},position:{open:{start:142,end:169},close:{start:266,end:277}}},{type:"raw",value:`      <div class="byline__author">
        <h5 class="font-body text-[19px] !mb-0 font-bold"> `,position:{start:278,end:372}},{type:"output",position:{start:372,end:382},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:372,end:382}}]},{type:"raw",value:` </h5>
        <p class="text-gray-600 mb-0"> `,position:{start:382,end:428}},{type:"output",position:{start:428,end:443},stack:[{type:"Twig.expression.type.variable",value:"job_title",match:["job_title"],position:{start:428,end:443}}]},{type:"raw",value:` </p>
      </div>
    </div>
  </div>
</div>`,position:{start:443,end:443}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let o=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(o)||(o=Object.entries(o)),u(e.render({attributes:new w(o),...t}))}catch(o){return u("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/quote/quote.twig: "+o.toString())}},T={title:"01-composites/quote",tags:["autodocs"],parameters:{docs:{description:{component:"Provides a block quote component."},source:{code:"drush propel:add quote"}}},argTypes:{behavior_name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:b},n={args:{behavior_name:""}};var d,c,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    behavior_name: ""
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,T as default};
