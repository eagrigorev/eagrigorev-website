/* Global */
import React from 'react';

/* Components */
import CategoriesNavigation from '@/components/CategoriesNavigation/CategoriesNavigation';
import DynamicTitle from '@/components/DynamicTitle/DynamicTitle';
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

/* Utils */
import { TITLE } from '@/utils/const/title';

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <DynamicTitle layout="page-left" title={TITLE.HOMEPAGE} />
      <CategoriesNavigation showBackLink={false} />
      <FeaturedPost />
      <PostsGrid />
    </main>
  );
};

export default HomePage;
