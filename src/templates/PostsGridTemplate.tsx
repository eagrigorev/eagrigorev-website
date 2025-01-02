/* Global */
import React from 'react';

/* Components */
import PageTitle from '@/components/PageTitle/PageTitle';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

/* Data */
import libraryNavigation from '@/data/navigation-items/libraryNavigation.json';
import recentWorkNavigation from '@/data/navigation-items/recentWorkNavigation.json';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

type Props = {
  layout: 'small' | 'medium';
  title: string;
  showBackLink: boolean;
  postsMeta: Meta[];
};

const PostsGridTemplate: React.FunctionComponent<Props> = ({
  layout,
  title,
  showBackLink,
  postsMeta,
}) => {
  const isReadingArchivesPosts: boolean =
    postsMeta.find(
      (postMeta: Meta) => postMeta.category === 'Reading Archives'
    ) !== undefined;
  const navigationItems: NavigationItem[] =
    layout === 'small' || isReadingArchivesPosts
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

export default PostsGridTemplate;
