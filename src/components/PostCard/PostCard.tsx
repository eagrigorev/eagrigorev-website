/* Namespaces */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import styles from './PostCard.module.scss';
import { generateCardOptions } from '@/scripts/generateCardOptions';
import { normalize } from '@/scripts/utils';
import { PostType, PostMeta } from '@/types/post';

type Props = {
  cardType: PostType;
  postMeta: PostMeta;
};

const PostCard: React.FunctionComponent<Props> = ({ cardType, postMeta }) => {
  const cardOptions = generateCardOptions(cardType, postMeta);
  return (
    <article className={styles[`wrapper--${cardType}`]}>
      <Link className="link--neutral" href={cardOptions.href} tabIndex={-1}>
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
              <h3 className="heading--h3">{cardOptions.content.title}</h3>
            </Link>
            <div className={`${styles['meta--blogpost']} small-uppercase`}>
              <p>{cardOptions.content.dateEdited}</p>
              <Link
                className="link--darker transition--color"
                href={`/${normalize(cardOptions.content.category)}`}
              >
                {cardOptions.content.category}
              </Link>
            </div>
            <p className={`${styles['excerpt--blogpost']} paragraph--caption`}>
              {cardOptions.content.excerpt}
            </p>
          </>
        ) : cardType === 'book' ? (
          <>
            <p className="small-uppercase">{cardOptions.content.bookAuthor}</p>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="paragraph--regular">
                {cardOptions.content.title}
              </h3>
            </Link>
          </>
        ) : cardType === 'booklist' ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3 className="paragraph--regular">{cardOptions.content.title}</h3>
          </Link>
        ) : cardType === 'project' ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3 className={`${styles['title--project']} paragraph--regular`}>
              {cardOptions.content.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default PostCard;
