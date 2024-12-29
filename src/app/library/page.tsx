/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import CategoryTemplate from '@/templates/CategoryTemplate';

/* Data */
import readingThisYear from '@/data/books/readingThisYear.json';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { TITLE } from '@/utils/const/title';

export const metadata: Metadata = {
  title: 'Library',
};

const Library: React.FunctionComponent<{}> = () => {
  return (
    <CategoryTemplate
      layout="small"
      postsMeta={readingThisYear}
      title={TITLE.LIBRARY}
      showBackLink={false}
    />
  );
};

export default Library;
