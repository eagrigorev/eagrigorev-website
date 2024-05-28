import { getAllPosts } from '@/scripts/getMarkdown';
import { sortPostsDesc } from '@/utils/sort';

export const getSortedPosts = (type, category, postToExclude = '') => {
  const allPosts = getAllPosts();
  let sortedPosts = [];
  if (category === 'all') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post) => {
        return post.meta.postType === type;
      })
    );
  } else {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post) => {
        return (
          post.meta.postType === type &&
          post.meta.category === category &&
          post.meta.title !== postToExclude
        );
      })
    );
  }
  return sortedPosts;
};
