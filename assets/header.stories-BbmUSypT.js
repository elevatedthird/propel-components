import{t as w,D as b,T as d,a as f}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=e=>{e.extendFunction("include",(t,n)=>{const o=window.SDC_MANIFEST[t];if(!o)throw new Error(`Template ${t} not found`);const{id:a,href:p}=o;try{const i=e.twig({ref:a});if(i)return i.render(n);throw new Error(`Template ${t} not found`)}catch{const s=e.twig({id:a,href:p,async:!1});if(s)return s.render(n);throw new Error(`Template ${t} not found`)}})};x(d);const k=e=>e.extendFilter("clean_unique_id",t=>t);k(d);f(d);d.cache(!1);const y=e=>e,h=(e={})=>{const t=w.twig({id:"/home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig",data:[{type:"raw",value:"<header ",position:{start:0,end:8}},{type:"output",position:{start:8,end:134},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:8,end:134}},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.string",value:"role",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"banner",position:{start:8,end:134}}]},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.string",value:"id",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"paragon-header",position:{start:8,end:134}}]},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.array.start",value:"[",match:["["],position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"header",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"paragon-mega-menu",position:{start:8,end:134}},{type:"Twig.expression.type.array.end",value:"]",match:["]"],position:{start:8,end:134}}]}]},{type:"raw",value:`>
  `,position:{start:134,end:138}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"header_top",match:["header_top"]},{type:"Twig.expression.type.test",filter:"defined"}],position:{start:138,end:168},output:[{type:"raw",value:`    <div class="bg-gray-900 py-2 d-none md:block">
      <div class="container-default-default flex justify-end">
        `,position:{start:169,end:291}},{type:"output",position:{start:291,end:307},stack:[{type:"Twig.expression.type.variable",value:"header_top",match:["header_top"],position:{start:291,end:307}}]},{type:"raw",value:`
      </div>
    </div>
  `,position:{start:307,end:334}}]},position:{open:{start:138,end:168},close:{start:334,end:345}}},{type:"raw",value:`  <div class='bg-gray-600 py-4'>
    <div class="container-default-default flex items-center justify-between">
      `,position:{start:346,end:463}},{type:"output",position:{start:463,end:477},stack:[{type:"Twig.expression.type.variable",value:"branding",match:["branding"],position:{start:463,end:477}}]},{type:"raw",value:`
      <div class="d-none md:block">
        `,position:{start:477,end:522}},{type:"output",position:{start:522,end:537},stack:[{type:"Twig.expression.type.variable",value:"main_menu",match:["main_menu"],position:{start:522,end:537}}]},{type:"raw",value:`
        `,position:{start:537,end:546}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"cta_menu",match:["cta_menu"]},{type:"Twig.expression.type.test",filter:"defined"},{type:"Twig.expression.type.variable",value:"cta_menu",match:["cta_menu"]},{type:"Twig.expression.type.test",filter:"empty",modifier:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],position:{start:546,end:600},output:[{type:"raw",value:"          ",position:{start:601,end:611}},{type:"output",position:{start:611,end:625},stack:[{type:"Twig.expression.type.variable",value:"cta_menu",match:["cta_menu"],position:{start:611,end:625}}]},{type:"raw",value:`
        `,position:{start:625,end:634}}]},position:{open:{start:546,end:600},close:{start:634,end:645}}},{type:"raw",value:`      </div>
      `,position:{start:646,end:665}},{type:"raw",value:`
      <div class='block md:d-none'>
        `,position:{start:690,end:735}},{type:"output",position:{start:735,end:852},stack:[{type:"Twig.expression.type._function",position:{start:735,end:852},fn:"include",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:735,end:852}},{type:"Twig.expression.type.string",value:"kinetic:menu-trigger",position:{start:735,end:852}},{type:"Twig.expression.type.comma",position:{start:735,end:852}},{type:"Twig.expression.type.object.start",value:"{",match:["{"],position:{start:735,end:852}},{type:"Twig.expression.type.operator.binary",value:":",position:{start:735,end:852},precidence:16,associativity:"rightToLeft",operator:":",key:"aria_controls"},{type:"Twig.expression.type.string",value:"mobile-nav-wrapper",position:{start:735,end:852}},{type:"Twig.expression.type.object.end",value:"}",match:["}"],position:{start:735,end:852}},{type:"Twig.expression.type.comma",position:{start:735,end:852}},{type:"Twig.expression.type.operator.binary",value:":",position:{start:735,end:852},precidence:16,associativity:"rightToLeft",operator:":",key:"with_context"},{type:"Twig.expression.type.bool",value:!1,position:{start:735,end:852}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:735,end:852},expression:!1}]}]},{type:"raw",value:`
      </div>
    </div>
  </div>
  `,position:{start:852,end:888}},{type:"raw",value:`
  <div id="mobile-nav-wrapper" class="bg-blue-overlay">
    <div class='mobile-nav__inner bg-gray-900'>
      <div class='container-default-default py-8'>
        <div data-block-collector='mobile'></div>
      </div>
  </div>
</header>
`,position:{start:956,end:956}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let n=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(n)||(n=Object.entries(n)),y(t.render({attributes:new b(n),...e}))}catch(n){return y("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig: "+n.toString())}};Drupal.behaviors.kineticMenuTrigger={attach(e){const t=once("kinetic-menu-trigger",".kinetic-menu-trigger",e);t.forEach(n=>{function o(a,p=!1){if("code"in a&&(a.code!=="Enter"||a.code!=="Space"))return;const i=this.getAttribute("aria-controls"),s=document.getElementById(i),u=document.querySelectorAll(`[aria-controls="${i}"]`);if(!s){console.error(`Cannot find container with ID: ${i}`);return}if(u.length>0){let c=s.classList.contains("is-open");p&&(c=!0),u.forEach(r=>{c?(r.classList.remove("is-open"),r.setAttribute("aria-expanded","false"),r.setAttribute("aria-label","Open mobile menu")):(r.classList.add("is-open"),r.setAttribute("aria-expanded","true"),r.setAttribute("aria-label","Close mobile menu"))}),c?(s.classList.remove("is-open"),document.body.style.overflow=""):(s.classList.add("is-open"),document.body.style.overflow="hidden")}}n.addEventListener("click",o),n.addEventListener("keyup",o),window.addEventListener("resize",a=>{window.innerWidth>=1024&&t.length>0&&t.forEach(p=>o.call(p,a,!0))})})}};const A={title:"03-formations/header",tags:["autodocs"],parameters:{docs:{description:{component:"A simple main menu. This is not a mega menu."},source:{code:"drush propel:add header"}}},argTypes:{},component:h},l={args:{},render:e=>h({...e,branding:`
      <div id="block-kinetic-branding" class="block block-system block-system-branding-block">
        <a href="/" rel="home" title="website name" class="site-logo">
          <img width="150" src="https://placehold.co/150x80" alt="Home">
        </a>
      </div>
    `,header_top:`
      <nav role="navigation" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Company</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Location</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    `,main_menu:`
      <nav role="navigation" class="contextual-region block block-menu navigation menu--main">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Blog</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/events-0" class="hover:underline" data-drupal-link-system-path="node/126">Events</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    `})};var m,g,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => header({
    ...args,
    branding: \`
      <div id="block-kinetic-branding" class="block block-system block-system-branding-block">
        <a href="/" rel="home" title="website name" class="site-logo">
          <img width="150" src="https://placehold.co/150x80" alt="Home">
        </a>
      </div>
    \`,
    header_top: \`
      <nav role="navigation" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Company</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Location</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    \`,
    main_menu: \`
      <nav role="navigation" class="contextual-region block block-menu navigation menu--main">
        <ul class="flex gap-4 text-white">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
          </li>
          <li class="py-2 md:py-0">
          <a href="/blog" class="hover:underline" data-drupal-link-system-path="node/131">Blog</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/events-0" class="hover:underline" data-drupal-link-system-path="node/126">Events</a>
          </li>
          <li class="py-2 md:py-0">
          <a href="/news" class="hover:underline" data-drupal-link-system-path="node/8606">News</a>
          </li>
        </ul>
      </nav>
    \`
  })
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["Default"];export{l as Default,E as __namedExportsOrder,A as default};
