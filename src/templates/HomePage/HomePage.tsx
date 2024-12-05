/* Global */
import React from 'react';

/* Components */
import CategoriesNavigation from '@/components/common/CategoriesNavigation/CategoriesNavigation';
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import FeaturedPost from '@/components/common/FeaturedPost/FeaturedPost';
import PostsGrid from '@/components/posts-grid/PostsGrid/PostsGrid';

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
