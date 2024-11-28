/* Global */
import React from 'react';

/* Components */
import PostCardMedium from '@/components/PostCardMedium/PostCardMedium';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './DynamicPostsGrid.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

const DynamicPostsGrid: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts()
    .filter((post: Markdown) => post.meta.category !== 'Library')
    .slice(1);
  return (
    <section className={`grid ${styles['wrapper']}`}>
      {posts.map(
        (post: Markdown, index: number): React.JSX.Element => (
          <PostCardMedium postMeta={post.meta} key={index} />
        )
      )}
    </section>
  );
};

export default DynamicPostsGrid;
