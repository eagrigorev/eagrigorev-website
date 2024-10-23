/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/title/PageTitle/PageTitle';
import PostCardBig from '@/components/post-card/PostCardBig/PostCardBig';
import PostsGrid from '@/components/post-grid/PostsGrid/PostsGrid';
import SecondaryNavigation from '@/components/navigation/SecondaryNavigation/SecondaryNavigation';

/* Utils */
import postTypesNavigation from '@/utils/data/postTypesNavigation.json';
import { TITLE } from '@/utils/const/title';

const Home: React.FunctionComponent<{}> = () => {
  return (
    <main className="container">
      <PageTitle title={TITLE.HOMEPAGE} />
      <SecondaryNavigation navigationItems={postTypesNavigation} />
      <PostCardBig postMeta={} />
      <PostsGrid category="Works" />
    </main>
  );
};

export default Home;
