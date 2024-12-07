/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import CategoryPage from '@/templates/CategoryPage/CategoryPage';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Scripts */
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { notFound } from 'next/navigation';

/* Utils */
import { Markdown } from '@/utils/types/markdown';
import { NavigationItem, Slug } from '@/utils/types/common';

type Props = {
  params: Slug;
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug: string = params.slug;
  // const posts: Markdown[] = getAllPosts();
  const categoryPage: NavigationItem | undefined = categories.find(
    (category: NavigationItem) => category.url.slice(1) === slug
  );
  // const isPost: Markdown | undefined = posts.find(
  //   (post: Post) => post.meta.slug === slug
  // );
  if (categoryPage !== undefined) {
    return {
      title: categoryPage.title,
    };
    // } else if (isPostPage) {
    //   return {
    //     title: isPostPage.meta.title,
    //   };
  } else {
    notFound();
  }
};

const Page: React.FunctionComponent<Props> = (props) => {
  const slug: string = props.params.slug;
  // const allPosts: Markdown[] = getAllPosts();
  // const post: Markdown | undefined = allPosts.find(
  //   (post) => post.meta.slug === slug
  // );
  const categoryPage: NavigationItem | undefined = categories.find(
    (category: NavigationItem) => category.url.slice(1) === slug
  );
  if (categoryPage !== undefined) {
    return <CategoryPage category={categoryPage.url.slice(1)} />;
  } else {
    notFound();
  }

  // } else if (post) {
  //   return (
  //     <SinglePageNarrowTemplate
  //       showSeparator={true}
  //       showMeta={true}
  //       post={post}
  //       showRelatedEntries={true}
  //     />
  //   );
  // } else {
  //   notFound();
  // }
};

export default Page;

export const generateStaticParams = async (): Promise<Slug[]> => {
  return getPostsSlugs();
};

export const dynamicParams: boolean = false;
