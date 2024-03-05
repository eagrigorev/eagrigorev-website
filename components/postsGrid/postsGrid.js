import styles from './postsGrid.module.scss';
import { getPosts, getPostsFromSingleCategory } from '@/utils/getPosts';
import { sortPostsDesc } from '@/utils/sort';
import Link from 'next/link';
import Image from 'next/image';

const PostsGrid = ({ category }) => {
  let allPosts = [];
  if (category === 'all') {
    allPosts = sortPostsDesc(getPosts()).slice(0, 6);
  } else {
    allPosts = sortPostsDesc(getPostsFromSingleCategory(category));
  }
  return (
    <div className="grid">
      {allPosts.map((post) => (
        <PostCard
          title={post.meta.title}
          slug={post.meta.slug}
          date={post.meta.date}
          category={post.meta.category}
          image={post.meta.featuredImage}
          key={post.meta.slug}
        />
      ))}
    </div>
  );
};

const PostCard = ({ title, slug, date, category, image }) => {
  return (
    <article className={styles['wrapper']}>
      <Link href={`/${slug}`}>
        <Image
          className={styles['image']}
          alt="Post Image"
          src={`/images/featured/${image}`}
          width={436}
          height={327}
        />
      </Link>
      <div>
        <p className={styles['meta']}>
          {category} — {date}
        </p>
        <Link className="link-color" href={`/${slug}`}>
          <h3 className={styles['title']}>{title}</h3>
        </Link>
      </div>
    </article>
  );
};

export default PostsGrid;
