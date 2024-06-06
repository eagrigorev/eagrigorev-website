import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

const YearsOfReading = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Library: Years of Reading."
      navigationItems={LIBRARY_SUB_NAVIGATION}
      showAll={false}
      postType="booklist"
      category="Years of Reading"
      postsToShow={12}
      postsToLoad={6}
    />
  );
};

export default YearsOfReading;
