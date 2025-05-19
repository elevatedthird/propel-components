import{t as h,D as g,T as n,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=e=>{e.extendFunction("include",(t,r)=>{const s=window.SDC_MANIFEST[t];if(!s)throw new Error(`Template ${t} not found`);const{id:i,href:y}=s;try{const a=e.twig({ref:i});if(a)return a.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:y,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};x(n);const f=e=>e.extendFilter("clean_unique_id",t=>t);f(n);w(n);n.cache(!1);const d=e=>e,m=(e={})=>{const t=h.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/card-horizontal/card-horizontal.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:94},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:94}},{type:"Twig.expression.type.key.period",position:{start:5,end:94},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:5,end:94},expression:!0,params:[{type:"Twig.expression.type.string",value:"flex justify-between flex-col md:flex-row items-center gap-4",position:{start:5,end:94}}]}]},{type:"raw",value:` >
  <div class="aspect-square [&_img]:cover">
    `,position:{start:94,end:145}},{type:"output",position:{start:145,end:156},stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"],position:{start:145,end:156}}]},{type:"raw",value:`
  </div>
  <div class="p-4 pt-2">
    <div class="mb-8">
      <h4 class="inline-block"> `,position:{start:156,end:246}},{type:"output",position:{start:246,end:259},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:246,end:259}}]},{type:"raw",value:` </h4>
      `,position:{start:259,end:272}},{type:"output",position:{start:272,end:282},stack:[{type:"Twig.expression.type.variable",value:"body",match:["body"],position:{start:272,end:282}}]},{type:"raw",value:`
    </div>
  </div>
`,position:{start:282,end:282}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),d(t.render({attributes:new g(r),...e}))}catch(r){return d("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/card-horizontal/card-horizontal.twig: "+r.toString())}},T={title:"01-composites/card-horizontal",tags:["autodocs"],parameters:{docs:{description:{component:"A single horzontal card."},source:{code:"drush propel:add card-horizontal"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},description:"The link to the card.",table:{type:{summary:"text"}}}},component:m},o={args:{heading:"Card heading",url:"https://example.com"},render:e=>m({...e,media:()=>'<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" />',body:()=>'<p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>'})};var c,l,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    heading: "Card heading",
    url: "https://example.com"
  },
  render: context => {
    return card_horizontal({
      ...context,
      media: () => {
        return '<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" />';
      },
      body: () => {
        return '<p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>';
      }
    });
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const k=["Default"];export{o as Default,k as __namedExportsOrder,T as default};
