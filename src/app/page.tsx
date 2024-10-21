/* Global */
import React from 'react';

/* Components */
import FeaturedPost from '@/components/FeaturedPost/FeaturedPost';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
import PageTitle from '@/components/PageTitle/PageTitle';
import SecondaryNavigation from '@/components/navigation/SecondaryNavigation/SecondaryNavigation';

/* Scripts */
import { navigationItems } from '../../TEMPORARY_FOLDER/getNavigationItems';

/* Data */
import navigationItemsByPostType from '@/data/navigationItemsByPostType.json';

/* Const */
import { TITLE } from '@/const/title';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.HOMEPAGE} />
      <SecondaryNavigation
        navigationItems={navigationItemsByPostType}
        showAll={false}
      />
      <FeaturedPost />
      <PostsGrid category="Works" />
    </main>
  );
};

export default Home;
