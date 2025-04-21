import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

const __dirname = path.resolve();
const COMPONENTS_DIR = path.join(__dirname, 'components');
/**
 * Template for the story file.
 */
const STORY_TEMPLATE = (category, name, importName, description, argTypes) => `
import ${importName} from './${name}.twig';

export default {
  title: '${category}/${name}',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '${description}',
      },
      source: {
        code: 'drush propel:add ${name}',
      }
    },
  },
  argTypes: ${JSON.stringify(argTypes)},
  component: ${importName},
};

export const Default = {
  args: { text: 'Click me' },
};`;

/**
 * Convert props in a component.yml file to argTypes for the story file.
 * @param {*} props 
 * @returns {}
 */
function convertComponentYamlToArgTypes(props) {
  if (props === undefined) {
    throw new Error('component props is undefined');
  }
  const argTypes = {};
  if ('properties' in props) {
    for (const [key, value] of Object.entries(props.properties)) {
      argTypes[key] = {
        description: value.description,
      };
      switch (value.type) {
        case 'string':
          argTypes[key].control = { type: 'text' };
          break;
        case 'boolean':
          argTypes[key].control = 'boolean';
          break;
        case 'integer':
          argTypes[key].control = { type: 'number' };
          break;
        case 'array':
        case 'object':
          argTypes[key].control = 'object';
          break;
        default:
          throw new Error(`Unknown type: ${value.type}`);
      }
      // Check if enum is present.
      if (value.enum) {
        argTypes[key].control = 'select';
        argTypes[key].options = value.enum;
      }
    }
  }

  return argTypes;
}


async function walkDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkDirectory(fullPath);
    }
    else if (entry.isFile() && entry.name.endsWith('component.yml')) {
      const parts = fullPath.split('/');
      const componentName = parts[parts.length - 2];
      const componentCategory = parts[parts.length - 3];
      const storyFile = path.join(path.dirname(fullPath), `${componentName}.stories.js`);
      // try {
      //   await fs.access(storyFile);
      //   console.log(`${storyFile} already exists, skipping.`);
      // } catch {
        // Attempt to read the component.yml file.
        const componentYml = await fs.readFile(fullPath, 'utf8');
        const componentData = YAML.parse(componentYml);
        // console.log(componentData);
        const { name, description, props } = componentData;
        const argTypes = convertComponentYamlToArgTypes(props);
        // process.exit(1);
        const importName = componentName.replace(/-/g, '_');
        const content = STORY_TEMPLATE(componentCategory, componentName, importName, description, argTypes);
        await fs.writeFile(storyFile, content, 'utf8');
        console.log(`Created: ${storyFile}`);
      // }
    }
  }
}

walkDirectory(COMPONENTS_DIR)
  .then(() => console.log('✅ All done!'))
  .catch((err) => console.error('❌ Error:', err));
