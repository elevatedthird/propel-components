import{t as y,D as g,T as o,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const w=e=>{e.extendFunction("include",(r,t)=>{const n=window.SDC_MANIFEST[r];if(!n)throw new Error(`Template ${r} not found`);try{const a=e.twig({ref:n});if(a)return a.render(t);throw new Error(`Template ${n} not found`)}catch{const u=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",m=n.split("/").slice(-4).join("/"),i=e.twig({id:n,href:`${u}/${m}`,async:!1});if(i)return i.render(t);throw new Error(`Template ${n} not found`)}})};w(o);const b=e=>e.extendFilter("clean_unique_id",()=>r=>r.split(" ").reverse().join(" "));b(o);h(o);o.cache(!1);const p=e=>e,x=(e={})=>{const r=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/card/card.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:113},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:113}},{type:"Twig.expression.type.key.period",position:{start:5,end:113},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:5,end:113},expression:!0,params:[{type:"Twig.expression.type.string",value:"bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between",position:{start:5,end:113}}]}]},{type:"raw",value:` >
  <div>
    `,position:{start:113,end:128}},{type:"output",position:{start:128,end:139},stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"],position:{start:128,end:139}}]},{type:"raw",value:`
  </div>
  <div class="p-4 pt-2">
    <div class="mb-8">
      <h4 class="inline-block"> `,position:{start:139,end:229}},{type:"output",position:{start:229,end:242},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:229,end:242}}]},{type:"raw",value:` </h4>
      `,position:{start:242,end:255}},{type:"output",position:{start:255,end:265},stack:[{type:"Twig.expression.type.variable",value:"body",match:["body"],position:{start:255,end:265}}]},{type:"raw",value:`
    </div>
  </div>
</div>
`,position:{start:265,end:265}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),p(r.render({attributes:new g(t),...e}))}catch(t){return p("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/card/card.twig: "+t.toString())}},T={title:"01-composites/card",tags:["autodocs"],parameters:{docs:{description:{component:"A single card."},source:{code:"drush propel:add card"}}},argTypes:{heading:{control:{type:"text"},type:{required:!0,name:""},table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}}},s={args:{heading:"Card heading",url:"https://example.com"},render:e=>x({...e,media:()=>'<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full mb-3" />',body:()=>'<p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>'})};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: "Card heading",
    url: "https://example.com"
  },
  render: context => {
    return card({
      ...context,
      media: () => {
        return '<img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" class="w-full mb-3" />';
      },
      body: () => {
        return '<p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>';
      }
    });
  }
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const k=["Default"];export{s as Default,k as __namedExportsOrder,T as default};
