/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import styles from './RelatedEntries.module.scss';
import { Post } from '@/types/post';

type Props = {
  posts: Post[];
  postsToShow: number;
  postsToLoad: number;
};

const RelatedEntries: React.FunctionComponent<Props> = ({
  posts,
  postsToShow,
  postsToLoad,
}) => {
  return (
    <section className={styles['wrapper']}>
      <div className="container">
        <h2 className="paragraph--bolder">Related Entries:</h2>
        <div>
          <GridGenerator
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
