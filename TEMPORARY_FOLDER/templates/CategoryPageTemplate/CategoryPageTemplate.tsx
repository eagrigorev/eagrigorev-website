/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/title/PageTitle/PageTitle';
import PostsGrid from '@/components/post-grid/PostsGrid/PostsGrid';
import SubNavigation from '../../../TEMPORARY_FOLDER/SubNavigation/SubNavigation';

/* Utils */
import { NavigationItem } from '@/types/navigationItem';
import { ParentCategories, PostCategory } from '@/types/post';

type Props = {
  pageTitle: string;
  navigationItems: NavigationItem[];
  showAll: boolean;
  category: PostCategory | ParentCategories;
};

const CategoryPageTemplate: React.FunctionComponent<Props> = ({
  pageTitle,
  navigationItems,
  showAll,
  category,
}) => {
  return (
    <main className="container">
      <PageTitle title={pageTitle} />
      <SubNavigation navigationItems={navigationItems} showAll={showAll} />
      <PostsGrid category={category} />
    </main>
  );
};

export default CategoryPageTemplate;
