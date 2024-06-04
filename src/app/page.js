import { PROJECTS_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const Home = () => {
  return (
    <main className="container">
      <PageTitle title="Software developer and artist based in Thessaloniki, Greece." />
      <SubNavigation
        navigationItems={PROJECTS_SUB_NAVIGATION}
        showAll={false}
      />
      <PostsGrid
        postType="project"
        category="all"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Home;
