/* Namespaces */
import React from 'react';

/* Components */
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import PageTitle from '@/components/PageTitle/PageTitle';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

/* Utils */
import styles from './SinglePageNarrowTemplate.module.scss';
import { getSortedPosts } from '@/scripts/getPosts';
import { Post } from '@/utils/types';

type Props = {
  showSeparator: boolean;
  showMeta: boolean;
  post: Post;
  showRelatedEntries: boolean;
  postsToShow: number;
  postsToLoad: number;
};

const SinglePageNarrowTemplate: React.FunctionComponent<Props> = ({
  showSeparator,
  showMeta,
  post,
  showRelatedEntries,
  postsToShow,
  postsToLoad,
}) => {
  const relatedPosts = getSortedPosts(
    post.meta.postType,
    post.meta.category,
    post.meta.title
  );
  return (
    <main>
      <section className="container">
        <PageTitle
          title={post.meta.title}
          showSeparator={showSeparator}
          showMeta={showMeta}
          dateEdited={post.meta.dateEdited}
          category={post.meta.category}
        />
        <div className={`${styles['wrapper']} grid`}>
          <MarkdownWrapper layout="narrow" content={post.content} />
        </div>
      </section>
      {relatedPosts.length && showRelatedEntries ? (
        <RelatedEntries
          postType={post.meta.postType}
          posts={relatedPosts}
          postsToShow={postsToShow}
          postsToLoad={postsToLoad}
        />
      ) : null}
    </main>
  );
};

export default SinglePageNarrowTemplate;
