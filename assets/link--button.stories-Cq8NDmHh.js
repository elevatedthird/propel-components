import{t as d,D as m,T as r,a as y}from"./twig-TIIEE6v_.js";import"./_commonjsHelpers-_d1bhYXs.js";const w=function(n){const e={"kinetic:badge":"./components/00-elements/badge/badge.twig","kinetic:title":"./components/01-composites/title/title.twig"};n.extendFunction("include",(s,c)=>{const a=e[s];if(!a)throw new Error(`Template ${s} not found`);return n.twig({id:s,href:a,async:!1}).render(c)})};w(r);const g=t=>t.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));g(r);y(r);r.cache(!1);const i=t=>t,f=(t={})=>{const n=d.twig({id:"/home/runner/work/propel-components/propel-components/components/00-elements/link--button/link--button.twig",data:[{type:"raw",value:`
`,position:{start:61,end:62}},{type:"raw",value:`
`,position:{start:131,end:132}},{type:"raw",value:`
`,position:{start:147,end:148}},{type:"raw",value:`


`,position:{start:221,end:224}},{type:"raw",value:`
`,position:{start:277,end:278}},{type:"raw",value:`
`,position:{start:329,end:330}},{type:"raw",value:`

<a `,position:{start:474,end:479}},{type:"output",position:{start:479,end:495},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:479,end:495}}]},{type:"raw",value:' href="" class="',position:{start:495,end:511}},{type:"output",position:{start:511,end:545},stack:[{type:"Twig.expression.type.variable",value:"style",match:["style"],position:{start:511,end:545}},{type:"Twig.expression.type.filter",value:"default",match:["|default","default"],position:{start:511,end:545},params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:511,end:545}},{type:"Twig.expression.type.string",value:"btn-primary",position:{start:511,end:545}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:511,end:545},expression:!1}]}]},{type:"raw",value:'"> ',position:{start:545,end:548}},{type:"output",position:{start:548,end:558},stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"],position:{start:548,end:558}}]},{type:"raw",value:` </a>
`,position:{start:558,end:558}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),i(n.render({attributes:new m(e),...t}))}catch(e){return i("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/00-elements/link--button/link--button.twig: "+e.toString())}},k={title:"00-elements/link--button",tags:["autodocs"],parameters:{docs:{description:{component:"An anchor tag that looks like a button."},source:{code:"drush propel:add link--button"}}},argTypes:{text:{control:{type:"text"}},href:{control:{type:"text"}},style:{control:"select",options:["primary","outline"]}},component:f},o={args:{text:"Click me"}};var p,l,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Click me'
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const h=["Default"];export{o as Default,h as __namedExportsOrder,k as default};
