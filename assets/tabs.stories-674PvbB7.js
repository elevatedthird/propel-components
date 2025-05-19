import{t as u,D as b,T as i,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const _=t=>{t.extendFunction("include",(e,n)=>{const c=window.SDC_MANIFEST[e];if(!c)throw new Error(`Template ${e} not found`);const{id:a,href:r}=c;try{const s=t.twig({ref:a});if(s)return s.render(n);throw new Error(`Template ${e} not found`)}catch{const o=t.twig({id:a,href:r,async:!1});if(o)return o.render(n);throw new Error(`Template ${e} not found`)}})};_(i);const $=t=>t.extendFilter("clean_unique_id",e=>e);$(i);h(i);i.cache(!1);const w=t=>t,k=(t={})=>{const e=u.twig({id:"/home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:46},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:46}},{type:"Twig.expression.type.key.period",position:{start:5,end:46},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:5,end:46},expression:!0,params:[{type:"Twig.expression.type.string",value:"kinetic-tabs",position:{start:5,end:46}}]}]},{type:"raw",value:`>
  <div role="tablist">
    `,position:{start:46,end:75}},{type:"output",position:{start:75,end:95},stack:[{type:"Twig.expression.type.variable",value:"tab_navigation",match:["tab_navigation"],position:{start:75,end:95}}]},{type:"raw",value:`
  </div>
  `,position:{start:95,end:107}},{type:"output",position:{start:107,end:119},stack:[{type:"Twig.expression.type.variable",value:"panels",match:["panels"],position:{start:107,end:119}}]},{type:"raw",value:`
</div>
`,position:{start:119,end:119}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let n=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(n)||(n=Object.entries(n)),w(e.render({attributes:new b(n),...t}))}catch(n){return w("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig: "+n.toString())}},x=t=>{t.extendFunction("include",(e,n)=>{const c=window.SDC_MANIFEST[e];if(!c)throw new Error(`Template ${e} not found`);const{id:a,href:r}=c;try{const s=t.twig({ref:a});if(s)return s.render(n);throw new Error(`Template ${e} not found`)}catch{const o=t.twig({id:a,href:r,async:!1});if(o)return o.render(n);throw new Error(`Template ${e} not found`)}})};x(i);const S=t=>t.extendFilter("clean_unique_id",e=>e);S(i);h(i);i.cache(!1);const g=t=>t,d=(t={})=>{const e=u.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/tabs-item/tabs-item.twig",data:[{type:"raw",value:`<div class="tab-panel" role="tabpanel" tabindex="0">
  `,position:{start:0,end:55}},{type:"output",position:{start:55,end:72},stack:[{type:"Twig.expression.type.variable",value:"tab_content",match:["tab_content"],position:{start:55,end:72}}]},{type:"raw",value:`
</div>`,position:{start:72,end:72}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let n=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(n)||(n=Object.entries(n)),g(e.render({attributes:new b(n),...t}))}catch(n){return g("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/tabs-item/tabs-item.twig: "+n.toString())}},E=t=>{t.extendFunction("include",(e,n)=>{const c=window.SDC_MANIFEST[e];if(!c)throw new Error(`Template ${e} not found`);const{id:a,href:r}=c;try{const s=t.twig({ref:a});if(s)return s.render(n);throw new Error(`Template ${e} not found`)}catch{const o=t.twig({id:a,href:r,async:!1});if(o)return o.render(n);throw new Error(`Template ${e} not found`)}})};E(i);const I=t=>t.extendFilter("clean_unique_id",e=>e);I(i);h(i);i.cache(!1);const T=t=>t,p=(t={})=>{const e=u.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/tabs-nav-item/tabs-nav-item.twig",data:[{type:"raw",value:`<button class="tab-heading" type="button" role="tab">
  `,position:{start:0,end:56}},{type:"output",position:{start:56,end:69},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:56,end:69}}]},{type:"raw",value:`
</button>`,position:{start:69,end:69}}],precompiled:!0});e.options.allowInlineIncludes=!0;try{let n=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(n)||(n=Object.entries(n)),T(e.render({attributes:new b(n),...t}))}catch(n){return T("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/tabs-nav-item/tabs-nav-item.twig: "+n.toString())}};(t=>{let e=0;class n{constructor(a){if(this.tablistNode=a,this.tabs=[],this.firstTab=null,this.lastTab=null,this.tabs=Array.from(this.tablistNode.querySelectorAll("[role=tab]")),this.tabpanels=Array.from(this.tablistNode.querySelectorAll("[role=tabpanel]")),this.tabs.length!==this.tabpanels.length){console.error("TabsAutomatic: The number of tabs and tabpanels must be the same.");return}this.tabs.forEach((r,s)=>{const o=`tabheading-id-${e}`,m=`tabpanel-id-${e}`;r.setAttribute("id",o),r.setAttribute("aria-controls",m);const f=this.tabpanels[s];f.setAttribute("id",m),f.setAttribute("aria-labelledby",o),e+=1,r.addEventListener("keydown",this.onKeydown.bind(this)),r.addEventListener("click",this.onClick.bind(this)),this.firstTab||(this.firstTab=r),this.lastTab=r}),this.setSelectedTab(this.firstTab,!1)}setSelectedTab(a,r){typeof r!="boolean"&&(r=!0);for(var s=0;s<this.tabs.length;s+=1){var o=this.tabs[s];a===o?(o.setAttribute("aria-selected","true"),o.removeAttribute("tabindex"),this.tabpanels[s].classList.remove("is-hidden"),r&&o.focus()):(o.setAttribute("aria-selected","false"),o.tabIndex=-1,this.tabpanels[s].classList.add("is-hidden"))}}setSelectedToPreviousTab(a){var r;a===this.firstTab?this.setSelectedTab(this.lastTab):(r=this.tabs.indexOf(a),this.setSelectedTab(this.tabs[r-1]))}setSelectedToNextTab(a){var r;a===this.lastTab?this.setSelectedTab(this.firstTab):(r=this.tabs.indexOf(a),this.setSelectedTab(this.tabs[r+1]))}onKeydown(a){var r=a.currentTarget,s=!1;switch(a.key){case"ArrowLeft":this.setSelectedToPreviousTab(r),s=!0;break;case"ArrowRight":this.setSelectedToNextTab(r),s=!0;break;case"Home":this.setSelectedTab(this.firstTab),s=!0;break;case"End":this.setSelectedTab(this.lastTab),s=!0;break}s&&(a.stopPropagation(),a.preventDefault())}onClick(a){this.setSelectedTab(a.currentTarget)}}t.TabsAutomatic=n})(window);Drupal.behaviors.kineticTabs={attach(t){once("kinetic-tabs",".kinetic-tabs",t).forEach(n=>{new TabsAutomatic(n)})}};const P={title:"02-blocks/tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Provides an accesible tabs component"},source:{code:"drush propel:add tabs"}}},argTypes:{behavior_name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:k},l={args:{behavior_name:""},render:t=>{const e=`
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;return`${k({...t,panels:()=>`
        ${d({tab_content:"<h3> Tab content 1</h3>"+e})}
        ${d({tab_content:"<h3> Tab content 2</h3>"+e})}
        ${d({tab_content:"<h3> Tab content 3</h3>"+e})}
      `,tab_navigation:()=>`
        ${p({heading:"heading 1"})}
        ${p({heading:"heading 2"})}
        ${p({heading:"heading 3"})}
      `})}`}};var y,v,A;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    behavior_name: ""
  },
  render: context => {
    const tabMarkup = \`
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    \`;
    return \`\${tabs({
      ...context,
      panels: () => \`
        \${tabItem({
        tab_content: '<h3> Tab content 1</h3>' + tabMarkup
      })}
        \${tabItem({
        tab_content: '<h3> Tab content 2</h3>' + tabMarkup
      })}
        \${tabItem({
        tab_content: '<h3> Tab content 3</h3>' + tabMarkup
      })}
      \`,
      tab_navigation: () => \`
        \${tabNavItem({
        heading: 'heading 1'
      })}
        \${tabNavItem({
        heading: 'heading 2'
      })}
        \${tabNavItem({
        heading: 'heading 3'
      })}
      \`
    })}\`;
  }
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const M=["Default"];export{l as Default,M as __namedExportsOrder,P as default};
