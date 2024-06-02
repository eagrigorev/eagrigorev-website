import styles from './RelatedEntries.module.scss';
import GridGenerator from '../GridGenerator/GridGenerator';

const RelatedEntries = ({ postType, posts, postsToShow, postsToLoad }) => {
  return (
    <section className={styles['wrapper']}>
      <div className="container">
        <h2 className="paragraph--bolder">Related Entries:</h2>
        <div>
          <GridGenerator
            postType={postType}
            posts={posts}
            postsToShow={postsToShow}
            postsToLoad={postsToLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedEntries;
