/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { worksNavItems } from '@/scripts/getNavigationItems';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title="Software developer and artist based in Thessaloniki, Greece." />
      <SubNavigation navigationItems={worksNavItems} showAll={false} />
      <PostsGrid category="Works" postsToShow={6} postsToLoad={6} />
    </main>
  );
};

export default Home;
