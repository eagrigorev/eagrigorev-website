'use client';

import styles from './GridGenerator.module.scss';
import { useState } from 'react';
import PostCard from '../PostCard/PostCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const GridGenerator = ({ postType, posts, postsToShow, postsToLoad }) => {
  const [amountToShow, setAmountToShow] = useState(postsToShow);
  let displayedContent = posts.slice(0, amountToShow);
  const loadMore = () => {
    setAmountToShow(amountToShow + postsToLoad);
  };
  return (
    <>
      <div className={`${styles['wrapper']} grid`}>
        {displayedContent.map((item, index) => (
          <PostCard cardType={postType} postMeta={item.meta} key={index} />
        ))}
      </div>
      {amountToShow < posts.length ? (
        <LoadMoreButton clickHandler={loadMore} />
      ) : (
        <p className={`${styles['no-more-posts']} paragraph--regular`}>
          All posts were loaded.
        </p>
      )}
    </>
  );
};

export default GridGenerator;
