import { resolve } from 'node:path';
import fg from 'fast-glob';
import fs from 'fs';

/**
 * Creates a map of twig template names and their absolute paths.
 */
const createSDCManifest = () => {
  const manifest = {};
  const matches = fg.sync('./components/**/*.twig', { nodir: true });
  matches.forEach((file) => {
    if (fs.statSync(file).isFile()) {
      const name = file.split('/');
      manifest[`kinetic:${name[name.length - 2]}`] = resolve(file);
    }
  });
  return JSON.stringify(manifest);
};

export default createSDCManifest;