import styles from './YearOfReadingCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const YearOfReadingCard = ({ postMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link
        className="link--neutral"
        href={`/years-of-reading/${postMeta.slug}`}
      >
        <Image
          className={`${styles['image']} transition--opacity`}
          alt={postMeta.title}
          src={`/images/books/years-of-reading/${postMeta.featuredImage}`}
          width={250}
          height={375}
        />
        <h3 className={`${styles['title']} paragraph--regular`}>
          {postMeta.title}
        </h3>
      </Link>
    </article>
  );
};

export default YearOfReadingCard;
