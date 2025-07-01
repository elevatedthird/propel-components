import{j as e,M as o}from"./index-8K6dc7lu.js";import{useMDXComponents as r}from"./index-CB7VQC5K.js";import"./iframe-DC-ExBKB.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Contributing"}),`
`,e.jsx(n.h1,{id:"contributing",children:"Contributing"}),`
`,e.jsx(n.p,{children:"We welcome new SDCs and improvements to existing SDCs. If you have an idea for a new SDC or want to improve an existing one, keep the following in mind:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Is a valid SDC."}),`
`,e.jsxs(n.li,{children:["Contains a ",e.jsx(n.code,{children:"stories.js"})," file with a default story."]}),`
`,e.jsx(n.li,{children:"Works on light and dark themes."}),`
`,e.jsxs(n.li,{children:["Lists any component dependencies in the ",e.jsx(n.code,{children:"component.yml"})," file."]}),`
`,e.jsxs(n.li,{children:["CSS files must follow ",e.jsx(n.code,{children:"[name].pcss.css"})," naming"]}),`
`,e.jsxs(n.li,{children:["JS files must follow ",e.jsx(n.code,{children:"[name].es6.js"})," naming"]}),`
`,e.jsx(n.li,{children:"Do not use embed and blocks."}),`
`]}),`
`,e.jsx(n.h2,{id:"adding-dependencies",children:"Adding dependencies"}),`
`,e.jsx(n.p,{children:"If your SDC includes another one, add a needs key to the component.yml file."}),`
`,e.jsx(n.p,{children:"Ex."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`...
needs:
  - glide-slide
  - glide-bullets
...
`})}),`
`,e.jsx(n.h2,{id:"generating-stories",children:"Generating stories"}),`
`,e.jsx(n.p,{children:`Story files are automatically generated when you create a component.yml file.
The better your component.yml file is, the better your story will be.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm run stories
`})}),`
`,e.jsx(n.h3,{id:"ignoring-story-generation",children:"Ignoring story generation"}),`
`,e.jsxs(n.p,{children:["Add an entry to ",e.jsx(n.code,{children:"EXCLUDED_STORIES"})," array in ",e.jsx(n.code,{children:"generate-stories.js"})]}),`
`,e.jsx(n.h3,{id:"forcing-story-re-generation",children:"Forcing story re-generation"}),`
`,e.jsxs(n.p,{children:["Add an entry to ",e.jsx(n.code,{children:"FORCE_RECREATE_STORIES"})," array in ",e.jsx(n.code,{children:"generate-stories.js"})]}),`
`,e.jsx(n.h2,{id:"bugs--feature-requests",children:"Bugs / Feature Requests"}),`
`,e.jsx(n.p,{children:"Please open an issue!"})]})}function x(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{x as default};
