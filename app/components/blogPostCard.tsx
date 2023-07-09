import Link from 'next/link';
import { PostMeta } from '../../utils/interfaces';

const BlogPostCard = (meta: PostMeta) => {
  return (
    <article key={meta.slug}>
      <Link href={meta.slug}>
        <h2>{meta.title}</h2>
      </Link>
      <p>{meta.excerpt}</p>
      <p>
        Posted {meta.date} in {meta.category}
      </p>
    </article>
  );
};

export default BlogPostCard;
