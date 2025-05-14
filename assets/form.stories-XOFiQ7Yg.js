import{t as f,D as y,T as o,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=e=>{e.extendFunction("include",(n,t)=>{const l=window.SDC_MANIFEST[n];if(!l)throw new Error(`Template ${n} not found`);try{const r=e.twig({ref:l});if(r)return r.render(t);throw new Error(`Template ${l} not found`)}catch{const b=window.CONFIG_TYPE==="PRODUCTION"?"https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main":".",c=l.split("/").slice(-4).join("/"),i=e.twig({id:l,href:`${b}/${c}`,async:!1});if(i)return i.render(t);throw new Error(`Template ${l} not found`)}})};x(o);const g=e=>e.extendFilter("clean_unique_id",()=>n=>n.split(" ").reverse().join(" "));g(o);h(o);o.cache(!1);const p=e=>e,d=(e={})=>{const n=f.twig({id:"/home/runner/work/propel-components/propel-components/components/00-elements/form/form.twig",data:[{type:"raw",value:`

<form`,position:{start:150,end:157}},{type:"output",position:{start:157,end:198},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:157,end:198}},{type:"Twig.expression.type.key.period",position:{start:157,end:198},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:157,end:198},expression:!0,params:[{type:"Twig.expression.type.string",value:"kinetic-form",position:{start:157,end:198}}]}]},{type:"raw",value:`>
  `,position:{start:198,end:202}},{type:"output",position:{start:202,end:212},stack:[{type:"Twig.expression.type.variable",value:"form",match:["form"],position:{start:202,end:212}}]},{type:"raw",value:`
</form>
`,position:{start:212,end:212}}],precompiled:!0});n.options.allowInlineIncludes=!0;try{let t=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(t)||(t=Object.entries(t)),p(n.render({attributes:new y(t),...e}))}catch(t){return p("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/00-elements/form/form.twig: "+t.toString())}},T={title:"00-elements/form",tags:["autodocs"],parameters:{docs:{description:{component:"A Form."},source:{code:"drush propel:add form"}}},argTypes:{},component:d},a={args:{},render:e=>d({...e,form:`
  <form action="/submit" method="post">
    
    <!-- Text Input -->
    <label for="text">Text Input:</label>
    <input type="text" id="text" name="text" placeholder="Enter text">

    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <!-- URL -->
    <label for="url">URL:</label>
    <input type="url" id="url" name="url">

    <!-- Tel -->
    <label for="tel">Telephone:</label>
    <input type="tel" id="tel" name="tel">

    <!-- Number -->
    <label for="number">Number:</label>
    <input type="number" id="number" name="number" min="0" max="100">

    <!-- Date -->
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">

    <!-- Time -->
    <label for="time">Time:</label>
    <input type="time" id="time" name="time">

    <!-- Color -->
    <label for="color">Color:</label>
    <input type="color" id="color" name="color">

    <!-- Range -->
    <label for="range">Range:</label>
    <input type="range" id="range" name="range" min="1" max="10">

    <!-- Search -->
    <label for="search">Search:</label>
    <input type="search" id="search" name="search">

    <!-- File -->
    <label for="file">File Upload:</label>
    <input type="file" id="file" name="file">

    <!-- Checkbox -->
    <fieldset>
      <legend>Checkboxes:</legend>
      <label><input type="checkbox" name="interest" value="music"> Music</label>
      <label><input type="checkbox" name="interest" value="sports"> Sports</label>
      <label><input type="checkbox" name="interest" value="reading"> Reading</label>
    </fieldset>

    <!-- Radio Buttons -->
    <fieldset>
      <legend>Radio Buttons:</legend>
      <label><input type="radio" name="gender" value="male"> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
      <label><input type="radio" name="gender" value="other"> Other</label>
    </fieldset>

    <!-- Select Dropdown -->
    <label for="select">Select:</label>
    <select id="select" name="select">
      <option value="">--Please choose--</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <!-- Multiple Select -->
    <label for="multi">Multiple Select:</label>
    <select id="multi" name="multi" multiple>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>

    <!-- Textarea -->
    <label for="textarea">Textarea:</label>
    <textarea id="textarea" name="textarea" rows="4" placeholder="Type something..."></textarea>

    <!-- Hidden Input -->
    <input type="hidden" name="hiddenField" value="hiddenValue">

    <!-- Buttons -->
    <label>Buttons:</label>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button" onclick="alert('Button clicked!')">Click Me</button>

    </form>
    `})};var s,u,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: context => {
    const formElements = \`
  <form action="/submit" method="post">
    
    <!-- Text Input -->
    <label for="text">Text Input:</label>
    <input type="text" id="text" name="text" placeholder="Enter text">

    <!-- Password -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">

    <!-- Email -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <!-- URL -->
    <label for="url">URL:</label>
    <input type="url" id="url" name="url">

    <!-- Tel -->
    <label for="tel">Telephone:</label>
    <input type="tel" id="tel" name="tel">

    <!-- Number -->
    <label for="number">Number:</label>
    <input type="number" id="number" name="number" min="0" max="100">

    <!-- Date -->
    <label for="date">Date:</label>
    <input type="date" id="date" name="date">

    <!-- Time -->
    <label for="time">Time:</label>
    <input type="time" id="time" name="time">

    <!-- Color -->
    <label for="color">Color:</label>
    <input type="color" id="color" name="color">

    <!-- Range -->
    <label for="range">Range:</label>
    <input type="range" id="range" name="range" min="1" max="10">

    <!-- Search -->
    <label for="search">Search:</label>
    <input type="search" id="search" name="search">

    <!-- File -->
    <label for="file">File Upload:</label>
    <input type="file" id="file" name="file">

    <!-- Checkbox -->
    <fieldset>
      <legend>Checkboxes:</legend>
      <label><input type="checkbox" name="interest" value="music"> Music</label>
      <label><input type="checkbox" name="interest" value="sports"> Sports</label>
      <label><input type="checkbox" name="interest" value="reading"> Reading</label>
    </fieldset>

    <!-- Radio Buttons -->
    <fieldset>
      <legend>Radio Buttons:</legend>
      <label><input type="radio" name="gender" value="male"> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
      <label><input type="radio" name="gender" value="other"> Other</label>
    </fieldset>

    <!-- Select Dropdown -->
    <label for="select">Select:</label>
    <select id="select" name="select">
      <option value="">--Please choose--</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>

    <!-- Multiple Select -->
    <label for="multi">Multiple Select:</label>
    <select id="multi" name="multi" multiple>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>

    <!-- Textarea -->
    <label for="textarea">Textarea:</label>
    <textarea id="textarea" name="textarea" rows="4" placeholder="Type something..."></textarea>

    <!-- Hidden Input -->
    <input type="hidden" name="hiddenField" value="hiddenValue">

    <!-- Buttons -->
    <label>Buttons:</label>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
    <button type="button" onclick="alert('Button clicked!')">Click Me</button>

    </form>
    \`;
    return form({
      ...context,
      form: \`\${formElements}\`
    });
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,T as default};
