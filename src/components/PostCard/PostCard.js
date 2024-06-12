import styles from './PostCard.module.scss';
import { generateCardOptions } from '@/scripts/generateCardOptions';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ cardType, postMeta }) => {
  const cardOptions = generateCardOptions(cardType, postMeta);
  return (
    <article className={styles[`wrapper--${cardType}`]}>
      <Link className="link--neutral" href={cardOptions.href} tabIndex="-1">
        <Image
          className={`${styles[`image--${cardType}`]} transition--opacity`}
          src={cardOptions.image.src}
          alt={cardOptions.image.alt}
          width={cardOptions.image.width}
          height={cardOptions.image.height}
        />
      </Link>
      <div className={styles['description']}>
        {cardType === 'blogpost' ? (
          <>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="heading--h3">{cardOptions.blogpost.title}</h3>
            </Link>
            <div className={`${styles['meta--blogpost']} meta-categories-text`}>
              <p>{cardOptions.blogpost.dateEdited}</p>
              <p>{cardOptions.blogpost.category}</p>
            </div>
            <p className={`${styles['excerpt--blogpost']} paragraph--caption`}>
              {cardOptions.blogpost.excerpt}
            </p>
          </>
        ) : cardType === 'book' ? (
          <>
            <p className="meta-categories-text">{cardOptions.book.author}</p>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="paragraph--regular">{cardOptions.book.title}</h3>
            </Link>
          </>
        ) : cardType === 'booklist' ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3 className="paragraph--regular">{cardOptions.booklist.title}</h3>
          </Link>
        ) : cardType === 'project' ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3 className={`${styles['title--project']} paragraph--regular`}>
              {cardOptions.project.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default PostCard;
