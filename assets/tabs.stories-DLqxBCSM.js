import{t as y,D as w,T as c,a as v}from"./twig--J2y2TUI.js";import{t as d}from"./tabs-item-DFjRlHGP.js";import{t as b}from"./tabs-nav-item-BGFqzg8g.js";import"./_commonjsHelpers-D6-XlEtG.js";const k=s=>{s.extendFunction("include",(a,i)=>{const l=window.SDC_MANIFEST[a];if(!l)throw new Error(`Template ${a} not found`);const{id:e,href:t}=l;try{const n=s.twig({ref:e});if(n)return n.render(i);throw new Error(`Template ${a} not found`)}catch{const r=s.twig({id:e,href:t,async:!1});if(r)return r.render(i);throw new Error(`Template ${a} not found`)}})};k(c);const A=s=>s.extendFilter("clean_unique_id",a=>a);A(c);v(c);c.cache(!1);const h=s=>s,g=(s={})=>{const a=y.twig({id:"/home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig",data:[{type:"raw",value:"<div ",position:{start:0,end:5}},{type:"output",position:{start:5,end:46},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:5,end:46}},{type:"Twig.expression.type.key.period",position:{start:5,end:46},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:5,end:46},expression:!0,params:[{type:"Twig.expression.type.string",value:"kinetic-tabs",position:{start:5,end:46}}]}]},{type:"raw",value:`>
  <div role="tablist">
    `,position:{start:46,end:75}},{type:"output",position:{start:75,end:95},stack:[{type:"Twig.expression.type.variable",value:"tab_navigation",match:["tab_navigation"],position:{start:75,end:95}}]},{type:"raw",value:`
  </div>
  `,position:{start:95,end:107}},{type:"output",position:{start:107,end:119},stack:[{type:"Twig.expression.type.variable",value:"panels",match:["panels"],position:{start:107,end:119}}]},{type:"raw",value:`
</div>
`,position:{start:119,end:119}}],precompiled:!0});a.options.allowInlineIncludes=!0;try{let i=s.defaultAttributes?s.defaultAttributes:[];return Array.isArray(i)||(i=Object.entries(i)),h(a.render({attributes:new w(i),...s}))}catch(i){return h("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/02-blocks/tabs/tabs.twig: "+i.toString())}};(s=>{let a=0;class i{constructor(e){if(this.tablistNode=e,this.tabs=[],this.firstTab=null,this.lastTab=null,this.tabs=Array.from(this.tablistNode.querySelectorAll("[role=tab]")),this.tabpanels=Array.from(this.tablistNode.querySelectorAll("[role=tabpanel]")),this.tabs.length!==this.tabpanels.length){console.error("TabsAutomatic: The number of tabs and tabpanels must be the same.");return}this.tabs.forEach((t,n)=>{const r=`tabheading-id-${a}`,p=`tabpanel-id-${a}`;t.setAttribute("id",r),t.setAttribute("aria-controls",p);const u=this.tabpanels[n];u.setAttribute("id",p),u.setAttribute("aria-labelledby",r),a+=1,t.addEventListener("keydown",this.onKeydown.bind(this)),t.addEventListener("click",this.onClick.bind(this)),this.firstTab||(this.firstTab=t),this.lastTab=t}),this.setSelectedTab(this.firstTab,!1)}setSelectedTab(e,t){typeof t!="boolean"&&(t=!0);for(var n=0;n<this.tabs.length;n+=1){var r=this.tabs[n];e===r?(r.setAttribute("aria-selected","true"),r.removeAttribute("tabindex"),this.tabpanels[n].classList.remove("is-hidden"),t&&r.focus()):(r.setAttribute("aria-selected","false"),r.tabIndex=-1,this.tabpanels[n].classList.add("is-hidden"))}}setSelectedToPreviousTab(e){var t;e===this.firstTab?this.setSelectedTab(this.lastTab):(t=this.tabs.indexOf(e),this.setSelectedTab(this.tabs[t-1]))}setSelectedToNextTab(e){var t;e===this.lastTab?this.setSelectedTab(this.firstTab):(t=this.tabs.indexOf(e),this.setSelectedTab(this.tabs[t+1]))}onKeydown(e){var t=e.currentTarget,n=!1;switch(e.key){case"ArrowLeft":this.setSelectedToPreviousTab(t),n=!0;break;case"ArrowRight":this.setSelectedToNextTab(t),n=!0;break;case"Home":this.setSelectedTab(this.firstTab),n=!0;break;case"End":this.setSelectedTab(this.lastTab),n=!0;break}n&&(e.stopPropagation(),e.preventDefault())}onClick(e){this.setSelectedTab(e.currentTarget)}}s.TabsAutomatic=i})(window);Drupal.behaviors.kineticTabs={attach(s){once("kinetic-tabs",".kinetic-tabs",s).forEach(i=>{new TabsAutomatic(i)})}};const I={title:"02-blocks/tabs",tags:["autodocs"],parameters:{docs:{description:{component:"Provides an accesible tabs component"},source:{code:"drush propel:add tabs"}}},argTypes:{behavior_name:{control:{type:"text"},type:{required:!1,name:""},table:{type:{summary:"text"}}}},component:g},o={args:{behavior_name:""},render:s=>{const a=`
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales diam quis ligula rhoncus, et feugiat mauris congue. Donec accumsan sed arcu id laoreet. </p>
    `;return`${g({...s,panels:()=>`
        ${d({tab_content:"<h3> Tab content 1</h3>"+a})}
        ${d({tab_content:"<h3> Tab content 2</h3>"+a})}
        ${d({tab_content:"<h3> Tab content 3</h3>"+a})}
      `,tab_navigation:()=>`
        ${b({heading:"heading 1"})}
        ${b({heading:"heading 2"})}
        ${b({heading:"heading 3"})}
      `})}`}};var m,f,T;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        tab_content: "<h3> Tab content 1</h3>" + tabMarkup
      })}
        \${tabItem({
        tab_content: "<h3> Tab content 2</h3>" + tabMarkup
      })}
        \${tabItem({
        tab_content: "<h3> Tab content 3</h3>" + tabMarkup
      })}
      \`,
      tab_navigation: () => \`
        \${tabNavItem({
        heading: "heading 1"
      })}
        \${tabNavItem({
        heading: "heading 2"
      })}
        \${tabNavItem({
        heading: "heading 3"
      })}
      \`
    })}\`;
  }
}`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};const E=["Default"];export{o as Default,E as __namedExportsOrder,I as default};
