import{t as E,D as L,T as v,a as _}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const S=t=>{t.extendFunction("include",(s,a)=>{const r=window.SDC_MANIFEST[s];if(!r)throw new Error(`Template ${s} not found`);const{id:e,href:d}=r;try{const i=t.twig({ref:e});if(i)return i.render(a);throw new Error(`Template ${s} not found`)}catch{const l=t.twig({id:e,href:d,async:!1});if(l)return l.render(a);throw new Error(`Template ${s} not found`)}})};S(v);const D=t=>t.extendFilter("clean_unique_id",s=>s);D(v);_(v);v.cache(!1);const g=t=>t,x=(t={})=>{const s=E.twig({id:"/home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig",data:[{type:"raw",value:"<header ",position:{start:0,end:8}},{type:"output",position:{start:8,end:134},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:8,end:134}},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.string",value:"role",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"banner",position:{start:8,end:134}}]},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"setAttribute"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.string",value:"id",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"paragon-header",position:{start:8,end:134}}]},{type:"Twig.expression.type.key.period",position:{start:8,end:134},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:8,end:134},expression:!0,params:[{type:"Twig.expression.type.array.start",value:"[",match:["["],position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"header",position:{start:8,end:134}},{type:"Twig.expression.type.comma",position:{start:8,end:134}},{type:"Twig.expression.type.string",value:"paragon-mega-menu",position:{start:8,end:134}},{type:"Twig.expression.type.array.end",value:"]",match:["]"],position:{start:8,end:134}}]}]},{type:"raw",value:`>
  `,position:{start:134,end:138}},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"header_top",match:["header_top"]},{type:"Twig.expression.type.test",filter:"defined"}],position:{start:138,end:168},output:[{type:"raw",value:`    <div class="bg-gray-900 py-2 d-none md:block">
      <div class="container-default flex justify-end">
        `,position:{start:169,end:283}},{type:"output",position:{start:283,end:299},stack:[{type:"Twig.expression.type.variable",value:"header_top",match:["header_top"],position:{start:283,end:299}}]},{type:"raw",value:`
      </div>
    </div>
  `,position:{start:299,end:326}}]},position:{open:{start:138,end:168},close:{start:326,end:337}}},{type:"raw",value:`  <div class='bg-gray-600 py-4'>
    <div class="container-default flex items-center justify-between">
      `,position:{start:338,end:447}},{type:"output",position:{start:447,end:461},stack:[{type:"Twig.expression.type.variable",value:"branding",match:["branding"],position:{start:447,end:461}}]},{type:"raw",value:`
      <div class="d-none md:block">
        `,position:{start:461,end:506}},{type:"output",position:{start:506,end:521},stack:[{type:"Twig.expression.type.variable",value:"main_menu",match:["main_menu"],position:{start:506,end:521}}]},{type:"raw",value:`
      </div>
      `,position:{start:521,end:541}},{type:"raw",value:`
      <div class='block md:d-none'>
        `,position:{start:566,end:611}},{type:"output",position:{start:611,end:728},stack:[{type:"Twig.expression.type._function",position:{start:611,end:728},fn:"include",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("],position:{start:611,end:728}},{type:"Twig.expression.type.string",value:"kinetic:menu-trigger",position:{start:611,end:728}},{type:"Twig.expression.type.comma",position:{start:611,end:728}},{type:"Twig.expression.type.object.start",value:"{",match:["{"],position:{start:611,end:728}},{type:"Twig.expression.type.operator.binary",value:":",position:{start:611,end:728},precidence:16,associativity:"rightToLeft",operator:":",key:"aria_controls"},{type:"Twig.expression.type.string",value:"mobile-nav-wrapper",position:{start:611,end:728}},{type:"Twig.expression.type.object.end",value:"}",match:["}"],position:{start:611,end:728}},{type:"Twig.expression.type.comma",position:{start:611,end:728}},{type:"Twig.expression.type.operator.binary",value:":",position:{start:611,end:728},precidence:16,associativity:"rightToLeft",operator:":",key:"with_context"},{type:"Twig.expression.type.bool",value:!1,position:{start:611,end:728}},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:611,end:728},expression:!1}]}]},{type:"raw",value:`
      </div>
    </div>
  </div>
  `,position:{start:728,end:764}},{type:"raw",value:`
  <div id="mobile-nav-wrapper" class="bg-blue-overlay">
    <div class='mobile-nav__inner bg-gray-900'>
      <div class='container-default py-8'>
        <div data-block-collector='mobile'></div>
      </div>
  </div>
</header>
`,position:{start:824,end:824}}],precompiled:!0});s.options.allowInlineIncludes=!0;try{let a=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(a)||(a=Object.entries(a)),g(s.render({attributes:new L(a),...t}))}catch(a){return g("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig: "+a.toString())}};Drupal.behaviors.kineticMenu={attach(t){(t===document?t.querySelectorAll(".kinetic-nav"):[t]).forEach(a=>{if(!a)return;once("kinetic-menu","ul.menu-level-0 > li",a).forEach((e,d)=>{if(!e.classList.contains("menu-item--expanded"))return;const i=e.querySelector(".menu-dropdown"),l=e.querySelector(".menu-link > a");let n=null;if(l){const o=document.createElement("button");e.querySelector(".menu-link").appendChild(o),n=o}const c=e.querySelector(".menu-link > span");c&&(n=c);const p=l?l.textContent:n.textContent;n&&(n.setAttribute("role","button"),n.setAttribute("aria-haspopup","true"),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label",`Open submenu for ${p}`),n.setAttribute("tabindex","0"),n.setAttribute("aria-controls",i.id),n.addEventListener("keydown",o=>{(o.code==="Enter"||o.code==="Space")&&e.dispatchEvent(new MouseEvent("mouseover",{bubbles:!0,cancelable:!0}))}));const T=i.querySelector("a"),A=Array.from(i.querySelectorAll("a")).pop();let u=null;function m(o){u&&clearTimeout(u),u=setTimeout(()=>{e.classList.remove("is-open"),i.classList.remove("is-open"),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label",`Open menu for ${p}`)},o)}function b(){window.innerWidth>=768&&m(300)}function h(){i&&(e.classList.add("is-open"),i.classList.add("is-open"),n.setAttribute("aria-expanded","true"),n.setAttribute("aria-label",`Close menu for ${p}`))}e.addEventListener("mouseover",o=>{o.preventDefault(),!(window.innerWidth<768)&&h()}),e.addEventListener("click",o=>{if(window.innerWidth<768){if(n.getAttribute("aria-expanded")==="true"){m(0);return}h()}}),e.addEventListener("mouseleave",b),i.addEventListener("mouseenter",()=>clearTimeout(u)),i.addEventListener("mouseleave",b),T.addEventListener("blur",o=>{i.contains(o.relatedTarget)||m(0)}),A.addEventListener("blur",o=>{i.contains(o.relatedTarget)||m(0)})})})}};Drupal.behaviors.kineticMobileMenu={attach(t){once("kinetic-mobile-menu",".kinetic-nav",t).forEach(a=>{const r=a.querySelector(".mobile-menu-wrapper"),e=a.querySelector(`button[aria-controls='${r.id}']`);e.addEventListener("click",()=>{if(e.getAttribute("aria-expanded")==="true"){r.classList.add("!d-none"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Expand menu links");return}r.classList.toggle("!d-none"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Collapse menu links")});function d(){window.innerWidth<768?(r.classList.add("!d-none"),e.classList.remove("!d-none")):(r.classList.remove("!d-none"),e.classList.add("!d-none"))}window.addEventListener("resize",Drupal.debounce(()=>{d()},300)),d()})}};Drupal.behaviors.kineticMenuTrigger={attach(t){const s=once("kinetic-menu-trigger",".kinetic-menu-trigger",t);s.forEach(a=>{function r(e,d=!1){if("code"in e&&(e.code!=="Enter"||e.code!=="Space"))return;const i=this.getAttribute("aria-controls"),l=document.getElementById(i),n=document.querySelectorAll(`[aria-controls="${i}"]`);if(!l){console.error(`Cannot find container with ID: ${i}`);return}if(n.length>0){let c=l.classList.contains("is-open");d&&(c=!0),n.forEach(p=>{c?(p.classList.remove("is-open"),p.setAttribute("aria-expanded","false"),p.setAttribute("aria-label","Open mobile menu")):(p.classList.add("is-open"),p.setAttribute("aria-expanded","true"),p.setAttribute("aria-label","Close mobile menu"))}),c?(l.classList.remove("is-open"),document.body.style.overflow=""):(l.classList.add("is-open"),document.body.style.overflow="hidden")}}a.addEventListener("click",r),a.addEventListener("keyup",r),window.addEventListener("resize",e=>{window.innerWidth>=1024&&s.length>0&&s.forEach(d=>r.call(d,e,!0))})})}};const $={title:"03-formations/header",tags:["autodocs"],parameters:{docs:{description:{component:"A simple main menu. This is not a mega menu."},source:{code:"drush propel:add header"}}},argTypes:{},component:x},y={args:{},render:t=>x({...t,branding:`
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
    `})};var w,f,k;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(f=y.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const O=["Default"];export{y as Default,O as __namedExportsOrder,$ as default};
