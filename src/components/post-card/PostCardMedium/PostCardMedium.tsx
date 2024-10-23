/* Global */
import React from 'react';
import styles from './PostCardMedium.module.scss';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Scripts */
import { formatSlug } from '@/scripts/format';

/* Utils */
import { PostMeta } from '@/utils/types/markdown';

type Props = {
  postMeta: PostMeta;
};

const PostCardMedium: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <article className={styles['wrapper']}>
      <Link
        className="link--neutral"
        href={postMeta.externalLink}
        tabIndex={-1}
      >
        <Image
          className={`${styles['image']} transition--opacity`}
          src={`images/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
          alt={postMeta.title}
          width={440}
          height={330}
        />
      </Link>
      <div className={styles['description']}>
        <Link className="link--neutral" href={postMeta.slug}>
          <h3 className="heading--h3">{postMeta.title}</h3>
        </Link>
        <div className={`${styles['meta']} smaller-uppercase`}>
          <p>{postMeta.dateEdited}</p>
          <Link
            className="link--darker transition--color"
            href={`/${formatSlug(postMeta.category)}`}
          >
            {postMeta.category}
          </Link>
        </div>
        <p className={`${styles['excerpt']} paragraph--caption`}>
          {postMeta.description}
        </p>
      </div>
    </article>
  );
};

export default PostCardMedium;
