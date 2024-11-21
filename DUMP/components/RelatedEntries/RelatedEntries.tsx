/* Namespaces */
import React from 'react';

/* Components */
import GridGenerator from '../GridGenerator/GridGenerator';

/* Utils */
import styles from './RelatedEntries.module.scss';
import { Post } from '../../types/post';
import { calculatePostsToShowAndLoad } from '@/scripts/utils';
import { PostsAmount } from '../../types/postsAmount';

type Props = {
  posts: Post[];
};

const RelatedEntries: React.FunctionComponent<Props> = ({ posts }) => {
  const postsAmount: PostsAmount = calculatePostsToShowAndLoad(posts);
  return (
    <section className={styles['wrapper']}>
      <div className="container">
        <h2 className="paragraph--bolder">Related Entries:</h2>
        <div>
          <GridGenerator
            posts={posts}
            postsToShow={postsAmount.related.toShow}
            postsToLoad={postsAmount.related.toLoad}
          />
        </div>
      </div>
    </section>
  );
};

export default RelatedEntries;
