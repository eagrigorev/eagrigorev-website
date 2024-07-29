/* Namespaces */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';
import SubNavigation from '@/components/SubNavigation/SubNavigation';

/* Utils */
import { NavigationItem } from '@/types/navigation';
import { PostType, PostCategory } from '@/types/post';

type Props = {
  pageTitle: string;
  navigationItems: NavigationItem[];
  showAll: boolean;
  postType: PostType;
  category: PostCategory | 'all';
  postsToShow: number;
  postsToLoad: number;
};

const CategoryPageTemplate: React.FunctionComponent<Props> = ({
  pageTitle,
  navigationItems,
  showAll,
  postType,
  category,
  postsToShow,
  postsToLoad,
}) => {
  return (
    <main className="container">
      <PageTitle title={pageTitle} />
      <SubNavigation navigationItems={navigationItems} showAll={showAll} />
      <PostsGrid
        postType={postType}
        category={category}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </main>
  );
};

export default CategoryPageTemplate;
