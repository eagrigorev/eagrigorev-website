/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Style */
import styles from './PostCardMedium.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  postMeta: Meta;
};

const PostCardMedium: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link href={postMeta.slug} tabIndex={-1}>
        <Image
          className={`opacity--decrease ${styles['image']}`}
          src={`/images/posts/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
          alt="Test"
          width={440}
          height={330}
        />
      </Link>
      <div className={styles['content__wrapper']}>
        <div className={`post-card-big__meta ${styles['content__meta']}`}>
          <p className={styles['content__meta__date']}>{postMeta.dateEdited}</p>
          <Link className="color--grey-to-red" href={postMeta.category}>
            {postMeta.category}
          </Link>
        </div>
        <div className={styles['content__title']}>
          <Link href={postMeta.slug}>
            <h2 className="heading--h3">{postMeta.title}</h2>
          </Link>
          <p className="post-card-big__description">{postMeta.description}</p>
        </div>
        <Link
          className="post-card-big__description color--red-to-grey"
          href={postMeta.slug}
        >
          read more
        </Link>
      </div>
    </article>
  );
};

export default PostCardMedium;
