import { PROJECTS_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const MusicAndTabs = () => {
  return (
    <main className="container">
      <PageTitle title="Music & Tabs." />
      <SubNavigation navigationItems={PROJECTS_SUB_NAVIGATION} showAll={true} />
      <PostsGrid
        postType="project"
        category="Music & Tabs"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default MusicAndTabs;
