import {
  JOURNAL_SUB_NAVIGATION,
  PROJECTS_SUB_NAVIGATION,
  LIBRARY_SUB_NAVIGATION,
} from '@/const/navigation';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { normalize } from '@/scripts/normalize';
import { categoriesList } from '@/scripts/getCategoriesList';
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

const Page = (props) => {
  const slug = props.params.slug;
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.meta.slug === slug);
  if (categoriesList.includes(slug)) {
    const postByCategory = allPosts.find((post) => {
      return normalize(post.meta.category) === slug;
    });
    if (
      ['reading-this-year', 'want-to-read', 'years-of-reading'].includes(slug)
    ) {
      console.log('Triggered library');
      return (
        <CategoryPageTemplate
          pageTitle={`Library: ${postByCategory.meta.category}.`}
          navigationItems={LIBRARY_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.postType}
          category={postByCategory.meta.category}
          postsToShow={12}
          postsToLoad={6}
        />
      );
    } else if (['illustrations', 'music-and-tabs'].includes(slug)) {
      console.log('Triggered portfolio');
      return (
        <CategoryPageTemplate
          pageTitle={`Portfolio: ${postByCategory.meta.category}.`}
          navigationItems={PROJECTS_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.postType}
          category={postByCategory.meta.category}
          postsToShow={6}
          postsToLoad={6}
        />
      );
    } else if (['life-updates'].includes(slug)) {
      console.log('Triggered journal');
      return (
        <CategoryPageTemplate
          pageTitle={`Journal: ${postByCategory.meta.category}.`}
          navigationItems={JOURNAL_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.postType}
          category={postByCategory.meta.category}
          postsToShow={6}
          postsToLoad={6}
        />
      );
    }
  } else if (post) {
    return (
      <SinglePageNarrowTemplate
        showSeparator={true}
        showMeta={true}
        post={post}
        showRelatedEntries={true}
        postsToShow={post.meta.postType === 'booklist' ? 6 : 3}
        postsToLoad={post.meta.postType === 'booklist' ? 6 : 3}
      />
    );
  } else {
    return <p>Nothing is here</p>;
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
