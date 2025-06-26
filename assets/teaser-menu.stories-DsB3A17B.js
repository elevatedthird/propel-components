import{t as h,D as g,T as a,a as f}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const y=e=>{e.extendFunction("include",(t,r)=>{const s=window.SDC_MANIFEST[t];if(!s)throw new Error(`Template ${t} not found`);const{id:i,href:m}=s;try{const o=e.twig({ref:i});if(o)return o.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:m,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};y(a);const w=e=>e.extendFilter("clean_unique_id",t=>t);w(a);f(a);a.cache(!1);const l=e=>e,x=(e={})=>{const t=h.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/teaser-menu/teaser-menu.twig",data:[{type:"raw",value:`<article class="flex flex-col md:flex-row gap-4 relative bg-gray-100 rounded-lg p-4">
  <div aria-hidden="true" class="md:max-h-[134px] aspect-3/2 rounded-lg overflow-hidden [&_img]:cover">`,position:{start:0,end:189}},{type:"output",position:{start:189,end:200},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:189,end:200}}]},{type:"raw",value:`</div>
  <h4 class="text-purple text-[15px] font-semibold">
    <a href="`,position:{start:200,end:273}},{type:"output",position:{start:273,end:282},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:273,end:282}}]},{type:"raw",value:'" class="after:absolute after:inset-0"> ',position:{start:282,end:322}},{type:"output",position:{start:322,end:335},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:322,end:335}}]},{type:"raw",value:` </a>
  </h4>
</article>`,position:{start:335,end:335}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),l(t.render({attributes:new g(r),...e}))}catch(r){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/teaser-menu/teaser-menu.twig: "+r.toString())}},T={title:"01-composites/teaser-menu",tags:["autodocs"],parameters:{docs:{description:{component:"A small teaser that displays in the menu."},source:{code:"drush propel:add teaser-menu"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},description:"The link to the card.",table:{type:{summary:"text"}}}}},n={args:{heading:"This is the heading",url:"https://google.com"},render:e=>x({...e,image:()=>'<img src="https://plachold.co/300x200" alt="Placeholder image"/>'})};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: "This is the heading",
    url: "https://google.com"
  },
  render: args => {
    return teaser_menu({
      ...args,
      image: () => '<img src="https://plachold.co/300x200" alt="Placeholder image"/>'
    });
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,T as default};
