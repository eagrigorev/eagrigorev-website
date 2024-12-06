/* Global */
import React from 'react';

/* Components */
import PostCardBig from '@/components/post-cards/PostCardBig/PostCardBig';

/* Style */
import styles from './FeaturedPost.module.scss';
import { Markdown } from '@/utils/types/markdown';

type Props = {
  post: Markdown;
};

const FeaturedPost: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <section className={styles['wrapper']}>
      <PostCardBig postMeta={post.meta} />
    </section>
  );
};

export default FeaturedPost;
