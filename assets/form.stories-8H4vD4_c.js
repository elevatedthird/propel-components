import{t as f,D as y,T as a,a as h}from"./twig--J2y2TUI.js";import"./_commonjsHelpers-D6-XlEtG.js";const x=e=>{e.extendFunction("include",(t,n)=>{const r=window.SDC_MANIFEST[t];if(!r)throw new Error(`Template ${t} not found`);const{id:i,href:c}=r;try{const o=e.twig({ref:i});if(o)return o.render(n);throw new Error(`Template ${t} not found`)}catch{const p=e.twig({id:i,href:c,async:!1});if(p)return p.render(n);throw new Error(`Template ${t} not found`)}})};x(a);const g=e=>e.extendFilter("clean_unique_id",t=>t);g(a);h(a);a.cache(!1);const s=e=>e,b=(e={})=>{const t=f.twig({id:"/home/runner/work/propel-components/propel-components/components/00-elements/form/form.twig",data:[{type:"raw",value:`

<form`,position:{start:150,end:157}},{type:"output",position:{start:157,end:198},stack:[{type:"Twig.expression.type.variable",value:"attributes",match:["attributes"],position:{start:157,end:198}},{type:"Twig.expression.type.key.period",position:{start:157,end:198},key:"addClass"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],position:{start:157,end:198},expression:!0,params:[{type:"Twig.expression.type.string",value:"kinetic-form",position:{start:157,end:198}}]}]},{type:"raw",value:`>
  `,position:{start:198,end:202}},{type:"output",position:{start:202,end:212},stack:[{type:"Twig.expression.type.variable",value:"form",match:["form"],position:{start:202,end:212}}]},{type:"raw",value:`
</form>
`,position:{start:212,end:212}}],precompiled:!0});t.options.allowInlineIncludes=!0;try{let n=e.defaultAttributes?e.defaultAttributes:[];return Array.isArray(n)||(n=Object.entries(n)),s(t.render({attributes:new y(n),...e}))}catch(n){return s("An error occurred whilst rendering /home/runner/work/propel-components/propel-components/components/00-elements/form/form.twig: "+n.toString())}},T={title:"00-elements/form",tags:["autodocs"],parameters:{docs:{description:{component:"A Form."},source:{code:"drush propel:add form"}}},argTypes:{},component:b},l={args:{},render:e=>b({...e,form:`
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
    `})};var u,m,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const k=["Default"];export{l as Default,k as __namedExportsOrder,T as default};
