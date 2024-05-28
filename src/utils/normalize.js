export const normalize = (term) => {
  return term.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};
