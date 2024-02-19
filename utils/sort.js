export const sortPostsDesc = (posts) => {
  return posts.sort((prev, next) => {
    if (new Date(prev.meta.date) < new Date(next.meta.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};
