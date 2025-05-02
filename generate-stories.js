import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

const __dirname = path.resolve();
const COMPONENTS_DIR = path.join(__dirname, 'components');
// List of components to exclude from story generation.
const EXCLUDED_STORIES = [
  'section',
  'section-region',
  'accordion-item',
  'glide-slide',
  'carousel'
];

// Force a story file to be created, even if it already exists.
// This can be helpful when developing new components.
const FORCE_RECREATE_STORIES = [
  'title'
];

/**
 * Template for the story file.
 */
const STORY_TEMPLATE = (category, name, importName, description, argTypes) => {
  const props = JSON.stringify(argTypes);
  // Format the args.
  const args = {};
  for (const [key, value] of Object.entries(argTypes)) {
    switch (value.control.type) {
      case 'text':
        args[key] = value.table.defaultValue ? value.table.defaultValue.summary : '';
        break;
      case 'number':
        args[key] = value.table.defaultValue ? value.table.defaultValue.summary : 0;
        break;
      case 'boolean':
        args[key] = value.table.defaultValue ? value.table.defaultValue.summary : false;
        break;
      case 'array':
      case 'object':
        args[key] = {};
        break;
      case 'select':
        args[key] = value.options[0];
        break;
      default:
        throw new Error(`Unknown control type: ${value.control}`);
    }
  }

  return `
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
  argTypes: ${props},
  component: ${importName},
};

export const Default = {
  args: ${JSON.stringify(args, null, 4).replace(/"([^"]+)":/g, '$1:')},
};`
};

/**
 * Convert a component.yml file to argTypes for the story file.
 * @param {*} component metdatata from component.yml 
 * @returns {}
 */
function convertComponentYamlToArgTypes(metadata) {
  if (!('props' in metadata)) {
    throw new Error('component props is undefined');
  }
  const argTypes = {};
  if ('properties' in metadata.props) {
    for (const [key, value] of Object.entries(metadata.props.properties)) {
      argTypes[key] = {
        control: {},
        type: {
          required: false,
          name: '',
        },
        description: value?.description,
        table: {}
      };
      // Check for default value.
      if (value?.default) {
        argTypes[key].table.defaultValue = { summary: value.default };
      }
      // Check if required.
      if ('required' in metadata) {
        argTypes[key].type.required = metadata.required.includes(key);
      }
      // Set the controls based on the type.
      switch (value.type) {
        case 'string':
          argTypes[key].control = { type: 'text' };
          argTypes[key].table.type = { summary: 'text' };
          break;
        case 'boolean':
          argTypes[key].control = { type: 'boolean' };
          argTypes[key].table.type = { summary: 'boolean' };
          break;
        case 'integer':
          argTypes[key].control = { type: 'number' };
          argTypes[key].table.type = { summary: 'number' };
          break;
        case 'array':
        case 'object':
          argTypes[key].control = { type: 'object' };
          argTypes[key].table.type = { summary: value.type };
          break;
        default:
          throw new Error(`Unknown type: ${value.type}`);
      }
      // Check if enum is present.
      if (value.enum) {
        argTypes[key].control = { type: 'select' };
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
      // Ignore excluded stories.
      if (EXCLUDED_STORIES.includes(componentName)) {
        console.log(`Skipping ${componentName} because it is in the excluded list.`);
        continue;
      }
      const componentCategory = parts[parts.length - 3];
      const storyFile = path.join(path.dirname(fullPath), `${componentName}.stories.js`);
      try {
        // Force a story file to be created if it already exists.
        if (FORCE_RECREATE_STORIES.includes(componentName)) {
          throw new Error('Recreate story file: ', componentName);
        }
        await fs.access(storyFile);
        // console.log(`${storyFile} already exists, skipping.`);
      } catch {
        // Attempt to read the component.yml file.
        const componentYml = await fs.readFile(fullPath, 'utf8');
        const componentData = YAML.parse(componentYml);
        const argTypes = convertComponentYamlToArgTypes(componentData);
        const importName = componentName.replace(/-/g, '_');
        const content = STORY_TEMPLATE(componentCategory, componentName, importName, componentData.description, argTypes);
        await fs.writeFile(storyFile, content, 'utf8');
        // console.log(componentData); process.exit(1);
        console.log(`Created: ${storyFile}`);
      }
    }
  }
}

walkDirectory(COMPONENTS_DIR)
  .then(() => console.log('✅ All done!'))
  .catch((err) => console.error('❌ Error:', err));
