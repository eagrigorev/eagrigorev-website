/* Namespaces */
import React from 'react';

/* Components */
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import PageTitle from '@/components/PageTitle/PageTitle';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

/* Utils */
import styles from './SinglePageNarrowTemplate.module.scss';
import { getSortedPosts } from '@/scripts/getPosts';
import { Post } from '@/types/post';
import { Page } from '@/types/page';

type Props = {
  showSeparator: boolean;
  showMeta: boolean;
  post?: Post;
  page?: Page;
  showRelatedEntries: boolean;
};

const SinglePageNarrowTemplate: React.FunctionComponent<Props> = ({
  showSeparator,
  showMeta,
  post,
  page,
  showRelatedEntries,
}) => {
  if (post) {
    const relatedPosts = getSortedPosts(post.meta.category, post.meta.title);
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
          <RelatedEntries posts={relatedPosts} />
        ) : null}
      </main>
    );
  } else if (page) {
    return (
      <main>
        <section className="container">
          <PageTitle
            title={page.meta.title}
            showSeparator={showSeparator}
            showMeta={showMeta}
          />
          <div className={`${styles['wrapper']} grid`}>
            <MarkdownWrapper layout="narrow" content={page.content} />
          </div>
        </section>
      </main>
    );
  }
};

export default SinglePageNarrowTemplate;
