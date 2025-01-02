/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PageTemplate from '@/templates/PageTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Markdown } from '@/utils/types/markdown';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FunctionComponent<{}> = () => {
  const page: Markdown = getPage('about.mdx');
  return <PageTemplate page={page} />;
};

export default About;
