'use client';

/* Namespaces */
import React, { useEffect } from 'react';

/* Components */
import CopyrightNotice from '@/components/CopyrightNotice/CopyrightNotice';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import TopNavigation from '@/components/TopNavigation/TopNavigation';

/* Utils */
import { NOT_FOUND_SUB_NAVIGATION } from '@/const/navigation';
import { spectral, jost } from '@/scripts/getFonts';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
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
