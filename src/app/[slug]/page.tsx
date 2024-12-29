/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import CategoryTemplate from '@/templates/CategoryTemplate';
import PostTemplate from '@/templates/PostTemplate';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Scripts */
import {
  getAllPosts,
  getPostsFromSingleCategory,
  getPostsSlugs,
} from '@/scripts/getMarkdown';
import { notFound } from 'next/navigation';

/* Utils */
import { Markdown, Meta } from '@/utils/types/markdown';
import { NavigationItem, Slug } from '@/utils/types/common';
import { TITLE } from '@/utils/const/title';

type Props = {
  params: Slug;
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const slug: string = params.slug;
  const posts: Markdown[] = getAllPosts();
  const categoryPage: NavigationItem | undefined = categories.find(
    (category: NavigationItem) => category.url.slice(1) === slug
  );
  const post: Markdown | undefined = posts.find(
    (post: Markdown) => post.meta.slug === slug
  );
  if (categoryPage !== undefined) {
    return {
      title: categoryPage.title,
    };
  } else if (post !== undefined) {
    return {
      title: post.meta.title,
    };
  } else {
    notFound();
  }
};

const Page: React.FunctionComponent<Props> = (props) => {
  const slug: string = props.params.slug;
  const allPosts: Markdown[] = getAllPosts();
  const post: Markdown | undefined = allPosts.find(
    (post) => post.meta.slug === slug
  );
  const categoryPage: NavigationItem | undefined = categories.find(
    (category: NavigationItem) => category.url.slice(1) === slug
  );
  if (categoryPage !== undefined) {
    const posts = getPostsFromSingleCategory(slug);
    const postsMeta: Meta[] = posts.map((post: Markdown) => post.meta);
    const title: string =
      slug === 'illustrations'
        ? TITLE.ILLUSTRATIONS
        : slug === 'music'
          ? TITLE.MUSIC
          : slug === 'tabs'
            ? TITLE.TABS
            : slug === 'writings'
              ? TITLE.WRITINGS
              : 'Default';
    const showBackLink = slug === 'reading-archives';
    return (
      <CategoryTemplate
        layout="medium"
        postsMeta={postsMeta}
        title={title}
        showBackLink={!showBackLink}
      />
    );
  } else if (post !== undefined) {
    return <PostTemplate post={post} />;
  } else {
    notFound();
  }
};

export default Page;

export const generateStaticParams = async (): Promise<Slug[]> => {
  return getPostsSlugs();
};

export const dynamicParams: boolean = false;
