/* Namespaces */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import styles from './PostCard.module.scss';
import { generateCardOptions } from '@/scripts/generateCardOptions';
import { normalize } from '@/scripts/utils';
import { PostMeta } from '@/types/post';

type Props = {
  postMeta: PostMeta;
};

const PostCard: React.FunctionComponent<Props> = ({ postMeta }) => {
  const cardOptions = generateCardOptions(postMeta);
  return (
    <article className={styles[`wrapper--${cardOptions.style}`]}>
      <Link className="link--neutral" href={cardOptions.href} tabIndex={-1}>
        <Image
          className={`${styles[`image--${cardOptions.style}`]} transition--opacity`}
          src={cardOptions.image.src}
          alt={cardOptions.image.alt}
          width={cardOptions.image.width}
          height={cardOptions.image.height}
        />
      </Link>
      <div className={styles['description']}>
        {cardOptions.style === 'default-with-excerpt' ? (
          <>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="heading--h3">{cardOptions.content.title}</h3>
            </Link>
            <div
              className={`${styles['meta--default-with-excerpt']} small-uppercase`}
            >
              <p>{cardOptions.content.dateEdited}</p>
              <Link
                className="link--darker transition--color"
                href={`/${normalize(cardOptions.content.category)}`}
              >
                {cardOptions.content.category}
              </Link>
            </div>
            <p
              className={`${styles['excerpt--default-with-excerpt']} paragraph--caption`}
            >
              {cardOptions.content.excerpt}
            </p>
          </>
        ) : cardOptions.style === 'small' ? (
          <>
            <p className="small-uppercase">{cardOptions.content.bookAuthor}</p>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="paragraph--regular">
                {cardOptions.content.title}
              </h3>
            </Link>
          </>
        ) : cardOptions.style === 'default' ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3 className={`${styles['title--default']} paragraph--regular`}>
              {cardOptions.content.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default PostCard;
