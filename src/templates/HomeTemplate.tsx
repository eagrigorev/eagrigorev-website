/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { TITLE } from '@/utils/const/title';

const HomeTemplate: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts();
  return (
    <main className="container">
      <PageTitle layout="left" title={TITLE.HOMEPAGE} showBackLink={false} />
      <PostsGrid posts={posts} />
    </main>
  );
};

export default HomeTemplate;
