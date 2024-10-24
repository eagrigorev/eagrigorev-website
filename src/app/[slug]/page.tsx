/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { notFound } from 'next/navigation';
import { POST_CATEGORIES } from '@/const/categories';
import { getAllPosts, getPostsSlugs } from '@/scripts/getMarkdown';
import { normalize } from '@/scripts/utils';
import { mapCategoriesToSlugs } from '@/scripts/mappers';
import { categoriesList } from '@/scripts/getCategoriesList';
import { Metadata } from 'next';
import { Post } from '@/types/post';
import { Slug } from '@/types/slug';
import { navigationItems } from '@/scripts/getNavigationItems';
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
    if (mapCategoriesToSlugs(POST_CATEGORIES.LIBRARY).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`${TITLE.LIBRARY_CATEGORY} ${postByCategory.meta.category}.`}
          navigationItems={navigationItems.library}
          showAll={true}
          category={postByCategory.meta.category}
        />
      );
    } else if (mapCategoriesToSlugs(POST_CATEGORIES.WORKS).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`${TITLE.WORKS_CATEGORY} ${postByCategory.meta.category}.`}
          navigationItems={navigationItems.works}
          showAll={true}
          category={postByCategory.meta.category}
        />
      );
    } else if (mapCategoriesToSlugs(POST_CATEGORIES.JOURNAL).includes(slug)) {
      return (
        <CategoryPageTemplate
          pageTitle={`${TITLE.JOURNAL_CATEGORY} ${postByCategory.meta.category}.`}
          navigationItems={navigationItems.journal}
          showAll={true}
          category={postByCategory.meta.category}
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
