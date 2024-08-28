/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { JOURNAL_SUB_NAVIGATION } from '@/const/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Journal: A Space for the Unbound."
      navigationItems={JOURNAL_SUB_NAVIGATION}
      showAll={false}
      postType="blogpost"
      category="all"
      postsToShow={6}
      postsToLoad={6}
    />
  );
};

export default Journal;
