import { getAllPosts, getLibraryBooks } from './getMarkdown';

const getCategoriesList = () => {
  const allPosts = getAllPosts();
  const allLibraryBooks = getLibraryBooks();
  const postsAndBooks = [...allPosts, ...allLibraryBooks];
  const categoriesList = postsAndBooks.map((post) => post.meta.category);
  const uniqueCategories = categoriesList.filter(
    (value, index, array) => array.indexOf(value) === index
  );
  return uniqueCategories;
};

export default getCategoriesList;
