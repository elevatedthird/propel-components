# Propel Components
This project contains a repo of SDCs for building sites.

## Local development
```
nvm use
npm install
npm start
```

## Auto Generating Stories
```
npm run stories
```
You can exclude SDCs from generating a story file by adding the SDC name to the `EXCLUDED_STORIES` array in `generate-stories.js`.
This is helpful for excluding sub components like accordion items, carousel slides etc.

## Function Includes
The [twig.js](https://github.com/twigjs/twig.js) library does not port over the function include syntax. If you are including a twig template within another,
add your SDC to the `templateManifest` object in the `registerIncludeFunction` function in `vite.config.js`

## Contribution Guidelines
If you want to add your SDC, follow these rules:
1. Must use tailwind V4
2. CSS files must follow `[name].pcss.css` naming
  - If you are adding CSS, you must create a es6.js file and import your file into it.
  - See the  `accordion-item` SDC for an example
3. JS files must follow `[name].es6.js` naming
4. Do not use embed and blocks.
5. Add a `[name].stories.js` file.

## JS Libraries.
- Accordion JS
- Glide JS

## Icons.
Icons use the new  `mask-image` rule. This provides greater flexilibity for changing icon colors dynamically.
### Example

Add an icon before:
```
<!-- Adds a red arrow that's medium sized before th text "Button" -->
<button class="flex before:bg-red before:icon-arrow-next/md"> Button </button>
```

Add an icon after:
```
<!-- Adds a red arrow that's medium sized after the text "Button" -->
<button class="flex after:bg-red after:icon-arrow-next/md"> Button </button>
```

To add a new icon, add a theme variable with a base 64 encoded string. Consider using [SVG Repo](https://svgrepo.com) and a tool like [SVG Viewer](https://www.svgviewer.dev/svg-to-data-uri) to convert the svg.
```
/* index.css */
@theme {
  ...
  --icon-[ICON_NAME]: url('data:image/svg+xml;base64,...');
  ...
}
```