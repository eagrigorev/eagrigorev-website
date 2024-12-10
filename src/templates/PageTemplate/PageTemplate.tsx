import React from 'react';

/* Components */
import DynamicTitle from '@/components/title/DynamicTitle/DynamicTitle';
import MarkdownWrapper from '@/components/common/MarkdownWrapper/MarkdownWrapper';

/* Utils */
import { Markdown } from '@/utils/types/markdown';

type Props = {
  page: Markdown;
};

const PageTemplate: React.FunctionComponent<Props> = ({ page }) => {
  return (
    <main className="container">
      <DynamicTitle layout="page-centered" title={page.meta.title} />
      <MarkdownWrapper content={page.content} />
    </main>
  );
};

export default PageTemplate;
