import Link from 'next/link';
import Image from 'next/image';

const ContentLoop = ({ posts }) => {
  return (
    <section>
      {posts.map((post, index) => {
        if (post.meta.contentType === 'post') {
          return <PostCard key={index} post={post} />;
        } else if (post.meta.contentType === 'illustration') {
          return <IllustrationCard key={index} post={post} />;
        }
      })}
    </section>
  );
};

export default ContentLoop;

const PostCard = ({ post }) => {
  return (
    <article>
      <Image src="/../public/test-cover-image.jpg" width={220} height={195} />
      <h2>{post.meta.title}</h2>
      <p>{post.meta.dateEdited}</p>
      <p>{post.meta.excerpt}</p>
      <Link href={`/${post.slug}`}>Read more...</Link>
    </article>
  );
};

const IllustrationCard = ({ post }) => {
  return (
    <article>
      <Link>
        <h2>{post.meta.title}</h2>
      </Link>
    </article>
  );
};
