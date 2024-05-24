import styles from './RelatedEntries.module.scss';
import GridGenerator from '../GridGenerator/GridGenerator';

const RelatedEntries = ({ content }) => {
  return (
    <section className={styles['wrapper']}>
      <div className="container">
        <h2 className="paragraph--bolder">Related Entries:</h2>
        <div>
          <GridGenerator
            type={'projects'}
            content={content}
            postsToShow={3}
            postsToLoad={3}
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedEntries;
