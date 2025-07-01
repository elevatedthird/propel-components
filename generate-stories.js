import fs from "fs/promises";
import path from "path";
import YAML from "yaml";

const __dirname = path.resolve();
const COMPONENTS_DIR = path.join(__dirname, "components");
// List of components to exclude from story generation.
const EXCLUDED_STORIES = [
  "section",
  "section-region",
  "accordion-item",
  "glide-slide",
  "glide-arrows",
  "glide-bullets",
  "marquee",
  "glide",
  "tabs-item",
  "tabs-nav-item",
  "dialog",
];

// Force a story file to be created, even if it already exists.
// This can be helpful when developing new components.
const FORCE_RECREATE_STORIES = [];

/**
 * Template for the story file.
 */
const STORY_TEMPLATE = (category, name, importName, description, argTypes) => {
  const { slots, props } = argTypes;
  // Format the args.
  const args = {};
  for (const [key, value] of Object.entries(props)) {
    switch (value.control.type) {
      case "text":
        args[key] = value.table.defaultValue
          ? value.table.defaultValue.summary
          : "";
        break;
      case "number":
        args[key] = value.table.defaultValue
          ? value.table.defaultValue.summary
          : 0;
        break;
      case "boolean":
        args[key] = value.table.defaultValue
          ? value.table.defaultValue.summary
          : false;
        break;
      case "array":
      case "object":
        args[key] = {};
        break;
      case "select":
        args[key] = value.options[0];
        break;
      default:
        throw new Error(`Unknown control type: ${value.control}`);
    }
  }

  const makeSlots = () => {
    const slotArgs = [];
    for (const slot of Object.keys(slots)) {
      slotArgs.push(`${slot}: () => '<!-- ${slot} slot content -->'`);
    }
    return slotArgs.length > 0 ? `${slotArgs.join(",\n\t")}` : "";
  };

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
  argTypes: ${JSON.stringify(props, null, 2).replace(/"([^"]+)":/g, "$1:")},
};

export const Default = {
  args: ${JSON.stringify(args, null, 4).replace(/"([^"]+)":/g, "$1:")},
  render: (args) => {
    return ${importName}({
      ...args,
      ${makeSlots()}
    });
  },
};`;
};

/**
 * Convert a component.yml file to argTypes for the story file.
 * @param {*} component metdatata from component.yml
 * @returns {}
 */
function convertComponentYamlToArgTypes(metadata) {
  if (!("props" in metadata)) {
    throw new Error("component props is undefined");
  }
  const argTypes = {};
  const slots = {};
  if ("properties" in metadata.props) {
    for (const [key, value] of Object.entries(metadata.props.properties)) {
      argTypes[key] = {
        control: {},
        type: {
          required: false,
          name: "",
        },
        description: value?.description,
        table: {},
      };
      // Check for default value.
      if (value?.default) {
        argTypes[key].table.defaultValue = { summary: value.default };
      }
      // Check if required.
      if ("required" in metadata) {
        argTypes[key].type.required = metadata.required.includes(key);
      }
      // Set the controls based on the type.
      switch (value.type) {
        case "string":
          argTypes[key].control = { type: "text" };
          argTypes[key].table.type = { summary: "text" };
          break;
        case "boolean":
          argTypes[key].control = { type: "boolean" };
          argTypes[key].table.type = { summary: "boolean" };
          break;
        case "integer":
          argTypes[key].control = { type: "number" };
          argTypes[key].table.type = { summary: "number" };
          break;
        case "array":
        case "object":
          argTypes[key].control = { type: "object" };
          argTypes[key].table.type = { summary: value.type };
          break;
        default:
          throw new Error(`Unknown type: ${value.type}`);
      }
      // Check if enum is present.
      if (value.enum) {
        argTypes[key].control = { type: "select" };
        argTypes[key].options = value.enum;
      }
    }
  }
  // Check for slots.
  if ("slots" in metadata) {
    for (const [key, value] of Object.entries(metadata.slots)) {
      slots[key] = value.title;
    }
  }

  return {
    props: argTypes,
    slots: slots,
  };
}

async function walkDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walkDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith("component.yml")) {
      const parts = fullPath.split("/");
      const componentName = parts[parts.length - 2];
      // Ignore excluded stories.
      if (EXCLUDED_STORIES.includes(componentName)) {
        console.log(
          `Skipping ${componentName} because it is in the excluded list.`,
        );
        continue;
      }
      const componentCategory = parts[parts.length - 3];
      const storyFile = path.join(
        path.dirname(fullPath),
        `${componentName}.stories.js`,
      );
      try {
        // Force a story file to be created if it already exists.
        if (FORCE_RECREATE_STORIES.includes(componentName)) {
          throw new Error("Recreate story file: ", componentName);
        }
        await fs.access(storyFile);
        // console.log(`${storyFile} already exists, skipping.`);
      } catch {
        // Attempt to read the component.yml file.
        console.log(`Creating story for ${componentName}`);
        const componentYml = await fs.readFile(fullPath, "utf8");
        const componentData = YAML.parse(componentYml);
        const argTypes = convertComponentYamlToArgTypes(componentData);
        const importName = componentName.replace(/-/g, "_");
        const content = STORY_TEMPLATE(
          componentCategory,
          componentName,
          importName,
          componentData.description,
          argTypes,
        );
        // console.log(content);
        await fs.writeFile(storyFile, content, "utf8");
      }
    }
  }
}

walkDirectory(COMPONENTS_DIR)
  .then(() => console.log("✅ All done!"))
  .catch((err) => console.error("❌ Error:", err));
