import fs from 'fs';

export const categoriesList = fs.readdirSync('src/markdown/posts');
