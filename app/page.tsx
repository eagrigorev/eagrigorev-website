import fs from 'fs';
import Link from 'next/link';

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/${slug}`}>
        {slug}
      </Link>
    </div>
  ))
  return <div>{postPreviews}</div>
}

export default Home;

const getPostMetadata = () => {
  const path = 'markdown/posts';
  const files = fs.readdirSync(path);
  const slugs = files.map((file) => file.replace('.mdx', ''));
  return slugs;
}