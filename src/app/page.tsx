/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { navigationItems } from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.HOMEPAGE} />
      <SubNavigation navigationItems={navigationItems.works} showAll={false} />
      <PostsGrid category="Works" />
    </main>
  );
};

export default Home;
