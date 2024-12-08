/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Scripts */
import { generateSlug } from '@/scripts/generateSlug';

/* Style */
import styles from './PostTitle.module.scss';

/* Utils */
import { Meta } from '@/utils/types/markdown';

type Props = {
  postMeta: Meta;
};

const PostTitle: React.FunctionComponent<Props> = ({ postMeta }) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['heading']}>
        <div className={`uppercase--regular-xs ${styles['meta']}`}>
          <p className={styles['meta__date']}>{postMeta.dateEdited}</p>
          <Link
            className="color--grey-to-red"
            href={generateSlug(postMeta.category)}
          >
            {postMeta.category}
          </Link>
        </div>
        <h1 className="heading--h1">{postMeta.title}</h1>
      </div>
      <p className={`paragraph--light-italic-m ${styles['description']}`}>
        {postMeta.description}
      </p>
    </div>
  );
};

export default PostTitle;
