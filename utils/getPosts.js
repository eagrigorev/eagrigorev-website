import fs from 'fs';
import matter from 'gray-matter';
import { normalize } from './normalize';

export const getPostsFromSingleCategory = (category) => {
  const normalizedCategory = normalize(category);
  return fs.readdirSync(`public/posts/${normalizedCategory}`).map((file) => {
    const post = fs.readFileSync(
      `public/posts/${normalizedCategory}/${file}`,
      'utf-8'
    );
    const { data, content } = matter(post);
    return {
      meta: {
        title: data.title,
        subtitle: data.subtitle,
        slug: data.slug,
        datePosted: data.datePosted,
        dateEdited: data.dateEdited,
        category: data.category,
        featuredImage: data.featuredImage,
      },
      content,
    };
  });
};

export const getPosts = () => {
  const musicAndTabs = getPostsFromSingleCategory('music-and-tabs');
  const allPosts = [...musicAndTabs];
  return allPosts;
};

export const getPostsSlugs = () => {
  const allPosts = getPosts();
  const slugs = allPosts.map((post) => ({
    slug: post.meta.slug,
  }));
  return slugs;
};

// export const getMarkdownSlugsFromCategoriesAllPaths = () => {
//   const markdownAllPaths = getPostsFromAllCategories();
//   const slugs = markdownAllPaths.map((markdown) => {
//     if (markdown.meta.category != undefined)
//       return { slug: markdown.meta.category.toLowerCase().replace(' ', '-') };
//   });
//   return slugs;
// };
