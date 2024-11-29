/* Global */
import React from 'react';

/* Components */
import DynamicPostsGrid from '@/components/DynamicPostsGrid/DynamicPostsGrid';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './PostsGrid.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

const PostsGrid: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts()
    .filter((post: Markdown) => post.meta.category !== 'Library')
    .slice(1);
  return (
    <section className={styles['wrapper']}>
      <DynamicPostsGrid posts={posts} />
    </section>
  );
};

export default PostsGrid;
