import styles from './PostCard.module.scss';
import { generateCardOptions } from '@/utils/generateCardOptions';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ cardType, postMeta }) => {
  const cardOptions = generateCardOptions(cardType, postMeta);
  const titleStyles =
    cardType === 'book'
      ? 'meta-categories-text'
      : cardType === 'project'
        ? `${styles[`title--${cardType}`]} paragraph--regular`
        : 'paragraph--regular';
  return (
    <article className={styles[`wrapper--${cardType}`]}>
      <Link className="link--neutral" href={cardOptions.href}>
        <Image
          className={`${styles[`image--${cardType}`]} transition--opacity`}
          src={cardOptions.imageSrc}
          alt={cardOptions.imageAlt}
          width={cardOptions.imageWidth}
          height={cardOptions.imageHeight}
        />
        <div className={styles['description']}>
          <h3 className={titleStyles}>{cardOptions.title}</h3>
          {cardType === 'book' ? (
            <p className="paragraph--regular">{cardOptions.description}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
