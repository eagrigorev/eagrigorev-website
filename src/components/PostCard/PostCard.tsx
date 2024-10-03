/* Namespaces */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import styles from './PostCard.module.scss';
import { generateCardOptions } from '@/scripts/generateCardOptions';
import { normalize } from '@/scripts/utils';
import {
  PostMeta,
  JournalCategories,
  LibraryCategories,
  WorksCategories,
} from '@/types/post';
import { POST_CATEGORIES } from '@/const/categories';

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
        {POST_CATEGORIES.JOURNAL.find(
          (category: JournalCategories) => category === postMeta.category
        ) ? (
          <>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="heading--h3">{cardOptions.content.title}</h3>
            </Link>
            <div
              className={`${styles[`meta--${cardOptions.style}`]} small-uppercase`}
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
              className={`${styles[`excerpt--${cardOptions.style}`]} paragraph--caption`}
            >
              {cardOptions.content.excerpt}
            </p>
          </>
        ) : POST_CATEGORIES.LIBRARY.find(
            (category: LibraryCategories) => category === postMeta.category
          ) ? (
          <>
            <p className="small-uppercase">{cardOptions.content.bookAuthor}</p>
            <Link className="link--neutral" href={cardOptions.href}>
              <h3 className="paragraph--regular">
                {cardOptions.content.title}
              </h3>
            </Link>
          </>
        ) : POST_CATEGORIES.WORKS.find(
            (category: WorksCategories) => category === postMeta.category
          ) ? (
          <Link className="link--neutral" href={cardOptions.href}>
            <h3
              className={`${styles[`title--${cardOptions.style}`]} paragraph--regular`}
            >
              {cardOptions.content.title}
            </h3>
          </Link>
        ) : null}
      </div>
    </article>
  );
};

export default PostCard;
