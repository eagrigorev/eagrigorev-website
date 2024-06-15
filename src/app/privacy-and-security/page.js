import { getPage } from '@/scripts/getMarkdown';
import SinglePageNarrowTemplate from '@/templates/SinglePageNarrowTemplate/SinglePageNarrowTemplate';

export const metadata = {
  title: 'Privacy and Security',
};

const PrivacyAndSecurity = () => {
  const page = getPage('privacy-and-security.mdx');
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

export default PrivacyAndSecurity;
