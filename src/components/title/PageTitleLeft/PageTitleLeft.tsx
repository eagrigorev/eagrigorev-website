/* Global */
import React from 'react';

/* Style */
import styles from './PageTitleLeft.module.scss';

type Props = {
  title?: string;
};

const PageTitleLeft: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <div className={styles['wrapper']}>
      <h1 className="heading--h1">{title}</h1>
    </div>
  );
};

export default PageTitleLeft;
