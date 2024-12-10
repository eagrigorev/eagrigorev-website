/* Global */
import React from 'react';
import { Metadata } from 'next';

/* Components */
import PageTemplate from '@/templates/PageTemplate/PageTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Markdown } from '@/utils/types/markdown';

export const metadata: Metadata = {
  title: 'Privacy and Security',
};

const About: React.FunctionComponent<{}> = () => {
  const page: Markdown = getPage('privacy-and-security.mdx');
  return <PageTemplate page={page} />;
};

export default About;
