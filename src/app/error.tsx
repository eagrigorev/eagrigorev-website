'use client';

/* Global */
import React, { useEffect } from 'react';
import { Metadata } from 'next';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';

/* Data */
import errorNavigation from '@/data/navigation-items/errorNavigation.json';
import pageTitle from '@/data/pageTitle.json';

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
  const title = pageTitle.find((item) => item.pageSlug === '500').title;
  return (
    <main className="container">
      <PageTitle
        layout="left"
        title={title}
        navigationItems={errorNavigation}
        showBackLink={false}
      />
      <div className="error-button-wrapper">
        <button
          className="jost-uppercase--xs-btn link-image error-button"
          onClick={() => reset()}
        >
          reload
        </button>
      </div>
    </main>
  );
};

export default Error;
