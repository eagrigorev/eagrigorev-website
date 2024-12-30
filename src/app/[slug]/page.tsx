/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PostTemplate from '@/templates/PostTemplate';
import PostsGridTemplate from '@/templates/PostsGridTemplate';

/* Data */
import categories from '@/data/categories.json';
import pageTitle from '@/data/pageTitle.json';

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
    const title: string = pageTitle.find(
      (item) => item.pageSlug === slug
    ).title;
    const showBackLink = slug !== 'reading-archives';
    return (
      <PostsGridTemplate
        layout="medium"
        title={title}
        showBackLink={showBackLink}
        postsMeta={postsMeta}
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
