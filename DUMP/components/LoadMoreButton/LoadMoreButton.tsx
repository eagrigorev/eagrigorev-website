/* Namespaces */
import React from 'react';

/* Utils */
import styles from './LoadMoreButton.module.scss';

type Props = {
  clickHandler: () => void;
  buttonText: string;
};

const LoadMoreButton: React.FunctionComponent<Props> = ({
  clickHandler,
  buttonText,
}) => {
  return (
    <div className={styles['wrapper']}>
      <button
        className={`${styles['button']} button-text transition--opacity`}
        onClick={clickHandler}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LoadMoreButton;
