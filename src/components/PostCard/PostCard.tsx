/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Scripts */
import { generateSlug } from '@/scripts/generateSlug';

/* Style */
import styles from './PostCard.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  postMeta: Meta;
  layout: 'small' | 'medium';
};

const PostCard: React.FunctionComponent<Props> = ({ postMeta, layout }) => {
  return (
    <>
      {layout === 'medium' ? (
        <article className={styles['medium__wrapper']}>
          <Link className="link-image" href={postMeta.slug} tabIndex={-1}>
            <Image
              className={styles['medium__image']}
              src={`/images/posts/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
              alt={postMeta.title}
              width={920}
              height={690}
            />
          </Link>
          <Link className="link-simple" href={postMeta.slug}>
            <h2 className="spectral-heading--h3">{postMeta.title}</h2>
          </Link>
          <div className={`jost-uppercase--2xs ${styles['medium__meta']}`}>
            <p className={styles['medium__meta__date']}>
              {postMeta.dateEdited}
            </p>
            <Link className="link-grey" href={generateSlug(postMeta.category)}>
              {postMeta.category}
            </Link>
          </div>
          <p className="jost-light--s">{postMeta.description}</p>
          <Link className="jost-light--s link-grey" href={postMeta.slug}>
            read more
          </Link>
        </article>
      ) : layout === 'small' ? (
        <article className={styles['small__wrapper']}>
          <Link
            className="link-image"
            href={postMeta.externalLink}
            tabIndex={-1}
          >
            <Image
              className={styles['small__image']}
              src={`/images/books/${postMeta.slug}.jpg`}
              alt={postMeta.title}
              width={300}
              height={450}
            />
          </Link>
          <p className={`jost-uppercase--2xs ${styles['small__author']}`}>
            {postMeta.description}
          </p>
          <Link className="link-simple" href={postMeta.externalLink}>
            <h2 className="spectral-heading--h3">{postMeta.title}</h2>
          </Link>
        </article>
      ) : null}
    </>
  );
};

export default PostCard;
