/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

/* Data */
import recentWorkNavigation from '@/data/navigation-items/recentWorkNavigation.json';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown, Meta } from '@/utils/types/markdown';
import { TITLE } from '@/utils/const/title';

const HomeTemplate: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts();
  const postsMeta: Meta[] = posts.map((post: Markdown) => post.meta);
  return (
    <main className="container">
      <PageTitle
        layout="left"
        title={TITLE.HOMEPAGE}
        navigationItems={recentWorkNavigation}
        showBackLink={false}
      />
      <PostsGrid layout="medium" postsMeta={postsMeta} />
    </main>
  );
};

export default HomeTemplate;
