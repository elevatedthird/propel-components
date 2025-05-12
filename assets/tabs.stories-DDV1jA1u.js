import{t as u,D as b,T as l,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const $=t=>{t.extendFunction("include",(n,e)=>{const r=window.SDC_MANIFEST[n];if(!r)throw new Error(`Template ${n} not found`);try{const a=t.twig({ref:r});if(a)return a.render(e);throw new Error(`Template ${r} not found`)}catch{const s=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",o=r.split("/").slice(-4).join("/"),i=t.twig({id:r,href:`${s}/${o}`,async:!1});if(i)return i.render(e);throw new Error(`Template ${r} not found`)}})};$(l);const _=t=>t.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));_(l);h(l);l.cache(!1);const w=t=>t,k=(t={})=>{const n=u.twig({id:"/home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:46},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:46}},{type:"Twig.expression.type.key.period",position:{start:5,end:46},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:5,end:46},expression:!0,params:[{type:"Twig.expression.type.string",value:"kinetic-tabs",position:{start:5,end:46}}]}]},{type:"raw",value:`>
  <div role="tablist">
    `,position:{start:46,end:75}},{type:"output",position:{start:75,end:95},stack:[{type:"Twig.expression.type.variable",value:"tab_navigation",match:["tab_navigation"],position:{start:75,end:95}}]},{type:"raw",value:`
  </div>
  `,position:{start:95,end:107}},{type:"output",position:{start:107,end:119},stack:[{type:"Twig.expression.type.variable",value:"panels",match:["panels"],position:{start:107,end:119}}]},{type:"raw",value:`
</div>
`,position:{start:119,end:119}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),w(n.render({attributes:new b(e),...t}))}catch(e){return w("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig: "+e.toString())}},x=t=>{t.extendFunction("include",(n,e)=>{const r=window.SDC_MANIFEST[n];if(!r)throw new Error(`Template ${n} not found`);try{const a=t.twig({ref:r});if(a)return a.render(e);throw new Error(`Template ${r} not found`)}catch{const s=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",o=r.split("/").slice(-4).join("/"),i=t.twig({id:r,href:`${s}/${o}`,async:!1});if(i)return i.render(e);throw new Error(`Template ${r} not found`)}})};x(l);const S=t=>t.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));S(l);h(l);l.cache(!1);const T=t=>t,p=(t={})=>{const n=u.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/tabs-item/tabs-item.twig",data:[{type:"raw",value:`<div class="tab-panel" role="tabpanel" tabindex="0">
  `,position:{start:0,end:55}},{type:"output",position:{start:55,end:72},stack:[{type:"Twig.expression.type.variable",value:"tab_content",match:["tab_content"],position:{start:55,end:72}}]},{type:"raw",value:`
</div>`,position:{start:72,end:72}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),T(n.render({attributes:new b(e),...t}))}catch(e){return T("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/tabs-item/tabs-item.twig: "+e.toString())}},E=t=>{t.extendFunction("include",(n,e)=>{const r=window.SDC_MANIFEST[n];if(!r)throw new Error(`Template ${n} not found`);try{const a=t.twig({ref:r});if(a)return a.render(e);throw new Error(`Template ${r} not found`)}catch{const s=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",o=r.split("/").slice(-4).join("/"),i=t.twig({id:r,href:`${s}/${o}`,async:!1});if(i)return i.render(e);throw new Error(`Template ${r} not found`)}})};E(l);const I=t=>t.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));I(l);h(l);l.cache(!1);const g=t=>t,d=(t={})=>{const n=u.twig({id:"/home/runner/work/propel-components/propel-components/components/01-composites/tabs-nav-item/tabs-nav-item.twig",data:[{type:"raw",value:`<button class="tab-heading" type="button" role="tab">
  `,position:{start:0,end:56}},{type:"output",position:{start:56,end:69},stack:[{type:"Twig.expression.type.variable",value:"heading",match:["heading"],position:{start:56,end:69}}]},{type:"raw",value:`
</button>`,position:{start:69,end:69}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let e=t.defaultAttributes?t.defaultAttributes:[];return Array.isArray(e)||(e=Object.entries(e)),g(n.render({attributes:new b(e),...t}))}catch(e){return g("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/01-composites/tabs-nav-item/tabs-nav-item.twig: "+e.toString())}};(t=>{let n=0;class e{constructor(a){if(this.tablistNode=a,this.tabs=[],this.firstTab=null,this.lastTab=null,this.tabs=Array.from(this.tablistNode.querySelectorAll("[role=tab]")),this.tabpanels=Array.from(this.tablistNode.querySelectorAll("[role=tabpanel]")),this.tabs.length!==this.tabpanels.length){console.error("TabsAutomatic: The number of tabs and tabpanels must be the same.");return}this.tabs.forEach((s,o)=>{const i=`tabheading-id-${n}`,m=`tabpanel-id-${n}`;s.setAttribute("id",i),s.setAttribute("aria-controls",m);const f=this.tabpanels[o];f.setAttribute("id",m),f.setAttribute("aria-labelledby",i),n+=1,s.addEventListener("keydown",this.onKeydown.bind(this)),s.addEventListener("click",this.onClick.bind(this)),this.firstTab||(this.firstTab=s),this.lastTab=s}),this.setSelectedTab(this.firstTab,!1)}setSelectedTab(a,s){typeof s!="boolean"&&(s=!0);for(var o=0;o<this.tabs.length;o+=1){var i=this.tabs[o];a===i?(i.setAttribute("aria-selected","true"),i.removeAttribute("tabindex"),this.tabpanels[o].classList.remove("is-hidden"),s&&i.focus()):(i.setAttribute("aria-selected","false"),i.tabIndex=-1,this.tabpanels[o].classList.add("is-hidden"))}}setSelectedToPreviousTab(a){var s;a===this.firstTab?this.setSelectedTab(this.lastTab):(s=this.tabs.indexOf(a),this.setSelectedTab(this.tabs[s-1]))}setSelectedToNextTab(a){var s;a===this.lastTab?this.setSelectedTab(this.firstTab):(s=this.tabs.indexOf(a),this.setSelectedTab(this.tabs[s+1]))}onKeydown(a){var s=a.currentTarget,o=!1;switch(a.key){case"ArrowLeft":this.setSelectedToPreviousTab(s),o=!0;break;case"ArrowRight":this.setSelectedToNextTab(s),o=!0;break;case"Home":this.setSelectedTab(this.firstTab),o=!0;break;case"End":this.setSelectedTab(this.lastTab),o=!0;break}o&&(a.stopPropagation(),a.preventDefault())}onClick(a){this.setSelectedTab(a.currentTarget)}}t.TabsAutomatic=e})(window);Drupal.behaviors.kineticTabs={attach(t){once("kinetic-tabs",".kinetic-tabs",t).forEach(e=>{new TabsAutomatic(e)})}};const O={title:"02-blocks/tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Provides an accesible tabs component"},source:{code:"drush propel:add tabs"}}},argTypes:{behavior_name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:k},c={args:{behavior_name:""},render:t=>{const n=`
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;return`${k({...t,panels:()=>`
        ${p({tab_content:"<h3> Tab content 1</h3>"+n})}
        ${p({tab_content:"<h3> Tab content 2</h3>"+n})}
        ${p({tab_content:"<h3> Tab content 3</h3>"+n})}
      `,tab_navigation:()=>`
        ${d({heading:"heading 1"})}
        ${d({heading:"heading 2"})}
        ${d({heading:"heading 3"})}
      `})}`}};var y,v,A;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const P=["Default"];export{c as Default,P as __namedExportsOrder,O as default};
