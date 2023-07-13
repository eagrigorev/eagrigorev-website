import { Post } from './interfaces';

export const sortPostsDesc = (posts: Post[]): Post[] => {
  return posts.sort((prevPost, nextPost) => {
    if (prevPost.meta.date < nextPost.meta.date) {
      return -1;
    } else {
      return 1;
    }
  });
};
