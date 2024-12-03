/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Style */
import styles from './TagItem.module.scss';

type Props = {
  tagItem: string;
};

const TagItem: React.FunctionComponent<Props> = ({ tagItem }) => {
  return (
    <Link className={styles['wrapper']} href={`/${tagItem}`}>
      {tagItem}
    </Link>
  );
};

export default TagItem;
