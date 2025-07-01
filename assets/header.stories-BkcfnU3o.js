import{t as E,D as T,T as m,a as _}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const q=n=>{n.extendFunction("include",(r,a)=>{const o=window.SDC_MANIFEST[r];if(!o)throw new Error(`Template ${r} not found`);const{id:e,href:d}=o;try{const i=n.twig({ref:e});if(i)return i.render(a);throw new Error(`Template ${r} not found`)}catch{const l=n.twig({id:e,href:d,async:!1});if(l)return l.render(a);throw new Error(`Template ${r} not found`)}})};q(m);const S=n=>n.extendFilter("clean_unique_id",r=>r);S(m);_(m);m.cache(!1);const y=n=>n,x=(n={})=>{const r=E.twig({id:"/home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"nav_wrapper_id",expression:[{type:"Twig.expression.type.string",value:"nav"},{type:"Twig.expression.type.filter",value:"clean_unique_id",match:["|clean_unique_id","clean_unique_id"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}],position:{start:0,end:50}},position:{start:0,end:50}},{type:"raw",value:`
<header role="banner" class="bg-black kinetic-nav">
  <div class="container md:flex md:items-center">
    <div class="logo relative flex items-center justify-between py-3">
      `,position:{start:51,end:231}},{type:"output",position:{start:231,end:245},stack:[{type:"Twig.expression.type.variable",value:"branding",match:["branding"],position:{start:231,end:245}}]},{type:"raw",value:`
    </div>
    <div class="block md:d-none">
      `,position:{start:245,end:297}},{type:"raw",value:`
      <button class="flex before:transition before:icon-caret/md before:bg-white"
        aria-controls="`,position:{start:348,end:454}},{type:"output",position:{start:454,end:474},stack:[{type:"Twig.expression.type.variable",value:"nav_wrapper_id",match:["nav_wrapper_id"],position:{start:454,end:474}}]},{type:"raw",value:`" aria-haspopup="true" aria-expanded="false" aria-label="Expand menu links"></button>
    </div>
    <div id="`,position:{start:474,end:584}},{type:"output",position:{start:584,end:604},stack:[{type:"Twig.expression.type.variable",value:"nav_wrapper_id",match:["nav_wrapper_id"],position:{start:584,end:604}}]},{type:"raw",value:`" class="flex-1 mobile-menu-wrapper">
      `,position:{start:604,end:648}},{type:"output",position:{start:648,end:657},stack:[{type:"Twig.expression.type.variable",value:"nav",match:["nav"],position:{start:648,end:657}}]},{type:"raw",value:`
    </div>
  </div>
</header>`,position:{start:657,end:657}}],precompiled:!0});r.options.allowInlineIncludes=!0;try{let a=n.defaultAttributes?n.defaultAttributes:[];return Array.isArray(a)||(a=Object.entries(a)),y(r.render({attributes:new T(a),...n}))}catch(a){return y("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/03-formations/header/header.twig: "+a.toString())}};Drupal.behaviors.kineticMenu={attach(n){(n===document?n.querySelectorAll(".kinetic-nav"):[n]).forEach(a=>{if(!a)return;once("kinetic-menu","ul.menu-level-0 > li",a).forEach((e,d)=>{if(!e.classList.contains("menu-item--expanded"))return;const i=e.querySelector(".menu-dropdown"),l=e.querySelector(".menu-link > a");let t=null;if(l){const s=document.createElement("button");e.querySelector(".menu-link").appendChild(s),t=s}const v=e.querySelector(".menu-link > span");v&&(t=v);const b=l?l.textContent:t.textContent;t&&(t.setAttribute("role","button"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label",`Open submenu for ${b}`),t.setAttribute("tabindex","0"),t.setAttribute("aria-controls",i.id),t.addEventListener("keydown",s=>{(s.code==="Enter"||s.code==="Space")&&e.dispatchEvent(new MouseEvent("mouseover",{bubbles:!0,cancelable:!0}))}));const L=i.querySelector("a"),A=Array.from(i.querySelectorAll("a")).pop();let u=null;function c(s){u&&clearTimeout(u),u=setTimeout(()=>{e.classList.remove("is-open"),i.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label",`Open menu for ${b}`)},s)}function h(){window.innerWidth>=768&&c(300)}function f(){i&&(e.classList.add("is-open"),i.classList.add("is-open"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label",`Close menu for ${b}`))}e.addEventListener("mouseover",s=>{s.preventDefault(),!(window.innerWidth<768)&&f()}),e.addEventListener("click",s=>{if(window.innerWidth<768){if(t.getAttribute("aria-expanded")==="true"){c(0);return}f()}}),e.addEventListener("mouseleave",h),i.addEventListener("mouseenter",()=>clearTimeout(u)),i.addEventListener("mouseleave",h),L.addEventListener("blur",s=>{i.contains(s.relatedTarget)||c(0)}),A.addEventListener("blur",s=>{i.contains(s.relatedTarget)||c(0)})})})}};Drupal.behaviors.kineticMobileMenu={attach(n){once("kinetic-mobile-menu",".kinetic-nav",n).forEach(a=>{const o=a.querySelector(".mobile-menu-wrapper"),e=a.querySelector(`button[aria-controls='${o.id}']`);e.addEventListener("click",()=>{if(e.getAttribute("aria-expanded")==="true"){o.classList.add("!d-none"),e.setAttribute("aria-expanded","false"),e.setAttribute("aria-label","Expand menu links");return}o.classList.toggle("!d-none"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Collapse menu links")});function d(){window.innerWidth<768?(o.classList.add("!d-none"),e.classList.remove("!d-none")):(o.classList.remove("!d-none"),e.classList.add("!d-none"))}window.addEventListener("resize",Drupal.debounce(()=>{d()},300)),d()})}};const C={title:"03-formations/header",tags:["autodocs"],parameters:{docs:{description:{component:"A simple main menu. This is not a mega menu."},source:{code:"drush propel:add header"}}},argTypes:{},component:x},p={args:{},render:n=>x({...n,branding:`
      <div id="block-kinetic-branding" class="block block-system block-system-branding-block">
        <a href="/" rel="home" title="website name" class="site-logo">
          <img width="150" src="https://placehold.co/150x80" alt="Home">
        </a>
      </div>
    `,nav:`
      <nav role="navigation" aria-labelledby="block-kinetic-utilitymenu-menu" id="block-kinetic-utilitymenu" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="menu-level-0">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
            <div class="menu-dropdown">
              <ul class="menu-level-1">
                <li><a href="/"> Link 1 </a></li>
                <li><a href="/"> Link 2 </a></li>
                <li><a href="/"> Link 3 </a></li>
                <li><a href="/"> Link 4 </a></li>
              </ul>
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
    `})};var k,w,g;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    nav: \`
      <nav role="navigation" aria-labelledby="block-kinetic-utilitymenu-menu" id="block-kinetic-utilitymenu" class="contextual-region block block-menu navigation menu--utility-menu">
        <ul class="menu-level-0">
          <li class="menu-item--expanded">
            <div class="menu-link">
              <span> About </span>
            </div>
            <div class="menu-dropdown">
              <ul class="menu-level-1">
                <li><a href="/"> Link 1 </a></li>
                <li><a href="/"> Link 2 </a></li>
                <li><a href="/"> Link 3 </a></li>
                <li><a href="/"> Link 4 </a></li>
              </ul>
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
}`,...(g=(w=p.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const O=["Default"];export{p as Default,O as __namedExportsOrder,C as default};
