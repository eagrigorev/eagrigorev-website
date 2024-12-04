/* Global */
import React from 'react';

/* Style */
import styles from './FooterBottom.module.scss';

const FooterBottom: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <p className="paragraph--light-xs">© 2024 Evgenii Grigorev</p>
    </div>
  );
};

export default FooterBottom;
