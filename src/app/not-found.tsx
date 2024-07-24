/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { Metadata } from 'next';
import { NOT_FOUND_SUB_NAVIGATION } from '@/const/navigation';

export const metadata: Metadata = {
  title: '404: Not Found',
};

const NotFound: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title="Page 404: Not Found. There is nothing here. Maybe try something else?" />
      <SubNavigation
        navigationItems={NOT_FOUND_SUB_NAVIGATION}
        showAll={false}
      />
    </main>
  );
};

export default NotFound;
