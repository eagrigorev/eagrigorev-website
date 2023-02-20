import Link from 'next/link';

const IllustrationCard = ({ post }) => {
  return (
    <>
      <article>
        <Link>
          <h2>{post.meta.title}</h2>
        </Link>
      </article>
    </>
  );
};

export default IllustrationCard;
