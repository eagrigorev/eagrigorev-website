'use client';

/* Global */
import React, { useState } from 'react';

/* Components */
import PostCardMedium from '@/components/post-cards/PostCardMedium/PostCardMedium';

/* Style */
import styles from './PostsGrid.module.scss';
import { Markdown } from '@/utils/types/markdown';

type Props = {
  posts?: Markdown[];
};

const PostsGrid: React.FunctionComponent<Props> = ({ posts }) => {
  const [postsAmountToShow, setPostsAmmountToShow] = useState<number>(6);
  const [isClickedOnce, setIsClickedOnce] = useState<boolean>(false);
  let displayedPosts = posts.slice(0, postsAmountToShow);
  const loadMorePostsHandler = (): void => {
    setPostsAmmountToShow(postsAmountToShow + 3);
    setIsClickedOnce(true);
  };
  const isButtonVisible = postsAmountToShow < posts.length;
  return (
    <div className={styles['wrapper']}>
      <div className="grid">
        {displayedPosts.map(
          (post: Markdown, index: number): React.JSX.Element => (
            <div className={styles['post']} key={index}>
              <PostCardMedium postMeta={post.meta} />
            </div>
          )
        )}
      </div>
      {isButtonVisible ? (
        <div className={styles['button-wrapper']}>
          <button
            className={`jost-uppercase--xs-btn ${styles['button']}`}
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
