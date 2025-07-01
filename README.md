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
re-created by adding an entry to the `FORCE_RECREATE_STORIES` array.

## Prettier
```
npm run prettier
```

## Function Includes

The [twig.js](https://github.com/twigjs/twig.js) library doesn't port over the function include syntax. There is custom function registed in the twig vite plugin to
shim this syntax. **Due to how this function works, the component source code must be publically available**

## Specifying SDC Dependencies

Some SDCs may include others or indirectly use another one. To mark a dependency, add the `needs` key to the `component.yml`.
See accordion, glide, and section-intro as examples. This key is used by the `propel` drush command to make sure dependencies are also downloaded.

## JS Libraries.

- [Accordion JS](https://github.com/michu2k/Accordion)
- [Micromodal](https://www.npmjs.com/package/micromodal)
- [Glide JS](https://glidejs.com)
- [tocbot](https://github.com/tscanlin/tocbot)
