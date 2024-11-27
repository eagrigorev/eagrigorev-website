/* Global */
import React from 'react';

/* Components */
import PostCardBig from '@/components/PostCardBig/PostCardBig';

/* Style */
import styles from './FeaturedPost.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

// type Props = {
//   postMeta: Meta;
// };

const FeaturedPost: React.FunctionComponent<{}> = () => {
  return (
    <section className={styles['wrapper']}>
      <PostCardBig />
    </section>
  );
};

export default FeaturedPost;
