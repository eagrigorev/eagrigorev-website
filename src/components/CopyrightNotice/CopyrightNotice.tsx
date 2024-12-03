/* Global */
import React from 'react';

/* Style */
import styles from './CopyrightNotice.module.scss';

const CopyrightNotice: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <p className="tag">© 2024 Evgenii Grigorev</p>
    </div>
  );
};

export default CopyrightNotice;
