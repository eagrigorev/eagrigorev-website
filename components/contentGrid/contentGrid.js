import styles from './contentGrid.module.scss';
import { getPosts, getPostsFromSingleCategory } from '@/utils/getPosts';
import { sortPostsDesc } from '@/utils/sort';
import { categoriesNavigation } from '@/utils/getNavigationItems';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../navigation/navigation';

const ContentGrid = ({ showHeader, layout, category }) => {
  let allPosts = [];
  if (category === 'all') {
    allPosts = sortPostsDesc(getPosts()).slice(0, 6);
  } else {
    allPosts = sortPostsDesc(getPostsFromSingleCategory(category));
  }
  return (
    <section className={`${styles['wrapper']} ${styles['wrapper--section']}`}>
      {showHeader ? <Header /> : null}
      <div className="grid">
        {allPosts.map((post) => (
          <PostCard postMeta={post.meta} key={post.meta.slug} />
        ))}
      </div>
    </section>
  );
};

export default ContentGrid;

const Header = () => {
  return (
    <header className={`${styles['wrapper']} ${styles['wrapper--header']}`}>
      <div className={`${styles['wrapper']} ${styles['wrapper--title']}`}>
        <h3 className="heading heading--medium-xl-100">Updates</h3>
        <Navigation links={categoriesNavigation} />
      </div>
      <h4 className="paragraph paragraph--light-m-125">
        Recent posts from all the categories
      </h4>
    </header>
  );
};

const PostCard = ({ postMeta }) => {
  return (
    <article className={styles['card__wrapper']}>
      <Link href={`/${postMeta.slug}`}>
        <Image
          className={styles['card__image']}
          alt={postMeta.title}
          src={`/images/${postMeta.slug}/${postMeta.featuredImage}`}
          width={436}
          height={327}
        />
      </Link>
      <div className={styles['card__description']}>
        <p className="paragraph paragraph--light-s-100">
          {postMeta.category} — {postMeta.dateEdited}
        </p>
        <Link className="link link--color" href={`/${postMeta.slug}`}>
          <h3
            className={`${styles['card__title']} heading heading--regular-l-125`}
          >
            {postMeta.title}
          </h3>
        </Link>
      </div>
    </article>
  );
};
