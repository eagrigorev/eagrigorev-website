/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PageTemplate from '@/templates/PageTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Markdown } from '@/utils/types/markdown';

export const metadata: Metadata = {
  title: 'Now',
};

const About: React.FunctionComponent<{}> = () => {
  const page: Markdown = getPage('now.mdx');
  return <PageTemplate page={page} />;
};

export default About;
