/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

/* Data */
import libraryNavigation from '@/data/navigation-items/libraryNavigation.json';
import recentWorkNavigation from '@/data/navigation-items/recentWorkNavigation.json';

/* Scripts */
import { getPostsFromSingleCategory } from '@/scripts/getMarkdown';

/* Utils */
import { TITLE } from '@/utils/const/title';
import { Markdown, Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

type Props = {
  layout: 'small' | 'medium';
  postsMeta: Meta[];
  title: string;
  showBackLink: boolean;
};

const CategoryTemplate: React.FunctionComponent<Props> = ({
  layout,
  postsMeta,
  title,
  showBackLink,
}) => {
  const navigationItems: NavigationItem[] =
    layout === 'small' ||
    postsMeta.find(
      (postMeta: Meta) => postMeta.category === 'Reading Archives'
    ) !== undefined
      ? libraryNavigation
      : recentWorkNavigation;
  return (
    <main className="container">
      <PageTitle
        layout="left"
        title={title}
        navigationItems={navigationItems}
        showBackLink={showBackLink}
      />
      <PostsGrid layout={layout} postsMeta={postsMeta} />
    </main>
  );
};

export default CategoryTemplate;
