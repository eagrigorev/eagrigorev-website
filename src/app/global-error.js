'use client';

import { NOT_FOUND_SUB_NAVIGATION } from '@/const/navigation';
import TopNavigation from '@/components/TopNavigation/TopNavigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import CopyrightNotice from '@/components/CopyrightNotice/CopyrightNotice';

const GlobalError = ({ error, reset }) => {
  return (
    <html lang="en" className={`${spectral.variable} ${jost.variable}`}>
      <body>
        <TopNavigation />
        <main className="container">
          <PageTitle title="Page 500: Internal Server Error. The server has encountered a situation it does not know how to handle. Try again?" />
          <SubNavigation
            navigationItems={NOT_FOUND_SUB_NAVIGATION}
            showAll={false}
          />
          <div className="error-button">
            <LoadMoreButton clickHandler={() => reset()} buttonText="Reload" />
          </div>
        </main>
        <CopyrightNotice />
      </body>
    </html>
  );
};

export default GlobalError;
