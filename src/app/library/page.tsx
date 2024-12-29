/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PostsGridTemplate from '@/templates/PostsGridTemplate';

/* Data */
import pageTitle from '@/data/pageTitle.json';
import readingThisYear from '@/data/readingThisYear.json';

/* Scripts */
import { sortBooksDesc } from '@/scripts/sort';

export const metadata: Metadata = {
  title: 'Library',
};

const Library: React.FunctionComponent<{}> = () => {
  const title = pageTitle.find((item) => item.pageSlug === 'library').title;
  return (
    <PostsGridTemplate
      layout="small"
      title={title}
      showBackLink={false}
      postsMeta={sortBooksDesc(readingThisYear)}
    />
  );
};

export default Library;
