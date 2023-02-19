import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <>
      <article>
        <h2>{post.meta.title}</h2>
        <p>{post.meta.dateEdited}</p>
        <p>{post.meta.excerpt}</p>
        <Link href={`/${post.slug}`}>Read more...</Link>
      </article>
    </>
  );
};

export default PostCard;
