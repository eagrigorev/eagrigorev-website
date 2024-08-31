/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { NavigationItem } from '@/types/navigation';

type Props = {
  pageTitle: string;
  navigationItems: NavigationItem[];
  showAll: boolean;
};

const TagsPageTemplate: React.FunctionComponent<Props> = ({
  pageTitle,
  navigationItems,
  showAll,
}) => {
  return (
    <main className="container">
      <PageTitle title={pageTitle} />
      <SubNavigation navigationItems={navigationItems} showAll={showAll} />
    </main>
  );
};

export default TagsPageTemplate;
