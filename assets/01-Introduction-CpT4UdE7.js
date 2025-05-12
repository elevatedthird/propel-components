import{j as e,M as o}from"./index-B-CzANB3.js";import{useMDXComponents as t}from"./index-0FWzMoow.js";import"./iframe-CsnJQih4.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:"This site provides starter SDCs for a drupal site using the Kinetic (>=2.0.0) theme."}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Drupal 10.3.0 or higher"}),`
`,e.jsx(n.li,{children:"Tailwind 4.0.0 or higher"}),`
`,e.jsx(n.li,{children:"SDC module installed (or use Core)"}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Install the ",e.jsx(n.a,{href:"https://github.com/elevatedthird/paragon_propel",rel:"nofollow",children:"propel module"}),", which provides a drush command to add an SDC to your theme's ",e.jsx(n.code,{children:"components"})," directory"]}),`
`]}),`
`,e.jsx(n.h2,{id:"component-categories",children:"Component Categories"}),`
`,e.jsx(n.h3,{id:"00-elements",children:"00-elements"}),`
`,e.jsxs(n.p,{children:[`Contains single elements, such as buttons, links, images, and badges.
Most of these SDCs wrap the utility classes created in your `,e.jsx(n.code,{children:"index.css"}),` file. They primarily exist for showing variants in storybook.
These utility classes are available anywhere in your site, including custom modules and PHP files.`]}),`
`,e.jsx(n.h3,{id:"01-composites",children:"01-composites"}),`
`,e.jsx(n.p,{children:`Contains components that are made up of multiple elements. They aren't
as big as blocks, but are more complex than elements.`}),`
`,e.jsx(n.h3,{id:"02-blocks",children:"02-blocks"}),`
`,e.jsx(n.p,{children:"Contains components that are composed of multiple composites."}),`
`,e.jsx(n.h3,{id:"03-formations",children:"03-formations"}),`
`,e.jsx(n.p,{children:"Contains wrappers for layouts"}),`
`,e.jsx(n.h3,{id:"04-pages",children:"04-pages"}),`
`,e.jsx(n.p,{children:"Contains templates for entire pages"})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
