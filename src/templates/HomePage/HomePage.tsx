/* Global */
import React from 'react';

/* Components */
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle';

/* Utils */
import { TITLE } from '@/utils/const/title';

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <DynamicTitle style="page-left" title={TITLE.HOMEPAGE} />
      <CategoriesNavigation showBackLink={false} />
    </main>
  );
};

export default HomePage;
