import getPage from '@/utils/getPage';
import PageNarrow from '@/templates/pages/pageNarrow';

const Now = () => {
  const page = getPage('now.mdx');
  return (
    <PageNarrow
      isWide={false}
      showMeta={false}
      title={page.meta.title}
      subtitle={page.meta.subtitle}
      content={page.content}
    />
  );
};

export default Now;
