import PostCard from './postCard';
import IllustrationCard from './illustrationCard';

const ContentLoop = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        if (post.meta.contentType === 'post') {
          return <PostCard key={index} post={post} />;
        } else if (post.meta.contentType === 'illustration') {
          return <IllustrationCard key={index} post={post} />;
        }
      })}
    </>
  );
};

export default ContentLoop;
