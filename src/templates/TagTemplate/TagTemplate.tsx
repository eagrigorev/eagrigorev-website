/* Global */
import React from 'react';

/* Components */
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import PostsGrid from '@/components/posts-grid/PostsGrid/PostsGrid';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  tag: string;
};

const TagTemplate: React.FunctionComponent<Props> = ({ tag }) => {
  const posts = getAllPosts().filter((post: Markdown) =>
    post.meta.tags.includes(tag.replace('-', ' '))
  );
  return (
    <main className="container">
      <DynamicTitle
        layout="page-left"
        title={`Browsing by tag: ${tag.replace('-', ' ')}`}
      />
      <PostsGrid posts={posts} />
    </main>
  );
};

export default TagTemplate;
