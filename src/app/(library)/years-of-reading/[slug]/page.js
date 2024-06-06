import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

const Page = (props) => {
  const slug = props.params.slug;
  const allPosts = getAllPosts();
  const post = allPosts.find((post) => post.meta.slug === slug);
  if (post) {
    return (
      <SinglePageNarrowTemplate
        showSeparator={true}
        showMeta={true}
        post={post}
        showRelatedEntries={true}
        postsToShow={6}
        postsToLoad={6}
      />
    );
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
