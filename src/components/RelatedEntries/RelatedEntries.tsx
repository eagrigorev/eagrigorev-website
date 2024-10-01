/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import styles from './RelatedEntries.module.scss';
import { Post } from '@/types/post';
import { calculatePostsToShowAndLoad } from '@/scripts/utils';

type Props = {
  posts: Post[];
};

const RelatedEntries: React.FunctionComponent<Props> = ({ posts }) => {
  const postsAmount = calculatePostsToShowAndLoad(posts);
  return (
    <section className={styles['wrapper']}>
      <div className="container">
        <h2 className="paragraph--bolder">Related Entries:</h2>
        <div>
          <GridGenerator
            posts={posts}
            postsToShow={postsAmount.toShowInRelated}
            postsToLoad={postsAmount.toLoadInRelated}
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedEntries;
