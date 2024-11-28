/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Style */
import styles from './PostCardMedium.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

// type Props = {
//   postMeta: Meta;
// };

const PostCardMedium: React.FunctionComponent<{}> = () => {
  return (
    <article className={styles['wrapper']}>
      <Link href="/" tabIndex={-1}>
        <Image
          className={`opacity--decrease ${styles['image']}`}
          src={`/images/featured/pixel-arts-archive.jpg`}
          alt="Test"
          width={440}
          height={330}
        />
      </Link>
      <div className={styles['content__wrapper']}>
        <div className={`post-card-big__meta ${styles['content__meta']}`}>
          <p className={styles['content__meta__date']}>September 25, 1999</p>
          <Link className="color--grey-to-red" href="/">
            Illustrations
          </Link>
        </div>
        <div className={styles['content__title']}>
          <Link href="/">
            <h2 className="heading--h3">Exploring the Northern Regions</h2>
          </Link>
          <p className="post-card-big__description">
            Lorem ipsum dolor sit amet consectetur. Posuere quisque pharetra
            nibh donec ut morbi tellus fames tempor. Feugiat in et elit donec.
          </p>
        </div>
        <Link
          className="post-card-big__description color--red-to-grey"
          href="/"
        >
          read more
        </Link>
      </div>
    </article>
  );
};

export default PostCardMedium;
