import React from 'react';

/* Components */
import DynamicRelatedPosts from '@/components/posts-grid/DynamicRelatedPosts/DynamicRelatedPosts';
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import MarkdownWrapper from '@/components/common/MarkdownWrapper/MarkdownWrapper';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  post: Markdown;
};

const PostTemplate: React.FunctionComponent<Props> = ({ post }) => {
  return (
    <main className="container">
      <DynamicTitle layout="post" postMeta={post.meta} />
      <MarkdownWrapper content={post.content} />
      <DynamicRelatedPosts category={post.meta.category} />
    </main>
  );
};

export default PostTemplate;
