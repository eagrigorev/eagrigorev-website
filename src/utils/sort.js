export const sortPostsDesc = (posts) => {
  return posts.sort((prev, next) => {
    if (new Date(prev.meta.dateEdited) < new Date(next.meta.dateEdited)) {
      return 1;
    } else {
      return -1;
    }
  });
};
