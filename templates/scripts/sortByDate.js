export const sortByDate = (previous, next) => {
  return new Date(next.meta.dateEdited) - new Date(previous.meta.dateEdited);
};
