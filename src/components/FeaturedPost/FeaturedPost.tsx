/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Style */
import styles from './FeaturedPost.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';
import { NavigationItem } from '@/utils/types/common';

// type Props = {
//   postMeta: Meta;
// };

const FeaturedPost: React.FunctionComponent<{}> = () => {
  return (
    <section className={styles['wrapper']}>
      <article className={`grid ${styles['container']}`}>
        <div className={styles['description']}>
          <div className={`featured-card-meta ${styles['meta']}`}>
            <p>September 25, 1999</p>
            <Link className={styles['red']} href="/">
              Illustrations
            </Link>
          </div>
          <div className={styles['title']}>
            <Link href="/">
              <h2 className="heading--h2">Exploring the Northern Regions</h2>
            </Link>
            <p className="featured-card-description">
              Lorem ipsum dolor sit amet consectetur. Posuere quisque pharetra
              nibh donec ut morbi tellus fames tempor. Feugiat in et elit donec.
            </p>
          </div>
          <Link
            className={`featured-card-description ${styles['red']}`}
            href="/"
          >
            read more
          </Link>
        </div>
        <Link className={styles['image-wrapper']} href="/">
          <Image
            className={styles['image']}
            src={`/images/featured/pixel-arts-archive.jpg`}
            alt="Test"
            width={920}
            height={690}
          />
        </Link>
      </article>
    </section>
  );
};

export default FeaturedPost;
