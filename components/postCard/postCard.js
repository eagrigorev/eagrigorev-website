import styles from './postCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ title, slug, dateEdited, category, image }) => {
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
      <div className={styles['description']}>
        <p className={styles['meta']}>
          {category} — {dateEdited}
        </p>
        <Link className="link link--color" href={`/${slug}`}>
          <h3 className={`${styles['title']} heading`}>{title}</h3>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
