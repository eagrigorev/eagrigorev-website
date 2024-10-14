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
import { Metadata } from 'next';
import { spectral, jost } from '@/scripts/getFonts';
import { navigationItems } from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

export const metadata: Metadata = {
  title: '500: Internal Server Error',
};

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
          <PageTitle title={TITLE.PAGE_500} />
          <SubNavigation
            navigationItems={navigationItems.error}
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
