'use client';

/* Namespaces */
import React, { useEffect } from 'react';

/* Components */
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { Metadata } from 'next';
import { navigationItems } from '@/scripts/getNavigationItems';
import { TITLE } from '../../DUMP/const/title';

export const metadata: Metadata = {
  title: '500: Internal Server Error',
};

const Error = ({
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
    <main className="container">
      <PageTitle title={TITLE.PAGE_500} />
      <SubNavigation navigationItems={navigationItems.error} showAll={false} />
      <div className="error-button">
        <LoadMoreButton clickHandler={() => reset()} buttonText="Reload" />
      </div>
    </main>
  );
};

export default Error;
