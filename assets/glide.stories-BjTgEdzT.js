import{t as w,D as v,T as i,a as b}from"./twig--J2y2TUI.js";import"./glide.pcss-BQFyalFE.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=e=>{e.extendFunction("include",(r,t)=>{const o=window.SDC_MANIFEST[r];if(!o)throw new Error(`Template ${r} not found`);const{id:a,href:l}=o;try{const s=e.twig({ref:a});if(s)return s.render(t);throw new Error(`Template ${r} not found`)}catch{const n=e.twig({id:a,href:l,async:!1});if(n)return n.render(t);throw new Error(`Template ${r} not found`)}})};x(i);const T=e=>e.extendFilter("clean_unique_id",r=>r);T(i);b(i);i.cache(!1);const u=e=>e,h=(e={})=>{const r=w.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/glide/glide.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type._function",fn:"create_attribute",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.key.period",key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.array.end",value:"]",match:["]"]}]},{type:"Twig.expression.type.key.period",key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"glide"}]}],position:{start:0,end:72}},position:{start:0,end:72}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"behavior_name",match:["behavior_name"]}],position:{start:73,end:95},output:[{type:"raw",value:"  ",position:{start:96,end:98}},{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.key.period",key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"data-behavior-name"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"behavior_name",match:["behavior_name"]}]}],position:{start:98,end:181}},position:{start:98,end:181}}]},position:{open:{start:73,end:95},close:{start:182,end:193}}},{type:"raw",value:`
`,position:{start:194,end:195}},{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.key.period",key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"data-slide-length"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"slide_count",match:["slide_count"]}]}],position:{start:195,end:275}},position:{start:195,end:275}},{type:"raw",value:`
<div `,position:{start:276,end:282}},{type:"output",position:{start:282,end:298},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:282,end:298}}]},{type:"raw",value:`>
  `,position:{start:298,end:302}},{type:"raw",value:`
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      `,position:{start:314,end:403}},{type:"output",position:{start:403,end:414},stack:[{type:"Twig.expression.type.variable",value:"items",match:["items"],position:{start:403,end:414}}]},{type:"raw",value:`
    </ul>
  </div>
  `,position:{start:414,end:436}},{type:"raw",value:`
`,position:{start:455,end:456}},{type:"raw",value:`
  `,position:{start:534,end:537}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"show_bullets",match:["show_bullets"]}],position:{start:537,end:558},output:[{type:"raw",value:`    <div class="glide__bullets my-8 flex justify-center gap-4" data-glide-el="controls[nav]">
      `,position:{start:559,end:659}},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"i",expression:[{type:"Twig.expression.type.number",value:0,match:["0",null]},{type:"Twig.expression.type.variable",value:"slide_count",match:["slide_count"]},{type:"Twig.expression.type.number",value:1,match:["1",null]},{type:"Twig.expression.type.operator.binary",value:"-",precidence:6,associativity:"leftToRight",operator:"-"},{type:"Twig.expression.type.operator.binary",value:"..",precidence:20,associativity:"leftToRight",operator:".."}],position:{start:659,end:692},output:[{type:"raw",value:'        <button class="glide__bullet bg-primary/50 w-3 h-3 rounded-full" data-glide-dir="=',position:{start:693,end:783}},{type:"output",position:{start:783,end:800},stack:[{type:"Twig.expression.type.variable",value:"loop",match:["loop"],position:{start:783,end:800}},{type:"Twig.expression.type.key.period",position:{start:783,end:800},key:"index0"}]},{type:"raw",value:'" aria-label=',position:{start:800,end:813}},{type:"output",position:{start:813,end:840},stack:[{type:"Twig.expression.type.string",value:"Slide",position:{start:813,end:840}},{type:"Twig.expression.type.variable",value:"slide_count",match:["slide_count"],position:{start:813,end:840}},{type:"Twig.expression.type.operator.binary",value:"~",position:{start:813,end:840},precidence:6,associativity:"leftToRight",operator:"~"}]},{type:"raw",value:`></button>
      `,position:{start:840,end:857}}]},position:{open:{start:659,end:692},close:{start:857,end:869}}},{type:"raw",value:`    </div>
  `,position:{start:870,end:883}}]},position:{open:{start:537,end:558},close:{start:883,end:894}}},{type:"raw",value:"  ",position:{start:895,end:897}},{type:"raw",value:`
  `,position:{start:915,end:918}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"show_arrows",match:["show_arrows"]}],position:{start:918,end:938},output:[{type:"raw",value:`    <div class="glide__arrows" data-glide-el="controls">
      <button class="glide__arrow glide__arrow--left bg-primary rotate-90 icon-caret/md" data-glide-dir="<"><span class='sr-only'>Previous Step</span></button>
      <button class="glide__arrow glide__arrow--right bg-primary rotate-270 icon-caret/md" data-glide-dir=">"><span class='sr-only'>Next Step</span></button>
    </div>
  `,position:{start:939,end:1327}}]},position:{open:{start:918,end:938},close:{start:1327,end:1338}}},{type:"raw",value:`</div>
`,position:{start:1339,end:1339}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),u(r.render({attributes:new v(t),...e}))}catch(t){return u("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/glide/glide.twig: "+t.toString())}},_=e=>{e.extendFunction("include",(r,t)=>{const o=window.SDC_MANIFEST[r];if(!o)throw new Error(`Template ${r} not found`);const{id:a,href:l}=o;try{const s=e.twig({ref:a});if(s)return s.render(t);throw new Error(`Template ${r} not found`)}catch{const n=e.twig({id:a,href:l,async:!1});if(n)return n.render(t);throw new Error(`Template ${r} not found`)}})};_(i);const f=e=>e.extendFilter("clean_unique_id",r=>r);f(i);b(i);i.cache(!1);const c=e=>e,d=(e={})=>{const r=w.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/glide-slide/glide-slide.twig",data:[{type:"raw",value:"<li ",position:{start:0,end:4}},{type:"output",position:{start:4,end:56},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:4,end:56}},{type:"Twig.expression.type.key.period",position:{start:4,end:56},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:4,end:56},expression:!0,params:[{type:"Twig.expression.type.string",value:"glide__slide field__item",position:{start:4,end:56}}]}]},{type:"raw",value:`>
  `,position:{start:56,end:60}},{type:"output",position:{start:60,end:70},stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"],position:{start:60,end:70}}]},{type:"raw",value:`
</li>
`,position:{start:70,end:70}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),c(r.render({attributes:new v(t),...e}))}catch(t){return c("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/glide-slide/glide-slide.twig: "+t.toString())}},q={title:"01-composites/glide",tags:["autodocs"],parameters:{docs:{description:{component:"Provides a glidejs carousel."},source:{code:"drush propel:add glide"}}},argTypes:{show_arrows:{control:{type:"boolean"},type:{required:!1,name:""},table:{type:{summary:"boolean"}}},show_bullets:{control:{type:"boolean"},type:{required:!1,name:""},table:{type:{summary:"boolean"}}},slide_count:{control:{type:"number"},type:{required:!0,name:""},table:{disable:!0,type:{summary:"number"}}},classes:{control:{type:"array"},type:{required:!1,name:""},table:{type:{summary:"array"}}},behavior_name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:h},p={args:{show_arrows:!1,show_bullets:!1,classes:[],behavior_name:""},render:e=>{const r=`
      <p class="p-8 border rounded-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;return`${h({...e,slide_count:3,items:()=>{let t="";return t+=d({item:r}),t+=d({item:r}),t+=d({item:r}),t}})}`}};var y,m,g;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    show_arrows: false,
    show_bullets: false,
    classes: [],
    behavior_name: ""
  },
  render: context => {
    const slideMarkup = \`
      <p class="p-8 border rounded-2xl"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    \`;
    return \`\${glide({
      ...context,
      slide_count: 3,
      items: () => {
        let markup = "";
        markup += glideSlide({
          item: slideMarkup
        });
        markup += glideSlide({
          item: slideMarkup
        });
        markup += glideSlide({
          item: slideMarkup
        });
        return markup;
      }
    })}\`;
  }
}`,...(g=(m=p.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const E=["Default"];export{p as Default,E as __namedExportsOrder,q as default};
