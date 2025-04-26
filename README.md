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
2. CSS files must follow [name].module.css naming
3. JS files must follow [name].es6.js naming
4. Do not use embed and blocks.
5. Add a [name].stories.js file.

## JS Libraries.
- Accordion JS
- Glide JS