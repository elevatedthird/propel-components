import{t as u,D as y,T as a,a as m}from"./twig-TIIEE6v_.js";import"./_commonjsHelpers-_d1bhYXs.js";const g=function(o){const e={"kinetic:badge":"./components/00-elements/badge/badge.twig","kinetic:title":"./components/01-composites/title/title.twig"};o.extendFunction("include",(s,l)=>{const i=e[s];if(!i)throw new Error(`Template ${s} not found`);return o.twig({id:s,href:i,async:!1}).render(l)})};g(a);const v=t=>t.extendFilter("clean_unique_id",()=>o=>o.split(" ").reverse().join(" "));v(a);m(a);a.cache(!1);const r=t=>t,w=(t={})=>{const o=u.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/card/card.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:21},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:21}}]},{type:"raw",value:`>
  <div class="card">
    <div class="card-img-top ratio ratio-16x9">
      `,position:{start:21,end:98}},{type:"output",position:{start:98,end:109},stack:[{type:"Twig.expression.type.variable",value:"media",match:["media"],position:{start:98,end:109}}]},{type:"raw",value:`
    </div>
    <div class="card-body">
      `,position:{start:109,end:155}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"]}],position:{start:155,end:171},output:[{type:"raw",value:'        <h3 class="h4 text-primary">',position:{start:172,end:208}},{type:"output",position:{start:208,end:221},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:208,end:221}}]},{type:"raw",value:`</h3>
      `,position:{start:221,end:233}}]},position:{open:{start:155,end:171},close:{start:233,end:244}}},{type:"raw",value:`
      <div class="body">
        `,position:{start:245,end:279}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"_body",position:{start:279,end:296},output:[{type:"raw",value:"          ",position:{start:297,end:307}},{type:"output",position:{start:307,end:318},stack:[{type:"Twig.expression.type.variable",value:"_body",match:["_body"],position:{start:307,end:318}}]},{type:"raw",value:`
        `,position:{start:318,end:327}}]},position:{open:{start:279,end:296},close:{start:327,end:341}}},{type:"raw",value:`        <div class="card-ctas">
          `,position:{start:342,end:384}},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"_ctas",position:{start:384,end:401},output:[{type:"raw",value:"            ",position:{start:402,end:414}},{type:"output",position:{start:414,end:425},stack:[{type:"Twig.expression.type.variable",value:"_ctas",match:["_ctas"],position:{start:414,end:425}}]},{type:"raw",value:`
          `,position:{start:425,end:436}}]},position:{open:{start:384,end:401},close:{start:436,end:450}}},{type:"raw",value:`        </div>
      </div>
    </div>
  </div>
</div>
`,position:{start:451,end:451}}],precompiled:!0});o.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),r(o.render({attributes:new y(e),...t}))}catch(e){return r("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/card/card.twig: "+e.toString())}},k={title:"01-composites/card",tags:["autodocs"],parameters:{docs:{description:{component:"A single card."},source:{code:"drush propel:add card"}}},argTypes:{heading:{control:{type:"text"}}},component:w},n={args:{text:"Click me"}};var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Click me'
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,k as default};
