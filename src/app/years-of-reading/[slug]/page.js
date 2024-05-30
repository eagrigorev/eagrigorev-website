import styles from './page.module.scss';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { getSortedPosts } from '@/scripts/getPosts';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

const Page = (props) => {
  const slug = props.params.slug;
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.meta.slug === slug);
  if (post) {
    return (
      <main>
        <section className="container">
          <PageTitle
            title={post.meta.title}
            showSeparator={true}
            showMeta={true}
            dateEdited={post.meta.dateEdited}
            category={post.meta.category}
          />
          <div className={`${styles['wrapper']} grid`}>
            <MarkdownWrapper layout="content--narrow" content={post.content} />
          </div>
        </section>
        <RelatedEntries
          type={post.meta.postType}
          content={getSortedPosts(
            post.meta.postType,
            post.meta.category,
            post.meta.title
          )}
          postsToShow={6}
          postsToLoad={6}
        />
      </main>
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
