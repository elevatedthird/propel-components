import { resolve } from 'node:path';
import fg from 'fast-glob';
import fs from 'fs';

/**
 * Creates a map of twig template names and their absolute paths.
 */
const createSDCManifest = () => {
  // When running in production, the baseURL is the GitHub repo.
  const baseURL = process.env.NODE_ENV === 'production' ? 'https://raw.githubusercontent.com/elevatedthird/propel-components/refs/heads/main' : '.';
  const manifest = {};
  const matches = fg.sync('./components/**/*.twig', { nodir: true });
  matches.forEach((file) => {
    const templatePath = resolve(file);
    if (fs.statSync(file).isFile()) {
      const name = file.split('/');
      // Assumes that SDCS are structured like components/categpry/name/name.twig
      const path = name.slice(-4).join('/');
      manifest[`kinetic:${name[name.length - 2]}`] = {
        id: templatePath,
        href: `${baseURL}/${path}`,
      };
    }
  });
  return JSON.stringify(manifest);
};

export default createSDCManifest;