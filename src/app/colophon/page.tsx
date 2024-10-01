/* Namespaces */
import React from 'react';

/* Components */
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

/* Utils */
import { getPage } from '@/scripts/getMarkdown';
import { Metadata } from 'next';
import { Page } from '@/types/page';

export const metadata: Metadata = {
  title: 'Colophon',
};

const Colophon: React.FunctionComponent<{}> = () => {
  const page: Page = getPage('colophon.mdx');
  return (
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={false}
      page={page}
      showRelatedEntries={false}
    />
  );
};

export default Colophon;
