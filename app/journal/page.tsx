import { PostType } from '../../utils/interfaces';
import { getPostContent } from '../../utils/getPostContent';
import { sortPostsDesc } from '../../utils/sortPosts';
import JournalCard from '../components/journalCard';

const Journal = () => {
  const posts = sortPostsDesc(getPostContent());
  return (
    <section>
      <header>
        <h1>Journal</h1>
      </header>
      <div>
        {posts
          .filter((post) => post.meta.type === PostType.blog)
          .map((post) => (
            <JournalCard post={post} key={post.meta.slug} />
          ))}
      </div>
    </section>
  );
};

export default Journal;
