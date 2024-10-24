/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/title/PageTitle/PageTitle';
import PostCardBig from '@/components/post-card/PostCardBig/PostCardBig';
import PostsGrid from '@/components/post-grid/PostsGrid/PostsGrid';
import SecondaryNavigation from '@/components/navigation/SecondaryNavigation/SecondaryNavigation';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';
import sortPosts from '@/scripts/sortPosts';

/* Utils */
import postTypesNavigation from '@/utils/data/postTypesNavigation.json';
import { Post } from '@/utils/types/markdown';
import { TITLE } from '@/utils/const/title';

const Home: React.FunctionComponent<{}> = () => {
  const posts: Post[] = sortPosts(getAllPosts());
  return (
    <main className="container">
      <PageTitle title={TITLE.HOMEPAGE} />
      <SecondaryNavigation navigationItems={postTypesNavigation} />
      <PostCardBig postMeta={posts[0].meta} />
      <PostsGrid posts={posts.slice(1)} showAmount={6} loadAmount={3} />
    </main>
  );
};

export default Home;
