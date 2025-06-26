import{t as y,D as g,T as n,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const w=t=>{t.extendFunction("include",(e,o)=>{const a=window.SDC_MANIFEST[e];if(!a)throw new Error(`Template ${e} not found`);const{id:s,href:m}=a;try{const i=t.twig({ref:s});if(i)return i.render(o);throw new Error(`Template ${e} not found`)}catch{const p=t.twig({id:s,href:m,async:!1});if(p)return p.render(o);throw new Error(`Template ${e} not found`)}})};w(n);const v=t=>t.extendFilter("clean_unique_id",e=>e);v(n);h(n);n.cache(!1);const l=t=>t,f=(t={})=>{const e=y.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/quote/quote.twig",data:[{type:"raw",value:`<div>
  <blockquote class="text-black relative">
    <div aria-hidden="true" class="absolute top-[-40px] left-[-40] z-0 w-[40px]">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8533 9.11599C11.3227 13.9523 7.13913 19.5812 6.30256 26.0029C5.00021 36 13.9404 40.8933 18.4703 36.4967C23.0002 32.1002 20.2848 26.5196 17.0047 24.9942C13.7246 23.4687 11.7187 24 12.0686 21.9616C12.4185 19.9231 17.0851 14.2713 21.1849 11.6392C21.4569 11.4079 21.5604 10.9591 21.2985 10.6187C21.1262 10.3947 20.7883 9.95557 20.2848 9.30114C19.8445 8.72888 19.4227 8.75029 18.8533 9.11599Z" fill="#000000"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6789 9.11599C31.1484 13.9523 26.9648 19.5812 26.1282 26.0029C24.8259 36 33.7661 40.8933 38.296 36.4967C42.8259 32.1002 40.1105 26.5196 36.8304 24.9942C33.5503 23.4687 31.5443 24 31.8943 21.9616C32.2442 19.9231 36.9108 14.2713 41.0106 11.6392C41.2826 11.4079 41.3861 10.9591 41.1241 10.6187C40.9519 10.3947 40.614 9.95557 40.1105 9.30114C39.6702 8.72888 39.2484 8.75029 38.6789 9.11599Z" fill="#000000"></path>
      </svg>
    </div>
    <div class="relative top-0 z-1 text-xl">
      `,position:{start:0,end:1366}},{type:"output",position:{start:1366,end:1377},stack:[{type:"Twig.expression.type.variable",value:"quote",match:["quote"],position:{start:1366,end:1377}}]},{type:"raw",value:`
    </div>
  </blockquote>

  <div class="mt-10">
    <div class="flex items-center gap-4 justify-center">
      `,position:{start:1377,end:1491}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:1491,end:1518},output:[{type:"raw",value:`        <div class="rounded-full overflow-hidden w-[64px] h-[64px]">
          `,position:{start:1519,end:1598}},{type:"output",position:{start:1598,end:1609},stack:[{type:"Twig.expression.type.variable",value:"image",match:["image"],position:{start:1598,end:1609}}]},{type:"raw",value:`
        </div>
      `,position:{start:1609,end:1631}}]},position:{open:{start:1491,end:1518},close:{start:1631,end:1642}}},{type:"raw",value:`      <div>
        <h5 class="font-body text-[19px] !mb-0 font-bold"> `,position:{start:1643,end:1714}},{type:"output",position:{start:1714,end:1731},stack:[{type:"Twig.expression.type.variable",value:"attribution",match:["attribution"],position:{start:1714,end:1731}}]},{type:"raw",value:` </h5>
        <p class="text-gray-600 mb-0"> `,position:{start:1731,end:1777}},{type:"output",position:{start:1777,end:1806},stack:[{type:"Twig.expression.type.variable",value:"attribution_description",match:["attribution_description"],position:{start:1777,end:1806}}]},{type:"raw",value:` </p>
      </div>
    </div>
  </div>
</div>`,position:{start:1806,end:1806}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let o=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(o)||(o=Object.entries(o)),l(e.render({attributes:new g(o),...t}))}catch(o){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/quote/quote.twig: "+o.toString())}},q={title:"01-composites/quote",tags:["autodocs"],parameters:{docs:{description:{component:"Provides a block quote component."},source:{code:"drush propel:add quote"}}},argTypes:{quote:{control:{type:"text"},type:{required:!1,name:""},description:"The quote text.",table:{type:{summary:"text"}}},attribution:{control:{type:"text"},type:{required:!1,name:""},description:"The attribution text.",table:{type:{summary:"text"}}},attribution_description:{control:{type:"text"},type:{required:!1,name:""},description:"The attribution description text.",table:{type:{summary:"text"}}}}},r={args:{quote:"This is a quote. It can be a testimonial, a saying, or any other text that you want to highlight.",attribution:"John Doe",attribution_description:"Head of marketing, Acme corp"},render:t=>f({...t,image:()=>'<img src="https://placehold.co/100x100" alt="Placeholder image"/>'})};var d,u,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    quote: "This is a quote. It can be a testimonial, a saying, or any other text that you want to highlight.",
    attribution: "John Doe",
    attribution_description: "Head of marketing, Acme corp"
  },
  render: args => {
    return quote({
      ...args,
      image: () => '<img src="https://placehold.co/100x100" alt="Placeholder image"/>'
    });
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,q as default};
