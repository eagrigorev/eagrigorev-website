import { getPostContent } from '../../utils/getPostContent';
import Link from 'next/link';
import LinkElement from './linkElement';

const Header = () => {
  const postContent = getPostContent('page');
  return (
    <>
      <header>
        <Link href={'/'}>
          <h1>A small website for Evgenii Grigorev</h1>
        </Link>
        <nav>
          <ul>
            {postContent.map((post) => (
              <LinkElement post={post} key={post.meta.slug} />
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
