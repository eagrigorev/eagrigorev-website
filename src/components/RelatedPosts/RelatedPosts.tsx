/* Global */
import React from 'react';

/* Components */
import PostCard from '@/components/PostCard/PostCard';

/* Style */
import styles from './RelatedPosts.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  relatedPosts: Markdown[];
};

const RelatedPosts: React.FunctionComponent<Props> = ({ relatedPosts }) => {
  return (
    <div className={styles['wrapper']}>
      <div className="grid">
        <h4 className={`spectral-heading--h4-related ${styles['title']}`}>
          Related Posts
        </h4>
      </div>
      <div className={`grid ${styles['posts']}`}>
        {relatedPosts.map(
          (post: Markdown, index: number): React.JSX.Element => (
            <div className={styles['post']} key={index}>
              <PostCard layout="medium" postMeta={post.meta} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RelatedPosts;
