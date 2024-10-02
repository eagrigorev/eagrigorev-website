/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { Metadata } from 'next';
import { libraryNavItems } from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

export const metadata: Metadata = {
  title: 'Library',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle={TITLE.LIBRARY}
      navigationItems={libraryNavItems}
      showAll={false}
      category="Library"
    />
  );
};

export default Journal;
