/* Utils */

import { Post } from '@/utils/types/markdown';

const sortPosts = (unsortedPosts: Post[]): Post[] => {
  return unsortedPosts.sort((prevPost: Post, nextPost: Post) => {
    if (
      new Date(prevPost.meta.dateEdited) < new Date(nextPost.meta.dateEdited)
    ) {
      return 1;
    } else {
      return -1;
    }
  });
};

export default sortPosts;
