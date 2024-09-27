/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { notFound } from 'next/navigation';
import {
  JOURNAL_CATEGORIES,
  LIBRARY_CATEGORIES,
  WORKS_CATEGORIES,
} from '@/const/categories';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { mapCategoriesToSlugs, normalize } from '@/scripts/utils';
import { categoriesList } from '@/scripts/getCategoriesList';
import { Metadata } from 'next';
import { Post } from '@/types/post';
import { Slug } from '@/types/slug';
import {
  journalNavItems,
  libraryNavItems,
  worksNavItems,
} from '@/scripts/getNavigationItems';
import { TITLE } from '@/const/title';

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
  const post: Post | undefined = allPosts.find(
    (post) => post.meta.slug === slug
  );
  if (categoriesList.includes(slug)) {
    const postByCategory: Post | undefined = allPosts.find((post) => {
      return normalize(post.meta.category) === slug;
    });
    if (mapCategoriesToSlugs(LIBRARY_CATEGORIES).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`${TITLE.LIBRARY_CATEGORY} ${postByCategory.meta.category}.`}
          navigationItems={libraryNavItems}
          showAll={true}
          postType={postByCategory.meta.type}
          category={postByCategory.meta.category}
          postsToShow={12}
          postsToLoad={6}
        />
      );
    } else if (mapCategoriesToSlugs(WORKS_CATEGORIES).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`Works: ${postByCategory.meta.category}.`}
          navigationItems={worksNavItems}
          showAll={true}
          postType={postByCategory.meta.type}
          category={postByCategory.meta.category}
          postsToShow={6}
          postsToLoad={6}
        />
      );
    } else if (mapCategoriesToSlugs(JOURNAL_CATEGORIES).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`${TITLE.JOURNAL_CATEGORY} ${postByCategory.meta.category}.`}
          navigationItems={journalNavItems}
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
        postsToShow={post.meta.type === 'library' ? 6 : 3}
        postsToLoad={post.meta.type === 'library' ? 6 : 3}
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
