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
This is helpful for excluding sub components like accordion items, carousel slides etc. You may also force a story to be
re-created by adding an entry to the `FORCE_RECREATE_STORIES` array

## Function Includes
The [twig.js](https://github.com/twigjs/twig.js) library doesn't port over the function include syntax. There is custom function registed in the twig vite plugin to
shim this syntax. **Due to how this function works, the component source code must be publically available**

## Specifying SDC Dependencies
Some SDCs may include others or indirectly use another one. To mark a dependency, add the `needs` key to the `component.yml`.
See accordion, glide, and section-intro as examples. This key is used by the `propel` drush command to make sure dependencies are also downloaded.

## Contribution Guidelines
If you want to add your SDC, follow these rules:
1. Must use tailwind V4
2. CSS files must follow `[name].pcss.css` naming
3. JS files must follow `[name].es6.js` naming
4. Do not use embed and blocks.
5. Add a `[name].stories.js` file.

## JS Libraries.
- [Accordion JS](https://github.com/michu2k/Accordion)
- [Micromodal](https://www.npmjs.com/package/micromodal)
- [Glide JS](https://glidejs.com)
- [tocbot](https://github.com/tscanlin/tocbot)

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