/* Global */
import React from 'react';

/* Style */
import styles from './PageTitleCentered.module.scss';

type Props = {
  title?: string;
};

const PageTitleCentered: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className={styles['wrapper']}>
      <h1 className="heading--h1">{title}</h1>
    </div>
  );
};

export default PageTitleCentered;
