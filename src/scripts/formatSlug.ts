const formatSlug = (notFormattedSlug: string): string => {
  return notFormattedSlug.toLowerCase().replace(/ /g, '-').replace('&', 'and');
};

export default formatSlug;
