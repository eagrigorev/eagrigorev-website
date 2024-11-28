/* Global */
import React from 'react';

/* Components */
import PostCardMedium from '@/components/PostCardMedium/PostCardMedium';

/* Style */
import styles from './DynamicPostsGrid.module.scss';

const DynamicPostsGrid: React.FunctionComponent<{}> = () => {
  return (
    <section className={`grid ${styles['wrapper']}`}>
      <PostCardMedium />
      <PostCardMedium />
      <PostCardMedium />
      <PostCardMedium />
      <PostCardMedium />
      <PostCardMedium />
    </section>
  );
};

export default DynamicPostsGrid;
