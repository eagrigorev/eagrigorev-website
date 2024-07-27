/* Namespaces */
import React from 'react';

/* Components */
import SinglePageSplitTemplate from '@/templates/SinglePageSplitTemplate/SinglePageSplitTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Metadata } from 'next';
import { Post } from '@/utils/types';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FunctionComponent<{}> = () => {
  const page: Post = getPage('about.mdx');
  return (
    <SinglePageSplitTemplate
      showSeparator={true}
      showMeta={false}
      post={page}
      imageSrc="pages/evgenii-grigorev.jpg"
      imageAlt="Evgenii Grigorev"
      imageCaption="Image by Svetlana Krestiantseva"
      imageLayout="left-split"
    />
  );
};

export default About;
