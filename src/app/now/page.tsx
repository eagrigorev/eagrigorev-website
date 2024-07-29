/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Metadata } from 'next';
import { Page } from '@/types/page';

export const metadata: Metadata = {
  title: 'Now',
};

const Now: React.FunctionComponent<{}> = () => {
  const page: Page = getPage('now.mdx');
  return (
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={false}
      page={page}
      showRelatedEntries={false}
      postsToShow={0}
      postsToLoad={0}
    />
  );
};

export default Now;
