'use client';

/* Global */
import React, { useState } from 'react';

/* Components */
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import PostCardMedium from '@/components/PostCardMedium/PostCardMedium';

/* Style */
import styles from './DynamicPostsGrid.module.scss';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  posts: Markdown[];
};

const DynamicPostsGrid: React.FunctionComponent<Props> = ({ posts }) => {
  const [postsAmountToShow, setPostsAmmountToShow] = useState<number>(6);
  const [isClickedOnce, setIsClickedOnce] = useState<boolean>(false);
  let displayedPosts = posts.slice(0, postsAmountToShow);
  const loadMorePostsHandler = (): void => {
    setPostsAmmountToShow(postsAmountToShow + 3);
    setIsClickedOnce(true);
  };
  const isButtonVisible = postsAmountToShow < posts.length;
  return (
    <>
      <div className="grid">
        {displayedPosts.map(
          (post: Markdown, index: number): React.JSX.Element => (
            <PostCardMedium postMeta={post.meta} key={index} />
          )
        )}
      </div>
      <div className={styles['button']}>
        {isButtonVisible ? (
          <LoadMoreButton clickHandler={loadMorePostsHandler} />
        ) : isClickedOnce ? (
          <p className="paragraph">All posts were loaded.</p>
        ) : null}
      </div>
    </>
  );
};

export default DynamicPostsGrid;
