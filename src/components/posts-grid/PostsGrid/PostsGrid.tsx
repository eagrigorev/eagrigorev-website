/* Global */
import React from 'react';

/* Components */
import DynamicPostsGrid from '@/components/posts-grid/DynamicPostsGrid/DynamicPostsGrid';

/* Style */
import styles from './PostsGrid.module.scss';
import { Markdown } from '@/utils/types/markdown';

type Props = {
  posts?: Markdown[];
};

const PostsGrid: React.FunctionComponent<Props> = ({ posts }) => {
  return (
    <section className={styles['wrapper']}>
      <DynamicPostsGrid posts={posts} />
    </section>
  );
};

export default PostsGrid;
