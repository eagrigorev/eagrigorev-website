import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getStaticPaths = async (contentType) => {
  const fetchedFiles = fs.readdirSync(path.join(path));
  const paths = fetchedFiles.map((file) => {
    return {
      params: {
        slug: file.replace('.mdx', ''),
      },
    };
  });
};
