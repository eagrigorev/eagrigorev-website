import { PROJECTS_SUB_NAVIGATION } from '@/const/SUB_NAVIGATION';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const Illustrations = () => {
  return (
    <main className="container">
      <PageTitle title="Illustrations." />
      <SubNavigation navigationItems={PROJECTS_SUB_NAVIGATION} showAll={true} />
      <PostsGrid
        postType="project"
        category="Illustrations"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Illustrations;
