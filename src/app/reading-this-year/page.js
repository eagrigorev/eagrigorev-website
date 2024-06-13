import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

const ReadingThisYear = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Library: Reading this Year."
      navigationItems={LIBRARY_SUB_NAVIGATION}
      showAll={false}
      postType="book"
      category="Reading this Year"
      postsToShow={12}
      postsToLoad={6}
    />
  );
};

export default ReadingThisYear;
