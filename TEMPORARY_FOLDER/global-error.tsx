'use client';

/* Namespaces */
import React, { useEffect } from 'react';

/* Components */
import CopyrightNotice from '@/components/navigation/FooterNavigation/FooterNavigation';
import LoadMoreButton from '@/components/post-grid/LoadMoreButton/LoadMoreButton';
import PageTitle from '@/components/title/PageTitle/PageTitle';
import SubNavigation from './SubNavigation/SubNavigation';
import TopNavigation from '@/components/navigation/HeaderNavigation/HeaderNavigation';

/* Utils */
import { Metadata } from 'next';
import { spectral, jost } from '@/scripts/getFonts';
import { navigationItems } from './getNavigationItems';
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
