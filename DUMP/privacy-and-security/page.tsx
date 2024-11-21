/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from '../templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Metadata } from 'next';
import { Page } from '../types/page';

export const metadata: Metadata = {
  title: 'Privacy and Security',
};

const PrivacyAndSecurity: React.FunctionComponent<{}> = () => {
  const page: Page = getPage('privacy-and-security.mdx');
  return (
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={false}
      page={page}
      showRelatedEntries={false}
    />
  );
};

export default PrivacyAndSecurity;
