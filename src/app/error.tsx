'use client';

/* Namespaces */
import React, { useEffect } from 'react';

/* Components */
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { miscNavItems } from '@/scripts/getNavigationItems';

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
      <PageTitle title="Page 500: Internal Server Error. The server has encountered a situation it does not know how to handle. Try again?" />
      <SubNavigation navigationItems={miscNavItems} showAll={false} />
      <div className="error-button">
        <LoadMoreButton clickHandler={() => reset()} buttonText="Reload" />
      </div>
    </main>
  );
};

export default Error;
