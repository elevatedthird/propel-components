import{t as m,D as y,T as n,a as w}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const f=e=>{e.extendFunction("include",(t,r)=>{const a=window.SDC_MANIFEST[t];if(!a)throw new Error(`Template ${t} not found`);const{id:i,href:h}=a;try{const o=e.twig({ref:i});if(o)return o.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:h,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};f(n);const g=e=>e.extendFilter("clean_unique_id",t=>t);g(n);w(n);n.cache(!1);const c=e=>e,v=(e={})=>{const t=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/search-result/search-result.twig",data:[{type:"raw",value:`<div class="relative p-4">
  <h3>
    `,position:{start:0,end:38}},{type:"raw",value:`
    <a href=`,position:{start:94,end:107}},{type:"output",position:{start:107,end:116},stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"],position:{start:107,end:116}}]},{type:"raw",value:' title="Read more about ',position:{start:116,end:140}},{type:"output",position:{start:140,end:151},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:140,end:151}}]},{type:"raw",value:'" class="stretch">',position:{start:151,end:169}},{type:"output",position:{start:169,end:180},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:169,end:180}}]},{type:"raw",value:` </a>
  </h3>
  <p> `,position:{start:180,end:200}},{type:"output",position:{start:200,end:217},stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"],position:{start:200,end:217}}]},{type:"raw",value:` </p>
  <span aria-hidden="true" class="link-next"> Read more </span>
</div>`,position:{start:217,end:217}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),c(t.render({attributes:new y(r),...e}))}catch(r){return c("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/search-result/search-result.twig: "+r.toString())}},b={title:"01-composites/search-result",tags:["autodocs"],parameters:{docs:{description:{component:"Provides a search result for Site Search."},source:{code:"drush propel:add search-result"}}},argTypes:{heading:{control:{type:"text"},type:{required:!1,name:""},description:"The heading for the search result.",table:{type:{summary:"text"}}},description:{control:{type:"text"},type:{required:!1,name:""},description:"The description for the search result.",table:{type:{summary:"text"}}},url:{control:{type:"text"},type:{required:!1,name:""},description:"The URL for the search result.",table:{type:{summary:"text"}}}}},s={args:{heading:"",description:"",url:""},render:e=>v({...e})};var l,u,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    heading: "",
    description: "",
    url: ""
  },
  render: args => {
    return search_result({
      ...args
    });
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,b as default};
