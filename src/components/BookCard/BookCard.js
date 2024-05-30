import styles from './BookCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ bookMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link className="link--neutral" href={bookMeta.url}>
        <Image
          className={`${styles['image']} transition--opacity`}
          alt={`${bookMeta.title} by ${bookMeta.author}`}
          src={`/images/books/${bookMeta.image}`}
          width={250}
          height={375}
        />
        <div className={styles['description']}>
          <h3 className="meta-categories-text">{bookMeta.author}</h3>
          <p className="paragraph--regular">{bookMeta.title}</p>
        </div>
      </Link>
    </article>
  );
};

export default BookCard;
