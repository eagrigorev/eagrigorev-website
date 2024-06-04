import styles from './page.module.scss';
import {
  JOURNAL_SUB_NAVIGATION,
  PROJECTS_SUB_NAVIGATION,
} from '@/const/navigation';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { normalize } from '@/scripts/normalize';
import { getSortedPosts } from '@/scripts/getPosts';
import { categoriesList } from '@/scripts/getCategoriesList';
import CategoryPageTemplate from '../templates/CategoryPageTemplate';
import PageTitle from '@/components/PageTitle/PageTitle';
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import RelatedEntries from '@/components/RelatedEntries/RelatedEntries';

const Page = (props) => {
  const slug = props.params.slug;
  const allPosts = getAllPosts();
  if (categoriesList.includes(slug)) {
    const postTypeByCategory = allPosts.find((post) => {
      return normalize(post.meta.category) === slug;
    });
    const navigationItemsByCategory = JOURNAL_SUB_NAVIGATION.find((item) => {
      return normalize(item.title) === slug;
    })
      ? JOURNAL_SUB_NAVIGATION
      : PROJECTS_SUB_NAVIGATION;
    return (
      <CategoryPageTemplate
        pageTitle={slug}
        navigationItems={navigationItemsByCategory}
        showAll={true}
        postType={postTypeByCategory.meta.postType}
        category={postTypeByCategory.meta.category}
        postsToShow={6}
        postsToLoad={6}
      />
    );
  }
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
          postsToShow={3}
          postsToLoad={3}
        />
      </main>
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
