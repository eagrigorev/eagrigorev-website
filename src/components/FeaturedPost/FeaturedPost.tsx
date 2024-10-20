import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedPost.module.scss';
import { PostMeta } from '@/types/post';

type Props = {
  postMeta: PostMeta;
};

const FeaturedPost: React.FunctionComponent<{}> = ({}) => {
  return (
    <section className={styles['wrapper']}>
      <div className={`${styles['card']} grid`}>
        <div className={styles['meta']}>
          <Link className="link--neutral" href="/about">
            <h2 className="heading--h2">Temporary Post Title</h2>
          </Link>
          <div className={`${styles['meta-info']} small-uppercase`}>
            <p>September 15, 2024</p>
            <Link className="link--darker transition--color" href={`/journal`}>
              Journal
            </Link>
          </div>
          <p className={`${styles['excerpt']} paragraph--caption`}>
            This is the post excerpt that will be fetched later...
          </p>
        </div>
        <div className={styles['image-wrapper']}>
          <Link className="link--neutral" href="/about" tabIndex={-1}>
            <Image
              className={`${styles['image']} transition--opacity`}
              src="images/posts/on-drawing-again/fragments-2.jpg"
              alt="Test"
              width={920}
              height={690}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
