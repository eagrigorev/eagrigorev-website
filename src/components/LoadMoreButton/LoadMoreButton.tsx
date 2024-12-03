/* Global */
import React from 'react';

/* Style */
import styles from './LoadMoreButton.module.scss';

type Props = {
  clickHandler: () => void;
};

const LoadMoreButton: React.FunctionComponent<Props> = ({ clickHandler }) => {
  return (
    <button
      className={`button-text opacity--decrease ${styles['wrapper']}`}
      onClick={clickHandler}
    >
      load more
    </button>
  );
};

export default LoadMoreButton;