'use client';

import styles from './GridGenerator.module.scss';
import { useState } from 'react';
import PostCard from '../PostCard/PostCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const GridGenerator = ({ postType, posts, postsToShow, postsToLoad }) => {
  const [amountToShow, setAmountToShow] = useState(postsToShow);
  const [clickedOnce, setClickedOnce] = useState(false);
  let displayedContent = posts.slice(0, amountToShow);
  const loadMore = () => {
    setAmountToShow(amountToShow + postsToLoad);
    setClickedOnce(true);
  };
  const showButton = amountToShow < posts.length;
  return (
    <>
      <div className={`${styles['wrapper']} grid`}>
        {displayedContent.map((item, index) => (
          <PostCard cardType={postType} postMeta={item.meta} key={index} />
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
