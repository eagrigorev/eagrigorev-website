import { PostType } from '../../utils/interfaces';
import { getPostContent } from '../../utils/getPostContent';
import Link from 'next/link';
import LinkElement from './linkElement';

const Header = () => {
  const postContent = getPostContent();
  return (
    <>
      <header>
        <Link href={'/'}>
          <h1>A small website for Evgenii Grigorev</h1>
        </Link>
        <nav>
          <ul>
            {postContent
              .filter((post) => post.meta.type === PostType.page)
              .map((post) => (
                <LinkElement post={post} key={post.meta.slug} />
              ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
