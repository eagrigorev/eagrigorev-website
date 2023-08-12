import { getMarkdown } from '../../utils/getMarkdown';
import { Path } from '../../utils/interfaces';
import { sortPostsDesc } from '../../utils/sortPosts';
import JournalCard from '../components/journalCard';

const Journal = () => {
  const posts = sortPostsDesc(getMarkdown(Path.writings));
  return (
    <section>
      <header>
        <h1>Journal</h1>
      </header>
      <div>
        {posts.map((post) => (
          <JournalCard post={post} key={post.meta.slug} />
        ))}
      </div>
    </section>
  );
};

export default Journal;
