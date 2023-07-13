import { Post } from '../../utils/interfaces';
import Link from 'next/link';

const LinkElement = (props: { post: Post }) => {
  return (
    <li key={props.post.meta.slug}>
      <Link href={props.post.meta.slug}>{props.post.meta.title}</Link>
    </li>
  );
};

export default LinkElement;
