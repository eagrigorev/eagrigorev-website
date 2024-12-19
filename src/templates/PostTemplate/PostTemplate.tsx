import React from 'react';

/* Components */
import DynamicRelatedPosts from '@/components/posts-grid/DynamicRelatedPosts/DynamicRelatedPosts';
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';

/* Scripts */
import { getAllPosts } from '@/scripts/getMarkdown';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  post: Markdown;
};

const PostTemplate: React.FunctionComponent<Props> = ({ post }) => {
  const relatedPosts: Markdown[] = getAllPosts().filter(
    (item: Markdown) =>
      item.meta.category === post.meta.category &&
      item.meta.title !== post.meta.title
  );
  return (
    <main className="container">
      <DynamicTitle layout="post" postMeta={post.meta} />
      <MarkdownWrapper content={post.content} />
      {relatedPosts.length ? (
        <DynamicRelatedPosts relatedPosts={relatedPosts.slice(0, 2)} />
      ) : null}
    </main>
  );
};

export default PostTemplate;
