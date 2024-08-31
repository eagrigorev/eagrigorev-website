/* Namespaces */
import React from 'react';

/* Components */
import TagsPageTemplate from '@/templates/TagsPageTemplate/TagsPageTemplate';

/* Utils */
import { TAGS_SUB_NAVIGATION } from '@/const/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tags',
};

const Tags: React.FunctionComponent<{}> = () => {
  return (
    <TagsPageTemplate
      pageTitle="Tags."
      navigationItems={TAGS_SUB_NAVIGATION}
      showAll={false}
    />
  );
};

export default Tags;
