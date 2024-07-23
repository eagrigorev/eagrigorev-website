/* Utils */
import { getAllPosts } from '@/scripts/getMarkdown';
import { sortPostsDesc } from '@/scripts/sort';
import { Post, PostCardType, PostCategory } from '@/utils/types';

export const getSortedPosts = (
  postType: PostCardType,
  category: PostCategory,
  postToExclude = ''
): Post[] => {
  const allPosts: Post[] = getAllPosts();
  let sortedPosts: Post[] = [];
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
