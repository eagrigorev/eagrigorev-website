/* Namespaces */
import fs from 'fs';

export const categoriesList: string[] = fs.readdirSync('src/markdown/posts');
