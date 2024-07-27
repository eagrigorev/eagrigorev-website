/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Metadata } from 'next';
import { Post } from '@/utils/types';

export const metadata: Metadata = {
  title: 'Now',
};

const Now: React.FunctionComponent<{}> = () => {
  const page: Post = getPage('now.mdx');
  return (
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={false}
      post={page}
      showRelatedEntries={false}
      postsToShow={0}
      postsToLoad={0}
    />
  );
};

export default Now;
