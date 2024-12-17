/* Global */
import React from 'react';

/* Components */
import Image from 'next/image';
import Link from 'next/link';

/* Scripts */
import { generateSlug } from '@/scripts/generateSlug';

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
          className={styles['image']}
          src={`/images/posts/${postMeta.slug}/${postMeta.slug}-featured.jpg`}
          alt={postMeta.title}
          width={440}
          height={330}
        />
      </Link>
      <Link className="link-simple" href={postMeta.slug}>
        <h2 className="spectral-heading--h3">{postMeta.title}</h2>
      </Link>
      <div className={`jost-uppercase--2xs ${styles['meta']}`}>
        <p className={styles['meta__date']}>{postMeta.dateEdited}</p>
        <Link className="link-grey" href={generateSlug(postMeta.category)}>
          {postMeta.category}
        </Link>
      </div>
      <p className="jost-light--s">{postMeta.description}</p>
      <Link className="jost-light--s link-grey" href={postMeta.slug}>
        read more
      </Link>
    </article>
  );
};

export default PostCardMedium;
