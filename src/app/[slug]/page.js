import {
  JOURNAL_SUB_NAVIGATION,
  PROJECTS_SUB_NAVIGATION,
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
        pageTitle={`${postTypeByCategory.meta.category}.`}
        navigationItems={navigationItemsByCategory}
        showAll={true}
        postType={postTypeByCategory.meta.postType}
        category={postTypeByCategory.meta.category}
        postsToShow={6}
        postsToLoad={6}
      />
    );
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
