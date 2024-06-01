export const generateCardOptions = (cardType, postMeta) => {
  const cardOptions = {
    href: '',
    imageSrc: '',
    imageAlt: '',
    imageWidth: 0,
    imageHeight: 0,
    title: '',
    description: '',
  };
  if (cardType === 'project') {
    cardOptions.href = postMeta.slug;
    cardOptions.imageSrc = `/images/featured/${postMeta.featuredImage}`;
    cardOptions.imageAlt = postMeta.title;
    cardOptions.imageWidth = 440;
    cardOptions.imageHeight = 330;
    cardOptions.title = postMeta.title;
  }
  if (cardType === 'book') {
    cardOptions.href = postMeta.url;
    cardOptions.imageSrc = `/images/books/${postMeta.image}`;
    cardOptions.imageAlt = `${postMeta.title} by ${postMeta.author}`;
    cardOptions.imageWidth = 250;
    cardOptions.imageHeight = 375;
    cardOptions.title = postMeta.author;
    cardOptions.description = postMeta.title;
  }
  if (cardType === 'booklist') {
    cardOptions.href = `/years-of-reading/${postMeta.slug}`;
    cardOptions.imageSrc = `/images/books/years-of-reading/${postMeta.featuredImage}`;
    cardOptions.imageAlt = postMeta.title;
    cardOptions.imageWidth = 250;
    cardOptions.imageHeight = 375;
    cardOptions.title = postMeta.title;
  }
  return cardOptions;
};
