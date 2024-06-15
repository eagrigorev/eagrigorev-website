export const normalize = (category) => {
  return category.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};
