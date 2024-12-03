/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Style */
import styles from './TagItem.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

type Props = {
  tagItem: NavigationItem;
};

const TagItem: React.FunctionComponent<Props> = ({ tagItem }) => {
  return (
    <Link className={styles['wrapper']} href={tagItem.url}>
      {tagItem.title}
    </Link>
  );
};

export default TagItem;
