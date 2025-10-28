import{t as m,D as w,T as i,a as g}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const v=e=>{e.extendFunction("include",(t,o)=>{const a=window.SDC_MANIFEST[t];if(!a)throw new Error(`Template ${t} not found`);const{id:r,href:u}=a;try{const n=e.twig({ref:r});if(n)return n.render(o);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:r,href:u,async:!1});if(p)return p.render(o);throw new Error(`Template ${t} not found`)}})};v(i);const k=e=>e.extendFilter("clean_unique_id",t=>t);k(i);g(i);i.cache(!1);const l=e=>e,f=(e={})=>{const t=m.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/speaker/speaker.twig",data:[{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"bio",match:["bio"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:0,end:25},output:[{type:"raw",value:"  ",position:{start:26,end:28}},{type:"logic",token:{type:"Twig.logic.type.set",key:"attributes",expression:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"]},{type:"Twig.expression.type.key.period",key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"has-bio"}]}],position:{start:28,end:81}},position:{start:28,end:81}}]},position:{open:{start:0,end:25},close:{start:82,end:93}}},{type:"raw",value:"<div ",position:{start:94,end:99}},{type:"output",position:{start:99,end:134},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:99,end:134}},{type:"Twig.expression.type.key.period",position:{start:99,end:134},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:99,end:134},expression:!0,params:[{type:"Twig.expression.type.string",value:"w-full",position:{start:99,end:134}}]}]},{type:"raw",value:` >

  <div class="speaker__top flex gap-4 items-center flex-col">
    <div class="max-w-[150px] [&_img]:transition-[scale] hover:[&_img]:scale-105 [&_img]:cover overflow-hidden rounded-full [&_img]:aspect-square">
      `,position:{start:134,end:354}},{type:"output",position:{start:354,end:368},stack:[{type:"Twig.expression.type.variable",value:"headshot",match:["headshot"],position:{start:354,end:368}}]},{type:"raw",value:`
    </div>

    <div>
      <h4 class="toc-ignore h5 font-bold mb-2">
        `,position:{start:368,end:447}},{type:"output",position:{start:447,end:457},stack:[{type:"Twig.expression.type.variable",value:"name",match:["name"],position:{start:447,end:457}}]},{type:"raw",value:`
      </h4>
      `,position:{start:457,end:476}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:476,end:503},output:[{type:"raw",value:'        <p class="mb-2">',position:{start:504,end:528}},{type:"output",position:{start:528,end:539},stack:[{type:"Twig.expression.type.variable",value:"title",match:["title"],position:{start:528,end:539}}]},{type:"raw",value:`</p>
      `,position:{start:539,end:550}}]},position:{open:{start:476,end:503},close:{start:550,end:561}}},{type:"raw",value:"      ",position:{start:562,end:568}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"company",match:["company"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:568,end:597},output:[{type:"raw",value:'        <p class="mb-2">',position:{start:598,end:622}},{type:"output",position:{start:622,end:635},stack:[{type:"Twig.expression.type.variable",value:"company",match:["company"],position:{start:622,end:635}}]},{type:"raw",value:`</p>
      `,position:{start:635,end:646}}]},position:{open:{start:568,end:597},close:{start:646,end:657}}},{type:"raw",value:`
      `,position:{start:658,end:665}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"social_link",match:["social_link"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:665,end:698},output:[{type:"raw",value:`        <div class="[&_a]:btn-quaternary">
          `,position:{start:699,end:752}},{type:"output",position:{start:752,end:769},stack:[{type:"Twig.expression.type.variable",value:"social_link",match:["social_link"],position:{start:752,end:769}}]},{type:"raw",value:`
        </div>
      `,position:{start:769,end:791}}]},position:{open:{start:665,end:698},close:{start:791,end:802}}},{type:"raw",value:`    </div>
  </div>

  `,position:{start:803,end:826}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"bio",match:["bio"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"}],position:{start:826,end:851},output:[{type:"raw",value:`    <p class="mt-4 text-sm col-span-2 row-start-2">
    `,position:{start:852,end:908}},{type:"output",position:{start:908,end:917},stack:[{type:"Twig.expression.type.variable",value:"bio",match:["bio"],position:{start:908,end:917}}]},{type:"raw",value:`
    </p>
  `,position:{start:917,end:929}}]},position:{open:{start:826,end:851},close:{start:929,end:940}}},{type:"raw",value:`
</div>`,position:{start:941,end:941}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let o=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(o)||(o=Object.entries(o)),l(t.render({attributes:new w(o),...e}))}catch(o){return l("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/speaker/speaker.twig: "+o.toString())}},x={title:"01-composites/speaker",tags:["autodocs"],parameters:{docs:{description:{component:"Displays information about a speaker for an event, webinar, etc."},source:{code:"drush propel:add speaker"}}},argTypes:{name:{control:{type:"text"},type:{required:!1,name:""},description:"Speaker name",table:{type:{summary:"text"}}},role:{control:{type:"text"},type:{required:!1,name:""},description:"Speaker role or title.",table:{type:{summary:"text"}}},company:{control:{type:"text"},type:{required:!1,name:""},description:"Speaker company.",table:{type:{summary:"text"}}},bio:{control:{type:"text"},type:{required:!1,name:""},description:"Short speaker bio.",table:{type:{summary:"text"}}}}},s={args:{name:"",role:"",company:"",bio:""},render:e=>f({...e,headshot:()=>"<!-- headshot slot content -->",social_link:()=>"<!-- social_link slot content -->"})};var c,d,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "",
    role: "",
    company: "",
    bio: ""
  },
  render: args => {
    return speaker({
      ...args,
      headshot: () => '<!-- headshot slot content -->',
      social_link: () => '<!-- social_link slot content -->'
    });
  }
}`,...(y=(d=s.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,x as default};
