import React from 'react';

/* Components */
import MarkdownWrapper from '@/components/MarkdownWrapper/MarkdownWrapper';
import PageTitle from '@/components/PageTitle/PageTitle';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  page: Markdown;
};

const PageTemplate: React.FunctionComponent<Props> = ({ page }) => {
  return (
    <main className="container">
      <PageTitle layout="centered" title={page.meta.title} />
      <MarkdownWrapper content={page.content} />
    </main>
  );
};

export default PageTemplate;
