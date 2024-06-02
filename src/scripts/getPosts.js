import { getAllPosts } from '@/scripts/getMarkdown';
import { sortPostsDesc } from '@/utils/sort';

export const getSortedPosts = (postType, category, postToExclude = '') => {
  const allPosts = getAllPosts();
  let sortedPosts = [];
  if (category === 'all') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post) => {
        return post.meta.postType === postType;
      })
    );
  } else {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post) => {
        return (
          post.meta.postType === postType &&
          post.meta.category === category &&
          post.meta.title !== postToExclude
        );
      })
    );
  }
  return sortedPosts;
};
