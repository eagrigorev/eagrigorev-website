'use client';

/* Global */
import React, { useState } from 'react';
import styles from './PostsGrid.module.scss';

/* Components */
import LoadMoreButton from '@/components/post-grid/LoadMoreButton/LoadMoreButton';
import PostCardMedium from '@/components/post-card/PostCardMedium/PostCardMedium';
import PostCardSmall from '@/components/post-card/PostCardSmall/PostCardSmall';

/* Utils */
import { Post } from '@/utils/types/markdown';

type Props = {
  posts: Post[];
  showAmout: number;
  loadAmount: number;
};

const PostsGrid: React.FunctionComponent<Props> = ({
  posts,
  showAmout,
  loadAmount,
}) => {
  const [amountToShow, setAmountToShow] = useState<number>(showAmout);
  const [clickedOnce, setClickedOnce] = useState<boolean>(false);
  let postsToShow = posts.slice(0, amountToShow);
  const loadMore = (): void => {
    setAmountToShow(amountToShow + loadAmount);
    setClickedOnce(true);
  };
  const showButton = amountToShow < posts.length;
  return (
    <section className={styles['wrapper']}>
      <div className="grid">
        {postsToShow.map((item: Post, index: number) => (
          <PostCardMedium postMeta={item.meta} key={index} />
        ))}
      </div>
      {showButton ? (
        <LoadMoreButton clickHandler={loadMore} buttonText="Load More" />
      ) : clickedOnce ? (
        <p className={`${styles['notification']} paragraph--regular`}>
          All posts were loaded.
        </p>
      ) : null}
    </section>
  );
};

export default PostsGrid;
