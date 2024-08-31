/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { notFound } from 'next/navigation';
import {
  JOURNAL_SUB_NAVIGATION,
  PROJECTS_SUB_NAVIGATION,
  LIBRARY_SUB_NAVIGATION,
  TAGS_SUB_NAVIGATION,
} from '@/const/navigation';
import {
  JOURNAL_SLUGS,
  LIBRARY_SLUGS,
  WORKS_SLUGS,
} from '@/const/categoriesSlugs';
import { getAllPosts, getAllTags, getPostsSlugs } from '@/scripts/getMarkdown';
import { normalize } from '@/scripts/utils';
import { categoriesList } from '@/scripts/getCategoriesList';
import { Metadata } from 'next';
import { Post } from '@/types/post';
import { Slug } from '@/types/slug';
import { NavigationItem } from '@/types/navigation';

type Props = {
  params: Slug;
};

export function generateMetadata({ params }: Props): Metadata {
  const slug: string = params.slug;
  const allPosts: Post[] = getAllPosts();
  const isCategoryPage: boolean = categoriesList.includes(slug);
  const isPostPage: Post | undefined = allPosts.find(
    (post: Post) => post.meta.slug === slug
  );
  if (isCategoryPage) {
    return {
      title: allPosts.find((post) => normalize(post.meta.category) === slug)
        .meta.category,
    };
  } else if (isPostPage) {
    return {
      title: isPostPage.meta.title,
    };
  } else {
    notFound();
  }
}

const Page: React.FunctionComponent<Props> = (props) => {
  const slug: string = props.params.slug;
  const allPosts: Post[] = getAllPosts();
  const allTags: NavigationItem[] = getAllTags();
  const post: Post | undefined = allPosts.find(
    (post) => post.meta.slug === slug
  );
  if (categoriesList.includes(slug)) {
    const postByCategory: Post | undefined = allPosts.find((post) => {
      return normalize(post.meta.category) === slug;
    });
    if (LIBRARY_SLUGS.includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`Library: ${postByCategory.meta.category}.`}
          navigationItems={LIBRARY_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.type}
          category={postByCategory.meta.category}
          postsToShow={12}
          postsToLoad={6}
        />
      );
    } else if (WORKS_SLUGS.includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`Works: ${postByCategory.meta.category}.`}
          navigationItems={PROJECTS_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.type}
          category={postByCategory.meta.category}
          postsToShow={6}
          postsToLoad={6}
        />
      );
    } else if (JOURNAL_SLUGS.includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`Journal: ${postByCategory.meta.category}.`}
          navigationItems={JOURNAL_SUB_NAVIGATION}
          showAll={true}
          postType={postByCategory.meta.type}
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
        postsToShow={post.meta.type === 'booklist' ? 6 : 3}
        postsToLoad={post.meta.type === 'booklist' ? 6 : 3}
      />
    );
  } else {
    notFound();
  }
};

export default Page;

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return getPostsSlugs();
};

export const dynamicParams: boolean = false;
