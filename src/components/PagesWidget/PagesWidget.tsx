/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';

/* Data */
import footerPages from '@/data/footerPages.json';

/* Style */
import styles from './PagesWidget.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const PagesWidget: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <h4 className={`heading--h4 ${styles['heading']}`}>Pages</h4>
      <ul className={`paragraph--light-s ${styles['items']}`}>
        {footerPages.map(
          (item: NavigationItem, index: number): React.JSX.Element => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PagesWidget;
