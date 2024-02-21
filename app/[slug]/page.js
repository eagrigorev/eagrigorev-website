import { getPosts, getPostsSlugs } from '@/utils/getPosts';

const Page = (props) => {
  const slug = props.params.slug;
  const post = getPosts().find((post) => post.meta.slug === slug);
  if (post && post.meta.category === ('Illustrations' || 'Music')) {
    return <></>;
  } else return <></>;
};

export default Page;

export const generateStaticParams = async () => {
  return getPostsSlugs();
};
