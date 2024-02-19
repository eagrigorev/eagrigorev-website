import styles from './postCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ title, slug, date, category }) => {
  return (
    <article className={styles['wrapper']}>
      <Link href={`/${slug}`}>
        <Image className={styles['image']} alt="Post Image" />
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

export default PostCard;
