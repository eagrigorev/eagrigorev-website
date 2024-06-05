import { JOURNAL_SUB_NAVIGATION } from '@/const/navigation';
import CategoryPageTemplate from '../templates/CategoryPageTemplate';

const Journal = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Journal."
      navigationItems={JOURNAL_SUB_NAVIGATION}
      showAll={false}
      postType="blogpost"
      category="all"
      postsToShow={6}
      postsToLoad={6}
    />
  );
};

export default Journal;
