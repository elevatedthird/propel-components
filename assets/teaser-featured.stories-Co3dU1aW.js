import{t as m,D as h,T as s,a as f}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const g=e=>{e.extendFunction("include",(t,r)=>{const n=window.SDC_MANIFEST[t];if(!n)throw new Error(`Template ${t} not found`);const{id:o,href:y}=n;try{const i=e.twig({ref:o});if(i)return i.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:o,href:y,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};g(s);const v=e=>e.extendFilter("clean_unique_id",t=>t);v(s);f(s);s.cache(!1);const l=e=>e,w=(e={})=>{const t=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/teaser-featured/teaser-featured.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"link_title",expression:[{type:"Twig.expression.type.variable",value:"link_text",match:["link_text"]},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"Read more"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:0,end:53}},position:{start:0,end:53}},{type:"raw",value:`<article class="cursor-pointer group relative flex">
  <div class="bg-gray-100">
    <div class="aspect-16/9">
      `,position:{start:54,end:171}},{type:"output",position:{start:171,end:182},stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"],position:{start:171,end:182}}]},{type:"raw",value:`
    </div>
  </div>
  <div class="my-4">
    <h3 class="h3 inline-block">
      <a href="`,position:{start:182,end:272}},{type:"output",position:{start:272,end:281},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:272,end:281}}]},{type:"raw",value:'" aria-label="',position:{start:281,end:295}},{type:"output",position:{start:295,end:311},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:295,end:311}}]},{type:"raw",value:'" title="',position:{start:311,end:320}},{type:"output",position:{start:320,end:336},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:320,end:336}}]},{type:"raw",value:'" class="after:absolute after:inset-0"> ',position:{start:336,end:376}},{type:"output",position:{start:376,end:389},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:376,end:389}}]},{type:"raw",value:`</a>
    </h3>
    <div class="text-formatted">
      `,position:{start:389,end:443}},{type:"output",position:{start:443,end:453},stack:[{type:"Twig.expression.type.variable",value:"body",match:["body"],position:{start:443,end:453}}]},{type:"raw",value:`
    </div>
    <div class="mt-4">
      <span aria-hidden="true" class="link-next group-hover:gap-3"> `,position:{start:453,end:556}},{type:"output",position:{start:556,end:593},stack:[{type:"Twig.expression.type.variable",value:"link_title",match:["link_title"],position:{start:556,end:593}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:556,end:593},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:556,end:593}},{type:"Twig.expression.type.string",value:"Read more",position:{start:556,end:593}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:556,end:593},expression:!1}]}]},{type:"raw",value:` </span>
    </div>
  </div>
</article>
`,position:{start:593,end:593}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),l(t.render({attributes:new h(r),...e}))}catch(r){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/teaser-featured/teaser-featured.twig: "+r.toString())}},b={title:"01-composites/teaser-featured",tags:["autodocs"],parameters:{docs:{description:{component:"A teaser for content preview."},source:{code:"drush propel:add teaser-featured"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},description:"The link to the card.",table:{type:{summary:"text"}}},link_text:{control:{type:"text"},type:{required:!1,name:""},description:"The text for the link.",table:{defaultValue:{summary:"Read more"},type:{summary:"text"}}}}},a={args:{heading:"",url:"",link_text:"Read more"},render:e=>w({...e,media:()=>'<img src="https://plachold.co/300x200" alt="Placeholder image"/>',body:()=>"<p>This is a teaser body text. It provides a brief overview of the content that the teaser is linking to.</p>"})};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    heading: "",
    url: "",
    link_text: "Read more"
  },
  render: args => {
    return teaser_featured({
      ...args,
      media: () => '<img src="https://plachold.co/300x200" alt="Placeholder image"/>',
      body: () => '<p>This is a teaser body text. It provides a brief overview of the content that the teaser is linking to.</p>'
    });
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["Default"];export{a as Default,T as __namedExportsOrder,b as default};
