/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Library."
      navigationItems={LIBRARY_SUB_NAVIGATION}
      showAll={false}
      postType="library"
      category="all"
      postsToShow={12}
      postsToLoad={6}
    />
  );
};

export default Journal;
