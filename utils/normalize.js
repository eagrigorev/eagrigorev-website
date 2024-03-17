export const normalize = (term) => {
  return term.toLowerCase().replace(' ', '-').replace('&', 'and');
};
