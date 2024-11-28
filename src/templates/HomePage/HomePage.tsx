/* Global */
import React from 'react';

/* Components */
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import DynamicPostsGrid from '@/components/DynamicPostsGrid/DynamicPostsGrid';
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';

/* Utils */
import { TITLE } from '@/utils/const/title';

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <DynamicTitle layout="page-left" title={TITLE.HOMEPAGE} />
      <CategoriesNavigation showBackLink={false} />
      <FeaturedPost />
      <DynamicPostsGrid />
    </main>
  );
};

export default HomePage;
