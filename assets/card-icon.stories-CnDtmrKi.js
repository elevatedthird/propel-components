import{t as m,D as g,T as o,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const y=e=>{e.extendFunction("include",(t,r)=>{const s=window.SDC_MANIFEST[t];if(!s)throw new Error(`Template ${t} not found`);const{id:a,href:h}=s;try{const i=e.twig({ref:a});if(i)return i.render(r);throw new Error(`Template ${t} not found`)}catch{const c=e.twig({id:a,href:h,async:!1});if(c)return c.render(r);throw new Error(`Template ${t} not found`)}})};y(o);const f=e=>e.extendFilter("clean_unique_id",t=>t);f(o);w(o);o.cache(!1);const d=e=>e,v=(e={})=>{const t=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/card-icon/card-icon.twig",data:[{type:"raw",value:`<div class="bg-gray-800 p-4">
  <div aria-hidden="true">
    `,position:{start:0,end:61}},{type:"output",position:{start:61,end:71},stack:[{type:"Twig.expression.type.variable",value:"icon",match:["icon"],position:{start:61,end:71}}]},{type:"raw",value:`
  </div>
  <h3 class="h3 text-white mb-0 mt-2"> `,position:{start:71,end:120}},{type:"output",position:{start:120,end:133},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:120,end:133}}]},{type:"raw",value:` </h3>
  <div class="text-white">
    `,position:{start:133,end:171}},{type:"output",position:{start:171,end:188},stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"],position:{start:171,end:188}}]},{type:"raw",value:`
  </div>
</div>`,position:{start:188,end:188}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),d(t.render({attributes:new g(r),...e}))}catch(r){return d("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/card-icon/card-icon.twig: "+r.toString())}},T={title:"01-composites/card-icon",tags:["autodocs"],parameters:{docs:{description:{component:"A card with an icon, heading and description."},source:{code:"drush propel:add card-icon"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},description:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}}},n={args:{heading:"Card Icon Heading",description:"This is short description of the card icon."},render:e=>v({...e,icon:()=>"<img src='https://placehold.co/30x30'>"})};var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    heading: "Card Icon Heading",
    description: "This is short description of the card icon."
  },
  render: args => {
    return card_icon({
      ...args,
      icon: () => "<img src='https://placehold.co/30x30'>"
    });
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,T as default};
