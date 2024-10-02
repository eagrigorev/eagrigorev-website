/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { Metadata } from 'next';
import { miscNavItems } from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

export const metadata: Metadata = {
  title: '404: Not Found',
};

const NotFound: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.PAGE_404} />
      <SubNavigation navigationItems={miscNavItems} showAll={false} />
    </main>
  );
};

export default NotFound;
