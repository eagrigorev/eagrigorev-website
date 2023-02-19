import PostCard from './postCard';

const ContentLoop = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        if (post.meta.contentType === 'post') {
          return <PostCard key={index} post={post} />;
        }
      })}
    </>
  );
};

export default ContentLoop;
