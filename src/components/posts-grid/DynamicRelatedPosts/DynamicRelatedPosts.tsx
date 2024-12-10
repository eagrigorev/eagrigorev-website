/* Global */
import React from 'react';

/* Components */
import PostCardMedium from '@/components/post-cards/PostCardMedium/PostCardMedium';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './DynamicRelatedPosts.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  category: string;
};

const DynamicRelatedPosts: React.FunctionComponent<Props> = ({ category }) => {
  const posts: Markdown[] = getAllPosts().filter(
    (post: Markdown) => post.meta.category === category
  );
  return (
    <div className={styles['wrapper']}>
      <div className="grid">
        <h4 className={`heading--h4 ${styles['title']}`}>Related Posts:</h4>
      </div>
      <div className={`grid ${styles['posts']}`}>
        {posts.slice(0, 2).map(
          (post: Markdown, index: number): React.JSX.Element => (
            <div className={styles['post']} key={index}>
              <PostCardMedium postMeta={post.meta} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DynamicRelatedPosts;
