import{t as m,D as f,T as s,a as y}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const b=e=>{e.extendFunction("include",(t,r)=>{const o=window.SDC_MANIFEST[t];if(!o)throw new Error(`Template ${t} not found`);const{id:i,href:h}=o;try{const n=e.twig({ref:i});if(n)return n.render(r);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:h,async:!1});if(p)return p.render(r);throw new Error(`Template ${t} not found`)}})};b(s);const w=e=>e.extendFilter("clean_unique_id",t=>t);w(s);y(s);s.cache(!1);const l=e=>e,g=(e={})=>{const t=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/search-reveal/search-reveal.twig",data:[{type:"raw",value:`<div class="search-reveal">
  <div id="search-reveal">
    <form method="GET" action="`,position:{start:0,end:86}},{type:"output",position:{start:86,end:117},stack:[{type:"Twig.expression.type.variable",value:"action",match:["action"],position:{start:86,end:117}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:86,end:117},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:86,end:117}},{type:"Twig.expression.type.string",value:"/search",position:{start:86,end:117}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:86,end:117},expression:!1}]}]},{type:"raw",value:`">
      <label for="search-input" class="sr-only">Search</label>
      <input type="search" id="search-input" name="q" placeholder="`,position:{start:117,end:250}},{type:"output",position:{start:250,end:294},stack:[{type:"Twig.expression.type.variable",value:"placeholder",match:["placeholder"],position:{start:250,end:294}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:250,end:294},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:250,end:294}},{type:"Twig.expression.type.string",value:"Search the site",position:{start:250,end:294}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:250,end:294},expression:!1}]}]},{type:"raw",value:`" required />
      <input type="submit" name="op" value="Submit" class="d-none">
    </form>
    <button aria-label="Search" type="submit" class="absolute right-12 top-1/2 -translate-y-1/2 cursor-pointer">
      <span class="flex after:icon-search/[24px] after:bg-black"></span>
    </button>
    <button aria-label="Close Search" type="reset" class="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
      <span class="flex after:icon-close/[24px] after:bg-black"></span>
    </button>
  </div>
  <button aria-label="Open Search" aria-controls="search-reveal" aria-expanded="false" class="cursor-pointer">
    <span class="flex after:icon-search/[24px] after:bg-black"></span>
  </button>
</div>`,position:{start:294,end:294}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let r=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(r)||(r=Object.entries(r)),l(t.render({attributes:new f(r),...e}))}catch(r){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/search-reveal/search-reveal.twig: "+r.toString())}},T={title:"01-composites/search-reveal",tags:["autodocs"],parameters:{docs:{description:{component:"Provides a collapsible search input that goes in the header."},source:{code:"drush propel:add search-reveal"}}},argTypes:{placeholder:{control:{type:"text"},type:{required:!1,name:""},description:"The placeholder text for the search input.",table:{defaultValue:{summary:"Search"},type:{summary:"text"}}},action:{control:{type:"text"},type:{required:!1,name:""},description:"The URL to which the search form will submit.",table:{defaultValue:{summary:"/search"},type:{summary:"text"}}}}},a={args:{placeholder:"Search",action:"/search"},render:e=>g({...e})};var c,u,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    action: "/search"
  },
  render: args => {
    return search_reveal({
      ...args
    });
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const S=["Default"];export{a as Default,S as __namedExportsOrder,T as default};
