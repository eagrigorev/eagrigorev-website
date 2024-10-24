/* Global */
import React from 'react';
import styles from './PostCardSmall.module.scss';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Utils */
import { PostMeta } from '@/utils/types/markdown';

type Props = {
  postMeta: PostMeta;
};

const PostCardSmall: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link
        className="link--neutral"
        href={postMeta.externalLink}
        tabIndex={-1}
      >
        <Image
          className={`${styles['image']} transition--opacity`}
          src={`/images/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
          alt={postMeta.title}
          width={250}
          height={375}
        />
      </Link>
      <div className={styles['description']}>
        <p className="small-uppercase">{postMeta.description}</p>
        <Link className="link--neutral" href={postMeta.externalLink}>
          <h3 className={`${styles['title']} paragraph--regular`}>
            {postMeta.title}
          </h3>
        </Link>
      </div>
    </article>
  );
};

export default PostCardSmall;
