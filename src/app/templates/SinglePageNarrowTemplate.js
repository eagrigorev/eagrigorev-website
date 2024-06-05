import styles from './SinglePageNarrowTemplate.module.scss';
import { getSortedPosts } from '@/scripts/getPosts';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

const SinglePageNarrowTemplate = ({
  showSeparator,
  showMeta,
  post,
  postsToShow,
  postsToLoad,
}) => {
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
      <RelatedEntries
        postType={post.meta.postType}
        posts={getSortedPosts(
          post.meta.postType,
          post.meta.category,
          post.meta.title
        )}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </main>
  );
};

export default SinglePageNarrowTemplate;
