/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { Metadata } from 'next';
import { journalNavItems } from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

export const metadata: Metadata = {
  title: 'Journal',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle={TITLE.JOURNAL}
      navigationItems={journalNavItems}
      showAll={false}
      category="Journal"
    />
  );
};

export default Journal;
