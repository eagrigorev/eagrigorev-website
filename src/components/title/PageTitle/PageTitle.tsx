/* Global */
import React from 'react';
import styles from './PageTitle.module.scss';

type Props = {
  title: string;
};

const PageTitle: React.FunctionComponent<Props> = ({ title }) => {
  return (
    <header className={styles['wrapper']}>
      <div className="grid">
        <h1 className={`${styles['heading']} heading--h1`}>{title}</h1>
      </div>
    </header>
  );
};

export default PageTitle;
