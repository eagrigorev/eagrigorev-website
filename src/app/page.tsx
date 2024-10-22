/* Global */
import React from 'react';

/* Components */
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
import SecondaryNavigation from '@/components/navigation/SecondaryNavigation/SecondaryNavigation';

/* Utils */
import postTypesNavigation from '@/utils/data/postTypesNavigation.json';
import { TITLE } from '@/utils/const/title';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.HOMEPAGE} />
      <SecondaryNavigation
        navigationItems={postTypesNavigation}
        showAll={false}
      />
      <FeaturedPost />
      <PostsGrid category="Works" />
    </main>
  );
};

export default Home;
