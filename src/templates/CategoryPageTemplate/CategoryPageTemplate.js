import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const CategoryPageTemplate = ({
  pageTitle,
  navigationItems,
  showAll,
  postType,
  category,
  postsToShow,
  postsToLoad,
}) => {
  return (
    <main className="container">
      <PageTitle title={pageTitle} />
      <SubNavigation navigationItems={navigationItems} showAll={showAll} />
      <PostsGrid
        postType={postType}
        category={category}
        postsToShow={postsToShow}
        postsToLoad={postsToLoad}
      />
    </main>
  );
};

export default CategoryPageTemplate;
