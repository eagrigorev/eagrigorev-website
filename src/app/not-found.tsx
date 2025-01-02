/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';

/* Data */
import errorNavigation from '@/data/navigation-items/errorNavigation.json';
import pageTitle from '@/data/pageTitle.json';

export const metadata: Metadata = {
  title: '404: Not Found',
};

const NotFound: React.FunctionComponent<{}> = () => {
  const title = pageTitle.find((item) => item.pageSlug === '404').title;
  return (
    <main className="container">
      <PageTitle
        layout="left"
        title={title}
        navigationItems={errorNavigation}
        showBackLink={false}
      />
    </main>
  );
};

export default NotFound;
