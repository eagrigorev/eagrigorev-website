import Link from 'next/link';
import { Post } from '../../utils/interfaces';

const BlogPostCard = (props: { post: Post }) => {
  return (
    <article>
      <Link href={props.post.meta.slug}>
        <h2>{props.post.meta.title}</h2>
      </Link>
      <p>{props.post.meta.excerpt}</p>
      <p>
        Posted {props.post.meta.date} in {props.post.meta.category}
      </p>
    </article>
  );
};

export default BlogPostCard;
