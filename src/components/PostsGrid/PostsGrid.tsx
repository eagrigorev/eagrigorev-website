'use client';

/* Global */
import React, { useState } from 'react';

/* Components */
import PostCard from '@/components/PostCard/PostCard';

/* Style */
import styles from './PostsGrid.module.scss';
import { Meta } from '@/utils/types/markdown';

type Props = {
  postsMeta?: Meta[];
  layout: 'small' | 'medium';
};

const PostsGrid: React.FunctionComponent<Props> = ({ postsMeta, layout }) => {
  const [postsAmountToShow, setPostsAmmountToShow] = useState<number>(12);
  const [isClickedOnce, setIsClickedOnce] = useState<boolean>(false);
  let displayedPosts = postsMeta.slice(0, postsAmountToShow);
  const loadMorePostsHandler = (): void => {
    setPostsAmmountToShow(postsAmountToShow + 6);
    setIsClickedOnce(true);
  };
  const isButtonVisible = postsAmountToShow < postsMeta.length;
  return (
    <div className={styles['wrapper']}>
      <div className="grid">
        {displayedPosts.map(
          (post: Meta, index: number): React.JSX.Element => (
            <div className={styles[`post-${layout}`]} key={index}>
              <PostCard layout={layout} postMeta={post} />
            </div>
          )
        )}
      </div>
      {isButtonVisible ? (
        <div className={styles['button-wrapper']}>
          <button
            className={`jost-uppercase--xs-btn link-image ${styles['button']}`}
            onClick={loadMorePostsHandler}
          >
            load more
          </button>
        </div>
      ) : isClickedOnce ? (
        <div className={styles['button-wrapper']}>
          <p className="jost-light--s">All posts were loaded.</p>
        </div>
      ) : null}
    </div>
  );
};

export default PostsGrid;
