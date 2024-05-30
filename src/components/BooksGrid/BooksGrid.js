import GridGenerator from '../GridGenerator/GridGenerator';

const BooksGrid = ({ content, postsToShow, postsToLoad }) => {
  return (
    <section>
      <GridGenerator
        type="books"
        content={content}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </section>
  );
};

export default BooksGrid;
