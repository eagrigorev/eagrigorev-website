import { getPosts, getPostsSlugs } from '@/utils/getPosts';
import PageNarrow from '@/templates/pages/pageNarrow';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  if (post) {
    return (
      <PageNarrow
        isWide={false}
        showMeta={true}
        title={post.meta.title}
        subtitle={post.meta.subtitle}
        category={post.meta.category}
        datePosted={post.meta.datePosted}
        dateEdited={post.meta.dateEdited}
        content={post.content}
      />
    );
  } else {
    return <p>Nothing here</p>;
  }
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
