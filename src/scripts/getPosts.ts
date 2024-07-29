/* Utils */
import { getAllPosts } from '@/scripts/getMarkdown';
import { sortPostsDesc } from './utils';
import { Post, PostType, PostCategory } from '@/types/post';

export const getSortedPosts = (
  postType: PostType,
  category: PostCategory | 'all',
  postToExclude = ''
): Post[] => {
  const allPosts: Post[] = getAllPosts();
  let sortedPosts: Post[] = [];
  if (category === 'all') {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return post.meta.type === postType;
      })
    );
  } else {
    sortedPosts = sortPostsDesc(
      allPosts.filter((post: Post) => {
        return (
          post.meta.type === postType &&
          post.meta.category === category &&
          post.meta.title !== postToExclude
        );
      })
    );
  }
  return sortedPosts;
};
