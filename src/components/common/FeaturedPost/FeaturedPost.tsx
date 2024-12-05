/* Global */
import React from 'react';

/* Components */
import PostCardBig from '@/components/post-cards/PostCardBig/PostCardBig';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './FeaturedPost.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

const FeaturedPost: React.FunctionComponent<{}> = () => {
  const post = getAllPosts().filter(
    (post: Markdown) => post.meta.category !== 'Library'
  )[0];
  return (
    <section className={styles['wrapper']}>
      <PostCardBig postMeta={post.meta} />
    </section>
  );
};

export default FeaturedPost;
