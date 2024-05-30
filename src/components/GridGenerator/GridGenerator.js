'use client';

import styles from './GridGenerator.module.scss';
import { useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import BookCard from '../BookCard/BookCard';
import YearOfReadingCard from '../YearOfReadingCard/YearOfReadingCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';

const GridGenerator = ({ type, content, postsToShow, postsToLoad }) => {
  const [amountToShow, setAmountToShow] = useState(postsToShow);
  let displayedContent = content.slice(0, amountToShow);
  const loadMore = () => {
    setAmountToShow(amountToShow + postsToLoad);
  };
  return (
    <>
      <div className={`${styles['wrapper']} grid`}>
        {displayedContent.map((item, index) =>
          type === 'project' ? (
            <ProjectCard projectMeta={item.meta} key={index} />
          ) : type === 'books' ? (
            <BookCard bookMeta={item} key={index} />
          ) : type === 'year-of-reading' ? (
            <YearOfReadingCard postMeta={item.meta} key={index} />
          ) : (
            ''
          )
        )}
      </div>
      {amountToShow < content.length ? (
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
