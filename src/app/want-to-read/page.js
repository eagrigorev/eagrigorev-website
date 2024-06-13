import { LIBRARY_SUB_NAVIGATION } from '@/const/navigation';
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

const WantToRead = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Library: Want to Read."
      navigationItems={LIBRARY_SUB_NAVIGATION}
      showAll={false}
      postType="book"
      category="Want to Read"
      postsToShow={12}
      postsToLoad={6}
    />
  );
};

export default WantToRead;
