import { JOURNAL_SUB_NAVIGATION } from '@/const/navigation';
import PageTitle from '@/components/PageTitle/PageTitle';
import SubNavigation from '@/components/SubNavigation/SubNavigation';
import PostsGrid from '@/components/PostsGrid/PostsGrid';

const Journal = () => {
  return (
    <main className="container">
      <PageTitle title="Journal." />
      <SubNavigation navigationItems={JOURNAL_SUB_NAVIGATION} showAll={false} />
      <PostsGrid
        postType="blogpost"
        category="all"
        postsToShow={6}
        postsToLoad={6}
      />
    </main>
  );
};

export default Journal;
