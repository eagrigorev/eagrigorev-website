import fs from 'fs';
import matter from 'gray-matter';

export const getPostsFromSingleCategory = (category) => {
  return fs.readdirSync(`public/posts/${category}`).map((file) => {
    const post = fs.readFileSync(`public/posts/${category}/${file}`, 'utf-8');
    const { data, content } = matter(post);
    return {
      meta: {
        title: data.title,
        slug: data.slug,
        date: data.date,
        category: data.category,
      },
      content,
    };
  });
};

export const getPosts = () => {
  const music = getPostsFromSingleCategory('music');
  const allPosts = [...music];
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
