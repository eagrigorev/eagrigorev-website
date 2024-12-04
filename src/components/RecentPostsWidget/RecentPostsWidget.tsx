/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Style */
import styles from './RecentPostsWidget.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

const RecentPostsWidget: React.FunctionComponent<{}> = () => {
  const allPosts = getAllPosts()
    .filter((post: Markdown) => post.meta.category !== 'Library')
    .slice(0, 3);
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['heading']}`}>Recent Posts</h4>
      <ul className={`paragraph--light-s ${styles['items']}`}>
        {allPosts.map(
          (post: Markdown, index: number): React.JSX.Element => (
            <li key={index}>
              <span>{post.meta.dateEdited} </span>
              <a href={post.meta.slug}>{post.meta.title} </a>
              <span>in </span>
              <a href={post.meta.category}>{post.meta.category}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default RecentPostsWidget;
