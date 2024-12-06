/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Scripts */
import { generateSlug } from '@/scripts/generateSlug';

/* Style */
import styles from './PostCardBig.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  postMeta: Meta;
};

const PostCardBig: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <article className={`grid ${styles['wrapper']}`}>
      <div className={styles['content__wrapper']}>
        <div className={`uppercase--regular-2xs ${styles['content__meta']}`}>
          <p className={styles['content__meta__date']}>{postMeta.dateEdited}</p>
          <Link
            className="color--grey-to-red"
            href={generateSlug(postMeta.category)}
          >
            {postMeta.category}
          </Link>
        </div>
        <div className={styles['content__title']}>
          <Link href={postMeta.slug}>
            <h2 className="heading--h2">{postMeta.title}</h2>
          </Link>
          <p className="paragraph--light-s">{postMeta.description}</p>
        </div>
        <Link
          className="paragraph--light-s color--red-to-grey"
          href={postMeta.slug}
        >
          read more
        </Link>
      </div>
      <Link
        className={styles['image__wrapper']}
        href={postMeta.slug}
        tabIndex={-1}
      >
        <Image
          className={`opacity--decrease ${styles['image']}`}
          src={`/images/posts/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
          alt={postMeta.title}
          width={920}
          height={690}
        />
      </Link>
    </article>
  );
};

export default PostCardBig;
