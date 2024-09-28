/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { Metadata } from 'next';
import { libraryNavItems } from '@/scripts/getNavigationItems';

export const metadata: Metadata = {
  title: 'Library',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Library."
      navigationItems={libraryNavItems}
      showAll={false}
      category="Library"
      postsToShow={12}
      postsToLoad={6}
    />
  );
};

export default Journal;
