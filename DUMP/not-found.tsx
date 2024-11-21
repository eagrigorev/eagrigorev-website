/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { Metadata } from 'next';
import { navigationItems } from '@/scripts/getNavigationItems';
import { TITLE } from '../../DUMP/const/title';

export const metadata: Metadata = {
  title: '404: Not Found',
};

const NotFound: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.PAGE_404} />
      <SubNavigation navigationItems={navigationItems.error} showAll={false} />
    </main>
  );
};

export default NotFound;
