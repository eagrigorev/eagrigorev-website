import {
  JOURNAL_SUB_NAVIGATION,
  PROJECTS_SUB_NAVIGATION,
} from '@/const/navigation';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { normalize } from '@/scripts/normalize';
import { categoriesList } from '@/scripts/getCategoriesList';
import CategoryPageTemplate from '../templates/CategoryPageTemplate';
import SinglePageNarrowTemplate from '../templates/SinglePageNarrowTemplate';

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
        pageTitle={`${postTypeByCategory.meta.category}.`}
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
      <SinglePageNarrowTemplate
        showSeparator={true}
        showMeta={true}
        post={post}
        postsToShow={3}
        postsToLoad={3}
      />
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
