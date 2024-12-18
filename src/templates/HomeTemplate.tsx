/* Global */
import React from 'react';

/* Components */
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import PostsGrid from '@/components/posts-grid/PostsGrid/PostsGrid';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { TITLE } from '@/utils/const/title';

const HomeTemplate: React.FunctionComponent<{}> = () => {
  const posts = getAllPosts().filter(
    (post: Markdown) => post.meta.type === 'portfolio'
  );
  return (
    <main className="container">
      <DynamicTitle
        layout="page-left"
        title={TITLE.HOMEPAGE}
        showBackLink={false}
      />
      <PostsGrid posts={posts} />
    </main>
  );
};

export default HomeTemplate;
