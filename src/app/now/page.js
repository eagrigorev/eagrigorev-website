import { getPage } from '@/scripts/getMarkdown';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

const Now = () => {
  const page = getPage('now.mdx');
  return (
    <SinglePageNarrowTemplate
      showSeparator={true}
      showMeta={false}
      post={page}
      showRelatedEntries={false}
      postsToShow={0}
      postsToLoad={0}
    />
  );
};

export default Now;
