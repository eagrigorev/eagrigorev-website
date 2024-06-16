'use client';

import { NOT_FOUND_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import LoadMoreButton from '@/components/LoadMoreButton/LoadMoreButton';

const Error = ({ error, reset }) => {
  return (
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
  );
};

export default Error;
