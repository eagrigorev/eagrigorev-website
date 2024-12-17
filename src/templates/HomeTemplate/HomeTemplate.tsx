/* Global */
import React from 'react';

/* Components */
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import PostsGrid from '@/components/posts-grid/PostsGrid/PostsGrid';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { TITLE } from '@/utils/const/title';

const HomeTemplate: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts();
  return (
    <main className="container">
      <DynamicTitle layout="page-left" title={TITLE.HOMEPAGE} />
      <PostsGrid posts={posts.slice(1)} />
    </main>
  );
};

export default HomeTemplate;
