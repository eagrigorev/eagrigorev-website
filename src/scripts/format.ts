export const formatDate = (notFormattedDate: string): string => {
  return notFormattedDate.substring(0, 3);
};

export const formatSlug = (notFormattedSlug: string): string => {
  return notFormattedSlug.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};
