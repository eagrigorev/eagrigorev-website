/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Style */
import styles from './PostCardBig.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

// type Props = {
//   postMeta: Meta;
// };

const PostCardBig: React.FunctionComponent<{}> = () => {
  return (
    <article className={`grid ${styles['wrapper']}`}>
      <div className={styles['content__wrapper']}>
        <div className={`post-card-big__meta ${styles['content__meta']}`}>
          <p>September 25, 1999</p>
          <Link className={styles['red']} href="/">
            Illustrations
          </Link>
        </div>
        <div className={styles['content__title']}>
          <Link href="/">
            <h2 className="heading--h2">Exploring the Northern Regions</h2>
          </Link>
          <p className="post-card-big__description">
            Lorem ipsum dolor sit amet consectetur. Posuere quisque pharetra
            nibh donec ut morbi tellus fames tempor. Feugiat in et elit donec.
          </p>
        </div>
        <Link
          className={`post-card-big__description ${styles['red']}`}
          href="/"
        >
          read more
        </Link>
      </div>
      <Link className={styles['image__wrapper']} href="/" tabIndex={-1}>
        <Image
          className={styles['image']}
          src={`/images/featured/pixel-arts-archive.jpg`}
          alt="Test"
          width={920}
          height={690}
        />
      </Link>
    </article>
  );
};

export default PostCardBig;
