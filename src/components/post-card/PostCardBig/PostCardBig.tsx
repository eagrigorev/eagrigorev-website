/* Global */
import React from 'react';
import styles from './PostCardBig.module.scss';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import { normalize } from '@/scripts/utils';

/* Types */
import { PostMeta } from '@/utils/types/markdown';

type Props = {
  postMeta: PostMeta;
};

const PostCardBig: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <section className={styles['wrapper']}>
      <div className={`${styles['content']} grid`}>
        <div className={styles['description']}>
          <Link className="link--neutral" href={postMeta.slug}>
            <h3 className="heading--h3">{postMeta.title}</h3>
          </Link>
          <div className={`${styles['meta']} smaller-uppercase`}>
            <p>{postMeta.dateEdited}</p>
            <Link
              className="link--darker transition--color"
              href={`/${normalize(postMeta.category)}`}
            >
              {postMeta.category}
            </Link>
          </div>
          <p className={`${styles['excerpt']} paragraph--caption`}>
            {postMeta.description}
          </p>
        </div>
        <div className={styles['image--wrapper']}>
          <Link
            className="link--neutral"
            href={postMeta.externalLink}
            tabIndex={-1}
          >
            <Image
              className={`${styles['image']} transition--opacity`}
              src={`images/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
              alt={postMeta.title}
              width={920}
              height={690}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostCardBig;
