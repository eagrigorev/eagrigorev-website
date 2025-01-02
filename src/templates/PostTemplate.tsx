import React from 'react';

/* Components */
import RelatedPosts from '@/components/RelatedPosts/RelatedPosts';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import PageTitle from '@/components/PageTitle/PageTitle';

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
      <PageTitle layout="centered-meta" meta={post.meta} />
      <MarkdownWrapper content={post.content} />
      {relatedPosts.length ? (
        <RelatedPosts relatedPosts={relatedPosts.slice(0, 2)} />
      ) : null}
    </main>
  );
};

export default PostTemplate;
