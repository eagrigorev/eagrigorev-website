/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import CategoryTemplate from '@/templates/CategoryTemplate/CategoryTemplate';
import PostTemplate from '@/templates/PostTemplate/PostTemplate';
import TagTemplate from '@/templates/TagTemplate/TagTemplate';

/* Data */
import categories from '@/data/navigation-items/categories.json';

/* Scripts */
import { generateTagsCloud } from '@/scripts/generateTagsCloud';
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
  const posts: Markdown[] = getAllPosts();
  const tags: string[] = generateTagsCloud();
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
  } else if (tags.includes(slug.replace('-', ' '))) {
    return {
      title: `Browsing by tag: ${slug.replace('-', ' ')}`,
    };
  } else {
    notFound();
  }
};

const Page: React.FunctionComponent<Props> = (props) => {
  const slug: string = props.params.slug;
  const allPosts: Markdown[] = getAllPosts();
  const tags: string[] = generateTagsCloud();
  const post: Markdown | undefined = allPosts.find(
    (post) => post.meta.slug === slug
  );
  const categoryPage: NavigationItem | undefined = categories.find(
    (category: NavigationItem) => category.url.slice(1) === slug
  );
  if (categoryPage !== undefined) {
    return <CategoryTemplate category={categoryPage.url.slice(1)} />;
  } else if (post !== undefined) {
    return <PostTemplate post={post} />;
  } else if (tags.includes(slug.replace('-', ' '))) {
    return <TagTemplate tag={slug} />;
  } else {
    notFound();
  }
};

export default Page;

export const generateStaticParams = async (): Promise<Slug[]> => {
  return getPostsSlugs();
};

export const dynamicParams: boolean = false;
