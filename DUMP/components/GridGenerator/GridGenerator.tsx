'use client';

/* Namespaces */
import React, { useState } from 'react';

/* Components */
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import PostCard from '@/components/PostCard/PostCard';

/* Utils */
import styles from './GridGenerator.module.scss';
import { Post } from '../../types/post';

type Props = {
  posts: Post[];
  postsToShow: number;
  postsToLoad: number;
};

const GridGenerator: React.FunctionComponent<Props> = ({
  posts,
  postsToShow,
  postsToLoad,
}) => {
  const [amountToShow, setAmountToShow] = useState<number>(postsToShow);
  const [clickedOnce, setClickedOnce] = useState<boolean>(false);
  let displayedContent = posts.slice(0, amountToShow);
  const loadMore = (): void => {
    setAmountToShow(amountToShow + postsToLoad);
    setClickedOnce(true);
  };
  const showButton = amountToShow < posts.length;
  return (
    <>
      <div className={`${styles['wrapper']} grid`}>
        {displayedContent.map((item: Post, index: number) => (
          <PostCard postMeta={item.meta} key={index} />
        ))}
      </div>
      {showButton ? (
        <LoadMoreButton clickHandler={loadMore} buttonText="Load More" />
      ) : clickedOnce ? (
        <p className={`${styles['notification']} paragraph--regular`}>
          All posts were loaded.
        </p>
      ) : null}
    </>
  );
};

export default GridGenerator;
